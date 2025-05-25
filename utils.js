export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};

export const validateCanvasImage = async (image, canvas) => {
    try {
        if (image.url) {
            image = await canvas.loadImage(image.url);
        } else if (typeof image === 'string') {
            image = await canvas.loadImage(image);
        }

        if (!image || !image.width || !image.height) {
            console.log('Image error:', image);
        }

        return image;
    } catch (error) {
        console.error('Error loading image:', error);
        throw new Error('Image error');
        return null;
    }
};