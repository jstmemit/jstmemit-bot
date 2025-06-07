import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {analytics} from "../../bot.js";

export const generateUncanny = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('uncanny.png');

    const text = [
        await generateText(channelMessages, 0, 4),
        await generateText(channelMessages, 0, 4),
    ]

    const image_1 = await addText('uncanny_1', image, text[0]);

    await analytics.capture({
        distinctId: channelId,
        event: 'meme_generated',
        properties: {
            template: 'uncanny',
        },
    })

    await analytics.flush()

    return await addText('uncanny_2', image_1, text[1]);
}