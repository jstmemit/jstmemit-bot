import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {getTimestamp, runRandomFunction} from "../handlers/utils.js";
import {ButtonStyle} from "discord.js";
import {buildRow} from "../discord/buttons/buildRow.js";
import {generateSteppedInShit} from "../generation/visual/generateSteppedInShit.js";

export const debug = async (interaction, isRegenerate) => {
     let textResult, imageResult, mention = '';
     const image = await getRandomAvatar(interaction.guildId)

     if (isRegenerate) {
          mention = `<@${interaction.user.id}>`;
     }

     const memeTemplates = [
          () => generateSteppedInShit(interaction.channelId, interaction.guildId),
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