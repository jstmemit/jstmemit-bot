import {ButtonStyle, ContainerBuilder, TextDisplayBuilder} from "discord.js";

export const constructLoadingEmbed = (channelId) => {

    return [
        new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# Loading...`),
            )
    ];

}