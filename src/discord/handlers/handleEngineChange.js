import {analytics} from "#src/analytics/initializeAnalytics.js";
import {log} from "../../../bot.js";

export const handleEngineChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const newEngine = interaction.values[0];

        await analytics.capture({
            distinctId: channelId,
            event: 'settings_changed',
            properties: {
                engine: newEngine,
                $set: {
                    engine: newEngine,
                },
            },
        })

        await analytics.flush()
    } catch (error) {
        log.error("Error updating language:", error);
    }
};