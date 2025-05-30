export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};

export const validateCanvasImage = async (image, canvas) => {
    try {
        if (Buffer.isBuffer(image)) {
            image = await canvas.loadImage(image);
        } else if (image.url) {
            image = await canvas.loadImage(image.url);
        } else if (image.attachment) {
            image = await canvas.loadImage(image.attachment);
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

export const resizeImage = (image, canvas, size) => {
    if (!image || !image.width || !image.height) {
        console.error('Invalid image:', image);
        return null;
    }

    const aspectRatio = image.width / image.height;
    let width, height;

    if (image.width > image.height) {
        width = Math.max(image.width, size);
        height = width / aspectRatio;
    } else {
        height = Math.max(image.height, size);
        width = height * aspectRatio;
    }

    const resizedCanvas = new canvas.Canvas(width, height);
    const ctx = resizedCanvas.getContext('2d');
    ctx.drawImage(image, 0, 0, width, height);

    return resizedCanvas;
}

export const runRandomFunction = async (functions) => {
    const randomIndex = Math.floor(Math.random() * functions.length);
    const selectedTemplate = functions[randomIndex];
    return await selectedTemplate();
}