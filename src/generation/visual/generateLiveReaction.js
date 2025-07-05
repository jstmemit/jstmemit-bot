import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";

export const generateLiveReaction = async (channelId, serverId) => {
    try {

        let result;

        const image = await getTemplateFiles('livereaction.png');

        const avatar = await getRandomImage(serverId, channelId)

        result = await overlayImage(image, avatar, 'livereaction_1');
        result = await overlayImage(result, image, 'livereaction_3');
        result = await overlayImage(result, avatar, 'livereaction_2');

        analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'livereaction',
            },
        })

        await analytics.flush()

        return result;
    } catch (e) {
        console.error('Error in generateLiveReaction:', e.message);
        throw e;
    }
}