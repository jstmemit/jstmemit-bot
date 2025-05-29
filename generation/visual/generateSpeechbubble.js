import {overlayImage} from "./helpers/overlayImage.js";
import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";

export const generateSpeechbubble = async (image, channelId) => {
    const imageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'), 'speechbubble', 200)

    const channelMessages = await getChannelMessages(channelId);
    const generatedText = await generateText(channelMessages, 2, 10);
    return await addText('speechbubble', imageResult, generatedText);
}