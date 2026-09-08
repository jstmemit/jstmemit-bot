import type { FaqQuestion } from "#/models/FaqQuestion.ts";

export const questions: FaqQuestion[] = [
    {
        id: "iAddedTheBotWhatNow",
        question: "I added the bot, what now?",
        highlight: "Run /enable in a channel.",
        answer: "The bot will start learning from new messages there. After chatting for a bit run /meme to generate a meme. Memes will also come automatically when the channel is active and there is a conversation ongoing. You can change frequency for those in /settings.",
    },
    {
        id: "canIHaveDifferentSettings",
        question: "Can I have different settings for every channel?",
        highlight: "Yes!",
        answer: "All channel information, such as data for memes, frequency and other settings are stored separately for each channel. Nothing stops you from having very low meme frequency in your main chat, but also set it to high in your flood channel.",
    },
    {
        id: "isThereALimitOnMemes",
        question: "Is there a limit on how many memes the bot can make daily?",
        highlight: "No, there are no limits.",
        answer: "You can run /meme as many times a day as you want. And it's free, because each generation only takes milliseconds to finish.",
    },
    {
        id: "canIDeleteStoredData",
        question: "Can I delete stored meme generation data?",
        highlight: "Yes, at any time.",
        answer: 'Run /settings and then press the "Delete all data" button to delete everything that the bot stored for the channel.',
    },
    {
        id: "canIUseItInGroupChats",
        question: 'Can I add the bot to "My Apps" and use it anywhere?',
        highlight: "Yes, but without all features.",
        answer: 'You\'ll be able to use /custom and right-click actions (like "Make it a Quote" or "Make it a News Report") everywhere on Discord. But memes from chat won\'t work that way for privacy reasons.',
    },
    {
        id: "iReallyWantToMakeACustomMeme",
        question: "What if I want to make a custom meme with specific text and/or image?",
        highlight: "Use /custom!",
        answer: "It lets you use the giant meme template library of Jstmemit as an ordinary meme generator with your own text and images. And of course there are no limits or watermarks on memes generated this way too.",
    },
];
