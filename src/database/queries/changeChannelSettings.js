import {pool} from "../initializePool.js";

export const changeChannelSettings = async (channelSettings) => {
    const conn = await pool.getConnection();
    const {
        channel_id,
        is_enabled,
        frequency,
        enabled_random_memes,
        delete_messages_after,
        use_user_images,
        language,
        replace_mentions
    } = channelSettings;

    await conn.beginTransaction();

    try {
        const [existing] = await conn.query(
            'SELECT internal_id FROM channels WHERE channel_id = ?',
            [channel_id]
        );

        if (existing.length > 0) {
            await conn.query(
                `UPDATE channels
                 SET is_enabled            = ?,
                     frequency             = ?,
                     enabled_random_memes  = ?,
                     delete_messages_after = ?,
                     use_user_images = ?,
                     language         = ?,
                     replace_mentions = ?
                 WHERE channel_id = ?`,
                [is_enabled, frequency, enabled_random_memes, delete_messages_after, use_user_images, language, replace_mentions, channel_id]
            );
        } else {
            await conn.query(
                `INSERT INTO channels (channel_id, is_enabled, frequency, enabled_random_memes, delete_messages_after,
                                       use_user_images, language)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [channel_id, is_enabled, frequency, enabled_random_memes, delete_messages_after, use_user_images, language]
            );
        }

        await conn.commit();
    } catch (error) {
        await conn.rollback();
        console.error('Database error:', error);
        throw error;
    } finally {
        conn.release();
    }
}