// noinspection JSCheckFunctionSignatures

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
    ThumbnailBuilder
} from 'discord.js';
import {t} from "../i18n/utils.js";

export const constructSettingsEmbed = (currentSettings, channelId) => {

    const language = currentSettings?.language || "english";

    const frequency = [
        {
            label: t("settingsMemesFrequencyOptionNeverTitle", language),
            value: "0",
            description: t("settingsMemesFrequencyOptionNeverDescription", language),
            emoji: "⬛",
        },
        {
            label: t("settingsMemesFrequencyOptionHardlyEverTitle", language),
            value: "1",
            description: t("settingsMemesFrequencyOptionHardlyEverDescription", language),
            emoji: "🟥",
        },
        {
            label: t("settingsMemesFrequencyOptionRarelyTitle", language),
            value: "2",
            description: t("settingsMemesFrequencyOptionRarelyDescription", language),
            emoji: "🟧",
        },
        {
            label: t("settingsMemesFrequencyOptionSometimesTitle", language),
            value: "5",
            description: t("settingsMemesFrequencyOptionSometimesDescription", language),
            emoji: "🟨",
        },
        {
            label: t("settingsMemesFrequencyOptionOftenTitle", language),
            value: "10",
            description: t("settingsMemesFrequencyOptionOftenDescription", language),
            emoji: "🟩",
        },
    ];

    const memeTemplates = [
        {
            label: t("settingsMemesTemplatesOptionWojakPointingTitle", language),
            value: "wojakpointing",
            emoji: {id: "1378516235125526618"},
        },
        {
            label: t("settingsMemesTemplatesOptionUncannyTitle", language),
            value: "uncanny",
            emoji: {id: "1378516226099384462"},
        },
        {
            label: t("settingsMemesTemplatesOptionSteppedInShitTitle", language),
            value: "steppedinshit",
            emoji: {id: "1378516213600223303"},
        },
        {
            label: t("settingsMemesTemplatesOptionSpeechbubbleTitle", language),
            value: "speechbubble",
            emoji: {id: "1378516203366252646"},
        },
        {
            label: t("settingsMemesTemplatesOptionLooksAtPaperAngryTitle", language),
            value: "looksatpaperangry",
            emoji: {id: "1378516194562150491"},
        },
        {
            label: t("settingsMemesTemplatesOptionFancyBearTitle", language),
            value: "fancybear",
            emoji: {id: "1378516184617717800"},
        },
        {
            label: t("settingsMemesTemplatesOptionCycleTitle", language),
            value: "cycle",
            emoji: {id: "1378516169073496155"},
        },
        {
            label: t("settingsMemesTemplatesOptionGreentextTitle", language),
            value: "greentext",
            emoji: {name: "💬"},
        },
        {
            label: t("settingsMemesTemplatesOptionIsThisAPigeonTitle", language),
            value: "isthisapigeon",
            emoji: {id: "1380165207216750654"},
        },
        {
            label: t("settingsMemesTemplatesOptionYesChadTitle", language),
            value: "yeschad",
            emoji: {id: "1380165052992061542"},
        },
    ]

    const dataRetentionOptions = [
        {
            label: t("settingsDataRetentionHowLongOption2DaysTitle", language),
            value: "2",
            emoji: {name: "⏱️"},
            description: t("settingsDataRetentionHowLongOption2DaysDescription", language),
        },
        {
            label: t("settingsDataRetentionHowLongOption7DaysTitle", language),
            value: "7",
            emoji: {name: "⏱️"},
            description: t("settingsDataRetentionHowLongOption7DaysDescription", language),
        },
        {
            label: t("settingsDataRetentionHowLongOption14DaysTitle", language),
            value: "14",
            emoji: {name: "⏱️"},
            description: t("settingsDataRetentionHowLongOption14DaysDescription", language),
        },
        {
            label: t("settingsDataRetentionHowLongOption30DaysTitle", language),
            value: "30",
            emoji: {name: "⏱️"},
            description: t("settingsDataRetentionHowLongOption30DaysDescription", language),
        },
    ]

    const languageOptions = [
        {
            label: "English",
            value: "english",
            emoji: {id: "1378662093473185802"},
        },
        {
            label: "Русский",
            value: "russian",
            emoji: {id: "1378662084920868984"},
        },
        {
            label: "Nederlands",
            value: "dutch",
            emoji: {id: "1378662062812565545"},
        },
        {
            label: "Українська",
            value: "ukrainian",
            emoji: {id: "1378662074850344960"},
        },
    ]

    if (currentSettings) {
        let memes = currentSettings.enabled_random_memes;
        if (
            memes === "all" || memes === "" || (Array.isArray(memes) && (memes[0] === "" || memes.length === 0))
        ) {
            currentSettings.enabled_random_memes = memeTemplates.map(
                template => template.value
            );
        } else if (typeof memes === "string") {
            currentSettings.enabled_random_memes = memes.split(",");
        }
    }

    return [
            new ContainerBuilder()
                .addSectionComponents(
                    new SectionBuilder()
                        .setThumbnailAccessory(
                            new ThumbnailBuilder()
                                .setURL("https://jstmemit.com/assets/logo.png")
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(`# ⚙️ ${(t("settingsTitle", language))}`),
                            new TextDisplayBuilder().setContent(t("settingsDescription", language)),
                        ),
                )
                .addActionRowComponents(
                    new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId("select-language")
                                .addOptions(
                                    languageOptions.map((option) =>
                                        new SelectMenuOptionBuilder()
                                            .setLabel(option.label)
                                            .setValue(option.value)
                                            .setDefault(currentSettings.language === option.value)
                                            .setEmoji(option.emoji)
                                    )
                                )
                        )
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addSectionComponents(
                    new SectionBuilder()
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setStyle(currentSettings.is_enabled ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.is_enabled ? (t("btnDisable", language)) : (t("btnEnable", language))}`)
                                .setCustomId(`${currentSettings.is_enabled ? "disable" : "enable"}-${channelId}`),
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(`${currentSettings.is_enabled ? (t("settingsStatusEnabled", language)) : (t("settingsStatusDisabled", language))}`),
                        ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`-# ${(t("settingsFooterChannelId", language))} ${channelId}`),
                ),

            // memes in the chat
            new ContainerBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`## 💬 ${(t("settingsMemesTitle", language))}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("settingsMemesDescription", language)),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${(t("settingsMemesFrequencyTitle", language))}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("settingsMemesFrequencyDescription", language)),
                )
                .addActionRowComponents(
                    new ActionRowBuilder().addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("select-frequency")
                            .addOptions(
                                frequency.map((option) =>
                                    new SelectMenuOptionBuilder()
                                        .setLabel(option.label)
                                        .setValue(option.value)
                                        .setDefault(currentSettings.frequency === parseInt(option.value))
                                        .setEmoji({name: option.emoji})
                                        .setDescription(option.description || "")
                                )
                            )
                    )
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${(t("settingsMemesTemplatesTitle", language))}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("settingsMemesTemplatesDescription", language))
                )
                .addActionRowComponents(
                    new ActionRowBuilder().addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("select-memetemplates")
                            .setMaxValues(memeTemplates.length)
                            .setMinValues(1)
                            .addOptions(
                                memeTemplates.map((template) =>
                                    new SelectMenuOptionBuilder()
                                        .setLabel(template.label)
                                        .setValue(template.value)
                                        .setDefault(currentSettings.enabled_random_memes?.includes(template.value) ?? true)
                                        .setEmoji(template.emoji)
                                )
                            )
                    )
                ),

            // data retention
            new ContainerBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`## 🔒 ${t("settingsDataRetentionTitle", language)} `),
                )
                .addSectionComponents(
                    new SectionBuilder()
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Danger)
                                .setLabel(t("btnEraseData", language))
                                .setCustomId(`erase-${channelId}`),
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(t("settingsDataRetentionDescription", language)),
                        ),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${t("settingsDataRetentionHowLongTitle", language)}`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("settingsDataRetentionHowLongDescription", language))
                )
                .addActionRowComponents(
                    new ActionRowBuilder().addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("select-dataretention")
                            .addOptions(
                                dataRetentionOptions.map((option) => {
                                    const builder = new SelectMenuOptionBuilder()
                                        .setLabel(option.label)
                                        .setValue(option.value)
                                        .setDefault(currentSettings.delete_messages_after === parseInt(option.value))
                                        .setEmoji(option.emoji);

                                    if (option.description) {
                                        builder.setDescription(option.description);
                                    }

                                    return builder;
                                })
                            )
                    )
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`### ${t("settingsDataRetentionUserImagesTitle", language)}`)
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("settingsDataRetentionUserImagesDescription", language))
                )
                .addActionRowComponents(
                    new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId("select-useuserimages")
                                .addOptions(
                                    new SelectMenuOptionBuilder()
                                        .setLabel(t("no", language))
                                        .setDefault(currentSettings.use_user_images == 0)
                                        .setValue("no")
                                        .setEmoji({
                                            name: "❌",
                                        }),
                                    new SelectMenuOptionBuilder()
                                        .setLabel(t("yes", language))
                                        .setDefault(currentSettings.use_user_images == 1)
                                        .setValue("yes")
                                        .setEmoji({
                                            name: "✅",
                                        }),
                                ),
                        ),
                ),
        ]
};