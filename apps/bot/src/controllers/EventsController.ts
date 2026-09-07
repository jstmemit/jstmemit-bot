import type { ButtonInteraction, ChatInputCommandInteraction, Guild, StringSelectMenuInteraction } from "discord.js";
import { type Client, type Interaction, type Message, ActivityType } from "discord.js";
import type { IContextController } from "#/interfaces/IContextController.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import type { ISettingsController } from "#/interfaces/ISettingsController.ts";
import { analytics } from "@jstmemit/analytics";
import { Env } from "@jstmemit/shared/schemas/Env";
import { respondMissingPermissions } from "#/helpers/respondMissingPermissions.ts";
import { AutoPoster } from "topgg-autoposter";
import _ from "lodash";
import type { IFeedbackController } from "#/interfaces/IFeedbackController.ts";
import type { IHelpController } from "#/interfaces/IHelpController.ts";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import { logger } from "#/container.ts";
import type { IVoiceController } from "#/interfaces/IVoiceController.ts";
import type { IAutocompleteController } from "#/interfaces/IAutocompleteController.ts";
import type { IMilestonesController } from "#/interfaces/IMilestonesController.ts";
import type { ICommandsService } from "#/interfaces/ICommandsService.ts";

const env = Env.parse(process.env);

export class EventsController implements IEventsController {
    private readonly _contextController: IContextController;
    private readonly _channelsController: IChannelsController;
    private readonly _memesController: IMemesController;
    private readonly _ratingsController: IRatingsController;
    private readonly _settingsController: ISettingsController;
    private readonly _feedbackController: IFeedbackController;
    private readonly _templateRepository: ITemplatesRepository;
    private readonly _helpController: IHelpController;
    private readonly _voiceController: IVoiceController;
    private readonly _autocompleteController: IAutocompleteController;
    private readonly _milestonesController: IMilestonesController;
    private readonly _commandsService: ICommandsService;
    private readonly _isProduction: boolean = env.DISCORD_CLIENT_ID === env.DISCORD_CLIENT_ID_PRODUCTION;

    public constructor(
        contextController: IContextController,
        channelsController: IChannelsController,
        memesController: IMemesController,
        ratingsController: IRatingsController,
        settingsController: ISettingsController,
        feedbackController: IFeedbackController,
        helpController: IHelpController,
        voiceController: IVoiceController,
        templatesRepository: ITemplatesRepository,
        autocompleteController: IAutocompleteController,
        milestonesController: IMilestonesController,
        commandsService: ICommandsService,
    ) {
        this._contextController = contextController;
        this._channelsController = channelsController;
        this._memesController = memesController;
        this._ratingsController = ratingsController;
        this._settingsController = settingsController;
        this._feedbackController = feedbackController;
        this._helpController = helpController;
        this._voiceController = voiceController;
        this._templateRepository = templatesRepository;
        this._autocompleteController = autocompleteController;
        this._milestonesController = milestonesController;
        this._commandsService = commandsService;
    }

    /**
     * Handles the Events.ClientReady event from discord.js library
     *
     * @param readyClient
     *
     * @author Kyrylo Maliuha
     */
    public handleClientReady(readyClient: Client<true>): void {
        console.log(`Logged in as ${readyClient.user.tag}!`);

        readyClient.user.setActivity("how to make memes", {
            type: ActivityType.Watching,
        });

        if (this._isProduction && env.TOPGG_TOKEN) {
            const poster = AutoPoster(env.TOPGG_TOKEN, readyClient);

            poster.on("posted", (stats) => {
                analytics.capture({
                    distinctId: `bot`,
                    event: "topgg_stats_posted",
                    properties: {
                        ...stats,
                    },
                });
            });
        }

        void this._commandsService.fetchCommandMentions();
    }

