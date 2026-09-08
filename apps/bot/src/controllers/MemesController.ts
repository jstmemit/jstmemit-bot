import {
    type UserContextMenuCommandInteraction,
    type MessageContextMenuCommandInteraction,
    type ModalSubmitInteraction,
    type ModalBuilder,
    type ButtonInteraction,
    type ContainerBuilder,
    type ActionRowBuilder,
    type ButtonBuilder,
    type ChatInputCommandInteraction,
    Message,
    Locale,
    MessageFlags,
    type AttachmentPayload,
} from "discord.js";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { QueueEvents, Job, Queue } from "bullmq";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { Template } from "@jstmemit/shared/models/Template";
import type { IModalsService } from "#/interfaces/IModalsService.ts";
import { logger } from "#/container.ts";
import { analytics } from "@jstmemit/analytics";
import { timeout } from "#/helpers/timeout.ts";
import type { MemeGenerationTrigger } from "@jstmemit/shared/models/MemeGenerationTrigger";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";
import { getRequiredBotPermissions } from "#/helpers/getRequiredBotPermissions.ts";
import type { IMilestonesService } from "#/interfaces/IMilestonesService.ts";
import type { IContextService } from "#/interfaces/IContextService.ts";
import ms from "ms";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { Font } from "@jstmemit/shared/models/Font";
import { getTelemetryProperties } from "#/helpers/getTelemetryProperties.ts";
import type { IContextMenusService } from "#/interfaces/IContextMenusService.ts";

export class MemesController implements IMemesController {
    private readonly _memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>;
    private readonly _memeGenerationQueueEvents: QueueEvents;
    private readonly _ratingsService: IRatingsService;
    private readonly _componentsService: IComponentsService;
    private readonly _channelsService: IChannelsService;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _modalsService: IModalsService;
    private readonly _milestonesService: IMilestonesService;
    private readonly _contextService: IContextService;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _contextMenusService: IContextMenusService;

    public constructor(
        memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
        memeGenerationQueueEvents: QueueEvents,
        ratingsService: IRatingsService,
        componentsService: IComponentsService,
        channelsService: IChannelsService,
        templatesRepository: ITemplatesRepository,
        modalsService: IModalsService,
        milestonesService: IMilestonesService,
        contextService: IContextService,
        messagesRepository: IMessagesRepository,
        contextMenusService: IContextMenusService,
    ) {
        this._memeGenerationQueue = memeGenerationQueue;
        this._memeGenerationQueueEvents = memeGenerationQueueEvents;
        this._ratingsService = ratingsService;
        this._componentsService = componentsService;
        this._channelsService = channelsService;
        this._templatesRepository = templatesRepository;
        this._modalsService = modalsService;
        this._milestonesService = milestonesService;
        this._contextService = contextService;
        this._messagesRepository = messagesRepository;
        this._contextMenusService = contextMenusService;
    }

