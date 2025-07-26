import {ButtonStyle, MessageFlags} from 'discord.js';
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handlePermissionCheck} from "../handlers/handlePermissionCheck.js";
import {constructPremiumEmbed} from "../embeds/constructPremiumEmbed.js";

import {checkPremium} from "../helpers/checkPremium.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {withTimeout} from "#src/discord/utils.js";
import {checkIsEnabled} from "#src/discord/checkIsEnabled.js";
import {handleDisabledChannel} from "#src/discord/handlers/handleDisabledChannel.js";

export const premium = async (interaction) => {

    const isEnabled = await withTimeout(checkIsEnabled(interaction.channelId), 5000);
    if (!isEnabled) {
        await handleDisabledChannel(interaction);
        return;
    }

    let channelSettings = await getChannelSettings(interaction.channelId);
    let hasPremium = false;

    if (!channelSettings) {
        channelSettings = await getChannelSettings(interaction.channelId);
    }

    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }

    hasPremium = await checkPremium(interaction)

    const premiumEmbed = constructPremiumEmbed(channelSettings, interaction.channelId, hasPremium);

    await analytics.capture({
        distinctId: interaction.channelId,
        event: 'command_sent',
        properties: {
            commandName: "premium",
        },
    })

    await analytics.flush()

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: premiumEmbed
    })
}