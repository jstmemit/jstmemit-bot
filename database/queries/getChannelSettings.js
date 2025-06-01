import {pool} from '../initializePool.js';
import {insertMessage} from "./insertMessage.js";

export const getChannelSettings = (channelId) => {
    return pool.query(
        'SELECT * FROM channels WHERE channel_id = ?',
        [channelId],
    ).then(async ([rows]) => {
        if (rows.length === 0) {
            await insertMessage(channelId, '');
            return null;
        }
        return rows[0];
    }).catch(error => {
        console.error('Error fetching channel settings:', error);
        throw error;
    });
};