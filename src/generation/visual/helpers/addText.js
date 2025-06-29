import {AttachmentBuilder} from "discord.js";
import {settings} from "../../../../config/settings.js";
import Canvas from "@napi-rs/canvas";
import {getTimestamp, validateCanvasImage} from "../../utils.js";
import {fitFontSize} from "./fitFontSize.js";

export const addText = async (templateName, image, text) => {
    try {
        image = await validateCanvasImage(image, Canvas);

        const {
            fillStyle,
            font,
            textAlign,
            box,
            maxLines = 2,
            baseImageOverlay,
            outlineStyle
        } = settings.textSettings[templateName];

        if (image.width <= 0 || image.height <= 0 || image.width > 8192 || image.height > 8192) {
            throw new Error(`Invalid canvas dimensions: ${image.width}x${image.height}`);
        }

        const canvas = new Canvas.Canvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

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

        if (fontSize <= 0 || fontSize > 500) {
            throw new Error(`Invalid font size: ${fontSize}`);
        }

        ctx.font = `${fontSize}px ${font}`;
        ctx.fillStyle = fillStyle;

        if (outlineStyle) {
            ctx.strokeStyle = outlineStyle;
            ctx.lineWidth = fontSize / 10;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
        }

        let y = relBox.y + (relBox.h - fontSize * lines.length * 1.15) / 2;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const x = textAlign === 'center' ? relBox.x + relBox.w / 2 : relBox.x;

            try {
                if (outlineStyle) {
                    ctx.strokeText(line, x, y, relBox.w);
                }
                ctx.fillText(line, x, y, relBox.w);
            } catch (textError) {
                throw new Error(`Text rendering failed: ${textError.message}`);
            }

            y += fontSize * 1.15;
        }

        const buffer = await canvas.encode('png');

        if (!buffer || buffer.length === 0) {
            throw new Error('Generated empty buffer from canvas');
        }

        return new AttachmentBuilder(buffer, {name: `meme_${getTimestamp()}.png`});

    } catch (error) {
        console.error('An error in addText', error);
        throw new Error(`addText failed: ${error.message}`);
    }
};