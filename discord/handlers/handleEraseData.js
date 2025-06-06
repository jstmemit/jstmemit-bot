import {eraseChannelMessages} from "../../database/queries/eraseChannelMessages.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";

export const handleEraseData = async interaction => {
    try {

        if (!await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')) {
            return;
        }

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