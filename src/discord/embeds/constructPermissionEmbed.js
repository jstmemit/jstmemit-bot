// noinspection JSCheckFunctionSignatures

import {
    ButtonStyle,
    ContainerBuilder,
    SectionBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder,
    ThumbnailBuilder
} from 'discord.js';
import {t} from "../i18n/utils.js";

export const constructPermissionEmbed = (currentSettings, channelId, permission) => {

    const language = currentSettings?.language || "english";

    return [
        new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL("https://jstmemit.com/assets/logo.png")
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`## 🙌  ${t("noPermissionsTitle", language)} `),
                        new TextDisplayBuilder().setContent(`${t("noPermissionsDescription", language, {permission})}`),
                    ),
            )
    ];
};