import type { IContextController } from "#/interfaces/IContextController.ts";
import type { Role } from "discord.js";
import { type Channel, type MessageMentions } from "discord.js";
import { type Guild } from "discord.js";
import { type Collection, type GuildMember, type Message, type TextBasedChannel } from "discord.js";
import { PermissionFlagsBits } from "discord.js";
import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import { Env } from "@jstmemit/shared/schemas/Env";
import { analytics } from "@jstmemit/analytics";
import { logger } from "#/container.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { getRequiredBotPermissions } from "#/helpers/getRequiredBotPermissions.ts";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";
import ms from "ms";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { ContextImage } from "@jstmemit/shared/models/ContextImage";
import type { messagesTable } from "@jstmemit/db/schema.ts";
import { mentionRegex } from "@jstmemit/shared/regex/mentionRegex";
import { client } from "#/bot.ts";

const env = Env.parse(process.env);

export class ContextController implements IContextController {
    private readonly _contextService: IContextService;
    private readonly _channelsService: IChannelsService;
    private readonly _memesController: IMemesController;
    private readonly _componentsService: IComponentsService;
    private readonly _cacheService: ICacheService;

    public constructor(
        contextService: IContextService,
        channelsService: IChannelsService,
        memesController: IMemesController,
        componentsService: IComponentsService,
        cacheService: ICacheService,
    ) {
        this._contextService = contextService;
        this._channelsService = channelsService;
        this._memesController = memesController;
        this._componentsService = componentsService;
        this._cacheService = cacheService;
    }

