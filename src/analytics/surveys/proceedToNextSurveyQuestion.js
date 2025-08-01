import {getSurveysData} from "#src/analytics/surveys/getSurveysData.js";
import {constructSurveyEmbed} from "#src/discord/embeds/surveys/constructSurveyEmbed.js";
import {MessageFlags} from "discord.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {showSurveyCompletion} from "#src/analytics/surveys/showSurveyCompletion.js";

export const proceedToNextSurveyQuestion = async (interaction, parsed, fullSurveyId) => {
    try {
        const surveysData = await getSurveysData();
        const surveyData = surveysData.results.find(s => s.id === fullSurveyId);

        const currentQuestionIndex = surveyData.questions.findIndex(q =>
            q.id.replace(/-/g, '').startsWith(parsed.questionId)
        );

        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex >= surveyData.questions.length) {
            await showSurveyCompletion(interaction);
        } else {
            const embed = await constructSurveyEmbed(
                fullSurveyId,
                interaction.user.id,
                nextQuestionIndex,
                surveyData,
                interaction.channelId
            );

            await interaction.update({
                flags: MessageFlags.IsComponentsV2,
                components: embed
            });
        }

    } catch (error) {
        analytics.captureException(error);
    }
};