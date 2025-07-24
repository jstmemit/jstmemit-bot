import {
    index,
    int,
    mysqlEnum,
    mysqlTable,
    primaryKey,
    text,
    timestamp,
    tinyint,
    unique,
    varchar
} from "drizzle-orm/mysql-core"

export const channels = mysqlTable("channels", {
        internalId: int("internal_id").autoincrement().notNull(),
        channelId: varchar("channel_id", {length: 128}).notNull(),
        isEnabled: tinyint("is_enabled").default(0).notNull(),
        frequency: int().default(5).notNull(),
        enabledRandomMemes: varchar("enabled_random_memes", {length: 2000}).default('all').notNull(),
        deleteMessagesAfter: int("delete_messages_after").default(14).notNull(),
        useUserImages: tinyint("use_user_images").default(1).notNull(),
        language: mysqlEnum(['english', 'ukrainian', 'dutch', 'russian', 'polish']).notNull(),
        replaceMentions: tinyint("replace_mentions").default(0).notNull(),
        linkedChannel: varchar("linked_channel", {length: 128}),
        watermarkLogo: tinyint().default(0).notNull(),
        watermarkText: varchar({length: 16}),
    },
    (table) => [
        primaryKey({columns: [table.internalId], name: "channels_internal_id"}),
        unique("idx_channels_channel_id").on(table.channelId),
        unique("unique_channel_id").on(table.channelId),
    ]);

export const messages = mysqlTable("messages", {
        internalId: int("internal_id").autoincrement().notNull(),
        channelId: varchar("channel_id", {length: 128}).notNull().references(() => channels.channelId, {
            onDelete: "cascade",
            onUpdate: "cascade"
        }),
        message: text().notNull(),
        timestamp: timestamp({mode: 'string'}).defaultNow().onUpdateNow().notNull(),
    },
    (table) => [
        index("idx_messages_channel_id").on(table.channelId),
        index("idx_channel_timestamp").on(table.channelId, table.timestamp),
        primaryKey({columns: [table.internalId], name: "messages_internal_id"}),
    ]);
