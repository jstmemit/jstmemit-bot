import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {analytics} from "../../../bot.js";

export const generateBottomCaption = async (image, channelId, serverId) => {
    try {
        const channelMessages = await getChannelMessages(channelId);
        const generatedText = await generateText(channelMessages, 0, 20);

        const quoteText = `${generatedText}`;

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'bottomcaption',
            },
        })

        await analytics.flush()

        return await addText('bottomcaption', await getRandomImage(serverId, channelId), quoteText);
    } catch (e) {
        console.error('Error in generateBottomCaption:', e.message);
        throw e;
    }
}