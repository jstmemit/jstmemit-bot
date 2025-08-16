import {Buffer} from "node:buffer";
import {elevenlabs} from "#src/generation/voice/elevenlabs/initializeElevenLabs.js";
import {settings} from "#config/settings.js";
import dotenv from "dotenv";
import axios from "axios";

export const narrateText = async (text, voice, stutter) => {

    if (voice === "random") {
        voice = settings.voices[Math.floor(Math.random() * settings.voices.length)];
    } else {
        voice = settings.voices.find(v => v.id === voice) || settings.voices[0];
    }

    let audio;

    switch (voice.provider) {
        case "elevenlabs":
            if (stutter) {
                voice.voiceSettings = {
                    ...voice.voiceSettings,
                    speed: 0.7,
                    stability: 0.01
                };
            }

            audio = await elevenlabs.textToSpeech.convert(voice.id, {
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
            break;
        case "kokoro":
            const kokoroBaseUrl = dotenv.config().parsed.KOKORO_API_URL

            const response = await axios.post(`${kokoroBaseUrl}/audio/speech`, {
                model: "kokoro",
                input: text,
                voice: voice.id,
                response_format: "mp3",
                download_format: "mp3",
                speed: stutter ? 0.3 : (voice?.voiceSettings?.speed || 1),
                stream: false,
                return_download_link: false,
                volume_multiplier: 1,
                lang_code: "en-US",
                normalization_options: {
                    normalize: true,
                    unit_normalization: false,
                    url_normalization: true,
                    email_normalization: true,
                    optional_pluralization_normalization: true,
                    phone_normalization: true,
                    replace_remaining_symbols: true
                }
            }, {
                responseType: 'arraybuffer'
            });

            return Buffer.from(response.data, 'binary');
            break;
    }
};