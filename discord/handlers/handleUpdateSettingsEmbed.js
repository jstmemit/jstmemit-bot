import {MessageFlags} from "discord.js";
import {constructSettingsEmbed} from "../embeds/constructSettingsEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";

export const handleUpdateSettingsEmbed = async (interaction) => {

    try {

        const currentSettings = await getChannelSettings(interaction.channelId);
        const components = await constructSettingsEmbed(currentSettings, interaction.channelId)

        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components: components
        })
    } catch (error) {
        console.error("Error updating embed:", error);
    }

}