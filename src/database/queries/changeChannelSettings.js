import {db} from "#database/initializePool.js";
import {channels} from "#database/schema/schema.js";

export const changeChannelSettings = async (channelSettings) => {
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
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};