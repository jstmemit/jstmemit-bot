import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../bot.js";

export const generateSteppedInShit = async (channelId, serverId) => {
    let result;

    const channelMessages = await getChannelMessages(channelId);
    const image = await getTemplateFiles('steppedinshit.png');

    const avatar = await getRandomImage(serverId, channelId)

    const text = [
        await generateText(channelMessages, 0, 3),
        await generateText(channelMessages, 0, 3),
    ]

    result = await overlayImage(image, avatar, 'steppedinshit_1')
    result = await addText('steppedinshit_1', result, text[0]);

    await analytics.capture({
        distinctId: channelId,
        event: 'meme_generated',
        properties: {
            template: 'steppedinshit',
        },
    })

    await analytics.flush()

    return await addText('steppedinshit_2', result, text[1]);
}