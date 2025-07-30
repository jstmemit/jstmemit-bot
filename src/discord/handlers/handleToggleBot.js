import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const handleToggleBot = async interaction => {
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
            channelId: channelId,
            isEnabled: action === "enable" ? 1 : 0,
        };

        await analytics.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                isEnabled: newSettings.isEnabled,
            },
        })

        await analytics.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error toggling bot:", error);
    }
};