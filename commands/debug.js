import {generateText} from "../generation/text/markov/generateText.js";
import {getChannelMessages} from "../database/queries/getChannelMessages.js";

export const debug = async (interaction) => {
    // const image = interaction.options.getAttachment('image');

    // const debugImageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'), 'speechbubble', 200);

    // await interaction.reply({files: [debugImageResult]});

    await interaction.reply({
        content: await generateText(await getChannelMessages(interaction.channelId), 2, 10)
    });
};