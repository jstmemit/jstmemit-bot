import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {generateFancyBear} from "../generation/visual/generateFancyBear.js";

export const iamlucky = async (interaction) => {
    const image = await getRandomAvatar(interaction.guildId)

    //  const result = await generateQuote(image, interaction.channelId, interaction.guildId);
    //  const result = await generateSpeechbubble(image, interaction.channelId);
    const result = await generateFancyBear(interaction.channelId);

    await interaction.reply({files: [result]});
    //await interaction.reply({content: await generateGreentext(interaction.channelId)});
};