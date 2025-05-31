import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {overlayImage} from "./helpers/overlayImage.js";

export const generateWojackPoint = async (channelId, serverId) => {
    let result;

    const image = await getRandomImage(serverId, channelId);
    const channelMessages = await getChannelMessages(channelId);
    const meme = await getTemplateFiles('wojackpoint.png');

    const text = await generateText(channelMessages, 0, 6);

    result = await overlayImage(image, meme, 'wojackpoint_1', 0);
    result = await addText('wojackpoint_1', result, text)

    return result
}