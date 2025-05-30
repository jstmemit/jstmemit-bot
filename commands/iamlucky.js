import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {generateFancyBear} from "../generation/visual/generateFancyBear.js";
import {generateGreentext} from "../generation/text/markov/generateGreentext.js";
import {generateQuote} from "../generation/visual/generateQuote.js";
import {generateSpeechbubble} from "../generation/visual/generateSpeechbubble.js";

export const iamlucky = async (interaction) => {
    let textResult, imageResult;
    const image = await getRandomAvatar(interaction.guildId)

    const memeTemplates = [
        () => generateQuote(image, interaction.channelId, interaction.guildId),
        () => generateSpeechbubble(image, interaction.channelId),
        () => generateFancyBear(interaction.channelId),
        () => generateGreentext(interaction.channelId)
    ]

    const randomIndex = Math.floor(Math.random() * memeTemplates.length);
    const selectedTemplate = memeTemplates[randomIndex];
    const result = await selectedTemplate();

    if (typeof result === 'string') {
        textResult = result;
        await interaction.reply({content: textResult});

    } else {
        imageResult = result;
        await interaction.reply({files: [result]});
    }
};