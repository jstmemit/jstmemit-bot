import {ButtonStyle, MessageFlags} from 'discord.js';
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {withTimeout} from "#src/discord/utils.js";
import {checkIsEnabled} from "#src/discord/checkIsEnabled.js";
import {handleDisabledChannel} from "#src/discord/handlers/handleDisabledChannel.js";
import {narrateText} from "#src/generation/voice/elevenlabs/narrateText.js";

export const voice = async (interaction) => {

    const ephemeral = interaction.options.getBoolean('ephemeral') || false;

    await interaction.deferReply({ephemeral});

    const isEnabled = await withTimeout(checkIsEnabled(interaction.channelId), 5000);
    if (!isEnabled) {
        await handleDisabledChannel(interaction);
        return;
    }

    const voice = interaction.options.getString('voice') || "random"
    const text = interaction.options.getString('text').substring(0, 150);

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