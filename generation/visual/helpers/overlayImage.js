import Canvas from '@napi-rs/canvas';
import {AttachmentBuilder} from "discord.js";
import {getTimestamp, validateCanvasImage} from "../../../handlers/utils.js";

export const overlayImage = async (image1, image2, variant, height, convert) => {
    try {
        let x, y;

        image1 = await validateCanvasImage(image1, Canvas);
        image2 = await validateCanvasImage(image2, Canvas);

        const canvasHeight = (1024 + (height || 0));
        const canvas = new Canvas.Canvas(image1.width, canvasHeight);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height, canvasHeight - height);

        ctx.drawImage(image1, 0, height, image1.width, canvasHeight - height);

        switch (variant) {
            default:
            case 'speechbubble':
                ctx.drawImage(image2, 0, 0 + height || 0, image1.width, image2.height);
                break;
            case 'looksatpaperangry_1':
                x = 170
                y = 134

                ctx.save();
                ctx.beginPath();
                ctx.arc(x, y, 64, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(image2, x - 64, y - 64, 128, 128);
                ctx.restore();
                break;
            case 'looksatpaperangry_2':
                x = 530
                y = 90

                ctx.save();
                ctx.beginPath();
                ctx.arc(x, y, 64, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(image2, x - 64, y - 64, 128, 128);
                ctx.restore();
                break;
            case 'looksatpaperangry_3':
                x = 210
                y = 670

                ctx.save();
                ctx.beginPath();
                ctx.arc(x, y, 150, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(image2, x - 150, y - 150, 300, 300);
                ctx.restore();
                break;
        }

        const buffer = await canvas.encode('png');

        if (convert) {
            return new AttachmentBuilder(buffer, {name: `meme_${getTimestamp()}.png`});
        } else {
            return buffer
        }


    } catch (error) {
        console.error('Error overlaying images:', error);
        throw error;
    }
};