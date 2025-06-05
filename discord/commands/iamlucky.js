import {getRandomImage} from "../getRandomImage.js";
import {generateFancyBear} from "../../generation/visual/generateFancyBear.js";
import {generateGreentext} from "../../generation/text/markov/generateGreentext.js";
import {generateQuote} from "../../generation/visual/generateQuote.js";
import {getTimestamp, runRandomFunction} from "../../utils.js";
import {generateUncanny} from "../../generation/visual/generateUncanny.js";
import {generateLooksAtPaperAngry} from "../../generation/visual/generateLooksAtPaperAngry.js";
import {ButtonStyle} from "discord.js";
import {buildRow} from "../buttons/buildRow.js";
import {generateCycle} from "../../generation/visual/generateCycle.js";
import {generateSteppedInShit} from "../../generation/visual/generateSteppedInShit.js";
import {generateWojackPoint} from "../../generation/visual/generateWojackPoint.js";
import {checkIsEnabled} from "../checkIsEnabled.js";
import {handleDisabledChannel} from "../handlers/handleDisabledChannel.js";
import {generateIsThisAPigeon} from "../../generation/visual/generateIsThisAPigeon.js";
import {generateYesChad} from "../../generation/visual/generateYesChad.js";

export const iamlucky = async (interaction, isRegenerate) => {
    let textResult, imageResult, mention = '';
    const image = await getRandomImage(interaction.guildId, interaction.channelId)

    if (isRegenerate) {
        if (!await checkIsEnabled(interaction.channelId)) {
            await handleDisabledChannel(interaction);
            return;
        }
        mention = `<@${interaction.user.id}>`;
    }

    const memeTemplates = [
        () => generateQuote(image, interaction.channelId, interaction.guildId),
        // () => generateSpeechbubble(image, interaction.channelId),
        () => generateFancyBear(interaction.channelId),
        () => generateGreentext(interaction.channelId),
        () => generateUncanny(interaction.channelId),
        () => generateLooksAtPaperAngry(interaction.channelId, interaction.guildId),
        () => generateCycle(interaction.channelId),
        () => generateSteppedInShit(interaction.channelId, interaction.guildId),
        () => generateWojackPoint(interaction.channelId, interaction.guildId),
        () => generateIsThisAPigeon(interaction.channelId, interaction.guildId),
        () => generateYesChad(interaction.channelId, interaction.guildId),
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