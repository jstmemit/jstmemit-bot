import {ActionRowBuilder, ButtonBuilder, ButtonStyle} from "discord.js";

export const buildRow = (likes = 0, dislikes = 0, analytics) => {
    const likeButton = new ButtonBuilder()
        .setCustomId(`like_${analytics}`)
        .setLabel(`👍 ${likes}`)
        .setStyle(ButtonStyle.Secondary);

    const regenerateButton = new ButtonBuilder()
        .setCustomId(`regenerate`)
        .setLabel('🔄️')
        .setStyle(ButtonStyle.Secondary);

    const dislikeButton = new ButtonBuilder()
        .setCustomId(`dislike_${analytics}`)
        .setLabel(`👎 ${dislikes}`)
        .setStyle(ButtonStyle.Secondary);

    return new ActionRowBuilder().addComponents(likeButton, regenerateButton, dislikeButton);
};