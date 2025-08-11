import {ElevenLabsClient} from "@elevenlabs/elevenlabs-js";
import dotenv from "dotenv";

export const elevenlabs = new ElevenLabsClient({
    apiKey: dotenv.config().parsed.ELEVENLABS_API_KEY,
});