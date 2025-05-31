import {getRandomImage} from "../getRandomImage.js";
import {getTimestamp, runRandomFunction} from "../../utils.js";
import {ButtonStyle} from "discord.js";
import {buildRow} from "../buttons/buildRow.js";
import {generateWojackPoint} from "../../generation/visual/generateWojackPoint.js";

export const debug = async (interaction, isRegenerate) => {
     let textResult, imageResult, mention = '';
     const image = await getRandomImage(interaction.guildId, interaction.channelId)

     if (isRegenerate) {
          mention = `<@${interaction.user.id}>`;
     }

     const memeTemplates = [
          () => generateWojackPoint(interaction.channelId, interaction.guildId),
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