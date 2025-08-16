import {db} from "#database/initializePool.js";
import {channels} from "#database/schema/schema.js";
import {eq} from "drizzle-orm";
import {insertMessage} from "#database/queries/insertMessage.js";
import {log} from "../../../bot.js";

export const getChannelSettings = async (channelId) => {
    try {
        const result = await db
            .select()
            .from(channels)
            .where(eq(channels.channelId, channelId));

        if (channelId) {
            if (!result || result.length === 0) {
                await db.insert(channels).values({
                    channelId: channelId,
                    isEnabled: false,
                    useUserImages: 1,
                    deleteMessagesAfter: 14,
                    language: 'english'
                });
                await insertMessage(channelId, '');
            }
        }

        return result[0] || null;
    } catch (error) {
        log.error(`Error fetching settings for channel ${channelId}:`, error);
        return null;
    }
};