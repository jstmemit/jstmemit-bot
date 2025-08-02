import OpenAI from "openai";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import dotenv from "dotenv";

let client;

export const transformText = async (messages, templateData) => {

    if (!client) {
        client = new OpenAI({
            apiKey: dotenv.config().parsed.OPENAI_API_KEY,
            posthog: analytics,
        });
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

    try {
        const thread = await client.beta.threads.create();

        const prompt = `
<CHANNEL MESSAGES START>
${messages?.map((message) => `${message}`).join('\n')}
<CHANNEL MESSAGES END>

<MEME TEMPLATE INFO START>
Name: ${name}
Description: ${description}
Text requirements: ${JSON.stringify(textRequirements, null, 2)}
<MEME TEMPLATE INFO END>
        `;

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
};