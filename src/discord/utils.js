import {client} from "../../bot.js";

export const runRandomFunction = async (functionsWithWeights) => {
    try {
        const totalWeight = functionsWithWeights.reduce(
            (sum, item) => sum + item.weight,
            0
        );

        const random = Math.random() * totalWeight;

        let currentWeight = 0;
        for (const item of functionsWithWeights) {
            currentWeight += item.weight;
            if (random <= currentWeight) {
                const result = await item.func();
                return {
                    result,
                    functionName: item.name,
                };
            }
        }
    } catch (error) {
        console.error('Error in runRandomFunction:', error.message);
        throw error;
    }
};

export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};

export const withTimeout = (promise, ms = 30000) => {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Operation timed out')), ms),
        )
    ]);
};

export const filterMentions = async (text, onlyGlobal) => {
    // replace all @everyone and @here to varianta with cyrillic characters
    let filteredText = await text
        .replace(/@everyone/g, '@еveryone')
        .replace(/@here/g, '@hеre')

    if (onlyGlobal) {
        return filteredText;
    }

    const mentionRegex = /<@!?(\d+)>/g;
    const mentions = [...filteredText.matchAll(mentionRegex)];

    if (mentions.length === 0 || !client) {
        return filteredText;
    }

    const replacements = new Map();

    for (const match of mentions) {
        const [fullMatch, userId] = match;

        if (replacements.has(fullMatch)) {
            continue;
        }

        try {
            let user = client.users.cache.get(userId);

            if (!user) {
                user = await client.users.fetch(userId);
            }

            const username = user.displayName || user.username;
            replacements.set(fullMatch, `${username}`);
        } catch (error) {
            replacements.set(fullMatch, fullMatch);
        }
    }

    for (const [mention, replacement] of replacements) {
        filteredText = filteredText.replace(new RegExp(escapeRegex(mention), 'g'), replacement);
    }

    return filteredText;
};

const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

