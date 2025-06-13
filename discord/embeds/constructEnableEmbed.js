import {ActionRowBuilder, ButtonBuilder, ButtonStyle, ContainerBuilder, TextDisplayBuilder} from "discord.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {t} from "../i18n/utils.js";


export const constructEnableEmbed = async (isEnabled, channelId) => {

    let channelSettings = await getChannelSettings(channelId);
    const language = channelSettings?.language || "english";

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${isEnabled ? `${t('settingsStatusEnabled', language)}` : `${t('settingsStatusDisabled', language)}`}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t('enableDescription', language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`-# ${(t("settingsFooterChannelId", language))} ${channelId}`),
            ),
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setLabel(`${isEnabled ? `${(t("btnDisable", language))}` : `${(t("btnEnable", language))}`}`)
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