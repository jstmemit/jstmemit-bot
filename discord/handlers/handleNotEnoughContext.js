import {constructSettingsEmbed} from "../embeds/constructContextEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {MessageFlags} from "discord.js";
import {analytics as posthog} from "../../bot.js";

export const handleNotEnoughContext = async (interaction, amount) => {
    const currentSettings = await getChannelSettings(interaction.channelId)
    const components = constructSettingsEmbed(currentSettings, interaction.channelId, amount);

    await posthog.capture({
        distinctId: interaction.channelId,
        event: 'not_enough_context_failed',
    })

    await posthog.flush()

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components
    })
}