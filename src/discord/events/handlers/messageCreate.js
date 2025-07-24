import {Events} from 'discord.js';
import {handleNewMessage} from '#src/discord/handlers/handleNewMessage.js';

export default {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        await handleNewMessage(message);
    },
};