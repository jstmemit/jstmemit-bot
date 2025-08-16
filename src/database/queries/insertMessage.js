import {db} from '../initializePool.js';
import {channels, messages} from '#database/schema/schema.js';
import {eq} from 'drizzle-orm';
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {log} from "../../../bot.js";


export const insertMessage = async (channelId, message) => {
    if (!channelId || !message) {
        log.error('Failed to insert a message', channelId);
    }

    let timer = performance.now();

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
        log.error('Database error:', error);
    }

    timer = performance.now() - timer;
    await analytics.capture({
        distinctId: channelId,
        event: 'database_metrics',
        properties: {
            action: 'insertMessage',
            duration: timer,
        },
    });
};