import {getChannelSettings} from "../queries/getChannelSettings.js";
import {db} from "#database/initializePool.js";
import {channels} from "#database/schema/schema.js";
import {and, eq} from "drizzle-orm";
import {fetchChannelMessages} from "./fetchChannelMessages.js";
import {log} from "../../../bot.js";

export const processChannelMessages = async (channelId, visitedChannels, allMessages) => {
    if (visitedChannels.has(channelId)) {
        return;
    }

    visitedChannels.add(channelId);

    try {
        const channelSettings = await getChannelSettings(channelId);

        if (!channelSettings || !channelSettings.isEnabled) {
            return;
        }

        const messages = await fetchChannelMessages(channelId);
        if (messages) {
            allMessages.push(...messages);
        }

        if (channelSettings.linked_channel) {
            await processChannelMessages(
                channelSettings.linked_channel,
                visitedChannels,
                allMessages
            );
        }

        const linkingChannels = await db
            .select()
            .from(channels)
            .where(
                and(
                    eq(channels.linkedChannel, channelId.toString()),
                    eq(channels.isEnabled, 1)
                )
            );

        for (const row of linkingChannels) {
            await processChannelMessages(
                row.channel_id,
                visitedChannels,
                allMessages
            );
        }

    } catch (error) {
        log.error(`Error processing channel ${channelId}:`, error);
    }
};