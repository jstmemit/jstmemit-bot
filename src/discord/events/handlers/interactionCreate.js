import {Events, MessageFlags, TextInputStyle} from 'discord.js';
import {enable} from "#src/discord/commands/enable.js";
import {settings} from "#src/discord/commands/settings.js";
import {premium} from "#src/discord/commands/premium.js";
import {checkIsEnabled} from "#src/discord/checkIsEnabled.js";
import {handleDisabledChannel} from "#src/discord/handlers/handleDisabledChannel.js";
import {meme} from "#src/discord/commands/meme.js";
import {handleToggleBot} from "#src/discord/handlers/handleToggleBot.js";
import {handleUpdateEnableEmbed} from "#src/discord/handlers/handleUpdateEnableEmbed.js";
import {handleUpdateSettingsEmbed} from "#src/discord/handlers/handleUpdateSettingsEmbed.js";
import {handleToggleMentions} from "#src/discord/handlers/handleToggleMentions.js";
import {handleUpdatePremiumEmbed} from "#src/discord/handlers/handleUpdatePremiumEmbed.js";
import {handleToggleWatermark} from "#src/discord/handlers/handleToggleWatermark.js";
import {handlePermissionCheck} from "#src/discord/handlers/handlePermissionCheck.js";
import {constructLoadingEmbed} from "#src/discord/embeds/constructLoadingEmbed.js";
import {handleEraseData} from "#src/discord/handlers/handleEraseData.js";
import {handleLinkChannel} from "#src/discord/handlers/handleLinkChannel.js";
import {vote} from "#src/discord/buttons/vote/votes.js";
import {handleFrequencyChange} from "#src/discord/handlers/handleFrequencyChange.js";
import {handleMemeTemplatesChange} from "#src/discord/handlers/handleMemeTemplatesChange.js";
import {handleDataRetentionChange} from "#src/discord/handlers/handleDataRetentionChange.js";
import {handleUseUserImagesChange} from "#src/discord/handlers/handleUseUserImagesChange.js";
import {handleLanguageChange} from "#src/discord/handlers/handleLanguageChange.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {handleSurveyTextResponse} from "#src/discord/handlers/handleSurveyTextResponse.js";
import {handleSurveySelectInteraction} from "#src/discord/handlers/handleSurveySelectInteraction.js";
import {handleSurveyButtonInteraction} from "#src/discord/handlers/handleSurveyButtonInteraction.js";
import {handleEngineChange} from "#src/discord/handlers/handleEngineChange.js";
import {voice} from "#src/discord/commands/voice.js";
import {log} from "../../../../bot.js";

export default {
    name: Events.InteractionCreate,
    async execute(interaction) {
        try {

            if (interaction.isContextMenuCommand()) {
                if (!await checkIsEnabled(interaction.channelId)) {
                    await handleDisabledChannel(interaction);
                    return;
                }

                switch (interaction.commandName) {
                    case 'Narrate text':
                        await voice(interaction);
                        return;
                }
            }

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
                    case 'voice':
                        await voice(interaction);
                        return;
                }

            }

            if (interaction.isButton()) {
                const {customId} = interaction;

                if (customId.startsWith("rt-") || customId.startsWith("op-") || customId.startsWith("lk-")) {
                    await handleSurveyButtonInteraction(interaction);
                    return;
                }

                if (customId.startsWith("enable-") || customId.startsWith("disable-")) {
                    await handleToggleBot(interaction);

                    if (customId.split('-')[2] == 'false') {
                        await handleUpdateEnableEmbed(interaction);
                    } else {
                        try {
                            await handleUpdateSettingsEmbed(interaction, "general");
                        } catch (error) {
                            log.error(error)
                        }
                    }
                    return;
                }

                if (customId.startsWith("mentionenable-") || customId.startsWith("mentiondisable-")) {
                    try {
                        await handleToggleMentions(interaction);
                        await handleUpdatePremiumEmbed(interaction);
                    } catch (error) {
                        log.error(error)
                    }

                    return;
                }

                if (customId.startsWith("watermarkenable-") || customId.startsWith("watermarkdisable-")) {
                    try {
                        await handleToggleWatermark(interaction);
                        await handleUpdatePremiumEmbed(interaction);
                    } catch (error) {
                        log.error(error)
                    }

                    return;
                }

                if (customId == 'settings-open') {

                    // if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
                    //     return;
                    // }

                    const loading = await constructLoadingEmbed(interaction.channelId)
                    await interaction.reply({
                        flags: MessageFlags.IsComponentsV2,
                        components: loading
                    })
                    await handleUpdateSettingsEmbed(interaction);
                }

                if (customId.startsWith("settings-tab-")) {
                    // if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
                    //     return;
                    // }

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
                const analyticsId = customId.split('_')[1];

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
                    await vote(interaction, analyticsId, id);
                }
            }

            if (interaction.isStringSelectMenu()) {
                const {customId} = interaction;

                if (customId.startsWith("rs-") || customId.startsWith("mc-") || customId.startsWith("sc-")) {
                    await handleSurveySelectInteraction(interaction);
                    return;
                }

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
                    case "select-betaengine":
                        await handleEngineChange(interaction);
                        break;
                }
            }

            if (interaction.isModalSubmit()) {
                if (interaction.customId.startsWith("survey-text-")) {
                    await handleSurveyTextResponse(interaction);
                    return;
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

        } catch (error) {
            log.error('Error handling interaction:', error);
            analytics.captureException(error, interaction.channelId);
        }
    },
};