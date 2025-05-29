import {getRandomAvatar} from "../discord/getRandomAvatar.js";
import {generateSpeechbubble} from "../generation/generateSpeechbubble.js";

export const iamlucky = async (interaction) => {
    const image = await getRandomAvatar(interaction.guildId)

    const result = await generateSpeechbubble(image, interaction.channelId);

    await interaction.reply({files: [result]});
};