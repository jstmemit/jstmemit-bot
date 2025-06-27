import {pool} from '../initializePool.js';
import {getChannelSettings} from "./getChannelSettings.js";
import {settings} from "../../config/settings.js";
import {validateImage} from "../utils.js";

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
        `SELECT DISTINCT message
         FROM messages
         WHERE channel_id = ?
           AND (
             (message LIKE 'https://cdn.discordapp.com/attachments/%'
                 AND timestamp >= DATE_SUB(NOW(), INTERVAL 20 HOUR))
                 OR message LIKE 'https://cdn.discordapp.com/avatars/%'
             )
         ORDER BY RAND()
         LIMIT 5`,
        [channelId]
    ).then(async ([rows]) => {
        if (rows.length === 0) {
            return null;
        }

        // Validate each image URL
        const validImages = [];
        for (const row of rows) {
            const validation = await validateImage(row.message);
            if (validation.isValid) {
                validImages.push(row.message);
            } else {
                console.warn(`Invalid image URL: ${row.message} - ${validation.reason}`);
            }
        }

        return validImages.length > 0 ? validImages : null;
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