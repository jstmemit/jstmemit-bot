import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../bot.js";

export const generateIsThisAPigeon = async (channelId, serverId) => {
    let result;

    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('isthisapigeon.png');

    const avatar = await getRandomImage(serverId, channelId)

    const text = [
        await generateText(channelMessages, 0, 8),
        await generateText(channelMessages, 0, 2),
    ]

    result = await overlayImage(image, avatar, 'isthisapigeon_1');
    result = await addText('isthisapigeon_1', result, text[0]);

    await analytics.capture({
        distinctId: channelId,
        event: 'meme_generated',
        properties: {
            template: 'isthisapigeon',
        },
    })

    await analytics.flush()

    return await addText('isthisapigeon_2', result, text[1]);
}