import {initializeCommands} from "./commands/initializeCommands.js";
import {commands} from "./commands.js";
import dotenv from 'dotenv';
import {Client, Events, GatewayIntentBits} from 'discord.js';
import {debug} from "./commands/debug.js";
import {handleNewMessage} from "./handlers/handleNewMessage.js";
import {iamlucky} from "./commands/iamlucky.js";
import {parseCount} from "./discord/buttons/parseReactions.js";
import {buildRow} from "./discord/buttons/buildRow.js";

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

		if (id === 'like' || id === 'dislike') {
			const row = interaction.message.components[0];
			const likesText = row.components.find(c => c.customId.startsWith('like'));
			const dislikesText = row.components.find(c => c.customId.startsWith('dislike'));

			const likes = parseCount(likesText.label);
			const dislikes = parseCount(dislikesText.label);

			const newLikes = id === 'like' ? likes + 1 : likes;
			const newDislikes = id === 'dislike' ? dislikes + 1 : dislikes;

			await interaction.update({
				components: [buildRow(newLikes, newDislikes)],
			});
		}
	}

});

client.login(dotenv.config().parsed.DISCORD_TOKEN);