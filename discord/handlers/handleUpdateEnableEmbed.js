import {MessageFlags} from "discord.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";

export const handleUpdateEnableEmbed = async (interaction) => {

    try {
        const currentSettings = await getChannelSettings(interaction.channelId);
        const components = await constructEnableEmbed(currentSettings.is_enabled, interaction.channelId)

        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components: components
        })
    } catch (error) {
        console.error("Error updating embed:", error);
    }

}