import {db} from "#database/initializePool.js";
import {messages} from "#database/schema/schema.js";
import {desc, eq} from "drizzle-orm";

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
        console.error(`Error fetching messages for channel ${channelId}:`, error);
        return null;
    }
};