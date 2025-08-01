import {parseSurveyId} from "#src/analytics/surveys/parseSurveyId.js";
import {submitSurveyResponse} from "#src/analytics/surveys/submitSurveyResponse.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {getFullSurveyId} from "#src/analytics/surveys/getFullSurveyId.js";
import {surveyGetFullQuestionId} from "#src/analytics/surveys/surveyGetFullQuestionId.js";
import {proceedToNextSurveyQuestion} from "#src/analytics/surveys/proceedToNextSurveyQuestion.js";

export const handleSurveySelectInteraction = async interaction => {
    const parsed = parseSurveyId(interaction.customId);
    const fullUserId = interaction.user.id;

    if (parsed.userId !== BigInt(fullUserId).toString(36)) {
        return;
    }

    try {
        const fullSurveyId = await getFullSurveyId(parsed.surveyId);
        const fullQuestionId = await surveyGetFullQuestionId(parsed.questionId, fullSurveyId);

        const values = interaction.values;
        let answer;

        if (parsed.type === "rs") {
            answer = parseInt(values[0]);
        } else if (parsed.type === "mc") {
            answer = values;
        } else if (parsed.type === "sc") {
            answer = values[0];
        }

        await submitSurveyResponse(
            fullSurveyId,
            fullQuestionId,
            answer,
            fullUserId
        );

        await proceedToNextSurveyQuestion(interaction, parsed, fullSurveyId);

    } catch (error) {
        analytics.captureException(error);
    }
};