import {locale} from "./locale.js";

export const t = (key, language, variables = {}) => {
    const targetLanguage = locale[language] ? language : "english";

    let translation = locale[targetLanguage]?.[key];

    if (!translation && targetLanguage !== "english") {
        translation = locale.english?.[key];
    }

    if (!translation) {
        return key;
    }

    if (Object.keys(variables).length > 0) {
        return interpolateString(translation, variables);
    }

    return translation;
};

const interpolateString = (string, variables) => {
    return string.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return variables.hasOwnProperty(key) ? variables[key] : match;
    });
};

export const getLanguageTranslations = (language) => {
    return locale[language] || locale.english;
};