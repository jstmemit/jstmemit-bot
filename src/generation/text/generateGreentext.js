import {getChannelMessages} from "#database/queries/getChannelMessages.js"
import {generateText} from "./markov/generateText.js";

export const generateGreentext = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);
    const mainText = await generateText(channelMessages, 0, 15);

    const greentexts = [
        await generateText(channelMessages, 1, 5),
        await generateText(channelMessages, 1, 5),
        await generateText(channelMessages, 1, 5)
    ];

    return `${mainText}\n` + greentexts.map(text => `› ${text}`).join('\n');
}