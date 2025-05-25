import {insertMessage} from "../database/queries/insertMessage.js";

export const handleNewMessage = (interaction) => {
    insertMessage(interaction.channelId, interaction.content);
    console.log(`Message inserted for channel ${interaction.channelId}: ${interaction.content}`);
};