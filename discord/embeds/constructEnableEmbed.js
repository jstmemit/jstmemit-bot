import {ActionRowBuilder, ButtonBuilder, ButtonStyle, ContainerBuilder, TextDisplayBuilder} from "discord.js";

export const constructEnableEmbed = (isEnabled, channelId) => {

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${isEnabled ? "🟢 Bot is active in this channel" : "🔴 Bot is not active in this channel!"}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent("If you want to change this, click the button below. There are also more fine-tuned options available in the settings menu."),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`-# Channel ID: ${channelId}`),
            ),
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setLabel(`${isEnabled ? "Disable" : "Enable"}`)
                    .setCustomId(`${isEnabled ? "disable" : "enable"}-${channelId}-false`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`Settings`)
                    .setCustomId(`settings-open`),
            ),
    ];

}