import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {MessageFlags} from "discord.js";
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const handleDisabledChannel = async (interaction) => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    let isEnabled = false;

    if (!channelSettings) {
        isEnabled = false;
    } else {
        isEnabled = channelSettings.isEnabled
    }

    await analytics.capture({
        distinctId: interaction.channelId,
        event: 'answer_failed',
        properties: {
            reason: "channel_disabled",
        },
    })

    await analytics.flush()

    interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: await constructEnableEmbed(isEnabled, interaction.channelId)
    })
}