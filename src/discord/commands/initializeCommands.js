import {REST, Routes} from 'discord.js';
import dotenv from 'dotenv';
import {log} from "../../../bot.js";

export const initializeCommands = async (commands) => {
    const rest = new REST({version: '10'}).setToken(dotenv.config().parsed.DISCORD_TOKEN);

    try {
        log.info('Started declaring slash commands and context menus');

        await rest.put(Routes.applicationCommands(dotenv.config().parsed.DISCORD_USERID), {body: commands});
    } catch (error) {
        log.error(error);
    }
};
