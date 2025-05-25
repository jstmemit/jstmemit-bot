import {pool} from '../initializePool.js';

export const insertMessage = async (channelId, message) => {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        await conn.query(
            `INSERT INTO channels (channel_id, is_enabled)
             VALUES (?, 1)
             ON DUPLICATE KEY UPDATE channel_id = channel_id`,
            [channelId]
        );

        await conn.query(
            `INSERT INTO messages (channel_id, message)
             VALUES (?, ?)`,
            [channelId, message]
        );

        await conn.commit();
    } catch (error) {
        await conn.rollback();
        console.error('Database error:', error);
        throw error;
    } finally {
        conn.release();
    }
}