import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomAvatar} from "../../discord/getRandomAvatar.js";
import {getRandomUsername} from "../../discord/getRandomUsername.js";

export const generateQuote = async (image, channelId, serverId) => {
    const channelMessages = await getChannelMessages(channelId);
    const generatedText = await generateText(channelMessages, 0, 20);

    const quoteText = `“${generatedText}” - ${await getRandomUsername(serverId)}`;

    return await addText('quote', await getRandomAvatar(serverId), quoteText);
}