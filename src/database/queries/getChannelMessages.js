import {getChannelSettings} from "./getChannelSettings.js";
import {processChannelMessages} from "../helpers/processChannelMessages.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {log} from "../../../bot.js";

export const getChannelMessages = async (channelId) => {
    let timer = performance.now();
    const channelSettings = await getChannelSettings(channelId);

    if (channelSettings && !channelSettings.isEnabled) {
        return Promise.resolve(null);
    }

    try {
        const visitedChannels = new Set();
        const allMessages = [];

        await processChannelMessages(channelId, visitedChannels, allMessages);

        timer = performance.now() - timer;
        await analytics.capture({
            distinctId: channelId,
            event: 'database_metrics',
            properties: {
                action: 'getChannelMessages',
                duration: timer,
            },
        });

        return allMessages.length > 0 ? allMessages : null;

    } catch (error) {
        log.error('Error fetching channel messages:', error);
        throw error;
    }
};