import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";

export const handleFrequencyChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const newFrequency = parseInt(interaction.values[0]);

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channel_id: channelId,
            frequency: newFrequency,
        };

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error updating frequency:", error);
    }
};