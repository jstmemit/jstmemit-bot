import dotenv from "dotenv";
import {settings} from "#config/settings.js";
import axios from 'axios';

const posthogProjectId = dotenv.config().parsed.POSTHOG_PROJECT_ID;
const posthogWriteKey = dotenv.config().parsed.POSTHOG_WRITE_KEY;
const posthogBaseUrl = settings?.analytics?.posthogBaseUrl || 'https://eu.i.posthog.com';

export const getSurveysData = () => {
    return axios.get(`${posthogBaseUrl}/api/projects/${posthogProjectId}/surveys/`, {
        headers: {
            'Authorization': `Bearer ${posthogWriteKey}`,
        },
    }).then(res => res.data);
}
