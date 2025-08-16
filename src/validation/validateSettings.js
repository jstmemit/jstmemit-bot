import {log} from "../../bot.js";

export const validateSettings = (settings) => {
    if (typeof settings !== 'object' || settings === null) {
        log.error('Settings must be a valid object');
    }

    // voices
    if (!Array.isArray(settings?.voices) || settings?.voices?.length === 0) {
        log.error('Settings must contain a non-empty array of voices');
    }

    settings?.voices?.forEach((voice, index) => {
        if (typeof voice?.id !== 'string' || voice?.id?.trim() === '') {
            log.error(`Voice at index ${index} must have a valid id`);
        }
        if (typeof voice?.provider !== 'string' || voice?.provider?.trim() === '') {
            log.error(`Voice at index ${index} must have a valid provider`);
        }
        if (voice?.voiceSettings && typeof voice?.voiceSettings !== 'object') {
            log.error(`Voice at index ${index} must have valid voiceSettings`);
        }
    });

    // meme templates
    if (!Array.isArray(settings?.templates) || settings?.templates?.length === 0) {
        log.error('Settings must contain a non-empty array of templates');
    }

    // text settings
    if (typeof settings?.textSettings !== 'object' || settings?.textSettings === null) {
        log.error('Settings must contain a non-empty array of textSettings');
    }

    // overlay settings
    if (typeof settings?.overlaySettings !== 'object' || settings?.overlaySettings === null) {
        log.error('Settings must contain a non-empty array of overlaySettings');
    }

    // cache
    if (typeof settings?.cache !== 'object' || settings?.cache === null) {
        log.error('Settings must contain a non-empty array of cache');
    }

}