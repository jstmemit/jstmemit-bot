import {parseSurveyId} from "#src/analytics/surveys/parseSurveyId.js";
import {submitSurveyResponse} from "#src/analytics/surveys/submitSurveyResponse.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {getFullSurveyId} from "#src/analytics/surveys/getFullSurveyId.js";
import {surveyGetFullQuestionId} from "#src/analytics/surveys/surveyGetFullQuestionId.js";
import {proceedToNextSurveyQuestion} from "#src/analytics/surveys/proceedToNextSurveyQuestion.js";

export const handleSurveyTextResponse = async interaction => {
    const originalCustomId = interaction.customId.replace("survey-text-", "");
    const parsed = parseSurveyId(originalCustomId);
    const fullUserId = interaction.user.id;

    try {
        const fullSurveyId = await getFullSurveyId(parsed.surveyId);
        const fullQuestionId = await surveyGetFullQuestionId(parsed.questionId, fullSurveyId);

        const response = interaction.fields.getTextInputValue("response");

        await submitSurveyResponse(
            fullSurveyId,
            fullQuestionId,
            response || "",
            fullUserId
        );

        await proceedToNextSurveyQuestion(interaction, parsed, fullSurveyId);

    } catch (error) {
        analytics.captureException(error);
    }
};