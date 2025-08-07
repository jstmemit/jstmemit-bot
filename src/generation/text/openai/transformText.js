import OpenAI from "openai";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import dotenv from "dotenv";
import {systemPrompt} from "#src/generation/text/openai/prompts.js";

let client;

export const transformText = async (messages, templateData, provider = "openai") => {


    if (!provider || provider === "openai") {
        if (!client) {
            client = new OpenAI({
                apiKey: dotenv.config().parsed.OPENAI_API_KEY,
                posthog: analytics,
            });
        }
    } else {
        client = new OpenAI({
            apiKey: dotenv.config().parsed.LLAMACPP_API_KEY,
            baseURL: dotenv.config().parsed.LLAMACPP_API_URL,
            posthog: analytics,
        })
    }

    let name, description, textRequirements;

    if (templateData) {
        ({name, description, textRequirements} = templateData);
    }

    if (!messages || messages?.length < 3) {
        return false;
    }

    if (!textRequirements || Object.keys(textRequirements).length === 0) {
        return false;
    }
    let prompt = `
<CHANNEL MESSAGES START>
${messages?.map((message) => `${message}`).join('\n')}
<CHANNEL MESSAGES END>

<MEME TEMPLATE INFO START>
Name: ${name}
Description: ${description}
Text requirements: ${JSON.stringify(textRequirements, null, 2)}
<MEME TEMPLATE INFO END>
        `;

    prompt = prompt.replace(/https?:\/\/[^\s]+/g, '').replace(/<think>[\s\S]*?<\/think>/g, '').trim();

    if (provider === "openai") {

        try {
            const thread = await client.beta.threads.create();

            await client.beta.threads.messages.create(thread.id, {
                role: "user",
                content: prompt
            });

            const run = await client.beta.threads.runs.createAndPoll(thread.id, {
                assistant_id: "asst_Ecxs2QsvPIe68uNQUDBfdXD3"
            });

            if (run.status === 'completed') {
                const messages = await client.beta.threads.messages.list(thread.id);

                const assistantMessage = messages.data.find(msg => msg.role === 'assistant');

                if (assistantMessage && assistantMessage.content[0]) {
                    const responseText = assistantMessage.content[0].text.value;
                    await analytics.flush();
                    return JSON.parse(responseText);
                }
            } else {
                analytics.captureException(`Run failed: ${run.status}`, {
                    threadId: thread.id,
                    runId: run.id,
                    messagesCount: messages.length,
                });
                throw new Error('Text transformation failed');
            }

        } catch (error) {
            analytics.captureException(error, {
                templateData,
            });
            throw error;
        }
    } else {
        try {
            const response = await client.chat.completions.create({
                model: "gpt-5",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: prompt + "/no_think"
                    }
                ],
                max_tokens: 1000,
                temperature: 0.7,
            });

            let responseText = response.choices?.[0]?.message?.content
            responseText = responseText.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
            return JSON.parse(responseText);
        } catch (error) {
            analytics.captureException(error, {
                templateData,
            });
            throw error;
        }

    }
};