import {MessageFlags} from "discord.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {constructPremiumEmbed} from "../embeds/constructPremiumEmbed.js";

import {checkPremium} from "../helpers/checkPremium.js";
import {log} from "../../../bot.js";

export const handleUpdatePremiumEmbed = async (interaction) => {
    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }
    try {
        const hasPremium = checkPremium(interaction);

        const currentSettings = await getChannelSettings(interaction.channelId);
        const components = await constructPremiumEmbed(currentSettings, interaction.channelId, hasPremium)

        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components: components
        })
    } catch (error) {
        log.error("Error updating embed:", error);
    }

}