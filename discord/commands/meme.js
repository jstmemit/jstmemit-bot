import {getRandomImage} from "../getRandomImage.js";
import {getTimestamp, runRandomFunction, withTimeout} from "../utils.js";
import {buildRow} from "../buttons/buildRow.js";
import {checkIsEnabled} from "../checkIsEnabled.js";
import {handleDisabledChannel} from "../handlers/handleDisabledChannel.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {handleNotEnoughContext} from "../handlers/handleNotEnoughContext.js";
import {getConfig} from "../../config/memeTemplates.js";

export const meme = async (interaction, isRegenerate, isUnpromted) => {
    let channelId, guildId;

    try {
        let textResult, imageResult, mention = '';

        channelId = interaction.channelId
        guildId = interaction.guildId

        if (!channelId || !guildId) {
            console.error('No channel id or guild id');
            return;
        }

        const messages = await withTimeout(getChannelMessages(channelId), 10000);

        if (!messages || messages.length < 30) {
            await handleNotEnoughContext(interaction, messages ? messages.length : 0);
            return;
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
                await interaction.deferReply({
                    ephemeral: false
                });
            } catch (deferError) {
                console.error('Failed to defer reply:', deferError.message);
                return;
            }
        }

        const [config, image] = await Promise.all([
            withTimeout(getConfig(), 10000).catch(err => {
                console.error('Config fetch failed:', err.message);
                return [];
            }),
            withTimeout(getRandomImage(guildId, channelId), 10000).catch(err => {
                console.error('Image fetch failed:', err.message);
                return null;
            })
        ]);

        if (!config || config.length === 0) {
            throw new Error('No meme templates');
        }

        const memeTemplates = config.map((template) => ({
            func: () => template.generator(image, channelId, guildId),
            weight: template.weight,
            name: template.name,
        }));

        const {result, functionName} = await withTimeout(
            runRandomFunction(memeTemplates),
            25000
        );

        if (typeof result === 'string') {
            textResult = result;

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
        } else {
            imageResult = result;

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
            const errorMessage = 'An error happened white generating the meme. Please try again later.';

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
            console.error('Failed to send error message:', replyError.message);
        }
    }
};