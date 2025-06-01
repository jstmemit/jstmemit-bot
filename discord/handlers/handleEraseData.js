export const handleEraseData = async interaction => {
    try {
        await interaction.deferUpdate();

        const channelId = interaction.customId.split("-")[1];

        // erase logic is coming

        await interaction.followUp({
            content: "Saved messages were erased successfully. If you want to also disable the bot use the button below. ",
        });
    } catch (error) {
        console.error("Error erasing data:", error);
    }
};