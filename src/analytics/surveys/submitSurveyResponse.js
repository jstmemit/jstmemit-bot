import {analytics} from "#src/analytics/initializeAnalytics.js";

export const submitSurveyResponse = async (surveyId, questionId, answer, userId) => {

    try {
        let formattedAnswer = answer;
        if (typeof answer === 'number') {
            formattedAnswer = answer.toString()
        }

        const properties = {
            $survey_id: surveyId,
            [`$survey_response_${questionId}`]: formattedAnswer
        };

        analytics.capture({
            distinctId: userId,
            event: "survey sent",
            properties: properties
        });

        return {success: true};
    } catch (error) {
        analytics.captureException(error);
        return {success: false, error: error.message};
    }
};

export const submitSurveyResponses = async (surveyId, responses, userId) => {

    try {
        const properties = {
            $survey_id: surveyId
        };

        Object.entries(responses).forEach(([questionId, answer]) => {
            let formattedAnswer = answer;
            if (typeof answer === 'number') {
                formattedAnswer = answer.toString()
            }
            properties[`$survey_response_${questionId}`] = formattedAnswer;
        });

        analytics.capture({
            distinctId: userId,
            event: "survey sent",
            properties: properties
        });

        return {success: true};
    } catch (error) {
        analytics.captureException(error);
        return {success: false, error: error.message};
    }
};