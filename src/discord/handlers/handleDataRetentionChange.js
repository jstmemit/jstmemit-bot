import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {log} from "../../../bot.js";

export const handleDataRetentionChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const newRetentionDays = parseInt(interaction.values[0]);

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channelId,
            deleteMessagesAfter: newRetentionDays,
        };

        await analytics.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                deleteMessagesAfter: newSettings.deleteMessagesAfter,
            },
        })

        await analytics.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        log.error("Error updating data retention:", error);
    }
};