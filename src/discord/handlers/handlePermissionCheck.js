import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {MessageFlags} from "discord.js";
import {constructPermissionEmbed} from "../embeds/constructPermissionEmbed.js";

export const handlePermissionCheck = async (interaction, permissionValue, permissionName) => {
    const member = interaction.member;
    const hasPermission = member.permissions.has(permissionValue);

    if (!hasPermission) {
        const currentSettings = await getChannelSettings(interaction.channelId)
        const components = constructPermissionEmbed(currentSettings, interaction.channelId, permissionName);

        await interaction.reply({
            flags: MessageFlags.IsComponentsV2,
            components,
            ephemeral: true
        })
        return false;
    }
    return true;
}