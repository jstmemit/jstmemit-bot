import dotenv from 'dotenv';
import {ActivityType, Client, Events, GatewayIntentBits, MessageFlags} from 'discord.js';
import {meme} from "./src/discord/commands/meme.js";
import {vote} from "./src/discord/buttons/vote/votes.js";
import {checkIsEnabled} from "./src/discord/checkIsEnabled.js";
import {handleDisabledChannel} from "./src/discord/handlers/handleDisabledChannel.js";
import {enable} from "./src/discord/commands/enable.js";
import {settings} from "./src/discord/commands/settings.js";
import {handleLanguageChange} from "./src/discord/handlers/handleLanguageChange.js";
import {handleUseUserImagesChange} from "./src/discord/handlers/handleUseUserImagesChange.js";
import {handleDataRetentionChange} from "./src/discord/handlers/handleDataRetentionChange.js";
import {handleMemeTemplatesChange} from "./src/discord/handlers/handleMemeTemplatesChange.js";
import {handleFrequencyChange} from "./src/discord/handlers/handleFrequencyChange.js";
import {handleEraseData} from "./src/discord/handlers/handleEraseData.js";
import {handleToggleBot} from "./src/discord/handlers/handleToggleBot.js";
import {handleUpdateSettingsEmbed} from "./src/discord/handlers/handleUpdateSettingsEmbed.js";
import {handlePermissionCheck} from "./src/discord/handlers/handlePermissionCheck.js";
import {startDataRoutine} from "./src/database/routines/startDataRoutine.js";
import {PostHog} from 'posthog-node'
import {handleUpdateEnableEmbed} from "./src/discord/handlers/handleUpdateEnableEmbed.js";
import {constructLoadingEmbed} from "./src/discord/embeds/constructLoadingEmbed.js";
import {premium} from "./src/discord/commands/premium.js";
import {handleNewEntitlement} from "./src/discord/handlers/handleNewEntitlement.js";
import {handleToggleMentions} from "./src/discord/handlers/handleToggleMentions.js";
import {handleUpdatePremiumEmbed} from "./src/discord/handlers/handleUpdatePremiumEmbed.js";
import {handleToggleWatermark} from "./src/discord/handlers/handleToggleWatermark.js";
import {handleLinkChannel} from "./src/discord/handlers/handleLinkChannel.js";
import {sendKumaPing} from "#src/analytics/heartbeat/sendKumaPing.js";
import {AutoPoster} from 'topgg-autoposter';
import {loadEvents} from "#src/discord/events/eventLoader.js";

let analytics = null;
try {
	analytics = new PostHog(
		process.env.POSTHOG_KEY,
		{
			host: 'https://eu.i.posthog.com',
			enableExceptionAutocapture: true
		}
	);
} catch (error) {
	console.error('Failed to initialize PostHog:', error.message);
}

export {analytics};

export const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on(Events.EntitlementCreate, async entitlement => {
	await handleNewEntitlement(entitlement);
})

client.on(Events.InteractionCreate, async interaction => {

	if (interaction.isChatInputCommand()) {

		switch (interaction.commandName) {
			case 'enable':
				await enable(interaction);
				return;
			case 'settings':
				await settings(interaction);
				return;
			case 'premium':
				await premium(interaction);
				return;
		}

		if (!await checkIsEnabled(interaction.channelId)) {
			await handleDisabledChannel(interaction);
			return;
		}

		switch (interaction.commandName) {
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
					await handleUpdateSettingsEmbed(interaction, "general");
				} catch (error) {
					console.log(error)
				}
			}
			return;
		}

		if (customId.startsWith("mentionenable-") || customId.startsWith("mentiondisable-")) {
			try {
				await handleToggleMentions(interaction);
				await handleUpdatePremiumEmbed(interaction);
			} catch (error) {
				console.log(error)
			}

			return;
		}

		if (customId.startsWith("watermarkenable-") || customId.startsWith("watermarkdisable-")) {
			try {
				await handleToggleWatermark(interaction);
				await handleUpdatePremiumEmbed(interaction);
			} catch (error) {
				console.log(error)
			}

			return;
		}

		if (customId == 'settings-open') {

			if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
				return;
			}

			const loading = await constructLoadingEmbed(interaction.channelId)
			await interaction.reply({
				flags: MessageFlags.IsComponentsV2,
				components: loading
			})
			await handleUpdateSettingsEmbed(interaction);
		}

		if (customId.startsWith("settings-tab-")) {
			if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
				return;
			}

			const tab = customId.split('-')[2];
			await interaction.deferUpdate();
			await handleUpdateSettingsEmbed(interaction, tab);
			return;
		}

		if (customId.startsWith("erase-")) {
			await handleEraseData(interaction);
			return;
		}

		if (customId.startsWith("manage-premium")) {
			await premium(interaction);
		}

		const id = customId.split('_')[0];
		const analytics = customId.split('_')[1];

		switch (id) {
			case 'regenerate':
				await meme(interaction, true);
				break;
		}

		if (customId.startsWith("unlink-")) {
			await handleLinkChannel(interaction);
			await handleUpdatePremiumEmbed(interaction);
		}

		if (id === 'like' || id === 'dislike') {
			await vote(interaction, analytics, id);
		}
	}

	if (interaction.isStringSelectMenu()) {
		const {customId} = interaction;

		if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
			return;
		}

		switch (customId) {
			case "select-frequency":
				await handleFrequencyChange(interaction);
				await handleUpdateSettingsEmbed(interaction, "meme");
				break;
			case "select-memetemplates":
				await handleMemeTemplatesChange(interaction);
				await handleUpdateSettingsEmbed(interaction, "meme");
				break;
			case "select-dataretention":
				await handleDataRetentionChange(interaction);
				await handleUpdateSettingsEmbed(interaction, "data");
				break;
			case "select-useuserimages":
				await handleUseUserImagesChange(interaction);
				await handleUpdateSettingsEmbed(interaction, "data");
				break;
			case "select-language":
				await handleLanguageChange(interaction);
				await handleUpdateSettingsEmbed(interaction, "general");
				break;
		}
	}

	if (interaction.isChannelSelectMenu()) {
		const {customId} = interaction;

		if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
			return;
		}

		switch (customId) {
			case "select-linkchannel":
				await handleLinkChannel(interaction);
				await handleUpdatePremiumEmbed(interaction);
				break;
		}
	}

});

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
	console.error('Uncaught Exception:', error);
});

startDataRoutine()
sendKumaPing();


loadEvents(client);

if (dotenv.config().parsed.TOPGG_TOKEN) {
	const poster = AutoPoster(dotenv.config().parsed.TOPGG_TOKEN, client)
}
client.login(dotenv.config().parsed.DISCORD_TOKEN);