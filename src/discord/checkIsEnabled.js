import {getChannelSettings} from "../database/queries/getChannelSettings.js";

export const checkIsEnabled = async (channelId) => {

    const channelSettings = await getChannelSettings(channelId)

    if (!channelSettings) {
        return false;
    }

    const {isEnabled} = channelSettings;

    if (!isEnabled) {
        return false;
    }

    return true;
}