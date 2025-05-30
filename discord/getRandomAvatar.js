import {client} from "../bot.js";

export const getRandomAvatar = async (serverId) => {
    try {
        const guild = await client.guilds.fetch(serverId);

        const members = Array.from(guild.members.cache.values());

        const randomMember = members[Math.floor(Math.random() * members.length)];

        return randomMember.user.displayAvatarURL({dynamic: true, size: 1024});
    } catch (error) {
        console.error('Error getting random avatar', error);
        throw error;
    }
}