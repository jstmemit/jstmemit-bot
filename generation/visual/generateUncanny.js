import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";

export const generateUncanny = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('uncanny.png');

    const text = [
        await generateText(channelMessages, 0, 4),
        await generateText(channelMessages, 0, 4),
    ]

    const image_1 = await addText('uncanny_1', image, text[0]);
    return await addText('uncanny_2', image_1, text[1]);
}