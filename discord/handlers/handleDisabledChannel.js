export const handleDisabledChannel = async (interaction) => {
    return interaction.reply({
        content: 'This feature is disabled in this channel.',
        ephemeral: true
    });
}