import OpenAI from "openai";
import dotenv from "dotenv";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {analyzeImagePrompt} from "#src/generation/text/openai/prompts.js";

const client = new OpenAI({
    apiKey: dotenv.config().parsed.OPENAI_API_KEY,
    posthog: analytics,
});

export const analyzeImage = async (image, language = "en") => {
    if (!image || typeof image !== "string") {
        return ""
    }

    const res = await client.chat.completions.create({
        model: "gpt-5-nano",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: analyzeImagePrompt + `\n\nUser's language: ${language}`,
                    },
                    {type: "image_url", image_url: {url: image}},
                ],
            },
        ],
    });

    const text = (res.choices?.[0]?.message?.content || "").trim();
    return text.slice(0, 150);
};