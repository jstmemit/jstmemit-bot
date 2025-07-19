import {eraseChannelMessages} from "../../database/queries/eraseChannelMessages.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {analytics as posthog} from "../../../bot.js";

export const handleEraseData = async interaction => {
    try {

        if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
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

        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'data_erased',
        })

        await posthog.flush()

    } catch (error) {
        console.error("Error erasing data:", error);
    }
};