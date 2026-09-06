import { type IMessagesRepository } from "../interfaces/IMessagesRepository.ts";
import { messagesTable } from "../schema.ts";
import { and, count, eq, gte, lte, sql, lt, desc } from "drizzle-orm";
import { db } from "../index.ts";
import { analytics } from "@jstmemit/analytics";
import type { BatchItem } from "drizzle-orm/batch";

export class MessagesRepository implements IMessagesRepository {
    public async new(messages: readonly (typeof messagesTable.$inferInsert)[]): Promise<number> {
        messages = messages?.filter((message): boolean => message?.content?.length >= 1);

        if (messages.length === 0) {
            return 0;
        }

        try {
            const statements: BatchItem<"sqlite">[] = messages.map((message) =>
                db
                    .insert(messagesTable)
                    .values(message)
                    .onConflictDoNothing({ target: messagesTable.messageId })
                    .returning({ id: messagesTable.id }),
            );

            const results = await db.batch(statements as [BatchItem<"sqlite">, ...BatchItem<"sqlite">[]]);

            return results.reduce((total: number, rows): number => total + (rows as { id: number }[]).length, 0);
        } catch (error) {
            analytics.captureException(error);

            return 0;
        }
    }

    public async getMessagesAmountByChannelId(channelId: string): Promise<number> {
        try {
            const messages = await db
                .select({ amount: count(messagesTable.content) })
                .from(messagesTable)
                .where(eq(messagesTable.channelId, channelId));

            return messages[0]?.amount || 0;
        } catch (error) {
            analytics.captureException(error);

            return 0;
        }
    }

    public async getMessagesContentByChannelId(
        channelId: string,
        limit: number = 100,
        minLength?: number,
        maxLength?: number,
    ): Promise<string[]> {
        try {
            const recent = db
                .select({ content: messagesTable.content })
                .from(messagesTable)
                .where(
                    and(
                        eq(messagesTable.channelId, channelId),
                        minLength !== undefined ? gte(sql`length(${messagesTable.content})`, minLength) : undefined,
                        maxLength !== undefined ? lte(sql`length(${messagesTable.content})`, maxLength) : undefined,
                    ),
                )
                .orderBy(desc(messagesTable.timestamp))
                .limit(500)
                .as("recent");

            const messages = await db
                .select({ content: recent.content })
                .from(recent)
                .orderBy(sql`random()`)
                .limit(limit);

            return messages.map((message): string => message.content);
        } catch (error) {
            analytics.captureException(error);

            return [];
        }
    }

    public async deleteAllByChannelId(channelId: string): Promise<boolean> {
        try {
            await db.delete(messagesTable).where(eq(messagesTable.channelId, channelId));

            return true;
        } catch (error) {
            analytics.captureException(error);

            return false;
        }
    }

    public async deleteAllOlderThan(days: number = 30): Promise<boolean> {
        try {
            const expiration = new Date();
            expiration.setDate(expiration.getDate() - days);

            await db.delete(messagesTable).where(lt(messagesTable.timestamp, expiration));

            return true;
        } catch (error) {
            analytics.captureException(error);

            return false;
        }
    }
}
