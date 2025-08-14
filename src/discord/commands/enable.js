import {ButtonStyle, MessageFlags} from 'discord.js';
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {changeChannelSettings} from "#database/queries/changeChannelSettings.js";

export const enable = async (interaction) => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    let isEnabled = false;

    if (!channelSettings) {
        isEnabled = false;
    } else {
        isEnabled = channelSettings.isEnabled
    }

    await analytics.capture({
        distinctId: interaction.channelId,
        event: 'command_sent',
        properties: {
            commandName: "enable",
        },
    })

    await analytics.flush()

    if (!channelSettings?.isEnabled) {
        const newSettings = {
            ...channelSettings,
            channelId: interaction.channelId,
            isEnabled: 1
        };
        await changeChannelSettings(newSettings);
        isEnabled = true;
    }

    interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: await constructEnableEmbed(isEnabled, interaction.channelId)
    })
}