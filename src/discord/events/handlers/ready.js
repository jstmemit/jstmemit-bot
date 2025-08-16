import {ActivityType, Events} from 'discord.js';
import {initializeCommands} from '#src/discord/commands/initializeCommands.js';
import {commands} from '#src/discord/commands/commands.js';
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {getConfig} from "#src/generation/getConfig.js";
import {log} from "../../../../bot.js";
import {settings} from "#config/settings.js";


export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        log.info(`Logged in as ${client.user.tag}! ID: ${client.user.id}`);

        client.user.setActivity(settings.activity, {
            type: ActivityType.Watching
        });
        log.info(`Set activity to: ${settings.activity}`);

        // thanks posthog for taking 2 minutes to load analytics data
        getConfig()

        try {
            await initializeCommands(commands);

            log.info('All commands declared successfully');
            log.info('Bot is ready to use!');
        } catch (error) {
            log.error('Error declaring commands:', error);
            analytics.captureException(error)
        }
    },
};