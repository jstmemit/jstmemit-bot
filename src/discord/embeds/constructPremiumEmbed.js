// noinspection JSCheckFunctionSignatures

import {
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    SectionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder,
    ThumbnailBuilder
} from 'discord.js';
import {t} from "../i18n/utils.js";

export const constructPremiumEmbed = (currentSettings, channelId, hasPremium) => {

    const language = currentSettings?.language || "english";

    currentSettings.replace_mentions == true

    return [
        new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL("https://jstmemit.com/assets/logo.png")
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ✨ ${(t("premiumTitle", language))}`),
                        new TextDisplayBuilder().setContent(t("premiumDescription", language)),
                    ),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        hasPremium
                            ?
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Success)
                                .setLabel(`${t("btnPremiumActive", language)}`)
                                .setCustomId(`manage-premium`)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Premium)
                                .setSKUId('1388188866057474048')
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            hasPremium
                                ? t("premiumStatusActive", language)
                                : t("premiumStatusInactive", language)
                        ),
                    ),
            ),

        // more customization
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`## 💡 ${(t("premiumCustomizationTitle", language))}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("premiumCustomizationDescription", language)),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${(t("premiumTurnOffMentionsTitle", language))}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("premiumTurnOffMentionsDescription", language)),
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        hasPremium
                            ?
                            new ButtonBuilder()
                                .setStyle(currentSettings.replace_mentions ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.replace_mentions ? (t("btnTurnOff", language)) : (t("btnTurnOn", language))}`)
                                .setCustomId(`${currentSettings.replace_mentions ? "mentiondisable" : "mentionenable"}-${channelId}`)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Secondary)
                                .setLabel(`${t("btnTurnOn", language)}`)
                                .setCustomId('no_action_1')
                                .setDisabled(true)
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            hasPremium
                                ? t("premiumTurnOffMentionsActive", language)
                                : t("premiumTurnOffMentionsInactive", language)
                        ),
                    ),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${(t("premiumLinkChannelsTogetherTitle", language))}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("premiumLinkChannelsTogetherDescription", language))
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        hasPremium
                            ?
                            new ButtonBuilder()
                                .setStyle(currentSettings.replace_mentions ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.replace_mentions ? (t("btnTurnOff", language)) : (t("btnTurnOn", language))}`)
                                .setCustomId(`${currentSettings.replace_mentions ? "disable" : "enable"}-${channelId}`)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Secondary)
                                .setLabel(`${t("btnLink", language)}`)
                                .setCustomId('no_action_2')
                                .setDisabled(true)
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            hasPremium
                                ? t("premiumLinkChannelsTogetherActive", language)
                                : t("premiumLinkChannelsTogetherInactive", language)
                        ),
                    ),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${(t("premiumSetOwnWatermarkTitle", language))}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("premiumSetOwnWatermarkDescription", language))
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        hasPremium
                            ?
                            new ButtonBuilder()
                                .setStyle(currentSettings.replace_mentions ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.replace_mentions ? (t("btnTurnOff", language)) : (t("btnTurnOn", language))}`)
                                .setCustomId(`${currentSettings.replace_mentions ? "disable" : "enable"}-${channelId}`)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Secondary)
                                .setLabel(`${t("btnSetWatermark", language)}`)
                                .setCustomId('no_action_3')
                                .setDisabled(true)
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            hasPremium
                                ? t("premiumSetOwnWatermarkActive", language)
                                : t("premiumSetOwnWatermarkInactive", language)
                        ),
                    ),
            )
    ]
};