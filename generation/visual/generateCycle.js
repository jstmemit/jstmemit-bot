import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {analytics} from "../../bot.js";

export const generateCycle = async (channelId) => {
    try {
        let result;

        const channelMessages = await getChannelMessages(channelId);
        const image = await getTemplateFiles('cycle.png');

        const text = [
            await generateText(channelMessages, 0, 2),
            await generateText(channelMessages, 0, 2),
            await generateText(channelMessages, 0, 2),
            await generateText(channelMessages, 0, 2),
        ]

        result = await addText('cycle_1', image, text[0]);
        result = await addText('cycle_2', result, text[1]);
        result = await addText('cycle_3', result, text[2]);

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'cycle',
            },
        })

        await analytics.flush()

        return await addText('cycle_4', result, text[3]);
    } catch (e) {
        console.error('Error in generateCycle:', e.message);
        throw e;
    }
}