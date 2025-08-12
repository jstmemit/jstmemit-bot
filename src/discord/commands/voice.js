import {ButtonStyle, MessageFlags} from 'discord.js';
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {withTimeout} from "#src/discord/utils.js";
import {checkIsEnabled} from "#src/discord/checkIsEnabled.js";
import {handleDisabledChannel} from "#src/discord/handlers/handleDisabledChannel.js";
import {narrateText} from "#src/generation/voice/elevenlabs/narrateText.js";
import {analyzeImage} from "#src/generation/visual/helpers/analyzeImage.js";
import {getChannelSettings} from "#database/queries/getChannelSettings.js";

export const voice = async (interaction) => {

    const ephemeral = interaction.options.getBoolean('ephemeral') || false;

    await interaction.deferReply({ephemeral});

    const isEnabled = await withTimeout(checkIsEnabled(interaction.channelId), 5000);
    if (!isEnabled) {
        await handleDisabledChannel(interaction);
        return;
    }

    const channelSettings = await getChannelSettings(interaction.channelId)
    const language = channelSettings?.language || "en";

    const voice = interaction.options.getString('voice') || "random"
    let text;

    if (!interaction.targetId) {
        text = interaction?.options?.getString('text').substring(0, 150);
    } else {
        const message = await interaction.channel.messages.fetch(interaction.targetId);
        if (!message) {
            await analytics.captureException("message content from context menu failed")
            return;
        }

        if (message.content) {
            text = message.content.substring(0, 150);
        } else {
            const attachment = message?.attachments?.find((a) => a.contentType?.startsWith("image/")) || message?.attachments?.first();

            let imageUrl = attachment?.url || attachment?.proxyURL || attachment?.attachment;

            if (!imageUrl) {
                text = "there is no image";
            } else {
                imageUrl = imageUrl.replace(/&$/, "");
                text = (await analyzeImage(imageUrl, language)).slice(0, 150);
            }
        }

    }
    const result = await narrateText(text, voice);

    await analytics.capture({
        distinctId: interaction.channelId,
        event: 'voice_message_generated',
        properties: {
            voice: voice
        },
    })

    await interaction.editReply({
        content: `🗣️ "*${text}*"\n\n<@${interaction.user.id}>`,
        files: [{
            attachment: result,
            name: text.substring(0, 16) + '.mp3',
        }],
        ephemeral: ephemeral,
    });

}