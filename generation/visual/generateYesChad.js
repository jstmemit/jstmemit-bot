import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";

export const generateYesChad = async (channelId, serverId) => {
    let result;

    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('yeschad.png');

    const avatar = await getRandomImage(serverId, channelId)

    const text = [
        await generateText(channelMessages, 0, 4),
    ]

    result = await overlayImage(image, avatar, 'yeschad_1');
    return await addText('yeschad_1', result, text[0]);
}