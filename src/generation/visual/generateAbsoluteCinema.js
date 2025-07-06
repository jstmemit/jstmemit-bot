import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";

export const generateAbsoluteCinema = async (channelId, serverId) => {
    try {

        let result;

        const image = await getTemplateFiles('absolutecinema.png');

        const avatar = await getRandomImage(serverId, channelId)

        result = await overlayImage(image, avatar, 'absolutecinema_1');
        result = await overlayImage(result, image, 'absolutecinema_2');

        analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: 'absolutecinema',
            },
        })

        await analytics.flush()

        return result;
    } catch (e) {
        console.error('Error in generateAbsoluteCinema:', e.message);
        throw e;
    }
}