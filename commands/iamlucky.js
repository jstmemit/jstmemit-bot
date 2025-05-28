import {generateText} from "../generation/text/markov/generateText.js";
import {getTemplateFiles} from "../generation/visual/getTemplateFiles.js";
import {overlayImage} from "../generation/visual/overlayImage.js";
import {addText} from "../generation/visual/addText.js";
import {getChannelMessages} from "../database/queries/getChannelMessages.js";
import {getRandomAvatar} from "../discord/getRandomAvatar.js";

export const iamlucky = async (interaction) => {
    const image = await getRandomAvatar(interaction.guildId)
    const debugImageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'), 'speechbubble', 200)

    const channelMessages = await getChannelMessages(interaction.channelId);
    const generatedText = await generateText(channelMessages, 2, 10);
    const result = await addText('speechbubble', debugImageResult, generatedText);

    await interaction.reply({files: [result]});

    // await interaction.reply({
    //     content: await generateText(await getChannelMessages(interaction.channelId), 2, 10)
    // });
};