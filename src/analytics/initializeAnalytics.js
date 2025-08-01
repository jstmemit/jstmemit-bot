import {GatewayIntentBits} from "discord.js";
import {PostHog} from "posthog-node";
import dotenv from "dotenv";
import {settings} from "#config/settings.js";

let analytics = null;
try {
    analytics = new PostHog(
        process.env.POSTHOG_KEY,
        {
            host: 'https://eu.i.posthog.com',
            enableExceptionAutocapture: true
        }
    );
} catch (error) {
    console.error('Failed to initialize PostHog:', error.message);
}

export const posthogProjectId = dotenv.config().parsed.POSTHOG_PROJECT_ID;
export const posthogWriteKey = dotenv.config().parsed.POSTHOG_WRITE_KEY;
export const posthogBaseUrl = settings?.analytics?.posthogBaseUrl || 'https://eu.i.posthog.com';

export {analytics};