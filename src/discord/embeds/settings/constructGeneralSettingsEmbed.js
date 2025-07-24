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
import {t} from "../../i18n/utils.js";
import {getChannelMessagesAmount} from "#database/queries/getChannelMessagesAmount.js";
import {createProgressBar} from "#src/discord/helpers/createProgressBar.js";
import {settings} from "#config/settings.js";

export const constructGeneralSettingsEmbed = async (currentSettings, channelId, buttons) => {

    const language = currentSettings?.language || "english";

    const messagesAmount = await getChannelMessagesAmount(channelId)

    const progressBar = await createProgressBar(messagesAmount, 30, 10);

    return [
        new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL("https://jstmemit.com/assets/logo.png")
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${settings?.emojis?.settings?.general?.name}  ${(t("settingsTitle", language))}`),
                        new TextDisplayBuilder().setContent(t("settingsDescription", language)),
                    ),
            )
            .addActionRowComponents(
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("select-language")
                            .addOptions(
                                settings?.languages.map((option) =>
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
                            .setLabel(`${currentSettings.isEnabled ? (t("btnDisableTraining", language)) : (t("btnEnableTraining", language))}`)
                            .setCustomId(`${currentSettings.isEnabled ? "disable" : "enable"}-${channelId}`),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            currentSettings.isEnabled
                                ? (messagesAmount < 30
                                    ? t("settingsFooterNotEnoughContext", language, {progressBar, amount: messagesAmount})
                                    : t("settingsFooterReady", language, {progressBar, amount: messagesAmount}))
                                : t("settingsFooterDisabled", language)
                        ),
                    ),
            ),
        buttons
    ]
};