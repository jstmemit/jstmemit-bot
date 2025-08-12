import {Buffer} from "node:buffer";
import {elevenlabs} from "#src/generation/voice/elevenlabs/initializeElevenLabs.js";
import {settings} from "#config/settings.js";
import dotenv from "dotenv";
import axios from "axios";

export const narrateText = async (text, voice) => {

    if (voice === "random") {
        voice = settings.voices[Math.floor(Math.random() * settings.voices.length)];
    } else {
        voice = settings.voices.find(v => v.id === voice) || settings.voices[0];
    }

    let audio;

    switch (voice.provider) {
        case "elevenlabs":
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
            // /audio/speech
            // schema
            // {
            //   "model": "kokoro",
            //   "input": "string",
            //   "voice": "af_heart",
            //   "response_format": "mp3",
            //   "download_format": "mp3",
            //   "speed": 1,
            //   "stream": true,
            //   "return_download_link": false,
            //   "lang_code": "string",
            //   "volume_multiplier": 1,
            //   "normalization_options": {
            //     "normalize": true,
            //     "unit_normalization": false,
            //     "url_normalization": true,
            //     "email_normalization": true,
            //     "optional_pluralization_normalization": true,
            //     "phone_normalization": true,
            //     "replace_remaining_symbols": true
            //   }
            // }

            const response = await axios.post(`${kokoroBaseUrl}/audio/speech`, {
                model: "kokoro",
                input: text,
                voice: voice.id,
                response_format: "mp3",
                download_format: "mp3",
                speed: 1,
                stream: false,
                return_download_link: false,
                lang_code: "en-US",
                volume_multiplier: 1,
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