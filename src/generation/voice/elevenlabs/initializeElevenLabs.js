import {ElevenLabsClient} from "@elevenlabs/elevenlabs-js";
import dotenv from "dotenv";

let elevenlabs;
const elevenLabsApiKey = dotenv.config().parsed.ELEVENLABS_API_KEY

if (elevenLabsApiKey) {
    elevenlabs = new ElevenLabsClient({
        apiKey: elevenLabsApiKey
    });

}

export {elevenlabs};