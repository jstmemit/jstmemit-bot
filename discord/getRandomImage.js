import {client} from "../bot.js";
import {getChannelImages} from "../database/queries/getChannelImages.js";

export const getRandomImage = async (serverId, channelId) => {
    try {
        const guild = await client.guilds.fetch(serverId);
        const members = Array.from(guild.members.cache.values());
        const randomMember = members[Math.floor(Math.random() * members.length)];

        if (Math.random() < 0.3) {
            return randomMember.user.displayAvatarURL({dynamic: true, size: 1024});
        } else {
            const images = await getChannelImages(channelId)
            if (!images) {
                return randomMember.user.displayAvatarURL({dynamic: true, size: 1024});
            }
            if (images.size === 0) {
                return randomMember.user.displayAvatarURL({dynamic: true, size: 1024});
            }
            return images[Math.floor(Math.random() * images.length)];
        }

    } catch (error) {
        console.error('Error getting random avatar', error);
        throw error;
    }
}