import {getChannelMessagesAmount} from "../../database/queries/getChannelMessagesAmount.js";
import {meme} from "../commands/meme.js";

export const handleUnpromtedMeme = async (interaction, channelSettings) => {

    console.log("Handling unprompted meme...");

    if (channelSettings) {
        if (!channelSettings.isEnabled) {
            return;
        }
        const amount = await getChannelMessagesAmount(interaction.channelId);
        console.log(`Channel messages amount: ${amount}`);

        if (amount >= 30) {
            console.log('Channel has enough messages, checking frequency...');
            const frequency = channelSettings.frequency || 0;
            console.log(`Channel frequency: ${frequency}`);

            if (frequency > 0) {
                console.log(`Channel frequency: ${frequency}`);
                const randomValue = Math.random() * 100;
                console.log(`Random value: ${randomValue}`);
                if (randomValue < frequency) {
                    console.log('Frequency check passed, generating meme...');
                    await meme(interaction, false, true)
                }
            }
        }
    }
}