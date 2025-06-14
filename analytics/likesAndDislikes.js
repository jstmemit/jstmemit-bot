import axios from 'axios';
import dotenv from "dotenv";

const POSTHOG_PROJECT_ID = dotenv.config().parsed.POSTHOG_PROJECT_ID;
const POSTHOG_PERSONAL_API_KEY = dotenv.config().parsed.POSTHOG_WRITE_KEY;
const POSTHOG_BASE_URL = 'https://eu.i.posthog.com';

export const getAnalyticsData = async (days = 30) => {
    try {
        const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

        let allLikedEvents = [];
        let allDislikedEvents = [];
        let nextUrl = null;

        nextUrl = `${POSTHOG_BASE_URL}/api/projects/${POSTHOG_PROJECT_ID}/events/?event=meme_liked&after=${startDate}&limit=100`;

        do {
            const response = await axios.get(nextUrl, {
                headers: {
                    'Authorization': `Bearer ${POSTHOG_PERSONAL_API_KEY}`,
                },
            });

            allLikedEvents.push(...(response.data.results || []));
            nextUrl = response.data.next;
        } while (nextUrl);

        nextUrl = `${POSTHOG_BASE_URL}/api/projects/${POSTHOG_PROJECT_ID}/events/?event=meme_disliked&after=${startDate}&limit=100`;

        do {
            const response = await axios.get(nextUrl, {
                headers: {
                    'Authorization': `Bearer ${POSTHOG_PERSONAL_API_KEY}`,
                },
            });

            allDislikedEvents.push(...(response.data.results || []));
            nextUrl = response.data.next;
        } while (nextUrl);

        const likedCounts = {};
        const dislikedCounts = {};

        allLikedEvents.forEach(event => {
            const template = event.properties?.template;
            if (template) {
                likedCounts[template] = (likedCounts[template] || 0) + 1;
            }
        });

        allDislikedEvents.forEach(event => {
            const template = event.properties?.template;
            if (template) {
                dislikedCounts[template] = (dislikedCounts[template] || 0) + 1;
            }
        });

        return {
            liked: Object.entries(likedCounts),
            disliked: Object.entries(dislikedCounts),
        };

    } catch (error) {
        return {liked: [], disliked: []};
    }
};

export const calculateWeights = (analyticsData) => {
    const weights = {};

    const likedCounts = {};
    analyticsData.liked.forEach(([template, count]) => {
        likedCounts[template] = count;
    });

    const dislikedCounts = {};
    analyticsData.disliked.forEach(([template, count]) => {
        dislikedCounts[template] = count;
    });

    const allTemplates = new Set([
        ...Object.keys(likedCounts),
        ...Object.keys(dislikedCounts),
    ]);

    allTemplates.forEach(template => {
        const likes = likedCounts[template] || 0;
        const dislikes = dislikedCounts[template] || 0;
        const total = likes + dislikes;

        if (total === 0) {
            weights[template] = 0.3;
        } else {
            const satisfactionRatio = likes / total;
            let weight = 0.05 + (satisfactionRatio * 0.9);
            const volumeBoost = Math.min(total / 100, 0.15);
            weight = Math.min(weight + volumeBoost, 0.95);
            weight = Math.max(weight, 0.05);
            weights[template] = parseFloat(weight.toFixed(2));
        }
    });

    return weights;
};