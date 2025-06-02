import {ButtonStyle, MessageFlags} from 'discord.js';
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {constructSettingsEmbed} from "../embeds/constructSettingsEmbed.js";

export const settings = async (interaction) => {
    let channelSettings = await getChannelSettings(interaction.channelId);

    if (!channelSettings) {
        channelSettings = await getChannelSettings(interaction.channelId);
    }

    if (channelSettings) {
        if (channelSettings.enabled_random_memes <= 0) {
            channelSettings.enabled_random_memes = "all";
        }
    }

    const settingsEmbed = constructSettingsEmbed(channelSettings, interaction.channelId);

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: settingsEmbed
    })
}