import {getChannelMessages} from "#database/queries/getChannelMessages.js";
import {generateText} from "#src/generation/text/markov/generateText.js";
import {settings} from "#config/settings.js";
import {narrateText} from "#src/generation/voice/elevenlabs/narrateText.js";

export const generateVoiceMessage = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);
    let text = await generateText(channelMessages, 0, 15);

    if (text.length > 250) {
        text = text.substring(0, 250);
    }

    const voice = settings.voices[Math.floor(Math.random() * settings.voices.length)];

    return narrateText(text, voice);
}