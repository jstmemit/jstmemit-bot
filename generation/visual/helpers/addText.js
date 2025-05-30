import {AttachmentBuilder} from "discord.js";
import {templateSettings} from "../templateSettings.js";
import Canvas from "@napi-rs/canvas";
import {getTimestamp, validateCanvasImage} from "../../../handlers/utils.js";
import {fitFontSize} from "./fitFontSize.js";

export const addText = async (templateName, image, text) => {
    image = await validateCanvasImage(image, Canvas);

    const {fillStyle, font, textAlign, box, maxLines = 2, baseImageOverlay} = templateSettings[templateName];

    const canvas = new Canvas.Canvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    // image = await resizeImage(image, Canvas, 1024);

    ctx.drawImage(image, 0, 0);

    if (baseImageOverlay > 0) {
        ctx.globalCompositeOperation = "multiply"
        ctx.fillStyle = `rgb(${baseImageOverlay},${baseImageOverlay},${baseImageOverlay})`;
        ctx.fillRect(0, 0, image.width, image.height);
        ctx.globalCompositeOperation = "source-over";
    }

    ctx.textAlign = textAlign;
    ctx.textBaseline = 'top';

    const relBox = {
        x: Math.round(box.x * canvas.width),
        y: Math.round(box.y * canvas.height),
        w: Math.round(box.w * canvas.width),
        h: Math.round(box.h * canvas.height)
    };

    const {fontSize, lines} = fitFontSize(ctx, text, relBox, maxLines);
    ctx.font = `${fontSize}px ${font}`;
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