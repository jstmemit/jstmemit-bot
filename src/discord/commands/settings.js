import {ButtonStyle, MessageFlags} from 'discord.js';
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {constructSettingsEmbed} from "../embeds/constructSettingsEmbed.js";
import {handlePermissionCheck} from "../handlers/handlePermissionCheck.js";
import {analytics as posthog} from "../../../bot.js";

import {checkPremium} from "../helpers/checkPremium.js";

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

    const hasPremium = await checkPremium(interaction);

    const settingsEmbed = constructSettingsEmbed(channelSettings, interaction.channelId, hasPremium);

    await posthog.capture({
        distinctId: interaction.channelId,
        event: 'command_sent',
        properties: {
            commandName: "settings",
        },
    })

    await posthog.flush()

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: settingsEmbed
    })
}