import {overlayImage} from "../generation/visual/overlayImage.js";
import {getTemplateFiles} from "../generation/visual/getTemplateFiles.js";

export const debug = async (interaction) => {
    const image = interaction.options.getAttachment('image');

    const debugImageResult = await overlayImage(image, await getTemplateFiles('speechbubble.png'))
    console.log('Debug image generated:', debugImageResult);

    await interaction.reply({files: [debugImageResult]});
};