import {insertMessage} from "../../database/queries/insertMessage.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handleUnpromtedMeme} from "./handleUnpromtedMeme.js";

export const handleNewMessage = async (interaction) => {

    const channelSettings = await getChannelSettings(interaction.channelId);

    if (channelSettings) {
        if (!channelSettings.is_enabled) {
            return;
        }
    }

    if (interaction.attachments.size > 0) {
        try {
            interaction.attachments.forEach(attachment => {
                if (attachment.name.match(/\.(png|jpg|jpeg)$/i)) {
                    insertMessage(interaction.channelId, attachment.url);
                }
            });
        } catch (error) {
            console.log(`Error processing attachments: ${error.message}`);
        }

        if (interaction.content) {
            insertMessage(interaction.channelId, interaction.content);
        }
    } else {
        insertMessage(interaction.channelId, interaction.content);

        // to sometimes insert avatars into memes, because without intents I cannot query avatars normally ;(
        if (Math.random() < 0.2) {
            insertMessage(interaction.channelId, interaction.member.displayAvatarURL({dynamic: true, size: 1024}));
        }
    }

    await handleUnpromtedMeme(interaction, channelSettings);

};