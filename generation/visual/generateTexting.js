import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../bot.js";

export const generateTexting = async (channelId, serverId) => {
    try {
        let result;

        const channelMessages = await getChannelMessages(channelId);
        const image = await getTemplateFiles('texting.png');

        const avatar = await getRandomImage(serverId, channelId);
        const avatar2 = await getRandomImage(serverId, channelId);

        const text = [
            await generateText(channelMessages, 0, 4),
            await generateText(channelMessages, 0, 4)
        ]

        result = await overlayImage(image, avatar, 'texting_1');
        result = await overlayImage(result, avatar2, 'texting_2');

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'texting',
            },
        })

        await analytics.flush()

        result = await addText('texting_1', result, text[0]);
        result = await addText('texting_2', result, text[1]);

        return result;
    } catch (e) {
        console.error('Error in generateTexting:', e.message);
        throw e;
    }
}