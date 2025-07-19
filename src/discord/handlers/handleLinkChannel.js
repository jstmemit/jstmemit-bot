import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {analytics as posthog} from "../../../bot.js";

export const handleLinkChannel = async interaction => {
    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        let linked_channelId = null;

        // unlink channel if no ID is provided
        if (interaction.values) {
            linked_channelId = interaction.values[0];
        }
        if (!linked_channelId) {
            linked_channelId = null;
        }

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channelId,
            linkedChannel: linked_channelId
        };

        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                LinkedChannel: newSettings.linkedChannel,
            },
        })

        await posthog.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        console.error("Error linking channel:", error);
    }
};