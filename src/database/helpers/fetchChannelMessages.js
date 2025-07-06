import {pool} from "../initializePool.js";

export const fetchChannelMessages = async (channelId) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM messages WHERE channel_id = ?',
            [channelId]
        );

        if (rows.length === 0) {
            return null;
        }

        return rows.map(row => row.message);
    } catch (error) {
        console.error(`Error fetching messages for channel ${channelId}:`, error);
        return null;
    }
};