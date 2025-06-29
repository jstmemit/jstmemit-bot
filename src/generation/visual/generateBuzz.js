import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";

export const generateBuzz = async (channelId, serverId) => {
    try {
        let result;

        const channelMessages = await getChannelMessages(channelId);
        const image = await getTemplateFiles('buzz.png');

        const avatar = await getRandomImage(serverId, channelId);

        const text = [
            await generateText(channelMessages, 0, 4),
        ]

        result = await overlayImage(image, avatar, 'buzz_1');

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'buzz',
            },
        })

        await analytics.flush()

        result = await addText('buzz_1', result, text[0]);

        return result;
    } catch (e) {
        console.error('Error in generateBuzz:', e.message);
        throw e;
    }
}