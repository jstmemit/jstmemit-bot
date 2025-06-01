import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";

export const handleDataRetentionChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const newRetentionDays = parseInt(interaction.values[0]);

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channel_id: channelId,
            delete_messages_after: newRetentionDays,
        };

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error updating data retention:", error);
    }
};