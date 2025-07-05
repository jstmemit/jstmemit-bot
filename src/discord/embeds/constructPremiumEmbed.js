// noinspection JSCheckFunctionSignatures

import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelSelectMenuBuilder,
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
    let watermarkEnabled = false, anyChannelLinked = false;

    if (currentSettings.watermarkLogo === true && currentSettings.watermarkText) {
        watermarkEnabled = true;
    }

    if (currentSettings.linkedChannels && currentSettings.linkedChannels.length > 0) {
        anyChannelLinked = true;
    }

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
                                .setDisabled(true)
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
                            currentSettings.replace_mentions
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
                                .setStyle(anyChannelLinked ? ButtonStyle.Danger : ButtonStyle.Secondary)
                                .setLabel(`${anyChannelLinked ? (t("btnUnlink", language)) : (t("btnLinkBelow", language))}`)
                                .setCustomId(`${anyChannelLinked ? "unlink" : "link"}-${channelId}`)
                                .setDisabled(anyChannelLinked ? false : true)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Secondary)
                                .setLabel(`${t("btnLink", language)}`)
                                .setCustomId('no_action_2')
                                .setDisabled(true)
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            anyChannelLinked
                                ? t("premiumLinkChannelsTogetherActive", language)
                                : t("premiumLinkChannelsTogetherInactive", language)
                        ),
                    ),
            )
            .addActionRowComponents(
                hasPremium
                    ? new ActionRowBuilder()
                        .addComponents(
                            new ChannelSelectMenuBuilder()
                                .setCustomId(`linkchannel-${channelId}`)
                                .setPlaceholder(t("premiumSelectChannelPlaceholder", language))
                                .setChannelTypes([0, 5])
                                .setDisabled(!hasPremium || anyChannelLinked)
                        )
                    : []
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
                                .setStyle(currentSettings.watermarkLogo ? ButtonStyle.Danger : ButtonStyle.Success)
                                .setLabel(`${currentSettings.watermarkLogo ? (t("btnRemoveWatermark", language)) : (t("btnSetWatermark", language))}`)
                                .setCustomId(`${currentSettings.watermarkLogo ? "watermarkdisable" : "watermarkenable"}-${channelId}`)
                            :
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Secondary)
                                .setLabel(`${t("btnSetWatermark", language)}`)
                                .setCustomId('no_action_3')
                                .setDisabled(true)
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            currentSettings.watermarkLogo
                                ? t("premiumSetOwnWatermarkActive", language)
                                : t("premiumSetOwnWatermarkInactive", language)
                        ),
                    ),
            )
    ]
};