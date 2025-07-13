import {getTemplateFiles} from "./helpers/getTemplateFiles.js";
import {getChannelMessages} from "../../database/queries/getChannelMessages.js";
import {generateText} from "../text/markov/helpers/generateText.js";
import {addText} from "./helpers/addText.js";
import {getRandomImage} from "../../discord/getRandomImage.js";
import {overlayImage} from "./helpers/overlayImage.js";
import {analytics} from "../../../bot.js";
import {memeTemplates} from "../../../config/memeTemplates.js";

export class MemeGenerator {
    constructor(templateName) {
        this.config = memeTemplates[templateName];
        this.templateName = templateName;

        if (!this.config) {
            throw new Error(`Template ${templateName} not found`);
        }
    }

    async generate(channelId, serverId, interaction, providedImage = null) {
        try {
            const channelMessages = this.config.requiresChannelMessages
                ? await getChannelMessages(channelId)
                : null;

            const texts = await this.generateTexts(channelMessages);

            const images = await this.processImages(serverId, channelId, interaction, providedImage);

            let result = await this.determineBaseImage(images, providedImage);
            result = await this.overlayImages(result, images);

            result = await this.addTexts(result, texts);

            await this.trackAnalytics(channelId);

            return result;

        } catch (error) {
            console.error(`Error in ${this.templateName}:`, error.message);
            throw error;
        }
    }

    async generateTexts(channelMessages) {
        const texts = [];

        for (const textConfig of this.config.texts) {
            const text = await generateText(
                channelMessages,
                textConfig.minLength,
                textConfig.maxLength
            );
            texts.push({key: textConfig.key, text});
        }

        return texts;
    }

    async processImages(serverId, channelId, interaction, providedImage) {
        const images = [];
        const randomImageCache = [];

        for (let i = 0; i < this.config.images.length; i++) {
            const imageConfig = this.config.images[i];
            let image;

            switch (imageConfig.type) {
                case 'random':
                    if (imageConfig.sameAs !== undefined) {
                        image = randomImageCache[imageConfig.sameAs];
                    } else {
                        image = await getRandomImage(serverId || interaction, channelId);
                        randomImageCache.push(image);
                    }
                    break;

                case 'template':
                    image = await getTemplateFiles(this.config.templateFile);
                    break;

                case 'provided':
                    image = providedImage;
                    break;

                default:
                    throw new Error(`Unknown image type: ${imageConfig.type}`);
            }

            images.push({
                image,
                overlay: imageConfig.overlay,
                type: imageConfig.type,
                isBase: imageConfig.isBase || false
            });
        }

        return images;
    }

    async determineBaseImage(images, providedImage) {
        if (providedImage && this.config.templateFile === null) {
            return providedImage;
        }

        const baseImage = images.find(img => img.isBase);
        if (baseImage) {
            return baseImage.image;
        }

        if (!this.config.templateFile && images.length > 0) {
            return images[0].image;
        }

        if (this.config.templateFile) {
            return await getTemplateFiles(this.config.templateFile);
        }

        throw new Error(`Cannot determine base image for template: ${this.templateName}`);
    }

    async overlayImages(baseImage, images) {
        let result = baseImage;

        for (const {image, overlay, type, isBase} of images) {
            if (isBase && image === baseImage) {
                continue;
            }

            if (!overlay) {
                continue;
            }

            result = await overlayImage(result, image, overlay);
        }

        return result;
    }

    async addTexts(image, texts) {
        let result = image;

        for (const {key, text} of texts) {
            result = await addText(key, result, text);
        }

        return result;
    }

    async trackAnalytics(channelId) {
        await analytics.capture({
            distinctId: channelId,
            event: 'meme_generated',
            properties: {
                template: this.templateName,
            },
        });

        await analytics.flush();
    }
}