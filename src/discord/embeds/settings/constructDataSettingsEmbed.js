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
    TextDisplayBuilder
} from 'discord.js';
import {t} from "../../i18n/utils.js";
import {settings} from "#config/settings.js";

export const constructDataSettingsEmbed = (currentSettings, channelId, buttons) => {

    const language = currentSettings?.language || "english";

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

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${settings?.emojis?.settings?.data?.name}  ${(t("settingsDataRetentionTitle", language))}`),
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
        buttons
    ]
};