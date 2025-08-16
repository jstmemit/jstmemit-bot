import {pool} from '../initializePool.js';
import {getChannelSettings} from "./getChannelSettings.js";
import {log} from "../../../bot.js";

export const eraseChannelMessages = async (channelId, type) => {

    const channelSettings = await getChannelSettings(channelId);

    if (!channelSettings) {
        return Promise.resolve(true);
    }

    const channelThreshold = channelSettings.delete_messages_after;

    switch (type) {
        case 'all':
            return pool.query(
                'DELETE FROM messages WHERE channel_id = ?',
                [channelId],
            ).then(() => {
                return Promise.resolve(true);
            }).catch(error => {
                log.error('Error deleting all channel messages:', error);
                return Promise.resolve(false);
            });
        case 'threshold':
            return pool.query(
                'DELETE FROM messages WHERE channel_id = ? AND timestamp < (NOW() - INTERVAL ? DAY)',
                [channelId, channelThreshold],
            ).then(() => {
                return Promise.resolve(true);
            }).catch(error => {
                log.error('Error deleting channel messages by threshold:', error);
                return Promise.resolve(false);
            });
    }


};