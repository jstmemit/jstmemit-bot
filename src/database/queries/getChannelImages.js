import {pool} from '../initializePool.js';
import {getChannelSettings} from "./getChannelSettings.js";
import {settings} from "../../../config/settings.js";
import {validateImage} from "../utils.js";
import {log} from "../../../bot.js";

const imageCache = new Map();
let CACHE_TTL = 1000 * 60 * 60;

export const getChannelImages = async (channelId) => {
    if (settings) {
        CACHE_TTL = settings.cache && settings.cache.channelImagesCache
            ? settings.cache.channelImagesCache
            : CACHE_TTL;
    }


    const cached = imageCache.get(channelId);
    if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
        return cached.data;
    }

    const channelSettings = await getChannelSettings(channelId);
    if (channelSettings && !channelSettings.isEnabled) {
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
                 OR message LIKE 'https://tenor.com/view/%'
             )
         ORDER BY RAND()
         LIMIT 15`,
        [channelId]
    ).then(async ([rows]) => {
        if (rows.length === 0) {
            return null;
        }

        const validImages = [];
        for (const row of rows) {
            const validation = await validateImage(row.message);
            if (validation.isValid) {
                validImages.push(validation.url ?? row.message);
            } else {
                log.warn(`Invalid image URL: ${row.message} – ${validation.reason}`);
            }
        }

        return validImages.length > 0 ? validImages : null;
    }).catch(error => {
        log.error('Error fetching channel images:', error);
        throw error;
    });

    imageCache.set(channelId, {
        data: result,
        timestamp: Date.now()
    });

    return result;
};