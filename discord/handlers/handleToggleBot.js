import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";

export const handleToggleBot = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.customId.split("-")[1];
        const action = interaction.customId.split("-")[0];

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channel_id: channelId,
            is_enabled: action === "enable" ? 1 : 0,
        };

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error toggling bot:", error);
    }
};