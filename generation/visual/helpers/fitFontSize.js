import {cutText} from "./cutText.js";

export const fitFontSize = (ctx, rawText, box, maxLines) => {
    for (let fontSize = 60; fontSize > 20; fontSize--) {
        ctx.font = `${fontSize}px Impact`;
        const lines = cutText(ctx, rawText, box.w);

        const totalHeight = fontSize * lines.length * 1.15;
        const tooWide = lines.some(line => ctx.measureText(line).width > box.w);

        if (!tooWide && lines.length <= maxLines && totalHeight <= box.h) {
            return {fontSize, lines};
        }
    }

    ctx.font = `20px Impact`;
    const fallbackLines = cutText(ctx, rawText, box.w).slice(0, maxLines);
    return {fontSize: 20, lines: fallbackLines};
};
