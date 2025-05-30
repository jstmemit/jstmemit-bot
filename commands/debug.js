import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {generateUncanny} from "../generation/visual/generateUncanny.js";
import {runRandomFunction} from "../handlers/utils.js";

export const debug = async (interaction) => {
     let textResult, imageResult;
     const image = await getRandomAvatar(interaction.guildId)

     const memeTemplates = [
          () => generateUncanny(interaction.channelId)
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