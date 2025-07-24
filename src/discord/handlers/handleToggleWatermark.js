import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const handleToggleWatermark = async interaction => {
    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }
    try {
        await interaction.deferUpdate();

        const channelId = interaction.customId.split("-")[1];
        const action = interaction.customId.split("-")[0];

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channelId,
            watermarkLogo: action === 'watermarkenable',
        };

        await analytics.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                WatermarkLogo: newSettings.watermarkLogo,
            },
        })

        await analytics.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error toggling watermark:", error);
    }
};