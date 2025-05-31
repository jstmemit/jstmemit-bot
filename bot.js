import {initializeCommands} from "./commands/initializeCommands.js";
import {commands} from "./commands.js";
import dotenv from 'dotenv';
import {ActivityType, Client, Events, GatewayIntentBits} from 'discord.js';
import {debug} from "./commands/debug.js";
import {handleNewMessage} from "./handlers/handleNewMessage.js";
import {iamlucky} from "./commands/iamlucky.js";
import {vote} from "./discord/buttons/vote/votes.js";

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
			case 'debug':
				await debug(interaction);
				break;
			case 'iamlucky':
				await iamlucky(interaction);
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