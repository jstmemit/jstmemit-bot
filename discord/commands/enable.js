import {ButtonStyle, MessageFlags} from 'discord.js';
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";

export const enable = async (interaction) => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    let isEnabled = false;

    if (!channelSettings) {
        isEnabled = false;
    } else {
        isEnabled = channelSettings.is_enabled
    }

    interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: constructEnableEmbed(false, interaction.channelId)
    })
}