// noinspection JSCheckFunctionSignatures

import {
    ActionRowBuilder,
    ButtonStyle,
    ContainerBuilder,
    SelectMenuOptionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    StringSelectMenuBuilder,
    TextDisplayBuilder
} from 'discord.js';
import {t} from "../../i18n/utils.js";
import {settings} from "#config/settings.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const constructBetaSettingsEmbed = async (currentSettings, channelId, buttons) => {

    const language = currentSettings?.language || "english";

    let engine = await analytics.getFeatureFlag('v2-alpha-meme-engine', channelId);

    const engineOptions = [
        {
            label: t("settingsBetaEngineV1Title", language),
            value: "v1",
            emoji: {name: "🔗"},
            description: t("settingsBetaEngineV1Description", language),
        },
        {
            label: t("settingsBetaEngineV2Title", language),
            value: "v2-alpha",
            emoji: {name: "💡"},
            description: t("settingsBetaEngineV2Description", language),
        },
    ]

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${settings?.emojis?.settings?.beta?.name}  ${(t("settingsBetaTitle", language))}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("settingsBetaDescription", language)),
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settingsBetaEngineTitle", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("settingsBetaEngineDescription", language))
            )
            .addActionRowComponents(
                new ActionRowBuilder().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("select-betaengine")
                        .addOptions(
                            engineOptions.map((option) => {
                                const builder = new SelectMenuOptionBuilder()
                                    .setLabel(option.label)
                                    .setValue(option.value)
                                    .setDefault(
                                        (engine === "v2-alpha" && option.value === "v2-alpha") ||
                                        (engine !== "v2-alpha" && option.value === "v1")
                                    )
                                    .setEmoji(option.emoji);

                                if (option.description) {
                                    builder.setDescription(option.description);
                                }

                                return builder;
                            })
                        )
                ),
            ),
        buttons
    ]
};