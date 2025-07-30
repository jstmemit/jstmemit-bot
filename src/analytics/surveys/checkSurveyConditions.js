import {getSurveysData} from "#src/analytics/surveys/getSurveysData.js";
import {settings} from "#config/settings.js";
import {getChannelMessagesAmount} from "#database/queries/getChannelMessagesAmount.js";
import {hasUserCompletedSurvey} from "#src/analytics/surveys/hasUserCompletedSurvey.js";

export const checkSurveyConditions = async (channelId, authorId) => {
    const surveysData = await getSurveysData();

    if (!settings?.activeSurveys || settings.activeSurveys.length === 0) {
        return [];
    }

    const surveyChecks = await Promise.all(
        settings.activeSurveys.map(async (survey) => {
            const surveyData = surveysData.results.find(data => data.id === survey.id);
            if (!surveyData) return null;

            const channelMessagesAmount = await getChannelMessagesAmount(channelId);
            if (channelMessagesAmount < survey.conditions.minMessages) return null;

            const canUserParticipate = await hasUserCompletedSurvey(authorId, survey.id);
            console.log(canUserParticipate)
            if (!canUserParticipate) return null;

            return survey;
        })
    );

    return surveyChecks.filter(survey => survey !== null);
};