import Canvas from '@napi-rs/canvas';
import {AttachmentBuilder} from "discord.js";
import {getTimestamp, validateCanvasImage} from "../../utils.js";
import {settings} from "../../../../config/settings.js";
import {drawFullWidth} from "./overlay/drawFullWidth.js";
import {drawAvatar} from "./overlay/drawAvatar.js";
import {log} from "../../../../bot.js";

export const overlayImage = async (image1, image2, variant, height = 0, convert) => {
    try {
        const baseImage = await validateCanvasImage(image1, Canvas);

        if (!image2) {
            throw new Error('Overlay image is not set');
        }

        const overlayImage = await validateCanvasImage(image2, Canvas);

        const canvasHeight = baseImage.height + height;

        if (baseImage.width <= 0 || canvasHeight <= 0 ||
            baseImage.width > 8192 || canvasHeight > 8192) {
        }

        const canvas = new Canvas.Canvas(baseImage.width, canvasHeight);
        const ctx = canvas.getContext('2d');

        const mode = settings.overlaySettings[variant];
        if (!mode) {
            throw new Error(`Unknown overlay variant: ${variant}`);
        }

        if (mode.type === 'fill_fullwidth') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(baseImage, 0, height);

        switch (mode.type) {
            case 'fullwidth':
                const dy = Number(mode.dy) || 0;
                drawFullWidth(ctx, overlayImage, dy + height, baseImage.width, overlayImage.height);
                break;
            case 'fullimage':
                ctx.drawImage(overlayImage, 0, height, baseImage.width, canvasHeight - height);
                break;
            case 'circle':
                drawAvatar(ctx, overlayImage, mode);
                break;
            case 'watermark_corner':
                const size = Math.min(baseImage.width * (mode.size || 0.10), 200);
                const padding = Math.max(10, Math.min(baseImage.width, baseImage.height) * (mode.padding || 0.02));
                const x = baseImage.width - size - padding;
                const y = baseImage.height - size - padding;

                ctx.globalAlpha = mode.opacity || 0.8;
                ctx.drawImage(overlayImage, x, y, size, size);
                ctx.globalAlpha = 1.0;
                break;
        }
        const png = await canvas.encode('png');

        if (!png || png.length === 0) {
            throw new Error('Generated empty PNG buffer');
        }

        if (convert) {
            return new AttachmentBuilder(png, {name: `meme_${getTimestamp()}.png`});
        } else {
            return png;
        }

    } catch (error) {
        log.error('An error in overlayImage', error);
        throw new Error(`overlayImage failed: ${error.message}`);
    }
}