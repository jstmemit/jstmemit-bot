import {getChannelSettings} from "./getChannelSettings.js";
import {pool} from "../initializePool.js";

export const getChannelMessagesAmount = async (channelId) => {
    const channelSettings = await getChannelSettings(channelId);

    if (channelSettings && !channelSettings.is_enabled) {
        return Promise.resolve(null);
    }

    return pool
        .query("SELECT COUNT(*) as count FROM messages WHERE channel_id = ?", [
            channelId,
        ])
        .then(([rows]) => {
            return rows[0].count;
        })
        .catch((error) => {
            console.error("Error fetching channel messages amount:", error);
            throw error;
        });
};