import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {generateQuote} from "../generation/generateQuote.js";

export const iamlucky = async (interaction) => {
    const image = await getRandomAvatar(interaction.guildId)

    const result = await generateQuote(image, interaction.channelId, interaction.guildId);
    //  const result = await generateSpeechbubble(image, interaction.channelId);

    await interaction.reply({files: [result]});
};