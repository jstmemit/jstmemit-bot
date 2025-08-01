import {getSurveysData} from "#src/analytics/surveys/getSurveysData.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const surveyGetFullQuestionId = async (shortQuestionId, surveyId) => {
    try {
        const surveysData = await getSurveysData();
        const surveyData = surveysData.results.find(s => s.id === surveyId);

        if (!surveyData) return shortQuestionId;

        const question = surveyData.questions.find(q =>
            q.id.replace(/-/g, '').startsWith(shortQuestionId)
        );

        return question ? question.id : shortQuestionId;
    } catch (error) {
        analytics.captureException(error, surveyId);
        return shortQuestionId;
    }
};