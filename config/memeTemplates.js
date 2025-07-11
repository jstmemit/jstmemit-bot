export const memeTemplates = {
    absolutecinema: {
        templateFile: 'absolutecinema.png',
        requiresChannelMessages: false,
        images: [
            {type: 'random', overlay: 'absolutecinema_1'},
            {type: 'template', overlay: 'absolutecinema_2'}
        ],
        texts: []
    },

    looksatpaperangry: {
        templateFile: 'looksatpaperangry.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'looksatpaperangry_1'},
            {type: 'random', overlay: 'looksatpaperangry_2'},
            {type: 'random', overlay: 'looksatpaperangry_3', sameAs: 1}
        ],
        texts: [
            {key: 'looksatpaperangry', minLength: 0, maxLength: 3}
        ]
    },

    uncanny: {
        templateFile: 'uncanny.png',
        requiresChannelMessages: true,
        images: [],
        texts: [
            {key: 'uncanny_1', minLength: 0, maxLength: 4},
            {key: 'uncanny_2', minLength: 0, maxLength: 4}
        ]
    },

    yeschad: {
        templateFile: 'yeschad.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'yeschad_1'}
        ],
        texts: [
            {key: 'yeschad_1', minLength: 0, maxLength: 4}
        ]
    },

    bottomcaption: {
        templateFile: null,
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: null, isBase: true}
        ],
        texts: [
            {key: 'bottomcaption', minLength: 0, maxLength: 20}
        ]
    },

    buzz: {
        templateFile: 'buzz.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'buzz_1'}
        ],
        texts: [
            {key: 'buzz_1', minLength: 0, maxLength: 4}
        ]
    },

    connor: {
        templateFile: 'connor.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'connor_1'}
        ],
        texts: [
            {key: 'connor_1', minLength: 0, maxLength: 4},
            {key: 'connor_2', minLength: 0, maxLength: 4},
            {key: 'connor_3', minLength: 0, maxLength: 4},
            {key: 'connor_4', minLength: 0, maxLength: 4},
            {key: 'connor_5', minLength: 0, maxLength: 4}
        ]
    },

    crying: {
        templateFile: 'crying.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'crying_1'},
            {type: 'template', overlay: 'crying_2'}
        ],
        texts: [
            {key: 'crying_1', minLength: 0, maxLength: 3}
        ]
    },

    cycle: {
        templateFile: 'cycle.png',
        requiresChannelMessages: true,
        images: [],
        texts: [
            {key: 'cycle_1', minLength: 0, maxLength: 2},
            {key: 'cycle_2', minLength: 0, maxLength: 2},
            {key: 'cycle_3', minLength: 0, maxLength: 2},
            {key: 'cycle_4', minLength: 0, maxLength: 2}
        ]
    },

    explains: {
        templateFile: 'explains.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'explains_1'},
            {type: 'random', overlay: 'explains_2', sameAs: 0},
            {type: 'template', overlay: 'explains_3'}
        ],
        texts: [
            {key: 'explains_1', minLength: 0, maxLength: 4}
        ]
    },

    fancybear: {
        templateFile: 'fancybear.jpg',
        requiresChannelMessages: true,
        images: [],
        texts: [
            {key: 'fancybear_1', minLength: 0, maxLength: 4},
            {key: 'fancybear_2', minLength: 0, maxLength: 4}
        ]
    },

    isthisapigeon: {
        templateFile: 'isthisapigeon.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'isthisapigeon_1'}
        ],
        texts: [
            {key: 'isthisapigeon_1', minLength: 0, maxLength: 8},
            {key: 'isthisapigeon_2', minLength: 0, maxLength: 2}
        ]
    },

    livereaction: {
        templateFile: 'livereaction.png',
        requiresChannelMessages: false,
        images: [
            {type: 'random', overlay: 'livereaction_1'},
            {type: 'template', overlay: 'livereaction_3'},
            {type: 'random', overlay: 'livereaction_2', sameAs: 0}
        ],
        texts: []
    },

    quote: {
        templateFile: null,
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: null, isBase: true}
        ],
        texts: [
            {key: 'quote', minLength: 0, maxLength: 20}
        ]
    },

    spongebob: {
        templateFile: 'spongebob.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'spongebob_1'},
            {type: 'template', overlay: 'spongebob_2'}
        ],
        texts: [
            {key: 'spongebob_1', minLength: 0, maxLength: 3}
        ]
    },

    steppedinshit: {
        templateFile: 'steppedinshit.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'steppedinshit_1'}
        ],
        texts: [
            {key: 'steppedinshit_1', minLength: 0, maxLength: 3},
            {key: 'steppedinshit_2', minLength: 0, maxLength: 3}
        ]
    },

    texting: {
        templateFile: 'texting.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'texting_1'},
            {type: 'random', overlay: 'texting_2'}
        ],
        texts: [
            {key: 'texting_1', minLength: 0, maxLength: 4},
            {key: 'texting_2', minLength: 0, maxLength: 4}
        ]
    },

    wojackpoint: {
        templateFile: 'wojackpoint.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: null, isBase: true},
            {type: 'template', overlay: 'wojackpoint_1'}
        ],
        texts: [
            {key: 'wojackpoint_1', minLength: 0, maxLength: 6}
        ]
    },

    spongebobhappy: {
        templateFile: 'spongebobhappy.png',
        requiresChannelMessages: true,
        images: [
            {type: 'template', overlay: 'spongebob_2'},
            {type: 'random', overlay: 'spongebobhappy_1'},
        ],
        texts: [
            {key: 'spongebob_1', minLength: 0, maxLength: 3}
        ]
    },

    politicalcompass1: {
        templateFile: 'politicalcompass.png',
        requiresChannelMessages: false,
        images: [
            {type: 'template', overlay: 'fullimage'},
            {type: 'random', overlay: 'politicalcompass_1'},
            {type: 'random', overlay: 'politicalcompass_2'},
            {type: 'random', overlay: 'politicalcompass_3'},
            {type: 'random', overlay: 'politicalcompass_4'},
        ],
        texts: []
    },

    politicalcompass2: {
        templateFile: 'politicalcompass.png',
        requiresChannelMessages: false,
        images: [
            {type: 'template', overlay: 'fullimage'},
            {type: 'random', overlay: 'politicalcompass_5'},
            {type: 'random', overlay: 'politicalcompass_6'},
            {type: 'random', overlay: 'politicalcompass_7'},
            {type: 'random', overlay: 'politicalcompass_8'},
        ],
        texts: []
    },

    bigthumbsup: {
        templateFile: 'bigthumbsup.png',
        requiresChannelMessages: true,
        images: [
            {type: 'random', overlay: 'bigthumbsup_1'},
            {type: 'random', overlay: 'bigthumbsup_2', sameAs: 0},
            {type: 'random', overlay: 'bigthumbsup_3', sameAs: 0}
        ],
        texts: [
            {key: 'bigthumbsup_1', minLength: 0, maxLength: 4},
            {key: 'bigthumbsup_2', minLength: 0, maxLength: 4}
        ]
    },

    tf2hahaha: {
        templateFile: 'tf2hahaha.jpg',
        requiresChannelMessages: true,
        images: [],
        texts: [
            {key: 'tf2hahaha', minLength: 0, maxLength: 12},
        ]
    },
};