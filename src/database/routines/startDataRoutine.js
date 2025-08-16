import {handleDataRetention} from "../handlers/handleDataRetention.js";
import {log} from "../../../bot.js";

export const startDataRoutine = async () => {

    setInterval(async () => {
        try {
            await handleDataRetention()
        } catch (error) {
            log.error('Error in startDataRoutine:', error);
        }
    }, 60 * 60 * 1000 * 2);

}