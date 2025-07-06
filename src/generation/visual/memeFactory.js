import {MemeGenerator} from "./memeGenerator.js";

export const createMemeGenerator = (templateName) => {
    return (image, channelId, interaction, serverId) =>
        new MemeGenerator(templateName).generate(channelId, serverId, interaction);
};