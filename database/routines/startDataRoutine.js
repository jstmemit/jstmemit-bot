import {handleDataRetention} from "../handlers/handleDataRetention.js";

export const startDataRoutine = async () => {

    setInterval(async () => {
        try {
            await handleDataRetention()
        } catch (error) {
            console.error('Error in startDataRoutine:', error);
        }
    }, 60 * 60 * 1000 * 2);

}