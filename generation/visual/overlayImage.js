import Canvas from '@napi-rs/canvas'
import {AttachmentBuilder} from "discord.js";

export const overlayImage = async (image1, image2, variant) => {
    try {

        if (image1.url) {
            image1 = await Canvas.loadImage(image1.url)
        } else if (typeof image1 === 'string') {
            image1 = await Canvas.loadImage(image1)
        }

        if (image2.url) {
            image2 = await Canvas.loadImage(image2.url)
        } else if (typeof image2 === 'string') {
            image2 = await Canvas.loadImage(image2)
        }

        const canvas = new Canvas.Canvas(image1.width, image1.height)
        const ctx = canvas.getContext('2d')

        const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15)

        ctx.drawImage(image1, 0, 0)

        switch (variant) {
            default:
            case 'default':
                ctx.drawImage(image2, 0, 0, image1.width, image2.height);
                break
        }

        const buffer = await canvas.encode('png');
        return new AttachmentBuilder(buffer, {name: `meme_${timestamp}.png`});

    } catch (error) {
        console.error('Error overlaying images:', error)
        throw error
    }
}