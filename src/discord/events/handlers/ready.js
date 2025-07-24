import {ActivityType, Events} from 'discord.js';
import {initializeCommands} from '#src/discord/commands/initializeCommands.js';
import {commands} from '#src/discord/commands/commands.js';
import {analytics} from "../../../../bot.js";

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);

        client.user.setActivity('how to make memes', {
            type: ActivityType.Watching
        });

        try {
            await initializeCommands(commands);
            console.log('Commands initialized successfully.');
        } catch (error) {
            console.error('Error initializing commands:', error);
            analytics.captureException(error)
        }
    },
};