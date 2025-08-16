import {addText} from "./addText.js";
import {overlayImage} from "./overlayImage.js";
import {getTimestamp, validateCanvasImage} from "../../utils.js";
import {AttachmentBuilder} from "discord.js";
import Canvas from '@napi-rs/canvas';
import {log} from "../../../../bot.js";

export const applyWatermark = async (image, logoUrl, text, applyLogo) => {
    try {
        let currentImage = image;

        if (!applyLogo) {
            logoUrl = null;
        }

        if (!logoUrl && !text) {
            return image;
        }

        if (logoUrl) {
            try {
                const response = await fetch(logoUrl);
                if (!response.ok) {
                    log.error('Failed to fetch logo:', response.statusText);
                }
                const logoBuffer = Buffer.from(await response.arrayBuffer());

                currentImage = await overlayImage(currentImage, logoBuffer, 'watermark_logo', 0, false);
            } catch (logoError) {
                log.error('Logo watermark failed:', logoError);
            }
        }

        if (text) {
            try {
                currentImage = await addText('watermark_text', currentImage, text);
            } catch (textError) {
                log.error('Text watermark failed:', textError);
            }
        }

        if (currentImage instanceof AttachmentBuilder) {
            return currentImage;
        }

        let finalCanvas;
        if (Buffer.isBuffer(currentImage)) {
            finalCanvas = await Canvas.loadImage(currentImage);
        } else {
            finalCanvas = await validateCanvasImage(currentImage, Canvas);
        }

        const canvas = new Canvas.Canvas(finalCanvas.width, finalCanvas.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(finalCanvas, 0, 0);

        const buffer = await canvas.encode('png');

        return new AttachmentBuilder(buffer, {name: `meme_${getTimestamp()}.png`});

    } catch (error) {
        log.error('Error in applyWatermark:', error);
    }
};