import {generateText} from "../generation/text/markov/helpers/generateText.js";
import {getTemplateFiles} from "../generation/visual/helpers/getTemplateFiles.js";
import {overlayImage} from "../generation/visual/helpers/overlayImage.js";
import {addText} from "../generation/visual/helpers/addText.js";
import {getChannelMessages} from "../database/queries/getChannelMessages.js";

export const debug = async (interaction) => {
     const image = interaction.options.getAttachment('image')
     const debugImageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'), 'speechbubble', 200)

     const channelMessages = await getChannelMessages(interaction.channelId);
     const generatedText = await generateText(channelMessages, 2, 10);
     const result = await addText('speechbubble', debugImageResult, generatedText);

     await interaction.reply({files: [result]});

     // await interaction.reply({
     //     content: await generateText(await getChannelMessages(interaction.channelId), 2, 10)
     // });
};