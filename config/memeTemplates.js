import {generateFancyBear} from "../generation/visual/generateFancyBear.js";
import {generateGreentext} from "../generation/text/markov/generateGreentext.js";
import {generateQuote} from "../generation/visual/generateQuote.js";
import {generateUncanny} from "../generation/visual/generateUncanny.js";
import {generateLooksAtPaperAngry} from "../generation/visual/generateLooksAtPaperAngry.js";
import {generateCycle} from "../generation/visual/generateCycle.js";
import {generateSteppedInShit} from "../generation/visual/generateSteppedInShit.js";
import {generateWojackPoint} from "../generation/visual/generateWojackPoint.js";
import {generateIsThisAPigeon} from "../generation/visual/generateIsThisAPigeon.js";
import {generateYesChad} from "../generation/visual/generateYesChad.js";
import {calculateWeights, getAnalyticsData} from "../analytics/likesAndDislikes.js";
import {settings} from "./settings.js";
import {generateBottomCaption} from "../generation/visual/generateBottomCaption.js";

const baseConfig = [
    {
        name: "generateQuote",
        generator: (image, channelId, guildId) =>
            generateQuote(image, channelId, guildId),
        requiresImage: true,
    },
    {
        name: "generateBottomCaption",
        generator: (image, channelId, guildId) =>
            generateBottomCaption(image, channelId, guildId),
        requiresImage: true,
    },
    {
        name: "generateFancyBear",
        generator: (image, channelId, guildId) => generateFancyBear(channelId),
        requiresImage: false,
    },
    {
        name: "generateGreentext",
        generator: (image, channelId, guildId) => generateGreentext(channelId),
        requiresImage: false,
    },
    {
        name: "generateUncanny",
        generator: (image, channelId, guildId) => generateUncanny(channelId),
        requiresImage: false,
    },
    {
        name: "generateLooksAtPaperAngry",
        generator: (image, channelId, guildId) =>
            generateLooksAtPaperAngry(channelId, guildId),
        requiresImage: false,
    },
    {
        name: "generateCycle",
        generator: (image, channelId, guildId) => generateCycle(channelId),
        requiresImage: false,
    },
    {
        name: "generateSteppedInShit",
        generator: (image, channelId, guildId) =>
            generateSteppedInShit(channelId, guildId),
        requiresImage: false,
    },
    {
        name: "generateWojackPoint",
        generator: (image, channelId, guildId) =>
            generateWojackPoint(channelId, guildId),
        requiresImage: false,
    },
    {
        name: "generateIsThisAPigeon",
        generator: (image, channelId, guildId) =>
            generateIsThisAPigeon(channelId, guildId),
        requiresImage: false,
    },
    {
        name: "generateYesChad",
        generator: (image, channelId, guildId) => generateYesChad(channelId, guildId),
        requiresImage: false,
    },
];

let cachedWeights = null;
let lastFetch = null;
const CACHE_DURATION = settings.cache.memeTemplatesAnalyticsCache || 60 * 60 * 1000;

export const getConfig = async () => {
    const now = Date.now();

    if (!cachedWeights || !lastFetch || (now - lastFetch) > CACHE_DURATION) {

        try {
            const analyticsData = await getAnalyticsData(30);
            const calculatedWeights = calculateWeights(analyticsData);

            cachedWeights = baseConfig.map(template => ({
                ...template,
                weight: calculatedWeights[template.name] || 0.3,
            }));

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
