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

export const constructSettingsEmbed = (currentSettings, channelId) => {

    const frequency = [
        {
            label: "Never",
            value: "0",
            description: "Don't send memes, unless requested via a command",
            emoji: "⬛",
        },
        {
            label: "Hardly ever",
            value: "1",
            description: "Once every ~100 messages",
            emoji: "🟥",
        },
        {
            label: "Rarely",
            value: "2",
            description: "Once every ~50 messages",
            emoji: "🟧",
        },
        {
            label: "Sometimes",
            value: "5",
            description: "Once every ~20 messages (recommended)",
            emoji: "🟨",
        },
        {
            label: "Often",
            value: "10",
            description: "Once every ~10 messages",
            emoji: "🟩",
        },
    ];

    const memeTemplates = [
        {
            label: "Wojak pointing",
            value: "wojakpointing",
            emoji: {id: "1378516235125526618"},
        },
        {
            label: "Uncanny",
            value: "uncanny",
            emoji: {id: "1378516226099384462"},
        },
        {
            label: "Stepped in shit",
            value: "steppedinshit",
            emoji: {id: "1378516213600223303"},
        },
        {
            label: "Speechbubble",
            value: "speechbubble",
            emoji: {id: "1378516203366252646"},
        },
        {
            label: "Looks at paper angry",
            value: "looksatpaperangry",
            emoji: {id: "1378516194562150491"},
        },
        {
            label: "Winnie the Pooh",
            value: "fancybear",
            emoji: {id: "1378516184617717800"},
        },
        {
            label: "Cycle",
            value: "cycle",
            emoji: {id: "1378516169073496155"},
        },
    ]

    const dataRetentionOptions = [
        {
            label: "2 days",
            value: "2",
            emoji: {name: "⏱️"},
            description: "For very active channels",
        },
        {
            label: "7 days",
            value: "7",
            emoji: {name: "⏱️"},
            description: "For active channels",
        },
        {
            label: "14 days",
            value: "14",
            emoji: {name: "⏱️"},
            description: "For not very active channels (recommended)",
        },
        {
            label: "30 days",
            value: "30",
            emoji: {name: "⏱️"},
            description: "For very inactive channels",
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
        if (currentSettings.enabled_random_memes === "all") {
            currentSettings.enabled_random_memes = memeTemplates.map(template => template.value);
        } else {
            currentSettings.enabled_random_memes = currentSettings.enabled_random_memes.split(',')
        }
    }

    return [
        [
            new ContainerBuilder()
                .addSectionComponents(
                    new SectionBuilder()
                        .setThumbnailAccessory(
                            new ThumbnailBuilder()
                                .setURL("https://media.discordapp.net/attachments/1375839391448170517/1378490221410127984/logopng.png?ex=683cca8f&is=683b790f&hm=91e3d48f610703f7fa2685426283a4b79b120e8467d9a98d222cea500cc49f17&=&format=webp&quality=lossless")
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent("# ⚙️ Settings"),
                            new TextDisplayBuilder().setContent("Here you can change bot's behaviour in this channel."),
                        ),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addSectionComponents(
                    new SectionBuilder()
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setStyle(currentSettings.is_enabled ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.is_enabled ? "Disable" : "Enable"}`)
                                .setCustomId(`${currentSettings.is_enabled ? "disable" : "enable"}-${channelId}`),
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(`${currentSettings.is_enabled ? "🟢 Bot is **working** in this channel!" : "🔴 Bot is **not working** in this channel!"}`),
                        ),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`-# Channel ID: ${channelId}`),
                ),

            // memes in the chat
            new ContainerBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("## 💬 Memes in the chat"),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("This section contains options related to random memes in the chat. You can control how often bot is going to send memes and also what memes do you want to see."),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("### Frequency"),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("How often should the bot send a random meme in the chat without any commands?"),
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
                    new TextDisplayBuilder().setContent("### What memes are going to be sent?"),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("Which templates are going to be used for random sent memes in this channel? You can select multiple options."),
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
                    new TextDisplayBuilder().setContent("## 🔒 Data retention"),
                )
                .addSectionComponents(
                    new SectionBuilder()
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Danger)
                                .setLabel("Erase saved channel data")
                                .setCustomId(`erase-${channelId}`),
                        )
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent("This section contains options related to data retention and privacy. Because memes are generated based on the context of this channel, bot saves anonymous message data in the database. You can control for how long this data is going to be saved or completely erase it now."),
                        ),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("### For how long should the bot keep messages?"),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("After this amount of days, bot will delete saved messages for this channel. More context = better memes."),
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
                    new TextDisplayBuilder().setContent("### Should bot use user sent images in memes?"),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("If set to **yes**, sometimes instead of using avatars it will use user sent images instead. Only images sent no more than 24 hours ago will be used."),
                )
                .addActionRowComponents(
                    new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId("select-useuserimages")
                                .addOptions(
                                    new SelectMenuOptionBuilder()
                                        .setLabel("No")
                                        .setValue("no")
                                        .setEmoji({
                                            name: "❌",
                                        }),
                                    new SelectMenuOptionBuilder()
                                        .setLabel("Yes")
                                        .setDefault(true)
                                        .setValue("yes")
                                        .setEmoji({
                                            name: "✅",
                                        }),
                                ),
                        ),
                ),
        ],
        [
            // i18n
            new ContainerBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("## 🌍 Language"),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("This section contains options related to internalization and language of the bot in general. If you change the language here, it won't affect language in other channels."),
                )
                .addSeparatorComponents(
                    new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("### What language should the bot use?"),
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
        ]
    ]
};