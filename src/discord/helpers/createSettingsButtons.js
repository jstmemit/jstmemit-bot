import {t} from "#src/discord/i18n/utils.js";
import {ActionRowBuilder, ButtonBuilder, ButtonStyle} from "discord.js";
import {settings} from "#config/settings.js";

export const createSettingsButtonRow = (activeTab, language) => {
    const buttons = [
        {
            id: "general",
            customId: "settings-tab-general",
            label: t("settingsButtonGeneralSettings", language),
            emoji: settings?.emojis?.settings?.general?.id,
        },
        {
            id: "meme",
            customId: "settings-tab-meme",
            label: t("settingsButtonMemeSettings", language),
            emoji: settings?.emojis?.settings?.meme?.id,
        },
        {
            id: "data",
            customId: "settings-tab-data",
            label: t("settingsButtonDataRetentionSettings", language),
            emoji: settings?.emojis?.settings?.data?.id,
        },
        {
            id: "premium",
            customId: "settings-tab-premium",
            label: t("settingsButtonPremiumSettings", language),
            emoji: settings?.emojis?.settings?.premium?.id,
        }
    ];

    const buttonComponents = buttons.map(button => {
        const buttonBuilder = new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel(button.label)
            .setCustomId(button.customId)
            .setEmoji(button.emoji);

        if (button.id === activeTab) {
            buttonBuilder.setDisabled(true);
        }

        return buttonBuilder;
    });

    return new ActionRowBuilder().addComponents(...buttonComponents);
};