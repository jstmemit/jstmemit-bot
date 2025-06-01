import {initializeCommands} from "./discord/commands/initializeCommands.js";
import {commands} from "./discord/commands/commands.js";
import dotenv from 'dotenv';
import {ActivityType, Client, Events, GatewayIntentBits} from 'discord.js';
import {debug} from "./discord/commands/debug.js";
import {handleNewMessage} from "./discord/handlers/handleNewMessage.js";
import {iamlucky} from "./discord/commands/iamlucky.js";
import {vote} from "./discord/buttons/vote/votes.js";
import {checkIsEnabled} from "./discord/checkIsEnabled.js";
import {handleDisabledChannel} from "./discord/handlers/handleDisabledChannel.js";
import {enable} from "./discord/commands/enable.js";
import {settings} from "./discord/commands/settings.js";

export const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on(Events.ClientReady, readyClient => {
	console.log(`Logged in as ${readyClient.user.tag}!`);

	client.user.setActivity('how to make memes', {type: ActivityType.Watching});
	initializeCommands(commands).then(() => {
		console.log('Commands initialized successfully.');
	}).catch(error => {
		console.error('Error initializing commands:', error);
	});
});

client.on(Events.MessageCreate, message => {
	if (message.author.bot) return;

	handleNewMessage(message);
});

client.on(Events.InteractionCreate, async interaction => {

	if (interaction.isChatInputCommand()) {

		switch (interaction.commandName) {
			case 'enable':
				await enable(interaction);
				return;
			case 'settings':
				await settings(interaction);
				return;
		}

		if (!await checkIsEnabled(interaction.channelId)) {
			await handleDisabledChannel(interaction);
			return;
		}

		switch (interaction.commandName) {
			case 'debug':
				await debug(interaction);
				return;
			case 'iamlucky':
				await iamlucky(interaction);
				return;
		}

	}

	if (interaction.isButton()) {
		const {customId} = interaction;

		const id = customId.split('_')[0];
		const analytics = customId.split('_')[1];

		switch (id) {
			case 'regenerate':
				await iamlucky(interaction, true);
				break;
		}

		if (id === 'like' || id === 'dislike') {
			await vote(interaction, analytics, id);
		}
	}

});

client.login(dotenv.config().parsed.DISCORD_TOKEN);