import dotenv from 'dotenv';
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {ActivityType, Client, GatewayIntentBits, MessageFlags} from 'discord.js';
import {AutoPoster} from 'topgg-autoposter';
import {loadEvents} from "#src/discord/events/eventLoader.js";
import {validateSettings} from "#src/validation/validateSettings.js";
import {settings} from "#config/settings.js";
import * as tracer from "tracer"

export const log = tracer.colorConsole({
	format: '{{timestamp}} {{message}}'
})
log.info('Starting the bot...');

export const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

process.on('unhandledRejection', (reason, promise) => {
	log.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
	log.error('Uncaught Exception:', error);
});


loadEvents(client);

if (dotenv.config().parsed.TOPGG_TOKEN) {
	const poster = AutoPoster(dotenv.config().parsed.TOPGG_TOKEN, client)

	poster.on('posted', async (stats) => {
		await analytics.capture({
			distinctId: `topgg-${client.user.id}`,
			event: 'topgg_stats_posted',
			properties: {
				...stats
			},
		});

		await analytics.flush();
	})
}

validateSettings(settings)

client.login(dotenv.config().parsed.DISCORD_TOKEN);