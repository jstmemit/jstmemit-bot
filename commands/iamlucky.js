import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {generateFancyBear} from "../generation/visual/generateFancyBear.js";
import {generateGreentext} from "../generation/text/markov/generateGreentext.js";
import {generateQuote} from "../generation/visual/generateQuote.js";
import {generateSpeechbubble} from "../generation/visual/generateSpeechbubble.js";
import {getTimestamp, runRandomFunction} from "../handlers/utils.js";
import {generateUncanny} from "../generation/visual/generateUncanny.js";
import {generateLooksAtPaperAngry} from "../generation/visual/generateLooksAtPaperAngry.js";
import {ButtonStyle} from "discord.js";
import {buildRow} from "../discord/buttons/buildRow.js";
import {generateCycle} from "../generation/visual/generateCycle.js";

export const iamlucky = async (interaction, isRegenerate) => {
    let textResult, imageResult, mention = '';
    const image = await getRandomAvatar(interaction.guildId)

    if (isRegenerate) {
        mention = `<@${interaction.user.id}>`;
    }

    const memeTemplates = [
        () => generateQuote(image, interaction.channelId, interaction.guildId),
        () => generateSpeechbubble(image, interaction.channelId),
        () => generateFancyBear(interaction.channelId),
        () => generateGreentext(interaction.channelId),
        () => generateUncanny(interaction.channelId),
        () => generateLooksAtPaperAngry(interaction.channelId, interaction.guildId),
        () => generateCycle(interaction.channelId),
    ]

    const {result, functionName} = await runRandomFunction(memeTemplates);

    if (typeof result === 'string') {
        textResult = result;
        await interaction.reply({
            content: `${mention}\n${textResult}`,
            components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
        });

    } else {
        imageResult = result;
        await interaction.reply({
            content: `${mention}`,
            files: [result],
            components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
        });
    }
};