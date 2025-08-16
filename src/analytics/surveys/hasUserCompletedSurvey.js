import axios from "axios";
import {analytics, posthogBaseUrl, posthogProjectId, posthogWriteKey} from "#src/analytics/initializeAnalytics.js";

const cache = new Map();
const cacheTTL = 60 * 1000;

export const hasUserCompletedSurvey = async (userId, surveyId) => {
    const cacheKey = `${userId}:${surveyId}`;
    const cached = cache.get(cacheKey);

    if (cached && (Date.now() - cached.timestamp) < cacheTTL) {
        return cached.value;
    }

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
        const result = !hasParticipated;

        cache.set(cacheKey, {
            value: result,
            timestamp: Date.now()
        });

        return result;

    } catch (error) {
        analytics.captureException(error);
        console.error(error);
        return false;
    }
};