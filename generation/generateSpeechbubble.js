import {overlayImage} from "./visual/overlayImage.js";
import {getTemplateFiles} from "./visual/getTemplateFiles.js";
import {getChannelMessages} from "../database/queries/getChannelMessages.js";
import {generateText} from "./text/markov/generateText.js";
import {addText} from "./visual/addText.js";

export const generateSpeechbubble = async (image, channelId) => {
    const imageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'), 'speechbubble', 200)

    const channelMessages = await getChannelMessages(channelId);
    const generatedText = await generateText(channelMessages, 2, 10);
    return await addText('speechbubble', imageResult, generatedText);
}