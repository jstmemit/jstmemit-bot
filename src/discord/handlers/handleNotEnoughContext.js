import {constructSettingsEmbed} from "../embeds/constructContextEmbed.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {MessageFlags} from "discord.js";

export const handleNotEnoughContext = async (interaction, amount) => {
    try {

        const currentSettings = await getChannelSettings(interaction.channelId)
        const components = constructSettingsEmbed(currentSettings, interaction.channelId, amount);

        //  analytics.capture({
        //     distinctId: interaction.channelId,
        //     event: 'not_enough_context_failed',
        // })

        await interaction.reply({
            flags: MessageFlags.IsComponentsV2,
            components
        })
    } catch (error) {
        console.error("Error handling not enough context:", error);
    }
}