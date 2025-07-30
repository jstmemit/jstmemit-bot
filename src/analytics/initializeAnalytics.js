import {GatewayIntentBits} from "discord.js";
import {PostHog} from "posthog-node";

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

export {analytics};