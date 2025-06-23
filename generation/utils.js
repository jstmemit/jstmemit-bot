import {settings} from "../config/settings.js";

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
            throw new Error('Invalid image');
        }

        return await compressImage(image, canvas);

    } catch (error) {
        console.error('Error loading image:', error);
        throw new Error('Image error');
    }
};

const compressImage = async (image, canvas) => {
    const MAX_FILE_SIZE = settings.canvas.maxFileSize;
    const MAX_DIMENSION = settings.canvas.maxDimension;
    const MIN_DIMENSION = settings.canvas.minDimension;

    try {
        if (!image || !image.width || !image.height ||
            image.width <= 0 || image.height <= 0) {
            throw new Error('Invalid image dimensions');
        }

        if (image.width > 10000 || image.height > 10000) {
            throw new Error('Image too large');
        }

        const needsResize = image.width > MAX_DIMENSION || image.height > MAX_DIMENSION;

        if (!needsResize) {
            const estimatedSize = image.width * image.height * 3;
            if (estimatedSize < MAX_FILE_SIZE) {
                return image;
            }
        }

        let newWidth = image.width;
        let newHeight = image.height;

        if (needsResize) {
            const ratio = Math.min(MAX_DIMENSION / image.width, MAX_DIMENSION / image.height);
            newWidth = Math.floor(image.width * ratio);
            newHeight = Math.floor(image.height * ratio);
        } else {
            const ratio = 0.7;
            newWidth = Math.floor(image.width * ratio);
            newHeight = Math.floor(image.height * ratio);
        }

        if (newWidth < MIN_DIMENSION || newHeight < MIN_DIMENSION) {
            newWidth = Math.max(newWidth, MIN_DIMENSION);
            newHeight = Math.max(newHeight, MIN_DIMENSION);
        }

        let compressedCanvas;
        let ctx;

        try {
            compressedCanvas = canvas.createCanvas(newWidth, newHeight);
            ctx = compressedCanvas.getContext('2d');
        } catch (error) {
            throw new Error(`Failed to create canvas: ${error.message}`);
        }

        try {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'medium';
        } catch (error) {
            console.error(`Failed to create canvas: ${error.message}`);
        }

        try {
            ctx.drawImage(image, 0, 0, newWidth, newHeight);
        } catch (error) {
            throw new Error(`Failed to draw image: ${error.message}`);
        }

        let buffer;
        try {
            buffer = compressedCanvas.toBuffer('image/jpeg', {quality: 0.8});

            if (!buffer || buffer.length === 0) {
                throw new Error('Generated empty buffer');
            }

        } catch (error) {
            throw new Error(`Failed to create buffer: ${error.message}`);
        }

        try {
            const compressedImage = await canvas.loadImage(buffer);

            if (!compressedImage || !compressedImage.width || !compressedImage.height) {
                throw new Error('Compressed image is invalid');
            }

            buffer = null;

            return compressedImage;

        } catch (error) {
            throw new Error(`Failed to load compressed image: ${error.message}`);
        }

    } catch (error) {
        console.error('An error in compressImage', error.message);
        return image;
    }
};

export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};