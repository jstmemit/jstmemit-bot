import {AttachmentBuilder} from "discord.js";
import {settings} from "../../../../config/settings.js";
import Canvas from "@napi-rs/canvas";
import {getTimestamp, validateCanvasImage} from "../../utils.js";
import {fitFontSize} from "./fitFontSize.js";
import {log} from "../../../../bot.js";

const measureMixedText = (ctx, text, fontSize, baseFont) => {
    const emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    let totalWidth = 0;
    let lastIndex = 0;
    let match;

    const emojiFont = `${fontSize}px "Noto Color Emoji"`;
    const textFont = `${fontSize}px ${baseFont}`;

    while ((match = emojiRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            const beforeText = text.slice(lastIndex, match.index);
            ctx.font = textFont;
            totalWidth += ctx.measureText(beforeText).width;
        }

        const emoji = match[0];
        ctx.font = emojiFont;
        totalWidth += ctx.measureText(emoji).width;

        lastIndex = match.index + emoji.length;
    }

    if (lastIndex < text.length) {
        const remainingText = text.slice(lastIndex);
        ctx.font = textFont;
        totalWidth += ctx.measureText(remainingText).width;
    }

    return totalWidth;
};

const renderMixedText = (
    ctx,
    text,
    x,
    y,
    maxWidth,
    fontSize,
    baseFont,
    fillStyle,
    outlineStyle
) => {
    const emojiRegex =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    let currentX = x;
    let lastIndex = 0;
    let match;

    const emojiFont = `${fontSize}px "Noto Color Emoji"`;
    const textFont = `${fontSize}px ${baseFont}`;
    const emojiYOffset = settings.canvas.emojiYOffset || 15;

    while ((match = emojiRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            const beforeText = text.slice(lastIndex, match.index);
            ctx.font = textFont;
            ctx.fillStyle = fillStyle;

            if (outlineStyle) {
                ctx.strokeStyle = outlineStyle;
                ctx.strokeText(beforeText, currentX, y, maxWidth);
            }
            ctx.fillText(beforeText, currentX, y, maxWidth);
            currentX += ctx.measureText(beforeText).width;
        }

        const emoji = match[0];
        ctx.font = emojiFont;
        ctx.fillStyle = fillStyle;

        try {
            if (outlineStyle) {
                ctx.strokeStyle = outlineStyle;
                ctx.strokeText(emoji, currentX, y + emojiYOffset, maxWidth);
            }
            ctx.fillText(emoji, currentX, y + emojiYOffset, maxWidth);
            currentX += ctx.measureText(emoji).width;
        } catch (emojiError) {
            log.error(`Failed to render emoji: ${emoji}`, emojiError);
            ctx.font = textFont;
            ctx.fillText(`[${emoji}]`, currentX, y, maxWidth);
            currentX += ctx.measureText(`[${emoji}]`).width;
        }

        lastIndex = match.index + emoji.length;
    }

    if (lastIndex < text.length) {
        const remainingText = text.slice(lastIndex);
        ctx.font = textFont;
        ctx.fillStyle = fillStyle;

        if (outlineStyle) {
            ctx.strokeStyle = outlineStyle;
            ctx.strokeText(remainingText, currentX, y, maxWidth);
        }
        ctx.fillText(remainingText, currentX, y, maxWidth);
    }
};

export const addText = async (templateName, image, text) => {
    try {
        image = await validateCanvasImage(image, Canvas);

        let {
            fillStyle,
            font,
            textAlign,
            box,
            maxLines = 2,
            baseImageOverlay,
            outlineStyle,
        } = settings.textSettings[templateName];

        font = hasOtherAlphabets(text) ? "Arial" : font;

        if (
            image.width <= 0 ||
            image.height <= 0 ||
            image.width > 8192 ||
            image.height > 8192
        ) {
            throw new Error(`Invalid canvas dimensions: ${image.width}x${image.height}`);
        }

        const canvas = new Canvas.Canvas(image.width, image.height);
        const ctx = canvas.getContext("2d");

        ctx.textRenderingOptimization = "optimizeQuality";
        ctx.imageSmoothingEnabled = true;

        ctx.drawImage(image, 0, 0);

        if (baseImageOverlay > 0) {
            ctx.globalCompositeOperation = "multiply";
            ctx.fillStyle = `rgb(${baseImageOverlay},${baseImageOverlay},${baseImageOverlay})`;
            ctx.fillRect(0, 0, image.width, image.height);
            ctx.globalCompositeOperation = "source-over";
        }

        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        const relBox = {
            x: Math.round(box.x * canvas.width),
            y: Math.round(box.y * canvas.height),
            w: Math.round(box.w * canvas.width),
            h: Math.round(box.h * canvas.height),
        };

        const {fontSize, lines} = fitFontSize(ctx, text, relBox, maxLines, font);

        if (fontSize <= 0 || fontSize > 500) {
            throw new Error(`Invalid font size: ${fontSize}`);
        }

        if (outlineStyle) {
            ctx.lineWidth = fontSize / 10;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
        }

        let y = relBox.y + (relBox.h - fontSize * lines.length * 1.15) / 2;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            const lineWidth = measureMixedText(ctx, line, fontSize, font);

            let startX = relBox.x;
            if (textAlign === "center") {
                startX = relBox.x + (relBox.w - lineWidth) / 2;
            } else if (textAlign === "right") {
                startX = relBox.x + relBox.w - lineWidth;
            }

            try {
                renderMixedText(
                    ctx,
                    line,
                    startX,
                    y,
                    relBox.w,
                    fontSize,
                    font,
                    fillStyle,
                    outlineStyle
                );
            } catch (textError) {
                throw new Error(`Text rendering failed: ${textError.message}`);
            }

            y += fontSize * 1.15;
        }

        const buffer = await canvas.encode("png");

        if (!buffer || buffer.length === 0) {
            throw new Error("Generated empty buffer from canvas");
        }

        return new AttachmentBuilder(buffer, {name: `meme_${getTimestamp()}.png`});
    } catch (error) {
        log.error("An error in addText", error);
        throw new Error(`addText failed: ${error.message}`);
    }
};

const hasOtherAlphabets = (text) => {
    return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
};