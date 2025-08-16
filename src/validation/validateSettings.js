export const validateSettings = (settings) => {
    if (typeof settings !== 'object' || settings === null) {
        throw new Error('Settings must be an object');
    }

    // voices
    if (!Array.isArray(settings.voices) || settings.voices.length === 0) {
        throw new Error('Settings must contain a non-empty array of voices');
    }

    settings.voices.forEach((voice, index) => {
        if (typeof voice.id !== 'string' || voice.id.trim() === '') {
            throw new Error(`Voice at index ${index} must have a valid id`);
        }
        if (typeof voice.provider !== 'string' || voice.provider.trim() === '') {
            throw new Error(`Voice at index ${index} must have a valid provider`);
        }
        if (voice.voiceSettings && typeof voice.voiceSettings !== 'object') {
            throw new Error(`Voice at index ${index} must have valid voiceSettings`);
        }
    });

    // meme templates
    if (!Array.isArray(settings.templates) || settings.templates.length === 0) {
        throw new Error('Settings must contain a non-empty array of templates');
    }

    // text settings
    if (typeof settings.textSettings !== 'object' || settings.textSettings === null) {
        throw new Error('Settings must contain a valid textSettings object');
    }

    // overlay settings
    if (typeof settings.overlaySettings !== 'object' || settings.overlaySettings === null) {
        throw new Error('Settings must contain a valid overlaySettings object');
    }

    // cache
    if (typeof settings.cache !== 'object' || settings.cache === null) {
        throw new Error('Settings must contain a valid cache object');
    }

}