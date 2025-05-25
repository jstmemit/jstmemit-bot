import {pool} from '../initializePool.js';
import {getChannelSettings} from "./getChannelSettings.js";

export const getChannelMessages = async (channelId) => {

    const channelSettings = await getChannelSettings(channelId);

    if (channelSettings && !channelSettings.is_enabled) {
        return Promise.resolve(null);
    }

    return pool.query(
        'SELECT * FROM messages WHERE channel_id = ?',
        [channelId],
    ).then(([rows]) => {
        if (rows.length === 0) {
            return null;
        }

        const result = []

        rows.forEach((row) => {
            result.push(row.message)
        })

        return result;
    }).catch(error => {
        console.error('Error fetching channel messages:', error);
        throw error;
    });
};