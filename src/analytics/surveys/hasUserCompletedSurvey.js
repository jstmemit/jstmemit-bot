import axios from "axios";
import {analytics, posthogBaseUrl, posthogProjectId, posthogWriteKey} from "#src/analytics/initializeAnalytics.js";

export const hasUserCompletedSurvey = async (userId, surveyId) => {
    try {
        const response = await axios.get(
            `${posthogBaseUrl}/api/projects/${posthogProjectId}/events/`,
            {
                headers: {
                    "Authorization": `Bearer ${posthogWriteKey}`,
                    "Content-Type": "application/json"
                },
                params: {
                    event: "survey sent",
                    distinct_id: userId,
                    properties: JSON.stringify([
                        {
                            key: "$survey_id",
                            value: surveyId,
                            operator: "exact"
                        }
                    ]),
                    limit: 1
                }
            }
        );

        const hasParticipated = response.data.results && response.data.results.length > 0;

        return !hasParticipated;

    } catch (error) {
        analytics.captureException(error);
        console.error(error);
        return false;
    }
};