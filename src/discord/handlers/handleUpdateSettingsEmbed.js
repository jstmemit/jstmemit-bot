import {MessageFlags} from "discord.js";
import {constructSettingsEmbed} from "../embeds/constructSettingsEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";

import {checkPremium} from "../helpers/checkPremium.js";

export const handleUpdateSettingsEmbed = async (interaction) => {
    if (!await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')) {
        return;
    }
    try {

        const currentSettings = await getChannelSettings(interaction.channelId);
        const hasPremium = await checkPremium(interaction);
        const components = await constructSettingsEmbed(currentSettings, interaction.channelId, hasPremium)

        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components: components
        })
    } catch (error) {
        console.error("Error updating embed:", error);
    }

}