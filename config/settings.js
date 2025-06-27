import {generateTexting} from "../generation/visual/generateTexting.js";
import {generateQuote} from "../generation/visual/generateQuote.js";
import {generateBottomCaption} from "../generation/visual/generateBottomCaption.js";
import {generateFancyBear} from "../generation/visual/generateFancyBear.js";
import {generateGreentext} from "../generation/text/markov/generateGreentext.js";
import {generateUncanny} from "../generation/visual/generateUncanny.js";
import {generateLooksAtPaperAngry} from "../generation/visual/generateLooksAtPaperAngry.js";
import {generateCycle} from "../generation/visual/generateCycle.js";
import {generateSteppedInShit} from "../generation/visual/generateSteppedInShit.js";
import {generateWojackPoint} from "../generation/visual/generateWojackPoint.js";
import {generateIsThisAPigeon} from "../generation/visual/generateIsThisAPigeon.js";
import {generateYesChad} from "../generation/visual/generateYesChad.js";
import {generateConnor} from "../generation/visual/generateConnor.js";
import {generateBuzz} from "../generation/visual/generateBuzz.js";

export const settings = {
    cache: {
        memeTemplatesAnalyticsCache: 60 * 60 * 1000,
        channelImagesCache: 5 * 60 * 1000,
    },
    values: {
        baseWeight: 0.3,
    },
    canvas: {
        maxFileSize: 7 * 1024 * 1024,
        maxDimension: 2048,
        minDimension: 1,
    },
    templates: [
        {
            name: "generateQuote",
            generator: (image, channelId, interaction) =>
                generateQuote(image, channelId, interaction),
            requiresImage: true,
        },
        {
            name: "generateBottomCaption",
            generator: (image, channelId, interaction) =>
                generateBottomCaption(image, channelId, interaction),
            requiresImage: true,
        },
        {
            name: "generateFancyBear",
            generator: (image, channelId, interaction) => generateFancyBear(channelId),
            requiresImage: false,
        },
        {
            name: "generateGreentext",
            generator: (image, channelId, interaction) => generateGreentext(channelId),
            requiresImage: false,
        },
        {
            name: "generateUncanny",
            generator: (image, channelId, interaction) => generateUncanny(channelId),
            requiresImage: false,
        },
        {
            name: "generateLooksAtPaperAngry",
            generator: (image, channelId, interaction) =>
                generateLooksAtPaperAngry(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateCycle",
            generator: (image, channelId, interaction) => generateCycle(channelId),
            requiresImage: false,
        },
        {
            name: "generateSteppedInShit",
            generator: (image, channelId, interaction) =>
                generateSteppedInShit(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateWojackPoint",
            generator: (image, channelId, interaction) =>
                generateWojackPoint(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateIsThisAPigeon",
            generator: (image, channelId, interaction) =>
                generateIsThisAPigeon(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateYesChad",
            generator: (image, channelId, interaction) => generateYesChad(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateTexting",
            generator: (image, channelId, interaction) => generateTexting(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateConnor",
            generator: (image, channelId, interaction) => generateConnor(channelId, interaction),
            requiresImage: false,
        },
        {
            name: "generateBuzz",
            generator: (image, channelId, interaction) => generateBuzz(channelId, interaction),
            requiresImage: false,
        },
    ]
}