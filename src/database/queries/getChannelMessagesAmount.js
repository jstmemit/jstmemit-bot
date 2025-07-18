import {db} from "../initializePool.js";
import {messages} from "#database/schema/schema.js";
import {count, eq} from "drizzle-orm";
import {getChannelSettings} from "./getChannelSettings.js";

export const getChannelMessagesAmount = async (channelId) => {
    const channelSettings = await getChannelSettings(channelId);

    if (channelSettings && !channelSettings.is_enabled) {
        return null;
    }

    try {
        const result = await db
            .select({count: count(messages.id)})
            .from(messages)
            .where(eq(messages.channelId, channelId.toString()));

        return result[0]?.count ?? 0;
    } catch (error) {
        console.error("Error fetching channel messages amount:", error);
        throw error;
    }
};