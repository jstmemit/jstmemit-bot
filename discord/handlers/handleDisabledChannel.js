import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {MessageFlags} from "discord.js";
import {constructEnableEmbed} from "../embeds/constructEnableEmbed.js";

export const handleDisabledChannel = async (interaction) => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    let isEnabled = false;

    if (!channelSettings) {
        isEnabled = false;
    } else {
        isEnabled = channelSettings.is_enabled
    }

    interaction.reply({
        flags: MessageFlags.IsComponentsV2,
        components: constructEnableEmbed(isEnabled, interaction.channelId)
    })
}