    /**
     * Handles new messages. Checks if a channel is enabled and
     * then calls ContextService to save images, avatars and text content
     *
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public async handleNewMessage(message: Message): Promise<void> {
        try {
            let mentioned: boolean = false;
            const { id, content, channelId, attachments, embeds, author, mentions } = message;

            if (!channelId) {
                return;
            }

            if (content?.includes(`<@${env.DISCORD_CLIENT_ID}>`) && message.inGuild()) {
                if (await this._checkForNeededPermissions(message)) {
                    await this._memesController.handleMemeInteraction(message, "mention");
                } else {
                    const permissions: RequiredBotPermissions = getRequiredBotPermissions(message);

                    await respond(message, [
                        this._componentsService.getMissingBotPermissionsMessageComponent(
                            message.guild.preferredLocale,
                            permissions,
                        ),
                    ]);
                }
                mentioned = true;
            }

            if (!(await this._channelsService.isChannelEnabled(channelId))) {
                return;
            }

            try {
                await this._contextService.saveImages(
                    this._contextService.buildMessageImages(id, channelId, author.avatarURL(), attachments),
                );
            } catch (error) {
                analytics.captureException(error);
                logger.emit({
                    severityText: "error",
                    body: "context.save_images.error",
                    attributes: {
                        posthogDistinctId: message.author.id,
                        channel_id: message.channelId,
                        guild_id: message.guildId,
                        attachments_amount: attachments.size,
                        error_message: error instanceof Error ? error.message : String(error),
                    },
                });
            }

            if (message.flags.has("IsVoiceMessage") && message?.attachments?.first()?.proxyURL) {
                try {
                    await this._contextService.saveTranscribedVoice(
                        id,
                        channelId,
                        message?.attachments?.first()?.proxyURL as string,
                    );
                } catch (error) {
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "context.save_transcribed_voice.error",
                        attributes: {
                            posthogDistinctId: message.author.id,
                            channel_id: message.channelId,
                            guild_id: message.guildId,
                            error_message: error instanceof Error ? error.message : String(error),
                        },
                    });
                }
            }

            if (content.length > 0 && content.length < 2000) {
                if (this._checkIfLinkToGif(content) && embeds[0]) {
                    await this._contextService.saveGif(id, channelId, embeds[0], content);
                } else {
                    await this._contextService.saveContent([
                        {
                            messageId: id,
                            channelId,
                            content: this._translateMentions(content, mentions),
                            timestamp: new Date(),
                        },
                    ]);
                }
            }

            if ((await this._channelsService.rollChannelFrequency(channelId)) && !mentioned) {
                if (await this._checkForNeededPermissions(message)) {
                    await this._memesController.handleMemeInteraction(message);
                }
            }
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "context.new_message.error",
                attributes: {
                    posthogDistinctId: message.author.id,
                    channel_id: message.channelId,
                    guild_id: message.guildId,
                    error_message: error instanceof Error ? error.message : String(error),
                },
            });
        }
    }

    private _checkIfLinkToGif(text: string): boolean {
        return (
            text.startsWith("https://tenor.com/view") ||
            text.startsWith("https://media3.giphy.com/") ||
            text.startsWith("https://klipy.com/gifs/")
        );
    }

    private async _checkForNeededPermissions(message: Message): Promise<boolean> {
        if (!message.inGuild()) {
            return true;
        }

        const bot: GuildMember = message.guild.members.me || (await message.guild.members.fetchMe());
        const permissions = message.channel.permissionsFor(bot);
        if (!permissions.has(PermissionFlagsBits.AttachFiles) || !permissions.has(PermissionFlagsBits.SendMessages)) {
            logger.emit({
                severityText: "warn",
                body: "context.auto_meme_generation.not_enough_permissions",
                attributes: {
                    posthogDistinctId: message.author.id,
                    channel_id: message.channelId,
                    guild_id: message.guildId,
                    bot_permissions: permissions?.bitfield.toString(),
                    bot_permissions_list: permissions?.toArray().join(","),
                },
            });

            return false;
        }

        return true;
    }

    public async prefetchChannel(channel: TextBasedChannel, guild: Guild): Promise<number> {
        let prefetched: number = 0;

        try {
            const me: GuildMember | null = guild.members.me;

            if (channel.isDMBased()) {
                return 0;
            }

            if (
                me &&
                !channel
                    .permissionsFor(me)
                    ?.has([PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory])
            ) {
                return 0;
            }

            const messages: Collection<string, Message> = await channel.messages.fetch({ limit: 50 });
            const contents: (typeof messagesTable.$inferInsert)[] = [];
            const images: ContextImage[] = [];

            for (const message of messages.values()) {
                if (message.author.bot || message.system) {
                    continue;
                }

                const { id, content, channelId, attachments, author, poll, embeds } = message;

                try {
                    images.push(
                        ...this._contextService.buildMessageImages(id, channelId, author.avatarURL(), attachments),
                    );

                    if (poll) {
                        await this._contextService.savePoll(id, channelId, poll);
                    }

                    if (content.length > 0 && content.length < 2000) {
                        if (this._checkIfLinkToGif(content) && embeds[0]) {
                            await this._contextService.saveGif(id, channelId, embeds[0], content);
                        } else {
                            contents.push({ messageId: id, channelId, content, timestamp: new Date() });
                        }
                    }

                    prefetched++;
                } catch (error) {
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "context.prefetch.message_error",
                        attributes: {
                            channel_id: channelId,
                            message_id: id,
                            error_message: error instanceof Error ? error.message : String(error),
                        },
                    });
                }
            }

            await Promise.all([
                this._contextService.saveImages(images),
                this._contextService.saveContent(contents),
                this._contextService.saveEmojis(channel.id, guild),
                this._contextService.saveStickers(channel.id, guild),
            ]);

            await this._cacheService.set(`refresh:${channel.id}`, true, ms("1w"));
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "context.prefetch.error",
                attributes: {
                    channel_id: channel.id,
                    error_message: error instanceof Error ? error.message : String(error),
                },
            });
        }

        return prefetched;
    }

    private _translateMentions(content: string, mentions: MessageMentions): string {
        return content.replace(mentionRegex, (match: string): string => {
            const id: string | undefined = match.match(/\d+/)?.[0];

            if (!id) {
                return match;
            }

            if (match.includes(String(client?.user?.id))) {
                return "";
            }

            if (match.startsWith("<#")) {
                const channel: Channel | undefined = mentions.channels.get(id);
                return channel && !channel.isDMBased() ? `#${channel.name}` : match;
            }

            if (match.startsWith("<@&")) {
                const role: Role | undefined = mentions.roles.get(id);
                return role ? `@${role.name}` : match;
            }

            return mentions.members?.get(id)?.displayName || mentions.users.get(id)?.displayName || match;
        });
    }
}
