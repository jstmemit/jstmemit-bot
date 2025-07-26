import {MessageFlags} from "discord.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";

import {checkPremium} from "../helpers/checkPremium.js";
import {constructGeneralSettingsEmbed} from "#src/discord/embeds/settings/constructGeneralSettingsEmbed.js";
import {constructMemesSettingsEmbed} from "#src/discord/embeds/settings/constructMemesSettingsEmbed.js";
import {constructDataSettingsEmbed} from "#src/discord/embeds/settings/constructDataSettingsEmbed.js";
import {constructPremiumSettingsEmbed} from "#src/discord/embeds/settings/constructPremiumSettingsEmbed.js";
import {createSettingsButtonRow} from "#src/discord/helpers/createSettingsButtons.js";

export const handleUpdateSettingsEmbed = async (interaction, tab) => {
    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }
    try {
        let components, buttons, currentSettings;

        currentSettings = await getChannelSettings(interaction.channelId);

        if (!currentSettings) {
            currentSettings = await getChannelSettings(interaction.channelId);
        }

        switch (tab) {
            case "general":
                buttons = createSettingsButtonRow("general", currentSettings?.language);
                components = await constructGeneralSettingsEmbed(currentSettings, interaction.channelId, buttons)
                break;
            case "meme":
                buttons = createSettingsButtonRow("meme", currentSettings?.language);
                components = constructMemesSettingsEmbed(currentSettings, interaction.channelId, buttons)
                break;
            case "data":
                buttons = createSettingsButtonRow("data", currentSettings?.language);
                components = constructDataSettingsEmbed(currentSettings, interaction.channelId, buttons);
                break;
            case "premium":
                buttons = createSettingsButtonRow("premium", currentSettings?.language);
                const hasPremium = await checkPremium(interaction);
                components = constructPremiumSettingsEmbed(currentSettings, interaction.channelId, hasPremium, buttons);
                break;
            default:
                buttons = createSettingsButtonRow("general", currentSettings?.language);
                components = await constructGeneralSettingsEmbed(currentSettings, interaction.channelId, buttons)
                break;
        }


        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components: components
        })
    } catch (error) {
        console.error("Error updating settings embed:", error);
    }

}