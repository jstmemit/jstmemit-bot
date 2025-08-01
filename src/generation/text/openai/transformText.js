import OpenAI from "openai";

const client = new OpenAI();

export const transformText = async (messages, templateData) => {
    let result, name, description, textRequirements

    if (templateData) {
        ({name, description, textRequirements} = templateData);
    }

    const response = await client.responses.create({
        model: "asst_Ecxs2QsvPIe68uNQUDBfdXD3",
        input: `
<CHANNEL MESSAGES START>
${messages.map((message) => `${message}`).join('\n')}
<CHANNEL MESSAGES END>

<MEME TEMPLATE INFO START>
Name: ${name}
Description: ${description}
Text requirements: ${textRequirements.toString()}

<MEME TEMPLATE INFO END>
        `
    });

    console.log(response)
    return response.output_text;
};