import {client} from "../../bot.js";

export const getRandomUsername = async (serverId) => {
    const guild = await client.guilds.fetch(serverId);

    const members = Array.from(guild.members.cache.values());

    const randomMember = members[Math.floor(Math.random() * members.length)];

    return randomMember.user.username;

}