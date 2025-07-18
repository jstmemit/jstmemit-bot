import {db} from "#database/initializePool.js";
import {messages} from "#database/schema/schema.js";
import {eq} from "drizzle-orm";
import {insertMessage} from "./insertMessage.js";

export const getChannelSettings = async (channelId) => {
    try {
        const result = await db
            .select()
            .from(messages)
            .where(eq(messages.channelId, channelId));

        if (!result) {
            await insertMessage(channelId, '');
            return null;
        }

        return result[0] || null;
    } catch (error) {
        console.error(`Error fetching settings for channel ${channelId}:`, error);
        return null;
    }
};