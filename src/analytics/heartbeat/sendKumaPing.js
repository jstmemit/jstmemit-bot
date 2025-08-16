import {settings} from "#config/settings.js";
import axios from "axios";
import {log} from "../../../bot.js";

export const sendKumaPing = () => {

    if (!settings?.kumaUptime || !settings?.kumaUptime.pingUrl) {
        log.warn('Kuma url is not set in the settings');
        return;
    }

    const kumaPingUrl = settings.kumaUptime.pingUrl

    setInterval(async () => {
        try {
            const response = await axios.get(kumaPingUrl)
        } catch (error) {
            log.error('Error sending Kuma ping:', error);
        }
    }, settings.kumaUptime.pingInterval);

}