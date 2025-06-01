import {pool} from '../initializePool.js';
import {getChannelSettings} from "./getChannelSettings.js";

export const getChannelImages = async (channelId) => {

    const channelSettings = await getChannelSettings(channelId);

    if (channelSettings && !channelSettings.is_enabled) {
        return Promise.resolve(null);
    }

    return pool.query(
        'SELECT * FROM messages WHERE channel_id = ? AND message LIKE ? AND timestamp >= (NOW() - INTERVAL 20 HOUR)',
        [channelId, 'https://cdn.discordapp.com/attachments/%'],
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
        console.error('Error fetching channel images:', error);
        throw error;
    });
};