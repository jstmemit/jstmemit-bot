import axios from 'axios';
import {posthogBaseUrl, posthogProjectId, posthogWriteKey} from "#src/analytics/initializeAnalytics.js";

export const getSurveysData = () => {
    return axios.get(`${posthogBaseUrl}/api/projects/${posthogProjectId}/surveys/`, {
        headers: {
            'Authorization': `Bearer ${posthogWriteKey}`,
        },
    }).then(res => res.data);
}
