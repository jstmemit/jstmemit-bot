import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {analytics as posthog} from "../../../bot.js";

export const handleUseUserImagesChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const useUserImages = interaction.values[0] === "yes" ? 1 : 0;

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channel_id: channelId,
            use_user_images: useUserImages,
        };

        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                useUserImages: newSettings.use_user_images,
            },
        })

        await posthog.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error updating user images setting:", error);
    }
};