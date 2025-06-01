import {ButtonStyle, MessageFlags} from 'discord.js';
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {constructSettingsEmbed} from "../embeds/constructSettingsEmbed.js";

export const settings = async (interaction) => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    console.log(channelSettings)

    const settingsEmbeds = constructSettingsEmbed(channelSettings, interaction.channelId);

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: settingsEmbeds[0]
    })

    await interaction.followUp({
        flags: MessageFlags.IsComponentsV2,
        components: settingsEmbeds[1]
    })
}