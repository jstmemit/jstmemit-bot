export const fitFontSize = (ctx, textLines, box) => {
    let fontSize = 60;
    for (; fontSize > 10; fontSize -= 2) {
        ctx.font = `${fontSize}px Impact`;
        const tooWide = textLines.some(line => ctx.measureText(line).width > box.w);
        const totalHeight = fontSize * textLines.length * 1.15;
        if (!tooWide && totalHeight <= box.h) return fontSize;
    }
    return 10;
};
