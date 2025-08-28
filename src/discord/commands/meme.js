import {getRandomImage} from '../getRandomImage.js';
import {filterMentions, getTimestamp, normalizeTemplateKey, runRandomFunction, withTimeout} from '../utils.js';
import {buildRow} from '../buttons/buildRow.js';
import {checkIsEnabled} from '../checkIsEnabled.js';
import {handleDisabledChannel} from '../handlers/handleDisabledChannel.js';
import {getChannelMessages} from '../../database/queries/getChannelMessages.js';
import {handleNotEnoughContext} from '../handlers/handleNotEnoughContext.js';
import {getConfig} from '../../generation/getConfig.js';
import {getChannelSettings} from '../../database/queries/getChannelSettings.js';
import {applyWatermark} from '../../generation/visual/helpers/applyWatermark.js';
import {checkPremium} from '../helpers/checkPremium.js';
import {t} from '#src/discord/i18n/utils.js';
import {analytics} from '#src/analytics/initializeAnalytics.js';
import {log} from "../../../bot.js";

export const meme = async (interaction, isRegenerate, isUnpromted) => {
    let channelId, guildId;

    try {
        channelId = interaction.channelId;
        guildId = interaction.guildId;

        const ephemeral = isUnpromted ? false : (interaction?.options?.getBoolean('ephemeral') || false);
        const engine = isUnpromted ? "v1" : (interaction?.options?.getString('engine') || "v1");
        const template = isRegenerate ? undefined : (isUnpromted ? undefined : (interaction?.options?.getString('template') || undefined));

        const messages = await withTimeout(getChannelMessages(channelId), 10000);

        if (!messages || messages.length < 30) {
            await handleNotEnoughContext(interaction, messages ? messages.length : 0);
            return;
        }

        if (!isUnpromted) {
            await interaction.deferReply({ephemeral});
        }

        let textResult, imageResult, mention = '';
        const hasPremium = checkPremium(interaction);

        if (!channelId || !guildId) {
            log.error('No channel id or guild id');
            return;
        }

        let channelSettings = await getChannelSettings(interaction.channelId);

        // yes, it will be refactored later anyway
        if (!channelSettings) {
            channelSettings = await getChannelSettings(interaction.channelId);
        }

        if (isRegenerate) {
            const isEnabled = await withTimeout(checkIsEnabled(channelId), 5000);
            if (!isEnabled) {
                await handleDisabledChannel(interaction);
                return;
            }
            mention = `<@${interaction.user.id}>`;
        }

        if (!isUnpromted) {
            try {
                // await interaction.deferReply({
                //     ephemeral: false
                // });
            } catch (deferError) {
                analytics.captureException(deferError);
                log.error('Failed to defer reply:', deferError.message);
                return;
            }
        }

        const [config, image] = await Promise.all([
            withTimeout(getConfig(), 14000).catch((err) => {
                log.error('Config fetch failed:', err.message);
                analytics.captureException(err);
                return [];
            }),
            withTimeout(getRandomImage(interaction, channelId), 10000).catch(
                (err) => {
                    log.error('Image fetch failed:', err.message);
                    analytics.captureException(err);
                    return null;
                }
            ),
        ]);

        if (!config || config.length === 0) {
            throw new Error('No meme templates');
        }

        let result, functionName;

        const byExact = new Map(config.map((t) => [t.name, t]));
        const byNorm = new Map(
            config.map((t) => [normalizeTemplateKey(t.name), t])
        );

        let selected;
        if (template) {

            selected = byExact.get(template) || byNorm.get(normalizeTemplateKey(template));

            if (!selected) {
                selected = config.find(t => t.name === template);
            }
        }

        if (selected && typeof selected.generator === 'function') {
            functionName = selected.name;
            result = await withTimeout(
                selected.generator(image, channelId, interaction),
                25000
            );
        } else {
            // weighted random fallback
            const memeTemplates = config.map((t) => ({
                func: () => t.generator(image, channelId, interaction),
                weight: t.weight,
                name: t.name,
            }));
            const rr = await withTimeout(runRandomFunction(memeTemplates), 25000);
            result = rr.result;
            functionName = rr.functionName;
        }

        if (result instanceof Buffer && functionName.toLowerCase().includes("voice")) {
            if (!isUnpromted) {
                await interaction.editReply({
                    content: `${mention}`,
                    files: [{
                        attachment: result,
                        name: '💀.mp3'
                    }],
                    components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                });
            } else {
                await interaction.channel.send({
                    content: mention,
                    files: [{
                        attachment: result,
                        name: '💀.mp3'
                    }],
                    components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                });
            }
            return;
        }

        if (typeof result === 'string') {
            textResult = result;

            const replaceMentions = channelSettings.replaceMentions

            textResult = await filterMentions(textResult, replaceMentions);

            if (!isUnpromted) {
                await interaction.editReply({
                    content: `${mention}\n${textResult}`.slice(0, 2000),
                    components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                });
            } else {
                await interaction.channel.send({
                    content: textResult.slice(0, 2000),
                    components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                });
            }
        } else if (result instanceof Array) {

            const replaceMentions = channelSettings.replaceMentions;

            result = await Promise.all(result.map(async (option) => {
                if (typeof option === 'string') {
                    return await filterMentions(option, replaceMentions);
                }
                return option;
            }));

            try {
                if (!isUnpromted) {
                    await interaction.editReply({
                        poll: {
                            question: {text: `${result[0]}`.slice(0, 200)},
                            answers: result.slice(1).map((option, index) => ({
                                text: option.slice(0, 100),
                            }))
                        },
                        components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                    });
                } else {
                    await interaction.channel.send({
                        poll: {
                            question: {text: `${result[0]}`.slice(0, 200)},
                            answers: result.slice(1).map((option, index) => ({
                                text: option.slice(0, 100),
                            }))
                        },
                        components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                    });
                }
            } catch (error) {
                log.error('Error sending poll:', error.message);
            }
        } else {

            // only put watermark if premium server selected their own watermark
            const serverLogo = interaction.guild?.iconURL({size: 512, extension: 'png'}) || null;
            if (hasPremium) {
                result = await applyWatermark(result, serverLogo, channelSettings.watermarkText, channelSettings.watermarkLogo);
            }

            if (!isUnpromted) {
                await interaction.editReply({
                    content: `${mention}`,
                    files: [result],
                    components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                });
            } else {
                await interaction.channel.send({
                    files: [result],
                    components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
                });
            }
        }

    } catch (error) {
        try {
            const channelSettings = await getChannelSettings(channelId);
            const errorMessage = t("errorText", channelSettings.language || "english")

            if (!isUnpromted) {
                if (interaction.deferred || interaction.replied) {
                    await interaction.editReply({
                        content: errorMessage,
                        files: [],
                        components: []
                    });
                } else {
                    await interaction.reply({
                        content: errorMessage,
                        ephemeral: true
                    });
                }
            }
        } catch (replyError) {
            log.error('Failed to send error message:', replyError.message);
            analytics.captureException(replyError);
        }
    }
};