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
import {generateExplains} from "../generation/visual/generateExplains.js";

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
        {
            name: "generateExplains",
            generator: (image, channelId, interaction) => generateExplains(channelId, interaction),
            requiresImage: false,
        },
    ],
    overlaySettings: {
        speechbubble: {
            type: 'fill_full',
            dy: 0
        },
        looksatpaperangry_1: {
            type: 'circle',
            cx: 170,
            cy: 100,
            radius: 64
        },
        looksatpaperangry_2: {
            type: 'circle',
            cx: 530,
            cy: 75,
            radius: 64
        },
        looksatpaperangry_3: {
            type: 'circle',
            cx: 200,
            cy: 490,
            radius: 150
        },
        steppedinshit_1: {
            type: 'circle',
            cx: 370,
            cy: 200,
            radius: 64
        },
        wojackpoint_1: {
            type: 'fullimage'
        },
        isthisapigeon_1: {
            type: 'circle',
            cx: 450,
            cy: 700,
            radius: 300
        },
        yeschad_1: {
            type: 'circle',
            cx: 365,
            cy: 300,
            radius: 230
        },
        texting_1: {
            type: 'circle',
            cx: 280,
            cy: 130,
            radius: 110
        },
        texting_2: {
            type: 'circle',
            cx: 400,
            cy: 530,
            radius: 110
        },
        connor_1: {
            type: 'circle',
            cx: 720,
            cy: 740,
            radius: 110
        },
        buzz_1: {
            type: 'circle',
            cx: 380,
            cy: 200,
            radius: 80
        },
        explains_1: {
            type: 'circle',
            cx: 230,
            cy: 180,
            radius: 280
        },
        explains_2: {
            type: 'circle',
            cx: 200,
            cy: 654,
            radius: 290
        },
        explains_3: {
            type: 'fullimage'
        }
    },
    textSettings: {
        speechbubble: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.05, y: 0.05, w: 0.90, h: 0.25},
            maxLines: 3,
            baseImageOverlay: 0
        },
        quote: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.375, w: 0.80, h: 0.25},
            maxLines: 4,
            baseImageOverlay: 128
        },
        fancybear_1: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Arial',
            box: {x: 0.55, y: 0.17, w: 0.30, h: 0.15},
            maxLines: 2,
            baseImageOverlay: 0
        },
        fancybear_2: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Arial',
            box: {x: 0.55, y: 0.68, w: 0.30, h: 0.15},
            maxLines: 2,
            baseImageOverlay: 0
        },
        uncanny_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.1, y: 0.7, w: 0.25, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        uncanny_2: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.64, y: 0.7, w: 0.25, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        looksatpaperangry: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.45, y: 0.6, w: 0.3, h: 0.25},
            maxLines: 3,
            baseImageOverlay: 0
        },
        cycle_1: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Arial',
            box: {x: 0.38, y: 0.03, w: 0.25, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        cycle_2: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Arial',
            box: {x: 0.72, y: 0.4, w: 0.25, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        cycle_3: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Arial',
            box: {x: 0.39, y: 0.75, w: 0.25, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        cycle_4: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Arial',
            box: {x: 0.05, y: 0.4, w: 0.25, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        steppedinshit_1: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.3, y: 0.035, w: 0.3, h: 0.1},
            maxLines: 2,
            baseImageOverlay: 0
        },
        steppedinshit_2: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.3, y: 0.6, w: 0.4, h: 0.25},
            maxLines: 3,
            baseImageOverlay: 0
        },
        wojackpoint_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.32, y: 0.7, w: 0.4, h: 0.25},
            maxLines: 4,
            baseImageOverlay: 0
        },
        isthisapigeon_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.1, y: 0.75, w: 0.8, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        isthisapigeon_2: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.76, y: 0.1, w: 0.15, h: 0.25},
            maxLines: 3,
            baseImageOverlay: 0
        },
        yeschad_1: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.1, y: 0.75, w: 0.3, h: 0.25},
            maxLines: 2,
            baseImageOverlay: 0
        },
        bottomcaption: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.7, w: 0.80, h: 0.25},
            maxLines: 4,
            baseImageOverlay: 0
        },
        texting_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.7, y: 0.1, w: 0.25, h: 0.25},
            maxLines: 1,
            baseImageOverlay: 0
        },
        texting_2: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.05, y: 0.6, w: 0.3, h: 0.25},
            maxLines: 4,
            baseImageOverlay: 0
        },
        connor_1: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0, w: 0.8, h: 0.1},
            maxLines: 1,
            baseImageOverlay: 0
        },
        connor_2: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.09, w: 0.8, h: 0.1},
            maxLines: 1,
            baseImageOverlay: 0
        },
        connor_3: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.2, w: 0.8, h: 0.1},
            maxLines: 1,
            baseImageOverlay: 0
        },
        connor_4: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.3, w: 0.8, h: 0.1},
            maxLines: 4,
            baseImageOverlay: 0
        },
        connor_5: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.8, w: 0.8, h: 0.25},
            maxLines: 1,
            baseImageOverlay: 0
        },
        buzz_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.75, w: 0.8, h: 0.25},
            maxLines: 1,
            baseImageOverlay: 0
        },
        explains_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.85, w: 0.8, h: 0.15},
            maxLines: 1,
            baseImageOverlay: 0
        }
    }
}