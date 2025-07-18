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
import {createProgressBar} from "#src/discord/helpers/createProgressBar.js";

export const constructSettingsEmbed = (currentSettings, channelId, amount) => {

    const language = currentSettings?.language || "english";
    const progressBar = createProgressBar(amount, 30, 10);

    return [
        new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL("https://jstmemit.com/assets/logo.png")
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`## ${t("notEnoughContextTitle", language)} `),
                        new TextDisplayBuilder().setContent(`${t("notEnoughContextDescription", language, {amount})}`),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`${progressBar}`),
                    )
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`-# ${(t("settingsFooterChannelId", language))} ${channelId}`),
            ),
    ];
};