    /**
     * Handles the Events.MessageCreate event from discord.js library
     *
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public async handleMessageCreate(message: Message): Promise<void> {
        if (message.author.bot) {
            return;
        }

        try {
            await this._contextController.handleNewMessage(message);
        } catch (error) {
            analytics.captureException(error);
        }
    }

    /**
     * Handles the Events.InteractionCreate event from discord.js library
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleInteractionCreate(interaction: Interaction): Promise<void> {
        try {
            // autocomplete
            if (interaction.isAutocomplete()) {
                switch (interaction.commandName) {
                    case "custom":
                        await this._autocompleteController.handleTemplateAutocompleteInteraction(interaction);
                        return;
                }
                return;
            }

            // modals
            if (interaction.isModalSubmit()) {
                const customId: string = interaction.customId.split(":")[0] || interaction.customId;

                switch (customId) {
                    case "custom-meme":
                        await this._memesController.handleGenerateCustomMemeModalSubmit(interaction);
                        return;
                    case "feedback":
                        await this._feedbackController.handleNewFeedbackSubmit(interaction);
                        return;
                    case "feedback-error":
                        await this._feedbackController.handleNewFeedbackSubmit(interaction, true);
                        return;
                }
            }

            // message context menus
            if (interaction.isMessageContextMenuCommand()) {
                switch (interaction.commandName) {
                    case "Make it a Quote":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("quote", 1, 1)),
                        );
                        return;
                    case "Make it a Demotivator":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("demotivator", 1, 1)),
                        );
                        return;
                    case "Make a reaction meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("reaction", 1, 1)),
                        );
                        return;
                    case "Make a social media post meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("socialPost", 1, 1)),
                        );
                        return;
                    case "Make a YouTube thumbnail meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("youtube", 1, 1)),
                        );
                        return;
                    case "Make an animal meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("animals", 1, 1)),
                        );
                        return;
                    case "Make a movie meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("movies", 1, 1)),
                        );
                        return;
                    case "Make a cartoon meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("cartoons", 1, 1)),
                        );
                        return;
                    case "Make an anime meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("anime", 1, 1)),
                        );
                        return;
                    case "Make a gaming meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("games", 1, 1)),
                        );
                        return;
                    case "Make a random meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("misc", 1, 1)),
                        );
                        return;
                    case "Generate a voice message":
                        await this._voiceController.handleNarrateTextInteraction(interaction);
                        return;
                }
                return;
            }

            // user context menus
            if (interaction.isUserContextMenuCommand()) {
                switch (interaction.commandName) {
                    case "Make a reaction meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("reaction", 1, 1)),
                        );
                        return;
                    case "Make a social media post meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("socialPost", 1, 1)),
                        );
                        return;
                    case "Make a YouTube thumbnail meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("youtube", 1, 1)),
                        );
                        return;
                    case "Make an animal meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("animals", 1, 1)),
                        );
                        return;
                    case "Make a movie meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("movies", 1, 1)),
                        );
                        return;
                    case "Make a cartoon meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("cartoons", 1, 1)),
                        );
                        return;
                    case "Make an anime meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("anime", 1, 1)),
                        );
                        return;
                    case "Make a gaming meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("games", 1, 1)),
                        );
                        return;
                    case "Make a random meme":
                        await this._memesController.handleGenerateViaContextMenuInteraction(
                            interaction,
                            _.sample(this._templateRepository.getTemplateNamesByTopic("misc", 1, 1)),
                        );
                        return;
                }
                return;
            }

            // chat commands
            if (interaction.isChatInputCommand()) {
                // without permissions
                switch (interaction.commandName) {
                    case "custom":
                        await this._memesController.handleGenerateCustomMemeInteraction(interaction);
                        return;
                    case "meme":
                        await this._memesController.handleMemeInteraction(interaction);
                        return;
                    case "feedback":
                        await this._feedbackController.handleOpenFeedbackModal(interaction);
                        return;
                    case "help":
                        await this._helpController.handleHelpInteraction(interaction);
                        return;
                    case "faq":
                        await this._helpController.handleFaqInteraction(interaction);
                        return;
                    case "voice":
                        await this._voiceController.handleNarrateTextInteraction(interaction);
                        return;
                    case "achievements":
                        await this._milestonesController.handleViewMilestones(interaction);
                        return;
                }

                if (await this._checkForMissingPermissions(interaction)) {
                    return;
                }

                // only with permissions
                switch (interaction.commandName) {
                    case "enable":
                        await this._channelsController.handleEnableInteraction(interaction);
                        return;
                    case "settings":
                        await this._settingsController.handleSettingsInteraction(interaction);
                        return;
                }
            }

            // buttons
            if (interaction.isButton()) {
                const id: string | undefined = interaction.customId.split(":")[1];
                const customId: string = interaction.customId.split(":")[0] || interaction.customId;

                // without permissions
                switch (customId) {
                    case "meme":
                        await this._memesController.handleMemeInteraction(interaction);
                        return;
                    case "custom":
                        await this._memesController.handleGenerateCustomMemeInteraction(interaction, id);
                        return;
                    case "like":
                    case "dislike":
                        await this._ratingsController.handleRatingInteraction(interaction, customId, Number(id));
                        return;
                    case "faq":
                        await this._helpController.handleFaqInteraction(interaction);
                        return;
                    case "help":
                        await this._helpController.handleHelpInteraction(interaction);
                        return;
                    case "feedback-not-error":
                        await this._feedbackController.handleOpenFeedbackModal(interaction);
                        return;
                    case "feedback":
                        await this._feedbackController.handleOpenFeedbackModal(interaction, true);
                        return;
                }

                if (await this._checkForMissingPermissions(interaction)) {
                    return;
                }

                // only with permissions
                switch (customId) {
                    case "enable":
                    case "disable":
                        await this._channelsController.handleEnableInteraction(interaction);
                        return;
                    case "settings":
                        await this._settingsController.handleSettingsInteraction(interaction);
                        return;
                    case "open-delete-data-confirmation":
                        await this._settingsController.handleOpenDeleteDataConfirmationInteraction(interaction);
                        return;
                    case "delete-data":
                        await this._settingsController.handleDeleteDataInteraction(interaction);
                        return;
                }
            }

            // string select menu
            if (interaction.isStringSelectMenu()) {
                if (await this._checkForMissingPermissions(interaction)) {
                    return;
                }

                switch (interaction.customId) {
                    case "frequency":
                        await this._settingsController.handleFrequencySelect(interaction);
                        return;
                    case "font":
                        await this._settingsController.handleFontSelect(interaction);
                        return;
                    case "milestones":
                        await this._settingsController.handleMilestonesSelect(interaction);
                        return;
                    case "avatar":
                        await this._settingsController.handleUserAvatarsSelect(interaction);
                        return;
                    case "faq":
                        await this._helpController.handleFaqInteraction(interaction);
                        return;
                }
            }
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "interaction.error",
                attributes: {
                    interaction_id: interaction.id,
                    channel_id: interaction?.channelId,
                    guild_id: interaction?.guildId,
                    posthogDistinctId: interaction.user.id,
                    interaction_type: interaction.type,
                    command_name: interaction.isCommand() ? interaction.commandName : undefined,
                    custom_id: "customId" in interaction ? interaction.customId : undefined,
                    error_message: error instanceof Error ? error.message : String(error),
                    error_stack: error instanceof Error ? error.stack : undefined,
                },
            });
        }
    }

    /**
     * Handles the Events.GuildCreate event from discord.js library
     *
     * @param guild
     *
     * @author Kyrylo Maliuha
     */
    public handleGuildCreate(guild: Guild): void {
        try {
            analytics.capture({
                distinctId: guild.id,
                event: "guild_joined",
                properties: {
                    guildId: guild.id,
                    memberCount: guild.memberCount,
                    locale: guild.preferredLocale,
                    available: guild.available,
                    guildAgeDays: Math.round((Date.now() - guild.createdTimestamp) / 86400000),
                    shardId: guild.shardId,
                },
            });
        } catch (error) {
            analytics.captureException(error);
        }
    }

