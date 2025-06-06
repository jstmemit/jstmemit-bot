// noinspection JSCheckFunctionSignatures

import {
    ButtonStyle,
    ContainerBuilder,
    SectionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder,
    ThumbnailBuilder
} from 'discord.js';
import {t} from "../i18n/utils.js";

export const constructSettingsEmbed = (currentSettings, channelId, amount) => {

    const language = currentSettings?.language || "english";

    return [
        new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL("https://cdn.discordapp.com/attachments/1375839391448170517/1378490221410127984/logopng.png?ex=6842b94f&is=684167cf&hm=3d980f8742bc1b227aa9eceee0565418118ba7c970496b3efc7968e7026fe0e5")
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent("## 🔴  Not enough context "),
                        new TextDisplayBuilder().setContent(`Bot failed to generate text for the meme. This could be because there is not enough training data. Try again after sending about **${30 - amount}** more messages.`),
                    ),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`-# ${(t("settingsFooterChannelId", language))} ${channelId}`),
            ),
    ];
};