import {readdirSync} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import {startDataRoutine} from "#database/routines/startDataRoutine.js";
import {sendKumaPing} from "#src/analytics/heartbeat/sendKumaPing.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const loadEvents = async (client) => {

    const handlersPath = join(__dirname, 'handlers');
    const eventFiles = readdirSync(handlersPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const {default: event} = await import(`./handlers/${file}`);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }

    try {
        startDataRoutine()
    } catch (error) {
        analytics.captureException(error);
    }

    try {
        sendKumaPing();
    } catch (error) {
        analytics.captureException(error);
    }
}