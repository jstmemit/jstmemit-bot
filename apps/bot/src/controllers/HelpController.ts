import { type ChatInputCommandInteraction, InteractionContextType } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { analytics } from "@jstmemit/analytics";
import type { IHelpController } from "#/interfaces/IHelpController.ts";
import type { channelsTable } from "@jstmemit/db/schema.ts";

export class HelpController implements IHelpController {
    private readonly _componentsService: IComponentsService;
    private readonly _channelsService: IChannelsService;

    public constructor(componentsService: IComponentsService, channelsService: IChannelsService) {
        this._componentsService = componentsService;
        this._channelsService = channelsService;
    }

    /**
     * Handles /help command.
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleHelpInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            analytics.capture({
                event: "help_opened",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    command: "/help",
                    channelId: interaction.channelId,
                    language: interaction.locale,
                    context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
                    isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                    receiveLatencyMs: Date.now() - interaction.createdTimestamp,
                    isKnownChannel: Boolean(channel),
                    enabled: channel?.enabled ?? false,
                    ...channel,
                },
            });

            await respond(
                interaction,
                [
                    this._componentsService.getHelpHeaderMessageComponent(interaction.locale, channel?.enabled),
                    this._componentsService.getHelpAutoMemesMessageComponent(interaction.locale),
                    this._componentsService.getHelpRightClickMessageComponent(interaction.locale),
                    this._componentsService.getHelpVoiceMessageComponent(interaction.locale),
                ],
                true,
            );
        } catch (error) {
            analytics.captureException(error);
            await respond(interaction, [
                this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
            ]);
        }
    }

    /**
     * Handles /faq command.
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleFaqInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            analytics.capture({
                event: "faq_opened",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    command: "/faq",
                    channelId: interaction.channelId,
                    language: interaction.locale,
                    context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
                    isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                    receiveLatencyMs: Date.now() - interaction.createdTimestamp,
                    isKnownChannel: Boolean(channel),
                    enabled: channel?.enabled ?? false,
                    ...channel,
                },
            });

            await respond(
                interaction,
                [
                    this._componentsService.getHelpHeaderMessageComponent(interaction.locale, channel?.enabled),
                    this._componentsService.getHelpFaqMessageComponent(interaction.locale),
                ],
                true,
            );
        } catch (error) {
            analytics.captureException(error);
            await respond(interaction, [
                this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
            ]);
        }
    }
}
