import {constructSurveyEmbed} from "#src/discord/embeds/surveys/constructSurveyEmbed.js";
import {hasUserCompletedSurvey} from "#src/analytics/surveys/hasUserCompletedSurvey.js";
import {getChannelMessagesAmount} from "#database/queries/getChannelMessagesAmount.js";
import {settings} from "#config/settings.js";
import {getSurveysData} from "#src/analytics/surveys/getSurveysData.js";

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

            return {
                settingsData: survey,
                posthogData: surveyData
            };
        })
    );

    const validSurveys = surveyChecks.filter(survey => survey !== null);

    if (validSurveys.length === 0) {
        return [];
    }

    const embed = await constructSurveyEmbed(
        validSurveys[0].settingsData.id,
        authorId,
        0,
        validSurveys[0].posthogData,
        channelId
    );

    return embed;
};