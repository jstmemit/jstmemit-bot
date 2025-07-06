import {getChannelSettings} from "../queries/getChannelSettings.js";
import {pool} from "../initializePool.js";
import {fetchChannelMessages} from "./fetchChannelMessages.js";

export const processChannelMessages = async (channelId, visitedChannels, allMessages) => {
    if (visitedChannels.has(channelId)) {
        return;
    }

    visitedChannels.add(channelId);

    try {
        const channelSettings = await getChannelSettings(channelId);

        if (!channelSettings || !channelSettings.is_enabled) {
            return;
        }

        const messages = await fetchChannelMessages(channelId);
        if (messages) {
            allMessages.push(...messages);
        }

        if (channelSettings.linked_channel) {
            await processChannelMessages(
                channelSettings.linked_channel,
                visitedChannels,
                allMessages
            );
        }

        const [linkingChannels] = await pool.query(
            'SELECT channel_id FROM channels WHERE linked_channel = ? AND is_enabled = 1',
            [channelId]
        );

        for (const row of linkingChannels) {
            await processChannelMessages(
                row.channel_id,
                visitedChannels,
                allMessages
            );
        }

    } catch (error) {
        console.error(`Error processing channel ${channelId}:`, error);
    }
};