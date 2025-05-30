import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {runRandomFunction} from "../handlers/utils.js";
import {generateLooksAtPaperAngry} from "../generation/visual/generateLooksAtPaperAngry.js";

export const debug = async (interaction) => {
     let textResult, imageResult;
     const image = await getRandomAvatar(interaction.guildId)

     const memeTemplates = [
          () => generateLooksAtPaperAngry(interaction.channelId, interaction.guildId)
     ]

     const result = await runRandomFunction(memeTemplates)

     if (typeof result === 'string') {
          textResult = result;
          await interaction.reply({content: textResult});

     } else {
          imageResult = result;
          await interaction.reply({files: [result]});
     }
};