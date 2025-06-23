import {getChannelImages} from "../database/queries/getChannelImages.js";

export const getRandomImage = async (interaction, channelId) => {
    try {
        const authorAvatar = interaction.member.displayAvatarURL({
            dynamic: true,
            size: 1024,
        });

        if (Math.random() < 0.2) {
            return authorAvatar;
        } else {
            const images = await getChannelImages(channelId);
            if (!images || images.length === 0) {
                return authorAvatar;
            }
            return images[Math.floor(Math.random() * images.length)];
        }
    } catch (error) {
        console.error("Error getting random image", error);
        throw error;
    }
};