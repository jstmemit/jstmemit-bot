import {insertMessage} from "../database/queries/insertMessage.js";

export const handleNewMessage = (interaction) => {
    insertMessage(interaction.channelId, interaction.content);
};