import {getChannelSettings} from "../database/queries/getChannelSettings.js";

export const checkIsEnabled = async (channelId) => {

    const channelSettings = await getChannelSettings(channelId)

    if (!channelSettings) {
        return false;
    }

    const {channel_id, is_enabled} = channelSettings;

    if (!is_enabled) {
        return false;
    }

    return true;
}