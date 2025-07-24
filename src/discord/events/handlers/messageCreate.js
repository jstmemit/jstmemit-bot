import {Events} from 'discord.js';
import {handleNewMessage} from '#src/discord/handlers/handleNewMessage.js';
import {analytics} from "../../../../bot.js";

export default {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        try {
            await handleNewMessage(message);
        } catch (error) {
            console.error('Error handling new message:', error);
            analytics.captureException(error, message.channel.id);
        }
    },
};