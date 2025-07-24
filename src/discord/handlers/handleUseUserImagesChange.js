import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {analytics} from "../../analytics/initializeAnalytics.js";

export const handleUseUserImagesChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const useUserImages = interaction.values[0] === "yes" ? 1 : 0;

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channelId,
            useUserImages,
        };

        await analytics.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                useUserImages: newSettings.useUserImages,
            },
        })

        await analytics.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error updating user images setting:", error);
    }
};