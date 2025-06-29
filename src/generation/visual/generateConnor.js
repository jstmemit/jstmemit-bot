import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";

export const generateConnor = async (channelId, serverId) => {
    try {
        let result;

        const channelMessages = await getChannelMessages(channelId);
        const image = await getTemplateFiles('connor.png');

        const avatar = await getRandomImage(serverId, channelId);

        const text = [
            await generateText(channelMessages, 0, 4),
            await generateText(channelMessages, 0, 4),
            await generateText(channelMessages, 0, 4),
            await generateText(channelMessages, 0, 4),
            await generateText(channelMessages, 0, 4)
        ]

        result = await overlayImage(image, avatar, 'connor_1');

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'connor',
            },
        })

        await analytics.flush()

        result = await addText('connor_1', result, text[0]);
        result = await addText('connor_2', result, text[1]);
        result = await addText('connor_3', result, text[2]);
        result = await addText('connor_4', result, text[3]);
        result = await addText('connor_5', result, text[4]);

        return result;
    } catch (e) {
        console.error('Error in generateTexting:', e.message);
        throw e;
    }
}