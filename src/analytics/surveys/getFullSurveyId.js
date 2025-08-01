import {getSurveysData} from "#src/analytics/surveys/getSurveysData.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const getFullSurveyId = async shortSurveyId => {
    try {
        const surveysData = await getSurveysData();
        const surveyData = surveysData.results.find(s =>
            s.id.replace(/-/g, '').startsWith(shortSurveyId)
        );

        return surveyData ? surveyData.id : shortSurveyId;
    } catch (error) {
        analytics.captureException(error);
        return shortSurveyId;
    }
};