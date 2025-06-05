import {eraseChannelMessages} from "../../database/queries/eraseChannelMessages.js";

export const handleEraseData = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.customId.split("-")[1];

        const result = await eraseChannelMessages(channelId, 'all');

        if (result) {
            await interaction.followUp({
                content: "Saved messages were erased successfully.",
                components: [],
            });
        } else {
            await interaction.followUp({
                content: "No messages associated with this channel were found, so nothing was erased.",
                components: [],
            });
        }

    } catch (error) {
        console.error("Error erasing data:", error);
    }
};