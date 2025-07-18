import {ActionRowBuilder, ButtonBuilder, ButtonStyle, ContainerBuilder, TextDisplayBuilder} from "discord.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {t} from "../i18n/utils.js";
import {createProgressBar} from "#src/discord/helpers/createProgressBar.js";
import {settings} from "#config/settings.js";
import {getChannelMessagesAmount} from "#database/queries/getChannelMessagesAmount.js";


export const constructEnableEmbed = async (isEnabled, channelId) => {

    let channelSettings = await getChannelSettings(channelId);
    const language = channelSettings?.language || "english";
    const messages = await getChannelMessagesAmount(channelId) || 0;

    const progressBar = createProgressBar(messages, 30, settings?.progressBar?.segments?.enable || 10);

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${isEnabled ? `${t('settingsStatusEnabled', language)}` : `${t('settingsStatusDisabled', language)}`}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(isEnabled ? `${t('enableDescriptionReady', language)}` : `${t('enableDescription', language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(messages < 30 ? `${t("enableMessagesInMemory", language, {amount: messages})}` : `${t("enableMessagesInMemoryEnough", language, {amount: messages})}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${progressBar}`),
            ),
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setLabel(`${isEnabled ? `${(t("btnDisableTraining", language))}` : `${(t("btnEnableTraining", language))}`}`)
                    .setCustomId(`${isEnabled ? "disable" : "enable"}-${channelId}-false`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`${t('btnSettings', language)}`)
                    .setCustomId(`settings-open`),
            ),
    ];

}