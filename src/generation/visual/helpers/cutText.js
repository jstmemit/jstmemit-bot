import {log} from "../../../../bot.js";

export const cutText = (ctx, rawText, maxWidth) => {
    try {
        const words = rawText.split(/\s+/);
        const lines = [];
        let line = '';

        for (const word of words) {
            const test = line ? `${line} ${word}` : word;
            if (ctx.measureText(test).width <= maxWidth) {
                line = test;
            } else {
                lines.push(line);
                line = word;
            }
        }
        if (line) lines.push(line);
        return lines;
    } catch (error) {
        log.error('Error cutting text:', error);
        return [];
    }
}