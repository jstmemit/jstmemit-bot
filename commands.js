export const commands = [
    {
        name: 'debug',
        description: 'Debug meme generation',
        options: [
            {
                name: 'image',
                type: 11,
                description: 'Image to debug',
                required: true,
            },
        ],
    },
    {
        name: 'iamlucky',
        description: 'Generate a meme with a random template',
    }
];
