import {Buffer} from "node:buffer";
import {elevenlabs} from "#src/generation/voice/elevenlabs/initializeElevenLabs.js";
import {settings} from "#config/settings.js";

export const narrateText = async (text, voice) => {

    if (voice === "random") {
        voice = settings.voices[Math.floor(Math.random() * settings.voices.length)];
    } else {
        voice = settings.voices.find(v => v.id === voice) || settings.voices[0];
    }

    const audio = await elevenlabs.textToSpeech.convert(voice.id, {
        text,
        modelId: "eleven_flash_v2_5",
        voiceSettings: {
            ...(voice.voiceSettings ?? {}),
        },
    });

    const chunks = [];
    for await (const chunk of audio) {
        chunks.push(chunk);
    }

    return Buffer.concat(chunks);
};