import {Events, MessageFlags} from 'discord.js';
import {handleNewMessage} from '#src/discord/handlers/handleNewMessage.js';
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {log} from "../../../../bot.js";

export default {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        try {
            await handleNewMessage(message);
        } catch (error) {
            log.error('Error handling new message:', error);
            analytics.captureException(error, message.channel.id);
        }
    },
};