    /**
     * Handles the Events.GuildDelete event from discord.js library
     *
     * @param guild
     *
     * @author Kyrylo Maliuha
     */
    public handleGuildDelete(guild: Guild): void {
        try {
            if (!guild.available) {
                return;
            }

            analytics.capture({
                distinctId: guild.id,
                event: "guild_left",
                properties: {
                    guildId: guild.id,
                    memberCount: guild.memberCount,
                    locale: guild.preferredLocale,
                    lifetimeDays: guild.joinedTimestamp
                        ? Math.round((Date.now() - guild.joinedTimestamp) / 86400000)
                        : undefined,
                    guildAgeDays: Math.round((Date.now() - guild.createdTimestamp) / 86400000),
                    shardId: guild.shardId,
                },
            });
        } catch (error) {
            analytics.captureException(error);
        }
    }

    /**
     * Checks if a user is missing Manage Server or Manage Channels permissions, then if
     * he does it will send an error message and return true.
     *
     * @param interaction
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _checkForMissingPermissions(
        interaction: ButtonInteraction | ChatInputCommandInteraction | StringSelectMenuInteraction,
    ): Promise<boolean> {
        if (
            interaction?.memberPermissions?.has("ManageChannels", true) ||
            interaction?.memberPermissions?.has("ManageGuild", true)
        ) {
            return false;
        } else {
            await respondMissingPermissions(interaction);

            return true;
        }
    }
}
