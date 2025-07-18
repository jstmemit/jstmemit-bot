import {ButtonStyle, MessageFlags} from 'discord.js';
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {analytics as posthog} from "../../../bot.js";

export const enable = async (interaction) => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    let isEnabled = false;

    if (!channelSettings) {
        isEnabled = false;
    } else {
        isEnabled = channelSettings.isEnabled
    }

    await posthog.capture({
        distinctId: interaction.channelId,
        event: 'command_sent',
        properties: {
            commandName: "enable",
        },
    })

    await posthog.flush()

    interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: await constructEnableEmbed(isEnabled, interaction.channelId)
    })
}