    /**
     * Sends a meme generation job to the queue and replies
     * to the channel back with a meme
     *
     * @param interaction
     * @param trigger
     *
     * @author Kyrylo Maliuha
     */
    public async handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        trigger?: MemeGenerationTrigger,
    ): Promise<void> {
        let parentGenerationId: number | undefined;
        const startedAt: number = Date.now();
        const channelId: MemeGenerationJob["channelId"] = interaction.channelId;
        const userId: MemeGenerationJob["userId"] =
            interaction instanceof Message ? interaction.author.id : interaction.user.id;

        if (interaction instanceof Message) {
            trigger ??= "auto";

            if (interaction.system) {
                return;
            }
        } else if (interaction.isButton()) {
            trigger = "regenerate";

            const id: string | undefined = interaction.customId.split(":")[1];
            parentGenerationId = id ? Number(id) : undefined;
        } else {
            trigger = "command";
        }

        logger.emit({
            severityText: "info",
            body: "generate_meme.interaction.received",
            attributes: {
                trigger,
                ...getTelemetryProperties(interaction),
            },
        });

        let locale: Locale = interaction?.guild?.preferredLocale || Locale.EnglishUS;

        const channel = await this._channelsService.getChannel(channelId);
        const permissions: RequiredBotPermissions = getRequiredBotPermissions(interaction);

        if (!(interaction instanceof Message)) {
            locale = interaction.locale;
        }

        if (!channel?.enabled) {
            if (!(interaction instanceof Message)) {
                await interaction.deferReply();
            }

            logger.emit({
                severityText: "warn",
                body: "generate_meme.channel.not_enabled",
                attributes: {
                    trigger,
                    ...getTelemetryProperties(interaction),
                },
            });

            const notEnabledComponent: ContainerBuilder = this._componentsService.getEnableMessageComponent(
                locale,
                channel?.enabled || false,
                permissions,
                channelId,
            );
            const notEnabledButtons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(locale, channel?.enabled || false);

            await respond(interaction, [notEnabledComponent, notEnabledButtons]);

            return;
        }

        try {
            if (interaction instanceof Message) {
                if (!permissions.sendMessages) {
                    return;
                }

                if (
                    !permissions.attachFiles ||
                    !permissions.viewChannel ||
                    !permissions.readHistory ||
                    !permissions.embedLinks
                ) {
                    if (interaction.channel?.isSendable()) {
                        await interaction.channel.send({
                            flags: MessageFlags.IsComponentsV2,
                            components: [
                                this._componentsService.getMissingBotPermissionsMessageComponent(locale, permissions),
                            ],
                        });
                    }
                    return;
                }
            }

            const job: Promise<MemeGenerationResult> = this._addGenerateMemeJob({
                channelId,
                guildId: interaction?.guildId || undefined,
                isUserInstall:
                    interaction instanceof Message
                        ? undefined
                        : "1" in (interaction?.authorizingIntegrationOwners || {}),
                locale: interaction instanceof Message ? undefined : interaction?.locale,
                userId,
                trigger,
                parentGenerationId,
                font: channel.font,
            });

            // if bot sent the meme without being prompted to do so
            if (interaction instanceof Message) {
                const jobResult: MemeGenerationResult = await job;
                await interaction.reply({
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: this._getMemeAttachment(jobResult),
                    failIfNotExists: false,
                });

                await this._milestonesService.checkAndReplyWithMilestone(interaction, channel);
                await this._contextService.checkAndFetchGuildAssets(
                    interaction.channelId,
                    channel.enabled,
                    interaction.guild,
                );

                return;
            }

            const budget: number = 900 - (Date.now() - startedAt);

            const fastResult: MemeGenerationResult | undefined = await Promise.race([
                job,
                timeout(Math.max(0, budget)),
            ]);

            if (fastResult) {
                // if bot sent the meme because of /meme or regenerate button + meme got generated faster than 900ms
                await interaction.reply({
                    content: `<@${interaction.user.id}>`,
                    components: [this._ratingsService.constructRatingButtons(0, 0, fastResult.generationId)],
                    files: this._getMemeAttachment(fastResult),
                });
            } else {
                if (!interaction.deferred && !interaction.replied) {
                    await interaction.deferReply();
                }

                const jobResult: MemeGenerationResult = fastResult ?? (await job);

                await interaction.editReply({
                    content: `<@${interaction.user.id}>`,
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: this._getMemeAttachment(jobResult),
                });
            }

            await this._milestonesService.checkAndReplyWithMilestone(interaction, channel);
            await this._contextService.checkAndFetchGuildAssets(
                interaction.channelId,
                channel.enabled,
                interaction.guild,
            );
        } catch (error) {
            const message: (ContainerBuilder | ActionRowBuilder<ButtonBuilder>)[] = [];
            const reason: string = error instanceof Error ? error.message : "";

            switch (reason) {
                case "No props":
                    logger.emit({
                        severityText: "warn",
                        body: "generate_meme.context.insufficient.error_shown",
                        attributes: {
                            trigger,
                            ...getTelemetryProperties(interaction),
                        },
                    });

                    const messagesAmount: number = await this._messagesRepository.getMessagesAmountByChannelId(
                        interaction.channelId,
                    );

                    message.push(
                        this._componentsService.getNotEnoughContextMessageComponent(
                            locale,
                            interaction.id,
                            messagesAmount,
                        ),
                        this._componentsService.getNotEnoughContextButtonsComponent(locale),
                    );
                    break;
                default:
                    this._captureMemeGenerationError(error, interaction, trigger);
                    message.push(this._componentsService.getErrorMessageComponent(locale, interaction.id));
                    message.push(this._componentsService.getErrorButtonsComponent(locale, "meme"));
            }

            if (trigger !== "auto") {
                await respond(interaction, [...message]);
            }
        }
    }

    /**
     * Gets selected template, texts, images and sends a meme generation job to the queue,
     * then replies to the channel back with a meme when it's ready
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleGenerateCustomMemeModalSubmit(interaction: ModalSubmitInteraction): Promise<void> {
        const templateName: string | undefined = interaction.customId.split(":")[1]?.split("|")[0];
        const font: string | undefined = interaction.customId.split(":")[1]?.split("|")[1] || "default";

        logger.emit({
            severityText: "info",
            body: "generate_meme.interaction.received",
            attributes: {
                trigger: "custom",
                ...getTelemetryProperties(interaction),
            },
        });

        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        if (!interaction.channelId) {
            logger.emit({
                severityText: "warn",
                body: "generate_meme.interaction.channel_missing",
                attributes: {
                    trigger: "custom",
                    ...getTelemetryProperties(interaction),
                },
            });
            await interaction.reply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
                flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral],
            });
            return;
        }

        await interaction.deferReply();

        const texts: Record<string, string> = this._modalsService.getMemeModalTexts(template, interaction);
        const images: Record<string, string> | undefined = await this._modalsService.getMemeModalImages(
            template,
            interaction,
        );

        if (!images) {
            return;
        }

        try {
            const jobResult: MemeGenerationResult = await this._addGenerateMemeJob({
                channelId: interaction.channelId,
                guildId: interaction?.guildId || undefined,
                isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                locale: interaction.locale,
                userId: interaction.user.id,
                trigger: "custom",
                templateName: templateName,
                texts,
                images,
                font,
            });

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                files: this._getMemeAttachment(jobResult),
                components: [
                    this._ratingsService.constructRatingButtons(
                        0,
                        0,
                        jobResult.generationId,
                        templateName,
                        font as Font["value"],
                    ),
                ],
            });
        } catch (error) {
            this._captureMemeGenerationError(error, interaction, "custom");
            await interaction.editReply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
            });
        }
    }

    public async handleGenerateViaContextMenuInteraction(
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
        templateName: string | undefined,
    ): Promise<void> {
        logger.emit({
            severityText: "info",
            body: "generate_meme.interaction.received",
            attributes: {
                trigger: "context",
                ...getTelemetryProperties(interaction),
            },
        });

        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        await interaction.deferReply();

        try {
            const texts: Record<string, string> = await this._contextMenusService.getContextMenuTexts(
                template,
                interaction,
            );
            const images: Record<string, string> = this._contextMenusService.getContextMenuImage(template, interaction);

            const jobResult: MemeGenerationResult = await this._addGenerateMemeJob({
                channelId: interaction.channelId,
                guildId: interaction?.guildId || undefined,
                isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                locale: interaction.locale,
                userId: interaction.user.id,
                trigger: "context",
                templateName,
                texts,
                images,
                font: "default",
            });

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId, templateName)],
                files: this._getMemeAttachment(jobResult),
            });
        } catch (error) {
            this._captureMemeGenerationError(error, interaction, "context");
            await interaction.editReply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
                flags: MessageFlags.IsComponentsV2,
            });
        }
    }

    public async handleGenerateCustomMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
        id: string,
    ): Promise<void> {
        let templateName: string;
        let font: string;

        if (interaction.isButton()) {
            templateName = id.split("|")[0] || "";
            font = id.split("|")[1] || "default";
        } else {
            templateName = interaction.options.getString("template", true);
            font = interaction.options.getString("font", false) || "default";
        }

        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        const modal: ModalBuilder = this._modalsService.getGenerateCustomMemeModal(
            interaction.locale,
            templateName,
            template?.texts,
            template?.images,
            font as Font["value"],
        );

        await interaction.showModal(modal);
    }

    private async _getTemplate(
        interaction:
            | ModalSubmitInteraction
            | MessageContextMenuCommandInteraction
            | ChatInputCommandInteraction
            | UserContextMenuCommandInteraction
            | ButtonInteraction,
        templateName: string | undefined,
    ): Promise<Template | undefined> {
        const template: Template | undefined = this._templatesRepository
            .getAll()
            .find((template: Template): boolean => template.name === templateName);

        if (!template) {
            logger.emit({
                severityText: "error",
                body: "generate_meme.template.not_found",
                attributes: {
                    ...getTelemetryProperties(interaction),
                },
            });

            await interaction.reply({
                components: [
                    this._componentsService.getUnknownTemplateMessageComponent(interaction.locale, interaction.id),
                ],
                flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral],
            });
        }

        return template;
    }

    private async _addGenerateMemeJob(data: MemeGenerationJob): Promise<MemeGenerationResult> {
        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            data,
        );

        logger.emit({
            severityText: "debug",
            body: "generate_meme.job.added",
            attributes: {
                job_id: job.id,
                channel_id: data.channelId,
                posthogDistinctId: data.userId,
                trigger: data.trigger,
                template_name: data.templateName,
            },
        });

        return job.waitUntilFinished(this._memeGenerationQueueEvents, ms("10m"));
    }

    private _getMemeAttachment(result: MemeGenerationResult): AttachmentPayload[] {
        return [
            {
                attachment: Buffer.from(result.png, "base64"),
                name: "meme.webp",
            },
        ];
    }

    private _captureMemeGenerationError(
        error: unknown,
        interaction:
            | MessageContextMenuCommandInteraction
            | UserContextMenuCommandInteraction
            | ChatInputCommandInteraction
            | ButtonInteraction
            | Message
            | ModalSubmitInteraction,
        trigger?: MemeGenerationTrigger,
    ): void {
        const userId: string = interaction instanceof Message ? interaction.author.id : interaction.user.id;

        analytics.captureException(error, userId, {
            errorId: interaction.id,
            trigger,
            channelId: interaction.channelId,
            guildId: interaction.guildId ?? undefined,
        });
        logger.emit({
            severityText: "error",
            body: "generate_meme.job.failed",
            attributes: {
                trigger,
                ...getTelemetryProperties(interaction),
            },
        });
    }
}
