import type { StringSelectMenuOptionBuilder } from "discord.js";
import { type Locale, type MessageActionRowComponentBuilder } from "discord.js";
import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    SectionBuilder,
    SelectMenuOptionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    ThumbnailBuilder,
} from "discord.js";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { emojis } from "#/data/emojis.ts";
import type { Frequency } from "#/models/Frequency.ts";
import { t } from "@jstmemit/i18n";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";
import type { Achievement } from "@jstmemit/shared/models/Achievement";
import { achievementsList } from "#/data/achievementsList.ts";
import type { ICommandsService } from "#/interfaces/ICommandsService.ts";
import type { Font } from "@jstmemit/shared/models/Font";
import type { Faq } from "@jstmemit/shared/models/Faq";

export class ComponentsService implements IComponentsService {
    private readonly _commandsService: ICommandsService;

    public constructor(commandsService: ICommandsService) {
        this._commandsService = commandsService;
    }

    /**
     * Returns back a message component for /enable command with a progress bar
     * showing passed messages amount in the channel
     *
     * @param language
     * @param isEnabled
     * @param messagesAmount
     * @param permissions
     * @param channelId
     *
     * @author Kyrylo Maliuha
     */
    public getEnableMessageComponent(
        language: Locale,
        isEnabled: boolean,
        permissions: RequiredBotPermissions,
        channelId: string = "",
        messagesAmount: number = 0,
    ): ContainerBuilder {
        const progressBar: string = this._createProgressBar(messagesAmount, 30, 10);
        const hasMissingPermissions: boolean = Object.values(permissions).some((granted) => !granted);

        const container: ContainerBuilder = new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder().setURL(
                        isEnabled
                            ? "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/happy.webp"
                            : "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/idle.webp",
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        `# ${isEnabled ? t("enable.heading.enabled", language) : t("enable.heading.disabled", language, { channelId: channelId })}`,
                    ),
                    new TextDisplayBuilder().setContent(
                        isEnabled
                            ? t("enable.body.enabled", language, { channelId: channelId })
                            : messagesAmount >= 30
                              ? t("enable.body.disabled.ready", language, {
                                    messagesAmount: String(messagesAmount),
                                })
                              : t("enable.body.disabled.notReady", language),
                    ),
                ),
        );

        container.addTextDisplayComponents(
            new TextDisplayBuilder().setContent(
                `**${emojis.check} ${t("enable.body.checklist.inviteJstmemit", language)}**\n**${hasMissingPermissions ? "◽" : emojis.check} ${t("enable.body.checklist.givePermission", language)}**\n**${!isEnabled ? "◽" : emojis.check} ${t("enable.body.checklist.allowMakingMemes", language, { channelId: channelId })}**`,
            ),
        );

        if (isEnabled) {
            container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    messagesAmount < 30
                        ? t("enable.memory.progress", language, { messagesAmount: String(messagesAmount) })
                        : t("enable.memory.full", language, { messagesAmount: String(messagesAmount) }),
                ),
            );
            container.addTextDisplayComponents(new TextDisplayBuilder().setContent(progressBar));
        } else {
            container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`-# ${t("enable.body.disabled.enableToStart", language)}`),
            );
        }

        if (hasMissingPermissions) {
            container.addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            );
            container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`\n### ${t("enable.permissions.heading", language)} ⚠️`),
                new TextDisplayBuilder().setContent(
                    `${t("enable.permissions.description", language, {
                        settings: this._commandsService.getCommandMention("settings"),
                    })}\n${this._createPermissionsList(permissions, language)}`,
                ),
            );
        }

        return container;
    }

    /**
     * Returns a list of translated permissions
     *
     * @param permissions
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    private _createPermissionsList(permissions: RequiredBotPermissions, language: Locale): string {
        return (Object.keys(permissions) as (keyof RequiredBotPermissions)[])
            .map(
                (permission) =>
                    `- ${t(`enable.permissions.${permission}`, language)} ${permissions[permission] ? "✅" : "❌"}`,
            )
            .join("\n");
    }

    /**
     * Returns back a row with enable/disable and open settings buttons
     *
     * @param language
     * @param isEnabled
     * @param count
     * @param isFirstTime
     *
     * @author Kyrylo Maliuha
     */
    public getEnableButtonsComponent(
        language: Locale,
        isEnabled: boolean,
        count: number = 0,
        isFirstTime?: boolean,
    ): ActionRowBuilder<ButtonBuilder> {
        const showFirstMeme: boolean | undefined = isEnabled && isFirstTime && count > 10;

        const container: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setStyle(showFirstMeme ? ButtonStyle.Success : isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                .setLabel(
                    t(
                        showFirstMeme
                            ? "enable.button.firstMeme"
                            : isEnabled
                              ? "enable.button.turnOff"
                              : "enable.button.allowMakingMemes",
                        language,
                    ),
                )
                .setCustomId(showFirstMeme ? "meme" : isEnabled ? "disable" : "enable"),
        );

        if (isEnabled) {
            container.addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(t("enable.button.settings", language))
                    .setCustomId("settings"),
            );
        } else {
            container.addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(t("enable.button.notNow", language))
                    .setCustomId("notnow"),
            );
        }

        return container;
    }

    /**
     Returns back a milestone view message component
     *
     * @param language
     * @param channelId
     * @param count
     * @param milestones
     *
     * @author Kyrylo Maliuha & Oleksii Sych
     */
    public getMilestoneViewMessageComponent(
        language: Locale,
        channelId: string,
        count: number,
        milestones: Achievement[],
    ): ContainerBuilder {
        const progressBar: string = this._createProgressBar(count, count * 2, 10);

        const component = new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/fun.webp",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `# ${t("milestones.view.heading", language, { count: String(count), channelId })}`,
                        ),
                        new TextDisplayBuilder().setContent(
                            t("milestones.view.description", language, {
                                emoji: emojis.jstmemit,
                            }),
                        ),
                    ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("milestones.view.unlockedAchievements", language)}`),
            );

        if (milestones.length !== 0) {
            for (const milestone of milestones) {
                component.addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        `${milestone.emoji} **${milestone.name[language]}:** ${milestone.requiredCount} ${t("milestones.generatedMemes", language)}`,
                    ),
                );
            }
        } else {
            component.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("milestones.view.zeroAchievements", language)}`),
            );
        }

        component.addSeparatorComponents(
            new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false),
        );

        const nextAchievement: Achievement | undefined = achievementsList[milestones.length];

        if (nextAchievement) {
            component
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        `### ${t("milestones.nextGoal", language, { currentGoal: String(count), nextGoal: String(nextAchievement.requiredCount) })}`,
                    ),
                )
                .addTextDisplayComponents(new TextDisplayBuilder().setContent(progressBar));
        } else {
            component
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${t("milestones.view.allAchievements", language)}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        t("milestones.view.allAchievementsDescription", language, {
                            emoji: emojis.jstmemit,
                        }),
                    ),
                );
        }
        return component;
    }

    /**
     * Returns back a milestone message component
     *
     * @param language
     * @param count
     * @param channelId
     * @param [achievement]
     *
     * @author Kyrylo Maliuha & Oleksii Sych
     */
    public getMilestoneMessageComponent(
        language: Locale,
        count: number,
        channelId: string,
        achievement?: Achievement,
    ): ContainerBuilder {
        const progressBar: string = this._createProgressBar(count, count * 2, 10);

        const component = new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/fun.webp",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `# ${t("milestones.heading", language, { count: String(count), channelId })}`,
                        ),
                        new TextDisplayBuilder().setContent(
                            t("milestones.description", language, {
                                achievements: this._commandsService.getCommandMention("achievements"),
                            }),
                        ),
                    ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false));

        if (achievement) {
            component
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${t("milestones.newAchieve", language)}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        `${achievement.emoji} **${achievement.name[language]}:** ${achievement.requiredCount} ${t("milestones.generatedMemes", language)}`,
                    ),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false),
                );
        }

        const lastAchievement: Achievement | undefined = achievementsList[achievementsList.length - 1];

        if (lastAchievement && lastAchievement.requiredCount < count) {
            component
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`${t("milestones.view.allAchievements", language)}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        t("milestones.view.allAchievementsDescription", language, {
                            emoji: emojis.jstmemit,
                        }),
                    ),
                );
        } else {
            component
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        `${t("milestones.nextGoal", language, { currentGoal: String(count), nextGoal: String(count * 2) })}`,
                    ),
                )
                .addTextDisplayComponents(new TextDisplayBuilder().setContent(progressBar))
                .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false))
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        t("milestones.turnOffInSettings", language, {
                            settings: this._commandsService.getCommandMention("settings"),
                        }),
                    ),
                );
        }

        return component;
    }

    /**
     * Returns back a row of channel stats buttons for
     * milestone messages
     *
     * @param language
     * @param likes
     * @param dislikes
     * @param templates
     * @param voices
     *
     * @author Kyrylo Maliuha
     */
    public getMilestoneButtonsComponent(
        language: Locale,
        likes: number,
        dislikes: number,
        templates: number,
        voices: number,
    ): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`${t("stats.likes", language, { count: String(likes) })} 👍`)
                    .setDisabled(true)
                    .setCustomId(`total-likes`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`${t("stats.dislikes", language, { count: String(dislikes) })} 👎`)
                    .setDisabled(true)
                    .setCustomId(`total-dislikes`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`${t("stats.templates", language, { count: String(templates) })} 🖼️`)
                    .setDisabled(true)
                    .setCustomId(`total-templates`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`${t("stats.voices", language, { count: String(voices) })} 🔊`)
                    .setDisabled(true)
                    .setCustomId(`total-voices`),
            );
    }

    /**
     * Returns back a message component for an unknown error
     *
     * @param language
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getErrorMessageComponent(language: Locale, interactionId: string): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder().setURL(
                        "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/error.webp",
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`# ${t("error.heading", language)}`),
                    new TextDisplayBuilder().setContent(t("error.body", language)),
                    new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })),
                ),
        );
    }

    /**
     * Returns a row with send feedback button
     *
     * @param language
     * @param retryInteraction
     *
     * @author Kyrylo Maliuha
     */
    public getErrorButtonsComponent(language: Locale, retryInteraction: string): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setLabel(t("error.button.tryAgain", language))
                .setCustomId(retryInteraction),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setLabel(t("error.button.reportError", language))
                .setCustomId(`feedback`),
        );
    }

    /**
     * Returns back a message component for a "not enough context" error
     *
     * @param language
     * @param interactionId
     * @param messagesAmount
     *
     * @author Kyrylo Maliuha
     */
    public getNotEnoughContextMessageComponent(
        language: Locale,
        interactionId: string,
        messagesAmount: number,
    ): ContainerBuilder {
        const progressBar: string = this._createProgressBar(messagesAmount, 30, 10);

        const container: ContainerBuilder = new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/hmm.webp",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${t("notEnoughContext.heading", language)}`),
                        new TextDisplayBuilder().setContent(t("notEnoughContext.body", language)),
                    ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    messagesAmount < 30
                        ? t("enable.memory.progress", language, { messagesAmount: String(messagesAmount) })
                        : t("enable.memory.full", language, { messagesAmount: String(messagesAmount) }),
                ),
            );

        container.addTextDisplayComponents(new TextDisplayBuilder().setContent(progressBar));

        return container;
    }

    public getNotEnoughContextButtonsComponent(language: Locale): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setLabel(t("error.button.tryAgain", language))
                .setCustomId("meme"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setLabel(t("enable.button.settings", language))
                .setCustomId("settings"),
        );
    }

    /**
     * Returns back a message component for the "unknown template" error
     *
     * @param language
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getUnknownTemplateMessageComponent(language: Locale, interactionId: string): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder().setURL(
                        "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/error.webp",
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`# ${t("unknownTemplate.heading", language)}`),
                    new TextDisplayBuilder().setContent(
                        t("unknownTemplate.body", language, {
                            custom: this._commandsService.getCommandMention("custom"),
                        }),
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })),
                ),
        );
    }

    /**
     * Returns back a message component for the "wrong file format" error
     *
     * @param language
     * @param interactionId
     * @param file
     *
     * @author Kyrylo Maliuha
     */
    public getWrongFileFormatMessageComponent(language: Locale, interactionId: string, file: string): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder().setURL(
                        "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/error.webp",
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`# ${t("wrongFileFormat.heading", language)}`),
                    new TextDisplayBuilder().setContent(t("wrongFileFormat.body", language, { file })),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })),
                ),
        );
    }

    /**
     * Returns back a message component for a "missing permissions" user error (when a user
     * without permissions tries to change bot settings)
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getMissingPermissionsMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/hmm.webp",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${t("missingPermissions.heading", language)}`),
                        new TextDisplayBuilder().setContent(t("missingPermissions.body", language)),
                    ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    t("missingPermissions.alternatives", language, {
                        custom: this._commandsService.getCommandMention("custom"),
                        voice: this._commandsService.getCommandMention("voice"),
                    }),
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("missingPermissions.userInstall", language)),
            );
    }

    public getMissingPermissionsButtons(language: Locale): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setLabel(t("missingPermissions.button.addToMyApps", language))
                .setURL("https://discord.com/oauth2/authorize?client_id=1375836467745783990"),
        );
    }

    /**
     * Returns back a message component for a "missing permissions" bot error (when bot is triggered
     * in the channel, but he doesn't have enough permissions to respond)
     *
     * @param language
     * @param permissions
     *
     * @author Kyrylo Maliuha
     */
    public getMissingBotPermissionsMessageComponent(
        language: Locale,
        permissions: RequiredBotPermissions,
    ): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("missingBotPermissions.heading", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `${t("missingBotPermissions.body", language, {
                        meme: this._commandsService.getCommandMention("meme"),
                        custom: this._commandsService.getCommandMention("custom"),
                    })}\n\n${this._createPermissionsList(permissions, language)}`,
                ),
            );
    }

    /**
     * Returns back a message component for confirming deleting all data
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataConfirmationMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder().setURL(
                        "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/sad.webp",
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`# ${t("deleteData.confirm.heading", language)}`),
                    new TextDisplayBuilder().setContent(
                        t("deleteData.confirm.body", language, {
                            enable: this._commandsService.getCommandMention("enable"),
                        }),
                    ),
                ),
        );
    }

    /**
     * Returns back a message component that is sent after data deletion is done
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataSuccessMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder().setURL(
                        "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/sad.webp",
                    ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`# ${t("deleteData.success.heading", language)}`),
                    new TextDisplayBuilder().setContent(
                        t("deleteData.success.body", language, {
                            enable: this._commandsService.getCommandMention("enable"),
                        }),
                    ),
                ),
        );
    }

    /**
     * Returns back a row with turn on and feedback buttons
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataSuccessButtonsComponent(language: Locale): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Success)
                    .setLabel(t("deleteData.button.turnBackOn", language))
                    .setCustomId(`enable`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(t("deleteData.button.tellUsWhy", language))
                    .setCustomId(`feedback-not-error`),
            );
    }

    /**
     * Returns back a row with cancel and delete data buttons
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataButtonsComponent(language: Locale): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(t("deleteData.button.cancel", language))
                    .setCustomId(`settings`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Danger)
                    .setLabel(t("deleteData.button.delete", language))
                    .setCustomId(`delete-data`),
            );
    }

    /**
     * Returns back a message component for header of the /settings command.
     *
     * @param language
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsHeaderMessageComponent(language: Locale, isEnabled: boolean): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/yes.webp",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${t("settings.about.heading", language)}`),
                        new TextDisplayBuilder().setContent(
                            `${t("settings.about.body", language)} ${isEnabled ? `` : t("settings.about.enablePrompt", language)}`,
                        ),
                    ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        new ButtonBuilder()
                            .setStyle(isEnabled ? ButtonStyle.Secondary : ButtonStyle.Success)
                            .setLabel(
                                `${isEnabled ? t("settings.button.disable", language) : t("settings.button.enable", language)}`,
                            )
                            .setCustomId(`${isEnabled ? "disable" : "enable"}`),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `${isEnabled ? t("settings.status.enabled", language) : t("settings.status.disabled", language)}`,
                        ),
                    ),
            );
    }

    /**
     * Returns back a message component for Header part of the /help command.
     *
     * @param language
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getHelpHeaderMessageComponent(language: Locale, isEnabled?: boolean): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://jstmemit.com/cdn-cgi/image/f=gif,q=50,w=512,metadata=none,fit=scale-down,onerror=redirect/https://files.jstmemit.com/jstmemit/images/logos/animated/yes.webp",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${t("help.about.heading", language)}`),
                        new TextDisplayBuilder().setContent(`${t("settings.about.body", language)}`),
                    ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `${t("help.about.commands.user", language, {
                        voice: this._commandsService.getCommandMention("voice"),
                        custom: this._commandsService.getCommandMention("custom"),
                        feedback: this._commandsService.getCommandMention("feedback"),
                        help: this._commandsService.getCommandMention("help"),
                    })}\n${t("help.about.commands.guild", language, {
                        meme: this._commandsService.getCommandMention("meme"),
                        enable: this._commandsService.getCommandMention("enable"),
                        settings: this._commandsService.getCommandMention("settings"),
                        achievements: this._commandsService.getCommandMention("achievements"),
                    })}`,
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false))
            .addActionRowComponents(
                new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
                    ...(isEnabled === undefined
                        ? []
                        : [
                              new ButtonBuilder()
                                  .setStyle(isEnabled ? ButtonStyle.Secondary : ButtonStyle.Success)
                                  .setLabel(
                                      isEnabled
                                          ? t("enable.button.settings", language)
                                          : t("settings.button.enable", language),
                                  )
                                  .setCustomId(isEnabled ? "settings" : "enable"),
                          ]),

                    ...(isEnabled === undefined
                        ? []
                        : [
                              new ButtonBuilder()
                                  .setStyle(ButtonStyle.Secondary)
                                  .setLabel(t("help.button.achievements", language))
                                  .setCustomId("achievements"),
                          ]),

                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Secondary)
                        .setLabel(t("help.button.faq", language))
                        .setCustomId(`faq`),

                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel(t("help.button.addJstmemit", language))
                        .setURL("https://discord.com/oauth2/authorize?client_id=1375836467745783990"),

                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel(t("help.button.website", language))
                        .setURL("https://jstmemit.com"),
                ),
            );
    }

    /**
     * Returns back a message component for explanation of the auto
     * generated memes from channel context in /help
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getHelpAutoMemesMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.autoMemes.heading", language)}`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.autoMemes.description", language)}`),
            );
    }

    /**
     * Returns back a message component for explanation of the
     * voice narration in /help
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getHelpVoiceMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.voice.heading", language)}`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    t("help.voice.description", language, {
                        voice: this._commandsService.getCommandMention("voice"),
                    }),
                ),
            );
    }

    /**
     * Returns back a message component for explanation of the
     * right-click actions in /help
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getHelpRightClickMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.rightClick.heading", language)}`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.rightClick.description", language)}`),
            );
    }

    /**
     * Returns a message component for the FAQ command + selected question if there is one.
     *
     * @param language
     * @param faqs
     * @param selected
     *
     * @author Kyrylo Maliuha
     */
    public getHelpFaqMessageComponent(language: Locale, faqs: Faq[], selected: string | undefined): ContainerBuilder {
        const selectedFaq: Faq | undefined = faqs.find(
            (faq: Faq): boolean => faq.question.substring(0, 25) === selected,
        );

        const container: ContainerBuilder = new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.faq.heading", language)}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.faq.description", language)}`))
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(false))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder().setCustomId("faq").addOptions(
                        faqs.map((option: Faq): StringSelectMenuOptionBuilder =>
                            new SelectMenuOptionBuilder()
                                .setLabel(option.question)
                                .setValue(option.question.substring(0, 25))
                                .setEmoji({ name: "❓" })
                                .setDefault(option.question.substring(0, 25) === selected)
                                .setDescription(
                                    option.answer.substring(0, 50) + (option.answer.length > 50 ? "..." : ""),
                                ),
                        ),
                    ),
                ),
            );

        if (selectedFaq) {
            container
                .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${t(selectedFaq.question, language)}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        t(selectedFaq.answer, language, {
                            enable: this._commandsService.getCommandMention("enable"),
                            meme: this._commandsService.getCommandMention("meme"),
                            settings: this._commandsService.getCommandMention("settings"),
                        }),
                    ),
                );
        }

        return container;
    }

    /**
     * Returns back a message component for body of the /settings command.
     *
     * @param language
     * @param frequency
     * @param useAvatarsInMemes
     * @param milestones
     * @param font
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsBodyMessageComponent(
        language: Locale,
        frequency: number,
        useAvatarsInMemes: boolean,
        milestones: boolean,
        font: string | null = "Random",
    ): ContainerBuilder {
        const frequencies: Frequency[] = this._getFrequencyOptions(language);
        const fonts: Font[] = this._getFontOptions(language);

        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# ${t("settings.meme.heading", language)}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.meme.body", language)))
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settings.frequency.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.frequency.body", language)))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder().setCustomId("frequency").addOptions(
                        frequencies.map((option: Frequency) =>
                            new SelectMenuOptionBuilder()
                                .setLabel(option.label)
                                .setValue(option.value)
                                .setDefault(frequency === Number(option.value))
                                .setEmoji({ name: option.emoji })
                                .setDescription(option.description),
                        ),
                    ),
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settings.font.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.font.body", language)))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder().setCustomId("font").addOptions(
                        fonts.map((option: Font) =>
                            new SelectMenuOptionBuilder()
                                .setLabel(option.label)
                                .setValue(option.value)
                                .setDefault(font === null && option.value === "default" ? true : option.value === font)
                                .setEmoji({ name: option.emoji })
                                .setDescription(option.description),
                        ),
                    ),
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settings.avatars.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.avatars.body", language)))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("avatar")
                        .addOptions(
                            new SelectMenuOptionBuilder()
                                .setLabel(t("settings.avatars.yes.label", language))
                                .setValue("true")
                                .setDefault(useAvatarsInMemes)
                                .setEmoji({ name: "✅" })
                                .setDescription(t("settings.avatars.yes.description", language)),
                            new SelectMenuOptionBuilder()
                                .setLabel(t("settings.avatars.no.label", language))
                                .setValue("false")
                                .setDefault(!useAvatarsInMemes)
                                .setEmoji({ name: "❌" })
                                .setDescription(t("settings.avatars.no.description", language)),
                        ),
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settings.milestones.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.milestones.body", language)))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("milestones")
                        .addOptions(
                            new SelectMenuOptionBuilder()
                                .setLabel(t("settings.milestones.yes.label", language))
                                .setValue("true")
                                .setDefault(milestones)
                                .setEmoji({ name: "🎉" })
                                .setDescription(t("settings.milestones.yes.description", language)),
                            new SelectMenuOptionBuilder()
                                .setLabel(t("settings.milestones.no.label", language))
                                .setValue("false")
                                .setDefault(!milestones)
                                .setEmoji({ name: "🔇" })
                                .setDescription(t("settings.milestones.no.description", language)),
                        ),
                ),
            );
    }

    /**
     * Returns back a message component for footer of the /settings command.
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsFooterMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setButtonAccessory(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setLabel(t("settings.footer.deleteButton", language))
                        .setCustomId(`open-delete-data-confirmation`),
                )
                .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.footer.body", language))),
        );
    }

    /**
     * Returns back a message component for received feedback messages
     *
     * @param userId
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public getFeedbackMessageComponent(userId: string, message: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# 💬 New feedback message`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`**Message:** ${message}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`**Author ID:** ${userId} | <@${userId}>`));
    }

    /**
     * Returns back a message component for submitting a feedback message
     *
     * @param language
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public getFeedbackMessageSubmitComponent(language: Locale, message: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("feedback.submit.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("feedback.submit.body", language)))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("feedback.submit.yourMessage", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(message));
    }

    /**
     * Makes a progress bar with emojis
     *
     * @param value
     * @param max
     * @param segments
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _createProgressBar(value: number, max: number, segments: number): string {
        const clamped: number = Math.max(0, Math.min(value, max));

        const percentage: number = clamped / max;

        const filled: number = Math.floor(percentage * segments) + 1;

        let progressBar: string = "";

        for (let i: number = 0; i < segments; i++) {
            if (i < filled) {
                if (i === 0) {
                    progressBar += emojis.fill1;
                } else if (i === segments - 1 || i === filled - 1) {
                    progressBar += emojis.fill3;
                } else {
                    progressBar += emojis.fill2;
                }
            } else {
                if (i === 0) {
                    progressBar += emojis.empty1;
                } else if (i === segments - 1) {
                    progressBar += emojis.empty3;
                } else {
                    progressBar += emojis.empty2;
                }
            }
        }

        return progressBar;
    }

    /**
     * Returns an array of meme frequency options
     *
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _getFrequencyOptions(language: Locale): Frequency[] {
        return [
            {
                label: t("settings.frequency.never.label", language),
                value: "0",
                description: t("settings.frequency.never.description", language),
                emoji: "⬛",
            },
            {
                label: t("settings.frequency.rarely.label", language),
                value: "100",
                description: t("settings.frequency.rarely.description", language),
                emoji: "🟥",
            },
            {
                label: t("settings.frequency.sometimes.label", language),
                value: "50",
                description: t("settings.frequency.sometimes.description", language),
                emoji: "🟧",
            },
            {
                label: t("settings.frequency.often.label", language),
                value: "20",
                description: t("settings.frequency.often.description", language),
                emoji: "🟨",
            },
            {
                label: t("settings.frequency.quiteOften.label", language),
                value: "10",
                description: t("settings.frequency.quiteOften.description", language),
                emoji: "🟩",
            },
            {
                label: t("settings.frequency.veryOften.label", language),
                value: "5",
                description: t("settings.frequency.veryOften.description", language),
                emoji: "🟦",
            },
        ];
    }

    /**
     * Returns an array of meme generation mode options
     *
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _getFontOptions(language: Locale): Font[] {
        return [
            {
                label: t("settings.font.random.label", language),
                description: t("settings.font.random.description", language),
                value: "default",
                emoji: "🎲",
            },
            {
                label: t("settings.font.comicSans.label", language),
                value: "Comic Sans MS",
                description: t("settings.font.comicSans.description", language),
                emoji: "🎨",
            },
            {
                label: t("settings.font.impact.label", language),
                value: "Impact",
                description: t("settings.font.impact.description", language),
                emoji: "🗿",
            },
            {
                label: t("settings.font.minecraft.label", language),
                value: "Minecraft",
                description: t("settings.font.minecraft.description", language),
                emoji: "🧱",
            },
            {
                label: t("settings.font.openDyslexic.label", language),
                value: "OpenDyslexic",
                description: t("settings.font.openDyslexic.description", language),
                emoji: "📖",
            },
        ];
    }
}
