import {insertMessage} from "../../database/queries/insertMessage.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handleUnpromtedMeme} from "./handleUnpromtedMeme.js";

export const handleNewMessage = async (interaction) => {

    const channelSettings = await getChannelSettings(interaction.channelId);

    if (channelSettings) {
        if (!channelSettings.isEnabled) {
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
        insertMessage(interaction.channelId, interaction.member.displayAvatarURL({dynamic: true, size: 1024}));
    }

    await handleUnpromtedMeme(interaction, channelSettings);

};