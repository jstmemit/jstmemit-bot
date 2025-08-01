import {getChannelSettings} from "#database/queries/getChannelSettings.js";
import {ContainerBuilder, MessageFlags, TextDisplayBuilder} from "discord.js";
import {t} from "#src/discord/i18n/utils.js";

export const showSurveyCompletion = async interaction => {
    const channelSettings = await getChannelSettings(interaction.channelId);
    const language = channelSettings?.language || "english";

    const completionEmbed = new ContainerBuilder()
        .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(`# ✅ ${t("surveyCompleted", language)}`),
            new TextDisplayBuilder().setContent(t("surveyCompletedDescription", language)),
        );

    await interaction.update({
        flags: MessageFlags.IsComponentsV2,
        components: [completionEmbed]
    });
};