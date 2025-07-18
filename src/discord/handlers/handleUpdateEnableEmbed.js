import {MessageFlags} from "discord.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";

export const handleUpdateEnableEmbed = async (interaction) => {
    if (!await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')) {
        return;
    }
    try {
        const currentSettings = await getChannelSettings(interaction.channelId);
        const components = await constructEnableEmbed(currentSettings.isEnabled, interaction.channelId)

        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components: components
        })
    } catch (error) {
        console.error("Error updating embed:", error);
    }

}