import {settings} from "#config/settings.js";

const emojis = settings?.progressBar?.emojis;

export const createProgressBar = (value, maxValue, segments = 10) => {

    if (typeof value !== 'number' || typeof maxValue !== 'number' || typeof segments !== 'number') {
        console.error('Invalid input for progress bar');
        return '';
    }

    if (!emojis) {
        console.error('Emojis for progress bar are not defined in settings');
        return '';
    }

    const clampedValue = Math.max(0, Math.min(value, maxValue));

    const percentage = clampedValue / maxValue;

    const filledSegments = Math.floor(percentage * segments);

    let progressBar = '';

    for (let i = 0; i < segments; i++) {
        if (i < filledSegments) {
            if (i === 0) {
                progressBar += emojis.fill1;
            } else if (i === segments - 1 || i === filledSegments - 1) {
                progressBar += emojis.fill3;
            } else {
                progressBar += emojis.fill2;
            }
        } else {
            if (i === 0) {
                progressBar += emojis.empty1;
            } else if (i === segments - 1) {
                progressBar += emojis.empty3;
            } else {
                progressBar += emojis.empty2;
            }
        }
    }

    return progressBar;
};