import {db} from "#database/initializePool.js";
import {channels} from "#database/schema/schema.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const changeChannelSettings = async (channelSettings) => {

    let timer = performance.now();

    const {
        channelId,
        isEnabled,
        frequency,
        enabledRandomMemes,
        deleteMessagesAfter,
        useUserImages,
        language,
        replaceMentions,
        watermarkLogo,
        linkedChannel
    } = channelSettings;

    try {
        await db.transaction(async (tx) => {
            await tx
                .insert(channels)
                .values({
                    channelId,
                    isEnabled,
                    frequency,
                    enabledRandomMemes,
                    deleteMessagesAfter,
                    useUserImages,
                    language,
                    replaceMentions,
                    watermarkLogo,
                    linkedChannel
                })
                .onDuplicateKeyUpdate({
                    set: {
                        isEnabled,
                        frequency,
                        enabledRandomMemes,
                        deleteMessagesAfter,
                        useUserImages,
                        language,
                        replaceMentions,
                        watermarkLogo,
                        linkedChannel
                    }
                });
        });

        timer = performance.now() - timer;
        await analytics.capture({
            distinctId: channelId,
            event: 'database_metrics',
            properties: {
                action: 'changeChannelSettings',
                duration: timer,
            },
        });
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};