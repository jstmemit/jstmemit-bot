import {createMemeGenerator} from "../src/generation/visual/memeFactory.js";
import {generateGreentext} from "#src/generation/text/markov/generateGreentext.js";
import {generatePoll} from "#src/generation/text/markov/generatePoll.js";

export const settings = {
    cache: {
        memeTemplatesAnalyticsCache: 480 * 60 * 1000,
        channelImagesCache: 1 * 60 * 1000,
    },
    values: {
        baseWeight: 0.3,
    },
    activeSurveys: [
        {
            id: "01985aef-1eb5-0000-5d58-cc519a423f9a",
            localizedNameTranslationKey: "feedback_survey_august_2025",
            conditions: {
                // minMessages: 500,
                minMessages: 30,
            }
        }
    ],
    canvas: {
        maxFileSize: 7 * 1024 * 1024,
        maxDimension: 2048,
        minDimension: 1,
        emojiYOffset: 20,
    },
    analytics: {
        posthogBaseUrl: 'https://eu.i.posthog.com',
    },
    kumaUptime: {
        pingUrl: 'http://192.168.1.137:3001/api/push/NHOKlHX89O?status=up&msg=OK&ping=',
        pingInterval: 60 * 500
    },
    monetization: {
        premiumSkuId: '1387929454356987945',
    },
    progressBar: {
        segments: {
            enable: 10
        },
        emojis: {
            // development bot emojis
            // fill1: '<:fill1:1395826918019961014>',
            // fill2: '<:fill2:1395826899053445160>',
            // fill3: '<:fill3:1395826713505828995>',
            // empty1: '<:empty1:1395826909450993826>',
            // empty2: '<:empty2:1395826691129082017>',
            // empty3: '<:empty3:1395826703603077120>'

            // production bot emojis
            fill1: '<:fill1:1395787757749801091>',
            fill2: '<:fill2:1395787732390776862>',
            fill3: '<:fill3:1395787721020018744>',
            empty1: '<:empty1:1395787747440197743>',
            empty2: '<:empty2:1395787699037667369>',
            empty3: '<:empty3:1395787710660087900>'
        },
    },
    emojis: {
        settings: {
            general: {
                id: "1396186449220604037",
                name: "<:generalsettings:1396186449220604037>"
            },
            meme: {
                id: "1396185463659823205",
                name: "<:memegeneration:1396185463659823205>"
            },
            data: {
                id: "1396186481693036575",
                name: "<:dataretention:1396186481693036575>"
            },
            premium: {
                id: "1396186471957925928",
                name: "<:premium:1396186471957925928>"
            }
        }
    },
    templates: [
        {
            name: "generateQuote",
            generator: createMemeGenerator('quote'),
            requiresImage: true,
        },
        {
            name: "generateBottomCaption",
            generator: createMemeGenerator('bottomcaption'),
            requiresImage: true,
        },
        {
            name: "generateFancyBear",
            generator: createMemeGenerator('fancybear'),
            requiresImage: false,
        },
        {
            name: "generateUncanny",
            generator: createMemeGenerator('uncanny'),
            requiresImage: false,
        },
        {
            name: "generateLooksAtPaperAngry",
            generator: createMemeGenerator('looksatpaperangry'),
            requiresImage: false,
        },
        {
            name: "generateCycle",
            generator: createMemeGenerator('cycle'),
            requiresImage: false,
        },
        {
            name: "generateSteppedInShit",
            generator: createMemeGenerator('steppedinshit'),
            requiresImage: false,
        },
        {
            name: "generateWojackPoint",
            generator: createMemeGenerator('wojackpoint'),
            requiresImage: false,
        },
        {
            name: "generateIsThisAPigeon",
            generator: createMemeGenerator('isthisapigeon'),
            requiresImage: false,
        },
        {
            name: "generateYesChad",
            generator: createMemeGenerator('yeschad'),
            requiresImage: false,
        },
        {
            name: "generateTexting",
            generator: createMemeGenerator('texting'),
            requiresImage: false,
        },
        {
            name: "generateConnor",
            generator: createMemeGenerator('connor'),
            requiresImage: false,
        },
        {
            name: "generateBuzz",
            generator: createMemeGenerator('buzz'),
            requiresImage: false,
        },
        {
            name: "generateExplains",
            generator: createMemeGenerator('explains'),
            requiresImage: false,
        },
        {
            name: "generateLiveReaction",
            generator: createMemeGenerator('livereaction'),
            requiresImage: false,
        },
        {
            name: "generateSpongebob",
            generator: createMemeGenerator('spongebob'),
            requiresImage: false,
        },
        {
            name: "generateCrying",
            generator: createMemeGenerator('crying'),
            requiresImage: false,
        },
        {
            name: "generateAbsoluteCinema",
            generator: createMemeGenerator('absolutecinema'),
            requiresImage: false,
        },
        {
            name: "generateSpongebobHappy",
            generator: createMemeGenerator('spongebobhappy'),
            requiresImage: false,
        },
        {
            name: "generatePoliticalCompass1",
            generator: createMemeGenerator('politicalcompass1'),
            requiresImage: false,
        },
        {
            name: "generatePoliticalCompass2",
            generator: createMemeGenerator('politicalcompass2'),
            requiresImage: false,
        },
        {
            name: "generateBigThumbsUp",
            generator: createMemeGenerator('bigthumbsup'),
            requiresImage: false,
        },
        {
            name: "generateTf2Hahaha",
            generator: createMemeGenerator('tf2hahaha'),
            requiresImage: false,
        },
        {
            name: "generateHomerHiding",
            generator: createMemeGenerator('homerhiding'),
            requiresImage: false,
        },
        {
            name: "generateSleepy",
            generator: createMemeGenerator('sleepy'),
            requiresImage: false,
        },
        {
            name: "generateWhyDoYouLikeThisMovie",
            generator: createMemeGenerator('whydoyoulikethismovie'),
            requiresImage: false,
        },
        {
            name: "generateWorldsMostDangerousTrap",
            generator: createMemeGenerator('worldsmostdangeroustrap'),
            requiresImage: false,
        },
        {
            name: "generateOneDollarPrivateIsland",
            generator: createMemeGenerator('onedollarprivateisland'),
            requiresImage: false,
        },
        {
            name: "generateIAdopted100Dogs",
            generator: createMemeGenerator('iadopted100dogs'),
            requiresImage: false,
        },
        {
            name: "generateIGotHuntedByARealBountyHunter",
            generator: createMemeGenerator('igothuntedbyarealbountyhunter'),
            requiresImage: false,
        },
        {
            name: "generateGreentext",
            generator: (image, channelId, interaction) => generateGreentext(channelId),
            requiresImage: false,
        },
        {
            name: "generatePoll",
            generator: (image, channelId, interaction) => generatePoll(channelId),
            requiresImage: false,
        },
    ],
    languages: [
        {
            label: "English",
            value: "english",
            emoji: {id: "1396193190213583051"},
        },
        {
            label: "Русский",
            value: "russian",
            emoji: {id: "1396193026250117211"},
        },
        {
            label: "Nederlands",
            value: "dutch",
            emoji: {id: "1396192992682971178"},
        },
        {
            label: "Українська",
            value: "ukrainian",
            emoji: {id: "1396193067207491745"},
        },
        {
            label: "Polski",
            value: "polish",
            emoji: {id: "1396192299393744957"},
        },
        // maybe later
        // {
        //     label: "Deutsch",
        //     value: "german",
        //     emoji: {id: "1396192272894394378"},
        // },
        // {
        //     label: "Français",
        //     value: "french",
        //     emoji: {id: "1396192289952628796"},
        // },
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
        },
        livereaction_1: {
            type: 'circle',
            cx: 450,
            cy: 600,
            radius: 650
        },
        livereaction_2: {
            type: 'circle',
            cx: 330,
            cy: 120,
            radius: 70
        },
        livereaction_3: {
            type: 'fullimage'
        },
        spongebob_1: {
            type: 'circle',
            cx: 130,
            cy: 150,
            radius: 200
        },
        sleepy_1: {
            type: 'circle',
            cx: 530,
            cy: 300,
            radius: 700
        },
        spongebob_2: {
            type: 'fullimage'
        },
        spongebobhappy_1: {
            type: 'circle',
            cx: 280,
            cy: 270,
            radius: 130
        },
        absolutecinema_1: {
            type: 'fullimage'
        },
        absolutecinema_2: {
            type: 'fullimage'
        },
        fullimage: {
            type: 'fullimage'
        },
        politicalcompass_1: {
            type: 'circle',
            cx: 150,
            cy: 190,
            radius: 90
        },
        politicalcompass_2: {
            type: 'circle',
            cx: 700,
            cy: 200,
            radius: 90
        },
        politicalcompass_3: {
            type: 'circle',
            cx: 170,
            cy: 730,
            radius: 90
        },
        politicalcompass_4: {
            type: 'circle',
            cx: 850,
            cy: 800,
            radius: 90
        },
        politicalcompass_5: {
            type: 'circle',
            cx: 250,
            cy: 200,
            radius: 90
        },
        politicalcompass_6: {
            type: 'circle',
            cx: 650,
            cy: 200,
            radius: 90
        },
        politicalcompass_7: {
            type: 'circle',
            cx: 170,
            cy: 770,
            radius: 90
        },
        politicalcompass_8: {
            type: 'circle',
            cx: 850,
            cy: 180,
            radius: 90
        },
        whydoyoulikethismovie_1: {
            type: 'circle',
            cx: 350,
            cy: 580,
            radius: 450
        },
        whydoyoulikethismovie_2: {
            type: 'circle',
            cx: 75,
            cy: 880,
            radius: 45
        },
        bigthumbsup_1: {
            type: 'circle',
            cx: 40,
            cy: 60,
            radius: 45
        },
        bigthumbsup_2: {
            type: 'circle',
            cx: 50,
            cy: 260,
            radius: 45
        },
        bigthumbsup_3: {
            type: 'circle',
            cx: 50,
            cy: 450,
            radius: 45
        },
        homerhiding_1: {
            type: 'circle',
            cx: 180,
            cy: 95,
            radius: 60
        },
        homerhiding_2: {
            type: 'circle',
            cx: 490,
            cy: 100,
            radius: 60
        },
        crying_1: {
            type: 'fullimage'
        },
        crying_2: {
            type: 'fullimage'
        },
        watermark_logo: {
            type: 'watermark_corner',
            position: 'bottom-right',
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
        bigthumbsup_1: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.23, y: 0.03, w: 0.3, h: 0.15},
            maxLines: 2,
            baseImageOverlay: 0
        },
        bigthumbsup_2: {
            fillStyle: '#000000',
            outlineStyle: '#ffffff',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.23, y: 0.70, w: 0.3, h: 0.15},
            maxLines: 2,
            baseImageOverlay: 0
        },
        tf2hahaha: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.55, y: 0.05, w: 0.3, h: 0.4},
            maxLines: 4,
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
        homerhiding_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.1, y: 0.75, w: 0.8, h: 0.2},
            maxLines: 2,
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
        },
        watermark_text: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            font: 'Comic Sans MS',
            textAlign: 'right',
            box: {x: 0.2, y: 0.95, w: 0.3, h: 0.05},
            maxLines: 1,
            baseImageOverlay: 0,
        },
        spongebob_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS',
            box: {x: 0.1, y: 0.85, w: 0.8, h: 0.15},
            maxLines: 1,
            baseImageOverlay: 0
        },
        crying_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'left',
            font: 'Comic Sans MS',
            box: {x: 0.4, y: 0.75, w: 0.65, h: 0.15},
            maxLines: 1,
            baseImageOverlay: 0
        },
        impactbottomtext: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Impact',
            box: {x: 0.1, y: 0.75, w: 0.8, h: 0.2},
            maxLines: 2,
            baseImageOverlay: 0
        },
    }
}