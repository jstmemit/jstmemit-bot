import {getChannelMessages} from "#database/queries/getChannelMessages.js";
import {generateText} from "#src/generation/text/markov/generateText.js";
import {elevenlabs} from "#src/generation/voice/elevenlabs/initializeElevenLabs.js";
import {settings} from "#config/settings.js";

export const generateVoiceMessage = async (channelId) => {
    const channelMessages = await getChannelMessages(channelId);
    let text = await generateText(channelMessages, 0, 15);

    if (text.length > 250) {
        text = text.substring(0, 250);
    }

    const voice = settings.voices[Math.floor(Math.random() * settings.voices.length)];

    const audio = await elevenlabs.textToSpeech.convert(voice.id, {
        text,
        modelId: "eleven_flash_v2_5",
        voiceSettings: {
            ...voice.voiceSettings
        }
    });

    const chunks = [];
    for await (const chunk of audio) {
        chunks.push(chunk);
    }

    const audioBuffer = Buffer.concat(chunks);

    return audioBuffer;
}