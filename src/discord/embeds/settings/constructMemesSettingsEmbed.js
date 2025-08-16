// noinspection JSCheckFunctionSignatures

import {
    ActionRowBuilder,
    ButtonStyle,
    ContainerBuilder,
    SelectMenuOptionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    StringSelectMenuBuilder,
    TextDisplayBuilder
} from 'discord.js';
import {t} from "#src/discord/i18n/utils.js";
import {settings} from "#config/settings.js";

export const constructMemesSettingsEmbed = (currentSettings, channelId, buttons) => {

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

        {
            label: t("settingsMemesTemplatesOptionSupermanTitle", language),
            value: "superman",
            emoji: {id: "1405607179872112761"},
        },
        // {
        //     label: t("settingsMemesTemplatesOptionStonksTitle", language),
        //     value: "stonks",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionSleepyThinkingTitle", language),
        //     value: "sleepythinking",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionNewsReporterSittingTitle", language),
        //     value: "newsreportersitting",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionMissingPieceTitle", language),
        //     value: "missingpiece",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionManLookingUpTitle", language),
        //     value: "manlookingup",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionManBehindBlindsTitle", language),
        //     value: "manbehindblinds",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionDissapointedTitle", language),
        //     value: "dissapointed",
        //     emoji: {id: "1393248198562283641"},
        // },
        // {
        //     label: t("settingsMemesTemplatesOptionCowLookingIntoOceanTitle", language),
        //     value: "cowlookingintoocean",
        //     emoji: {id: "1393248198562283641"},
        // },
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
        // memes in the chat
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${settings?.emojis?.settings?.meme?.name}  ${(t("settingsMemesTitle", language))}`),
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
        buttons
    ]
};