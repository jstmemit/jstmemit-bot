import {getRandomImage} from "../getRandomImage.js";
import {getTimestamp, runRandomFunction} from "../utils.js";
import {buildRow} from "../buttons/buildRow.js";
import {checkIsEnabled} from "../checkIsEnabled.js";
import {handleDisabledChannel} from "../handlers/handleDisabledChannel.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {handleNotEnoughContext} from "../handlers/handleNotEnoughContext.js";
import {getConfig} from "../../config/memeTemplates.js";

export const meme = async (interaction, isRegenerate) => {
    let textResult, imageResult, mention = '';
    const messages = await getChannelMessages(interaction.channelId)

    if (!messages || messages.length < 20) {
        await handleNotEnoughContext(interaction, messages ? messages.length : 0);
        return;
    }

    const image = await getRandomImage(interaction.guildId, interaction.channelId)

    if (isRegenerate) {
        if (!await checkIsEnabled(interaction.channelId)) {
            await handleDisabledChannel(interaction);
            return;
        }
        mention = `<@${interaction.user.id}>`;
    }

    const config = await getConfig();

    const memeTemplates = config.map((template) => ({
        func: () =>
            template.generator(image, interaction.channelId, interaction.guildId),
        weight: template.weight,
        name: template.name,
    }));

    const {result, functionName} = await runRandomFunction(memeTemplates);

    await interaction.deferReply({
        ephemeral: false
    });

    if (typeof result === 'string') {
        textResult = result;
        await interaction.editReply({
            content: `${mention}\n${textResult}`,
            components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
        });

    } else {
        imageResult = result;
        await interaction.editReply({
            content: `${mention}`,
            files: [result],
            components: [await buildRow(0, 0, `${functionName}-${getTimestamp()}`)]
        });
    }
};