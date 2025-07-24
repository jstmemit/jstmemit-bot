import dotenv from 'dotenv';
import {ActivityType, Client, GatewayIntentBits, MessageFlags} from 'discord.js';
import {AutoPoster} from 'topgg-autoposter';
import {loadEvents} from "#src/discord/events/eventLoader.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	if (analytics) {
		analytics.captureException(reason);
	}
});

process.on('uncaughtException', (error) => {
	console.error('Uncaught Exception:', error);
	if (analytics) {
		analytics.captureException(error);
	}
});


loadEvents(client);

if (dotenv.config().parsed.TOPGG_TOKEN) {
	const poster = AutoPoster(dotenv.config().parsed.TOPGG_TOKEN, client)
}

client.login(dotenv.config().parsed.DISCORD_TOKEN);