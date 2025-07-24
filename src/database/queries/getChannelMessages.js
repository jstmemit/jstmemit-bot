import {getChannelSettings} from "./getChannelSettings.js";
import {processChannelMessages} from "../helpers/processChannelMessages.js";

export const getChannelMessages = async (channelId) => {
    const channelSettings = await getChannelSettings(channelId);

    if (channelSettings && !channelSettings.isEnabled) {
        return Promise.resolve(null);
    }

    try {
        const visitedChannels = new Set();
        const allMessages = [];

        await processChannelMessages(channelId, visitedChannels, allMessages);

        return allMessages.length > 0 ? allMessages : null;

    } catch (error) {
        console.error('Error fetching channel messages:', error);
        throw error;
    }
};