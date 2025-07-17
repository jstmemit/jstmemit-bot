import {db} from '../initializePool.js';
import {channels, messages} from '#database/schema/schema.js';
import {eq} from 'drizzle-orm';

export const insertMessage = async (channelId, message) => {
    if (!channelId || !message) {
        console.log('Error in insertMessage', channelId);
    }

    const channel = await db
        .select()
        .from(channels)
        .where(eq(channels.channelId, channelId?.toString()))
        .limit(1);

    if (!channel[0] || !channel[0].isEnabled) {
        return;
    }

    try {
        await db.insert(messages).values({
            channelId: channelId.toString(),
            message,
        });
    } catch (error) {
        console.error('Database error:', error);
    }
};