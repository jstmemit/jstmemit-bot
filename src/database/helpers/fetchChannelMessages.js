import {db} from "#database/initializePool.js";
import {messages} from "#database/schema/schema.js";
import {desc, eq} from "drizzle-orm";
import {log} from "../../../bot.js";

export const fetchChannelMessages = async (channelId) => {
    try {
        const rows = await db
            .select()
            .from(messages)
            .where(eq(messages.channelId, channelId))
            .orderBy(desc(messages.timestamp))
            .limit(5000);

        if (rows.length === 0) {
            return null;
        }

        return rows.map(row => row.message);
    } catch (error) {
        log.error(`Error fetching messages for channel ${channelId}:`, error);
        return null;
    }
};