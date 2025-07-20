// noinspection JSCheckFunctionSignatures
// deprecated

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

export const constructSettingsEmbed = (currentSettings, channelId, hasPremium) => {

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
        {
            label: t("settingsMemesTemplatesOptionTextingTitle", language),
            value: "texting",
            emoji: {id: "1387734304049725490"},
        },
        {
            label: t("settingsMemesTemplatesOptionConnorTitle", language),
            value: "connor",
            emoji: {id: "1387714462286610442"},
        },
        {
            label: t("settingsMemesTemplatesOptionBigThumbsUpTitle", language),
            value: "bigthumbsup",
            emoji: {id: "1387736796863004793"},
        },
        {
            label: t("settingsMemesTemplatesOptionBuzzTitle", language),
            value: "buzz",
            emoji: {id: "1388199124351844382"},
        },
        {
            label: t("settingsMemesTemplatesOptionSpongebobTitle", language),
            value: "spongebob",
            emoji: {id: "1391135707451621579"},
        },
        {
            label: t("settingsMemesTemplatesOptionCryingTitle", language),
            value: "crying",
            emoji: {id: "1391135689642606642"},
        },
        {
            label: t("settingsMemesTemplatesOptionAbsoluteCinemaTitle", language),
            value: "absolutecinema",
            emoji: {id: "1391135672118808586"},
        },
        {
            label: t("settingsMemesTemplatesOptionLiveReactionTitle", language),
            value: "livereaction",
            emoji: {id: "1393247837273460767"},
        },
        {
            label: t("settingsMemesTemplatesOptionTf2HahahaTitle", language),
            value: "tf2hahaha",
            emoji: {id: "1393247863584063690"},
        },
        {
            label: t("settingsMemesTemplatesOptionPoliticalCompassTitle", language),
            value: "politicalcompass",
            emoji: {id: "1393247877018423457"},
        },
        {
            label: t("settingsMemesTemplatesOptionSleepyTitle", language),
            value: "sleepy",
            emoji: {id: "1393247960774475877"},
        },
        {
            label: t("settingsMemesTemplatesOptionWhyDoYouLikeThisMovieTitle", language),
            value: "whydoyoulikethismovie",
            emoji: {id: "1393247996409282610"},
        },
        {
            label: t("settingsMemesTemplatesOptionHomerHidingTitle", language),
            value: "homerhiding",
            emoji: {id: "1393248164202418276"},
        },
        {
            label: t("settingsMemesTemplatesOptionSpongebobHappyTitle", language),
            value: "spongebobhappy",
            emoji: {id: "1393248198562283641"},
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
        let memes = currentSettings.enabledRandomMemes;
        if (
            memes === "all" || memes === "" || (Array.isArray(memes) && (memes[0] === "" || memes.length === 0))
        ) {
            currentSettings.enabledRandomMemes = memeTemplates.map(
                template => template.value
            );
        } else if (typeof memes === "string") {
            currentSettings.enabledRandomMemes = memes.split(",");
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
                                .setStyle(currentSettings.isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.isEnabled ? (t("btnDisable", language)) : (t("btnEnable", language))}`)
                                .setCustomId(`${currentSettings.isEnabled ? "disable" : "enable"}-${channelId}`),
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(`${currentSettings.isEnabled ? (t("settingsStatusEnabled", language)) : (t("settingsStatusDisabled", language))}`),
                        ),
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
                // .addSeparatorComponents(
                //     new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                // )
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
                                        .setDefault(currentSettings.enabledRandomMemes?.includes(template.value) ?? true)
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
                                        .setDefault(currentSettings.deleteMessagesAfter === parseInt(option.value))
                                        .setEmoji(option.emoji);

                                    if (option.description) {
                                        builder.setDescription(option.description);
                                    }

                                    return builder;
                                })
                            )
                    ),
                ),

        // premium
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ✨ ${(t("premiumTitle", language))}`),
                    )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("premiumDescriptionSettingsVariant", language)),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        hasPremium
                            ?
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Success)
                                .setLabel(`${t("btnManagePremium", language)}`)
                                .setCustomId(`manage-premium`)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Success)
                                .setLabel(`${t("btnLearnMore", language)}`)
                                .setCustomId(`manage-premium`)
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            hasPremium
                                ? t("premiumStatusActive", language)
                                : t("premiumStatusInactive", language)
                                ),
                    ),
            ),
    ]
};