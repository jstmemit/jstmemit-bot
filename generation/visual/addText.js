import {AttachmentBuilder} from "discord.js";
import {templateSettings} from "./templateSettings.js";
import Canvas from "@napi-rs/canvas";
import {getTimestamp, validateCanvasImage} from "../../utils.js";
import {fitFontSize} from "./fitFontSize.js";

export const addText = async (templateName, image, text) => {
    image = await validateCanvasImage(image, Canvas);

    const {fillStyle, textAlign, box, maxLines = 2} = templateSettings[templateName];

    const canvas = new Canvas.Canvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0);

    ctx.textAlign = textAlign;
    ctx.textBaseline = 'top';

    const relBox = {
        x: Math.round(box.x * canvas.width),
        y: Math.round(box.y * canvas.height),
        w: Math.round(box.w * canvas.width),
        h: Math.round(box.h * canvas.height)
    };

    const {fontSize, lines} = fitFontSize(ctx, text, relBox, maxLines);
    ctx.font = `${fontSize}px Impact`;
    ctx.fillStyle = fillStyle;

    let y = relBox.y + (relBox.h - fontSize * lines.length * 1.15) / 2;
    for (const line of lines) {
        const x = textAlign === 'center' ? relBox.x + relBox.w / 2 : relBox.x;
        ctx.fillText(line, x, y, relBox.w);
        y += fontSize * 1.15;
    }

    const buffer = await canvas.encode('png');
    return new AttachmentBuilder(buffer, {name: `meme_${getTimestamp()}.png`});
};