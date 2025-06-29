import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";

export const generateLooksAtPaperAngry = async (channelId, serverId) => {
    try {

    let result;

    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('looksatpaperangry.png');

    const avatar_1 = await getRandomImage(serverId, channelId)
    const avatar_2 = await getRandomImage(serverId, channelId)

    const text = await generateText(channelMessages, 0, 3);

    result = await overlayImage(image, avatar_1, 'looksatpaperangry_1')
    result = await overlayImage(result, avatar_2, 'looksatpaperangry_2');
    result = await overlayImage(result, avatar_2, 'looksatpaperangry_3');

        analytics.capture({
        distinctId: channelId,
        event: 'meme_generated',
        properties: {
            template: 'looksatpaperangry',
        },
    })

    await analytics.flush()

    return await addText('looksatpaperangry', result, text);
    } catch (e) {
        console.error('Error in generateLooksAtPaperAngry:', e.message);
        throw e;
    }
}