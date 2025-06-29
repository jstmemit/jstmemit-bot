import {getChannelMessagesAmount} from "../../database/queries/getChannelMessagesAmount.js";
import {meme} from "../commands/meme.js";

export const handleUnpromtedMeme = async (interaction, channelSettings) => {
    if (channelSettings) {
        if (!channelSettings.is_enabled) {
            return;
        }
        const amount = await getChannelMessagesAmount(interaction.channelId);

        if (amount => 30) {
            const frequency = channelSettings.frequency || 0;

            if (frequency > 0) {
                const randomValue = Math.random() * 100;
                if (randomValue < frequency) {
                    await meme(interaction, false, true)
                }
            }
        }
    }
}