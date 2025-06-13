import {insertMessage} from "../../database/queries/insertMessage.js";
import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {handleUnpromtedMeme} from "./handleUnpromtedMeme.js";

export const handleNewMessage = async (interaction) => {

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
    }

    const channelSettings = await getChannelSettings(interaction.channelId);
    await handleUnpromtedMeme(interaction, channelSettings);

};