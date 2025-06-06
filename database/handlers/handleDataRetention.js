import {eraseChannelMessages} from "../queries/eraseChannelMessages.js";
import {pool} from "../initializePool.js";

export const handleDataRetention = async () => {
    const batchSize = 10;
    const conn = await pool.getConnection();

    try {
        const [rows] = await conn.query(
            'SELECT channel_id, delete_messages_after FROM channels'
        );

        for (let i = 0; i < rows.length; i += batchSize) {
            const batch = rows.slice(i, i + batchSize);

            const promises = batch.map(async ({channel_id}) => {
                try {
                    return await eraseChannelMessages(channel_id, 'threshold');
                } catch (error) {
                    console.error(`Error processing channel ${channel_id}:`, error);
                    return false;
                }
            });

            await Promise.all(promises);
        }

        return true;
    } catch (error) {
        console.error('Error in handleDataRetention:', error);
        return false;
    } finally {
        conn.release();
    }
};