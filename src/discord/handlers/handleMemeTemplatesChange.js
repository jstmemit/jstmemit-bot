import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {analytics as posthog} from "../../../bot.js";

export const handleMemeTemplatesChange = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        const selectedTemplates = interaction.values.join(",");

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channelId,
            enabledRandomMemes: selectedTemplates,
        };

        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                enabledRandomMemes: newSettings.enabledRandomMemes,
            },
        })

        await posthog.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error updating meme templates:", error);
    }
};