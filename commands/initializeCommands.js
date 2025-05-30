import {REST, Routes} from 'discord.js';
import dotenv from 'dotenv';

export const initializeCommands = async (commands) => {
    const rest = new REST({version: '10'}).setToken(dotenv.config().parsed.DISCORD_TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(dotenv.config().parsed.DISCORD_USERID), {body: commands});

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};
