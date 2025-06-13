import {ButtonStyle, ContainerBuilder, TextDisplayBuilder} from "discord.js";
import {t} from "../i18n/utils.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";


export const constructLoadingEmbed = async (channelId) => {

    let channelSettings = await getChannelSettings(channelId);
    const language = channelSettings?.language || "english";

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t('loading', language)}`),
            )
    ];

}