import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";

export const handleLanguageChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const newLanguage = interaction.values[0];

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channel_id: channelId,
            language: newLanguage,
        };

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error updating language:", error);
    }
};