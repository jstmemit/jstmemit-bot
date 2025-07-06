import {calculateWeights, getAnalyticsData} from "../analytics/likesAndDislikes.js";
import {settings} from "../../config/settings.js";

let cachedWeights = null;
let lastFetch = null;
let CACHE_DURATION = 60 * 60 * 1000;
let baseConfig = [];
if (settings) {
    CACHE_DURATION = settings.cache && settings.cache.memeTemplatesAnalyticsCache
        ? settings.cache.memeTemplatesAnalyticsCache
        : CACHE_DURATION;

    baseConfig = settings.templates || [];
}

export const getConfig = async () => {
    const now = Date.now();

    if (!cachedWeights || !lastFetch || (now - lastFetch) > CACHE_DURATION) {

        try {
            const analyticsData = await getAnalyticsData(30);
            const calculatedWeights = calculateWeights(analyticsData);

            // just in case
            cachedWeights = baseConfig.map(template => {
                const analyticsKey = template.name.startsWith('generate')
                    ? template.name.slice(8)
                    : template.name;

                return {
                    ...template,
                    weight: calculatedWeights[analyticsKey] || 0.3,
                };
            });

            lastFetch = now;

        } catch (error) {
            if (!cachedWeights) {
                cachedWeights = baseConfig.map(template => ({
                    ...template,
                    weight: settings.values.baseWeight || 0.3,
                }));
            }
        }
    }

    return cachedWeights;
};
