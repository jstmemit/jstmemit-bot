import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {analytics} from "../../bot.js";

export const generateFancyBear = async (channelId) => {
    try {
        const channelMessages = await getChannelMessages(channelId);
        const image = await getTemplateFiles('fancybear.jpg');

        const text = [
            await generateText(channelMessages, 0, 4),
            await generateText(channelMessages, 0, 4),
        ]

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'fancybear',
            },
        })

        await analytics.flush()

        const image_1 = await addText('fancybear_1', image, text[0]);
        return await addText('fancybear_2', image_1, text[1]);
    } catch (e) {
        console.error('Error in generateFancyBear:', e.message);
        throw e;
    }
}