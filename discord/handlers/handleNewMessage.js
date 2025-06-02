import {insertMessage} from "../../database/queries/insertMessage.js";

export const handleNewMessage = (interaction) => {

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

};