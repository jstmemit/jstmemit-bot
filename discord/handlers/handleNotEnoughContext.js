import {constructSettingsEmbed} from "../embeds/constructContextEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {MessageFlags} from "discord.js";

export const handleNotEnoughContext = async (interaction, amount) => {
    const currentSettings = await getChannelSettings(interaction.channelId)
    const components = constructSettingsEmbed(currentSettings, interaction.channelId, amount);

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components
    })
}