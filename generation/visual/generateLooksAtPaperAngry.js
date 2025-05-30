import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomAvatar} from "../../discord/getRandomAvatar.js";
import {overlayImage} from "./helpers/overlayImage.js";

export const generateLooksAtPaperAngry = async (channelId, serverId) => {
    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('looksatpaperangry.png');

    const avatar_1 = await getRandomAvatar(serverId)
    const avatar_2 = await getRandomAvatar(serverId)

    const text = await generateText(channelMessages, 0, 3);

    const image_2 = await overlayImage(image, avatar_1, 'looksatpaperangry_1', 0)
    const image_3 = await overlayImage(image_2, avatar_2, 'looksatpaperangry_2', 0);
    const image_4 = await overlayImage(image_3, avatar_2, 'looksatpaperangry_3', 0);

    return await addText('looksatpaperangry', image_4, text);
}