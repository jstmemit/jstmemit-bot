import {getChannelMessages} from "#database/queries/getChannelMessages.js"
import {transformText} from "#src/generation/text/openai/transformText.js";

export const generateNewsReport = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);

    const generatedTexts = await transformText(channelMessages, {
        name: "News Report",
        description: "Pick an event from provided messages and write a shocking news title. Use a clickbait style, it may include using 'BREAKING:' or 'CNN:' prefixes kind of prefixes, you are not limited to only those two, be creative. Do NOT put an emoji as the first character of the title, it should be a text only title. Write about events in third person. Only first word of the news title (after BREAKING for example) should be capitalized, don't make very short titles, they should be interesting. If user's language is other than English, write the title and prefix in that language.",
        textRequirements: {
            maxLength: 15,
            minLength: 8,
        }
    });

    return `⚡ ${generatedTexts[0]}`
}