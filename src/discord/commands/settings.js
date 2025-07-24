import {ButtonStyle, MessageFlags} from 'discord.js';
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {constructGeneralSettingsEmbed} from "../embeds/settings/constructGeneralSettingsEmbed.js";
import {handlePermissionCheck} from "../handlers/handlePermissionCheck.js";
import {createSettingsButtonRow} from "#src/discord/helpers/createSettingsButtons.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const settings = async (interaction) => {
    let channelSettings = await getChannelSettings(interaction.channelId);

    if (!channelSettings) {
        channelSettings = await getChannelSettings(interaction.channelId);
    }

    if (channelSettings) {
        if (channelSettings.enabledRandomMemes <= 0) {
            channelSettings.enabledRandomMemes = "all";
        }
    }

    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }

    const buttons = await createSettingsButtonRow("general", channelSettings.language || "english");

    const settingsEmbed = await constructGeneralSettingsEmbed(channelSettings, interaction.channelId, buttons);

    await analytics.capture({
        distinctId: interaction.channelId,
        event: 'command_sent',
        properties: {
            commandName: "settings",
        },
    })

    await analytics.flush()

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: settingsEmbed
    })
}