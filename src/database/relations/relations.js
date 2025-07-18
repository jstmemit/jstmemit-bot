import {relations} from "drizzle-orm/relations";
import {channels, messages} from "#src/database/schema/schema";

export const messagesRelations = relations(messages, ({one}) => ({
    channel: one(channels, {
        fields: [messages.channelId],
        references: [channels.channelId]
    }),
}));

export const channelsRelations = relations(channels, ({many}) => ({
    messages: many(messages),
}));