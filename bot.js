import {initializeCommands} from "./discord/commands/initializeCommands.js";
import {commands} from "./discord/commands/commands.js";
import dotenv from 'dotenv';
import {ActivityType, Client, Events, GatewayIntentBits, MessageFlags} from 'discord.js';
import {debug} from "./discord/commands/debug.js";
import {handleNewMessage} from "./discord/handlers/handleNewMessage.js";
import {meme} from "./discord/commands/meme.js";
import {vote} from "./discord/buttons/vote/votes.js";
import {checkIsEnabled} from "./discord/checkIsEnabled.js";
import {handleDisabledChannel} from "./discord/handlers/handleDisabledChannel.js";
import {enable} from "./discord/commands/enable.js";
import {settings} from "./discord/commands/settings.js";
import {handleLanguageChange} from "./discord/handlers/handleLanguageChange.js";
import {handleUseUserImagesChange} from "./discord/handlers/handleUseUserImagesChange.js";
import {handleDataRetentionChange} from "./discord/handlers/handleDataRetentionChange.js";
import {handleMemeTemplatesChange} from "./discord/handlers/handleMemeTemplatesChange.js";
import {handleFrequencyChange} from "./discord/handlers/handleFrequencyChange.js";
import {handleEraseData} from "./discord/handlers/handleEraseData.js";
import {handleToggleBot} from "./discord/handlers/handleToggleBot.js";
import {handleUpdateSettingsEmbed} from "./discord/handlers/handleUpdateSettingsEmbed.js";
import {handlePermissionCheck} from "./discord/handlers/handlePermissionCheck.js";
import {startDataRoutine} from "./database/routines/startDataRoutine.js";
import {PostHog} from 'posthog-node'
import {handleUpdateEnableEmbed} from "./discord/handlers/handleUpdateEnableEmbed.js";
import {constructLoadingEmbed} from "./discord/embeds/constructLoadingEmbed.js";

export const analytics = await new PostHog(
	dotenv.config().parsed.POSTHOG_KEY,
	{
		host: 'https://eu.i.posthog.com',
		enableExceptionAutocapture: true
	}
)

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
			case 'meme':
				await meme(interaction);
				return;
		}

	}

	if (interaction.isButton()) {
		const {customId} = interaction;

		if (customId.startsWith("enable-") || customId.startsWith("disable-")) {
			await handleToggleBot(interaction);

			if (customId.split('-')[2] == 'false') {
				await handleUpdateEnableEmbed(interaction);
			} else {
				try {
					await handleUpdateSettingsEmbed(interaction);
				} catch (error) {
					console.log(error)
				}
			}
			return;
		}

		if (customId == 'settings-open') {
			const loading = await constructLoadingEmbed(interaction.channelId)
			await interaction.reply({
				flags: MessageFlags.IsComponentsV2,
				components: loading
			})
			await handleUpdateSettingsEmbed(interaction);
		}

		if (customId.startsWith("erase-")) {
			await handleEraseData(interaction);
			return;
		}

		const id = customId.split('_')[0];
		const analytics = customId.split('_')[1];

		switch (id) {
			case 'regenerate':
				await meme(interaction, true);
				break;
		}

		if (id === 'like' || id === 'dislike') {
			await vote(interaction, analytics, id);
		}
	}

	if (interaction.isStringSelectMenu()) {
		const {customId} = interaction;

		if (!await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')) {
			return;
		}

		switch (customId) {
			case "select-frequency":
				await handleFrequencyChange(interaction);
				await handleUpdateSettingsEmbed(interaction);
				break;
			case "select-memetemplates":
				await handleMemeTemplatesChange(interaction);
				await handleUpdateSettingsEmbed(interaction);
				break;
			case "select-dataretention":
				await handleDataRetentionChange(interaction);
				await handleUpdateSettingsEmbed(interaction);
				break;
			case "select-useuserimages":
				await handleUseUserImagesChange(interaction);
				await handleUpdateSettingsEmbed(interaction);
				break;
			case "select-language":
				await handleLanguageChange(interaction);
				await handleUpdateSettingsEmbed(interaction);
				break;
		}
	}

});

startDataRoutine()

client.login(dotenv.config().parsed.DISCORD_TOKEN);