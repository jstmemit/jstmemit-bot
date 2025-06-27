import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {analytics} from "../../bot.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";

export const generateQuote = async (image, channelId, serverId, messages = null) => {
    try {
        const channelMessages = messages || await getChannelMessages(channelId);
        const generatedText = await generateText(channelMessages, 0, 20);
        const quoteText = `${generatedText}`;

        analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'generateQuote',
            },
        });
        analytics.flush().catch(err => console.error('Analytics flush failed:', err));

        return await addText('quote', image, quoteText);
    } catch (error) {
        console.error('Error in generateQuote:', error.message);
        throw error;
    }
}