import {parseSurveyId} from "#src/analytics/surveys/parseSurveyId.js";
import {submitSurveyResponse} from "#src/analytics/surveys/submitSurveyResponse.js";
import {ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} from "discord.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {proceedToNextSurveyQuestion} from "#src/analytics/surveys/proceedToNextSurveyQuestion.js";
import {getFullSurveyId} from "#src/analytics/surveys/getFullSurveyId.js";
import {surveyGetFullQuestionId} from "#src/analytics/surveys/surveyGetFullQuestionId.js";
import {t} from "#src/discord/i18n/utils.js";
import {getChannelSettings} from "#database/queries/getChannelSettings.js";

export const handleSurveyButtonInteraction = async interaction => {
    const parsed = parseSurveyId(interaction.customId);
    const fullUserId = interaction.user.id;

    const channelSettings = await getChannelSettings(interaction.channelId);
    const language = channelSettings.language || "english";

    if (parsed.userId !== BigInt(fullUserId).toString(36)) {
        return;
    }

    try {
        const fullSurveyId = await getFullSurveyId(parsed.surveyId);
        const fullQuestionId = await surveyGetFullQuestionId(parsed.questionId, fullSurveyId);

        if (parsed.type === "rt") {
            await submitSurveyResponse(
                fullSurveyId,
                fullQuestionId,
                parseInt(parsed.value),
                fullUserId
            );

            await proceedToNextSurveyQuestion(interaction, parsed, fullSurveyId);

        } else if (parsed.type === "op") {
            const modal = new ModalBuilder()
                .setCustomId(`survey-text-${interaction.customId}`)
                .setTitle(t("surveyTextResponseTitle", language));

            const textInput = new TextInputBuilder()
                .setCustomId("response")
                .setLabel(t("surveyTextResponseLabel", language))
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(false)
                .setMaxLength(1000);

            const actionRow = new ActionRowBuilder().addComponents(textInput);
            modal.addComponents(actionRow);

            await interaction.showModal(modal);

        } else if (parsed.type === "lk") {
            await submitSurveyResponse(
                fullSurveyId,
                fullQuestionId,
                "completed",
                fullUserId
            );

            await proceedToNextSurveyQuestion(interaction, parsed, fullSurveyId);
        }

    } catch (error) {
        analytics.captureException(error);
    }
};
