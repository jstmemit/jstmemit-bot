import {ButtonStyle, MessageFlags} from 'discord.js';
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handlePermissionCheck} from "../handlers/handlePermissionCheck.js";
import {analytics as posthog} from "../../../bot.js";
import {constructPremiumEmbed} from "../embeds/constructPremiumEmbed.js";
import {settings} from "../../../config/settings.js";

export const premium = async (interaction) => {
    let channelSettings = await getChannelSettings(interaction.channelId);
    let hasPremium = false;

    if (!channelSettings) {
        channelSettings = await getChannelSettings(interaction.channelId);
    }

    if (channelSettings) {
        if (channelSettings.enabled_random_memes <= 0) {
            channelSettings.enabled_random_memes = "all";
        }
    }

    if (!await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')) {
        return;
    }

    if (interaction.entitlements && interaction.entitlements.size > 0) {
        hasPremium = interaction.entitlements.some(
            (entitlement) =>
                entitlement.skuId === settings.monetization.premiumSkuId && !entitlement.deleted
        );
    }

    const premiumEmbed = constructPremiumEmbed(channelSettings, interaction.channelId, hasPremium);

    await posthog.capture({
        distinctId: interaction.channelId,
        event: 'command_sent',
        properties: {
            commandName: "premium",
        },
    })

    await posthog.flush()

    await interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: premiumEmbed
    })
}