import {pool} from '../initializePool.js';
import {getChannelSettings} from "./getChannelSettings.js";
import {settings} from "../../config/settings.js";

const imageCache = new Map();
const CACHE_TTL = settings.channelImagesCache;

export const getChannelImages = async (channelId) => {
    const cached = imageCache.get(channelId);
    if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
        return cached.data;
    }

    const channelSettings = await getChannelSettings(channelId);
    if (channelSettings && !channelSettings.is_enabled) {
        return null;
    }

    const result = await pool.query(
        `SELECT message
         FROM messages
         WHERE channel_id = ?
           AND timestamp >= DATE_SUB(NOW(), INTERVAL 20 HOUR)
           AND message LIKE 'https://cdn.discordapp.com/attachments/%'
         ORDER BY internal_id DESC
         LIMIT 5`,
        [channelId]
    ).then(([rows]) => {
        if (rows.length === 0) {
            return null;
        }
        return rows.map(row => row.message);
    }).catch(error => {
        console.error('Error fetching channel images:', error);
        throw error;
    });

    imageCache.set(channelId, {
        data: result,
        timestamp: Date.now()
    });

    return result;
};