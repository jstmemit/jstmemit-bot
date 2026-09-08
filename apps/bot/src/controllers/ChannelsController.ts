import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonInteraction,
    ChatInputCommandInteraction,
    ContainerBuilder,
} from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { analytics } from "@jstmemit/analytics";
import { respond } from "#/helpers/respond.ts";
import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IContextController } from "#/interfaces/IContextController.ts";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";
import { getRequiredBotPermissions } from "#/helpers/getRequiredBotPermissions.ts";
import ms from "ms";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";

export class ChannelsController implements IChannelsController {
    private readonly _channelsService: IChannelsService;
    private readonly _componentsService: IComponentsService;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _contextController: IContextController;
    private readonly _contextService: IContextService;
    private readonly _cacheService: ICacheService;
    private readonly _generationsRepository: IGenerationsRepository;

    public constructor(
        channelsService: IChannelsService,
        componentsService: IComponentsService,
        messagesRepository: IMessagesRepository,
        contextController: IContextController,
        contextService: IContextService,
        cacheService: ICacheService,
        generationsRepository: IGenerationsRepository,
    ) {
        this._channelsService = channelsService;
        this._componentsService = componentsService;
        this._messagesRepository = messagesRepository;
        this._contextController = contextController;
        this._contextService = contextService;
        this._cacheService = cacheService;
        this._generationsRepository = generationsRepository;
    }

    /**
     * Handles /enable command. Calls ChannelService to
     * switch channel. If a channel is disabled and /enable
     * is ran, then it gets enabled. If a channel is enabled
     * then it can be disabled by clicking on the button in reply.
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleEnableInteraction(interaction: ChatInputCommandInteraction | ButtonInteraction): Promise<void> {
        if (interaction.isCommand()) {
            await interaction.deferReply();
        } else {
            await interaction.deferUpdate();
        }

        try {
            let isEnabled: boolean = await this._channelsService.isChannelEnabled(interaction.channelId, true);

            const messagesAmount: number = await this._messagesRepository.getMessagesAmountByChannelId(
                interaction.channelId,
            );

            const cached: number | undefined = await this._cacheService.get(`generations:${interaction.channelId}`);
            const generationsAmount: number =
                cached !== undefined
                    ? cached
                    : await this._generationsRepository.getCountPerChannel(interaction.channelId);

            await this._cacheService.set(`generations:${interaction.channelId}`, generationsAmount, ms("7d"));

            if ((!isEnabled && messagesAmount < 1) || interaction.isButton()) {
                isEnabled = await this._channelsService.switchChannel(interaction.channelId);
            }

            let prefetchPromise: Promise<number> | null = null;

            if (isEnabled && messagesAmount < 1 && interaction.channel && interaction.guild) {
                prefetchPromise = this._contextController
                    .prefetchChannel(interaction.channel, interaction.guild)
                    .catch((error: unknown): number => {
                        analytics.captureException(error, interaction.user.id, {
                            channelId: interaction.channelId,
                            guildId: interaction?.guildId || "",
                            command: "/enable",
                            stage: "prefetch",
                            language: interaction.locale,
                        });

                        return 0;
                    });
            }

            const permissions: RequiredBotPermissions = getRequiredBotPermissions(interaction);

            analytics.capture({
                event: isEnabled ? "channel_enabled" : "channel_disabled",
                distinctId: interaction.user.id,
                properties: {
                    channelId: interaction.channelId,
                    guildId: interaction.guildId,
                    messagesAmount: messagesAmount,
                    prefetchStarted: prefetchPromise !== null,
                    enabled: isEnabled,
                    language: interaction.locale,
                    memberCount: interaction.guild?.memberCount,
                    hasGuildIcon: Boolean(interaction.guild?.iconURL()),
                    canSendMessages: permissions.sendMessages,
                    canAttachFiles: permissions.attachFiles,
                    canEmbedLinks: permissions.embedLinks,
                    canReadHistory: permissions.readHistory,
                    canViewChannel: permissions.viewChannel,
                },
            });

            if (interaction.inGuild() && interaction?.guild?.iconURL()) {
                const serverIcon: string | null = interaction.guild.iconURL();

                if (serverIcon) {
                    await this._contextService.saveAvatar(interaction.id, interaction.channelId, serverIcon);
                }
            }

            await this.sendEnableResponse(interaction, isEnabled, permissions, messagesAmount, generationsAmount);

            if (prefetchPromise && messagesAmount < 1) {
                void this._updateAfterPrefetch(
                    interaction,
                    prefetchPromise,
                    isEnabled,
                    permissions,
                    messagesAmount,
                    generationsAmount,
                );
            }
        } catch (error) {
            const message: (ContainerBuilder | ActionRowBuilder<ButtonBuilder>)[] = [];

            analytics.captureException(error, interaction.user.id, {
                channelId: interaction.channelId,
                guildId: interaction?.guildId || "",
                command: "/enable",
                language: interaction.locale,
            });

            message.push(this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id));
            message.push(this._componentsService.getErrorButtonsComponent(interaction.locale, "enable"));

            await respond(interaction, [...message]);
        }
    }

    /**
     * Sends the /enable reply.
     *
     * @param interaction
     * @param isEnabled
     * @param permissions
     * @param contextAmount
     * @param generationsAmount
     */
    private async sendEnableResponse(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
        isEnabled: boolean,
        permissions: RequiredBotPermissions,
        contextAmount: number,
        generationsAmount: number,
    ): Promise<void> {
        const message: ContainerBuilder = this._componentsService.getEnableMessageComponent(
            interaction.locale,
            isEnabled,
            permissions,
            interaction.channelId,
            contextAmount,
        );

        const buttons: ActionRowBuilder<ButtonBuilder> = this._componentsService.getEnableButtonsComponent(
            interaction.locale,
            isEnabled,
            contextAmount,
            generationsAmount < 1,
        );

        await respond(interaction, [message, buttons]);
    }

    /**
     * Edits already sent response with amount of
     * messages in bot's memory after the prefetch
     *
     * @param interaction
     * @param prefetchPromise
     * @param isEnabled
     * @param permissions
     * @param messagesAmount
     * @param generationsAmount
     *
     * @author Kyrylo Maliuha
     */
    private async _updateAfterPrefetch(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
        prefetchPromise: Promise<number>,
        isEnabled: boolean,
        permissions: RequiredBotPermissions,
        messagesAmount: number,
        generationsAmount: number,
    ): Promise<void> {
        const prefetchedContext: number = await prefetchPromise;

        analytics.capture({
            event: "channel_prefetched",
            distinctId: interaction.user.id,
            properties: {
                channelId: interaction.channelId,
                guildId: interaction.guildId,
                messagesAmount: messagesAmount,
                prefetchedContext,
                succeeded: prefetchedContext > 0,
                language: interaction.locale,
            },
        });

        if (prefetchedContext < 1) {
            return;
        }

        try {
            await this.sendEnableResponse(
                interaction,
                isEnabled,
                permissions,
                messagesAmount + prefetchedContext,
                generationsAmount,
            );
        } catch (error) {
            analytics.captureException(error, interaction.user.id, {
                channelId: interaction.channelId,
                guildId: interaction?.guildId || "",
                command: "/enable",
                stage: "prefetch_response_update",
                language: interaction.locale,
            });
        }
    }
}
