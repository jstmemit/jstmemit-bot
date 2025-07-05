import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {analytics as posthog} from "../../../bot.js";

export const handleToggleWatermark = async interaction => {
    if (!await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')) {
        return;
    }
    try {
        await interaction.deferUpdate();

        const channelId = interaction.customId.split("-")[1];
        const action = interaction.customId.split("-")[0];

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channel_id: channelId,
            watermarkLogo: action === 'watermarkenable',
        };

        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                WatermarkLogo: newSettings.watermarkLogo,
            },
        })

        await posthog.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error toggling mentions bot:", error);
    }
};