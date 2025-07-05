import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";
import {addText} from "./helpers/addText.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";

export const generateCrying = async (channelId, serverId) => {
    try {

        let result;

        const image = await getTemplateFiles('crying.png');
        const channelMessages = await getChannelMessages(channelId);

        const avatar = await getRandomImage(serverId, channelId)
        const text = await generateText(channelMessages, 0, 3);

        result = await overlayImage(image, avatar, 'crying_1');
        result = await overlayImage(result, image, 'crying_2');
        result = await addText("crying_1", result, text)

        analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'crying',
            },
        })

        await analytics.flush()

        return result;
    } catch (e) {
        console.error('Error in generateCrying:', e.message);
        throw e;
    }
}