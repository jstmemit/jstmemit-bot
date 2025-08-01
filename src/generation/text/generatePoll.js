import {getChannelMessages} from "#database/queries/getChannelMessages.js"
import {generateText} from "./markov/generateText.js";

export const generatePoll = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);

    const textCount = Math.floor(Math.random() * 4) + 2;
    const texts = [];

    for (let i = 0; i < textCount; i++) {
        if (i === 0) {
            texts.push(await generateText(channelMessages, 1, 8));
        } else {
            texts.push(await generateText(channelMessages, 1, 3));
        }
    }

    return texts;
}