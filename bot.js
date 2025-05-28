import {initializeCommands} from "./commands/initializeCommands.js";
import {commands} from "./commands.js";
import dotenv from 'dotenv';
import {Client, Events, GatewayIntentBits} from 'discord.js';
import {debug} from "./commands/debug.js";
import {handleNewMessage} from "./handlers/handleNewMessage.js";
import {iamlucky} from "./commands/iamlucky.js";

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
	if (!interaction.isChatInputCommand()) return;

	switch (interaction.commandName) {
		case 'debug':
			await debug(interaction);
			break;
		case 'iamlucky':
			await iamlucky(interaction);
	}
});

client.login(dotenv.config().parsed.DISCORD_TOKEN);