import Canvas from '@napi-rs/canvas';
import {AttachmentBuilder} from "discord.js";
import {getTimestamp, validateCanvasImage} from "../../../utils.js";
import {overlaySettings} from "../../settings/overlaySettings.js";
import {drawFullWidth} from "./overlay/drawFullWidth.js";
import {drawAvatar} from "./overlay/drawAvatar.js";

export const overlayImage = async (image1, image2, variant, height = 0, convert) => {
    try {
        const baseImage = await validateCanvasImage(image1, Canvas);
        const overlayImage = await validateCanvasImage(image2, Canvas);

        const canvasHeight = baseImage.height + height;
        const canvas = new Canvas.Canvas(baseImage.width, canvasHeight);
        const ctx = canvas.getContext('2d');

        const mode = overlaySettings[variant]

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
                drawAvatar(ctx, overlayImage, mode)
                break;
        }

        const png = await canvas.encode('png');
        if (convert) {
            return new AttachmentBuilder(png, {name: `meme_${getTimestamp()}.png`});
        } else {
            return png;
        }
    } catch (error) {

    }
}

// mess below

// export const overlayImage = async (image1, image2, variant, height, convert) => {
//     try {
//         let x, y;
//
//         image1 = await validateCanvasImage(image1, Canvas);
//         image2 = await validateCanvasImage(image2, Canvas);
//
//         const canvasHeight = (1024 + (height || 0));
//         const canvas = new Canvas.Canvas(image1.width, canvasHeight);
//         const ctx = canvas.getContext('2d');
//
//         ctx.fillStyle = '#ffffff';
//         ctx.fillRect(0, 0, canvas.width, canvas.height, canvasHeight - height);
//
//         ctx.drawImage(image1, 0, height, image1.width, canvasHeight - height);
//
//         switch (variant) {
//             default:
//             case 'speechbubble':
//                 ctx.drawImage(image2, 0, 0 + height || 0, image1.width, image2.height);
//                 break;
//             case 'looksatpaperangry_1':
//                 x = 170
//                 y = 134
//
//                 ctx.save();
//                 ctx.beginPath();
//                 ctx.arc(x, y, 64, 0, Math.PI * 2, true);
//                 ctx.closePath();
//                 ctx.clip();
//                 ctx.drawImage(image2, x - 64, y - 64, 128, 128);
//                 ctx.restore();
//                 break;
//             case 'looksatpaperangry_2':
//                 x = 530
//                 y = 90
//
//                 ctx.save();
//                 ctx.beginPath();
//                 ctx.arc(x, y, 64, 0, Math.PI * 2, true);
//                 ctx.closePath();
//                 ctx.clip();
//                 ctx.drawImage(image2, x - 64, y - 64, 128, 128);
//                 ctx.restore();
//                 break;
//             case 'looksatpaperangry_3':
//                 x = 210
//                 y = 670
//
//                 ctx.save();
//                 ctx.beginPath();
//                 ctx.arc(x, y, 150, 0, Math.PI * 2, true);
//                 ctx.closePath();
//                 ctx.clip();
//                 ctx.drawImage(image2, x - 150, y - 150, 300, 300);
//                 ctx.restore();
//                 break;
//         }
//
//         const buffer = await canvas.encode('png');
//
//         if (convert) {
//             return new AttachmentBuilder(buffer, {name: `meme_${getTimestamp()}.png`});
//         } else {
//             return buffer
//         }
//
//
//     } catch (error) {
//         console.error('Error overlaying images:', error);
//         throw error;
//     }
// };