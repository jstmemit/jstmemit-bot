import {pool} from '../initializePool.js';

export const getChannelSettings = (channelId) => {
    return pool.query(
        'SELECT * FROM channels WHERE channel_id = ?',
        [channelId],
    ).then(([rows]) => {
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    }).catch(error => {
        console.error('Error fetching channel settings:', error);
        throw error;
    });
};