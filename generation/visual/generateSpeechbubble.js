import {overlayImage} from "./helpers/overlayImage.js";
import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {analytics} from "../../bot.js";

export const generateSpeechbubble = async (image, channelId) => {
    try {
        const imageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'), 'speechbubble', 200)

        const channelMessages = await getChannelMessages(channelId);
        const generatedText = await generateText(channelMessages, 2, 10);

        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'speechbubble',
            },
        })

        await analytics.flush()

        return await addText('speechbubble', imageResult, generatedText);
    } catch (e) {
        console.error('Error in generateSpeechbubble:', e.message);
        throw e;
    }
}