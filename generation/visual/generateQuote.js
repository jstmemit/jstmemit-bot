import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {getRandomUsername} from "../../discord/getRandomUsername.js";
import {analytics} from "../../bot.js";

export const generateQuote = async (image, channelId, serverId) => {
    const channelMessages = await getChannelMessages(channelId);
    const generatedText = await generateText(channelMessages, 0, 20);

    const quoteText = `“${generatedText}” - ${await getRandomUsername(serverId)}`;

    await analytics.capture({
        distinctId: channelId,
        event: 'meme_generated',
        properties: {
            template: 'quote',
        },
    })

    await analytics.flush()

    return await addText('quote', await getRandomImage(serverId, channelId), quoteText);
}