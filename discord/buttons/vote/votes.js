import {parseCount} from "../parseReactions.js";
import {buildRow} from "../buildRow.js";
import {analytics as posthog} from "../../../bot.js";

export const votes = new Map();

export const vote = async (interaction, analytics, id) => {
    let record = votes.get(analytics);
    if (!record) {
        record = {likes: new Set(), dislikes: new Set()};
        votes.set(analytics, record);
    }

    if (record.likes.has(interaction.user.id) || record.dislikes.has(interaction.user.id)) {
        await interaction.reply({
            content: 'You have already voted on this meme.',
            ephemeral: true
        });
        return;
    }

    const row = interaction.message.components[0];
    const likesText = row.components.find(c => c.customId.startsWith('like'));
    const dislikesText = row.components.find(c => c.customId.startsWith('dislike'));

    const likes = parseCount(likesText.label);
    const dislikes = parseCount(dislikesText.label);

    const newLikes = id === 'like' ? likes + 1 : likes;
    const newDislikes = id === 'dislike' ? dislikes + 1 : dislikes;

    if (id === 'like') {
        record.likes.add(interaction.user.id);
        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'meme_liked',
            properties: {
                template: analytics.split('-')[0],
                memeGeneratedOn: analytics.split('-')[1],
            },
        })
    }

    if (id === 'dislike') {
        record.dislikes.add(interaction.user.id);
        await posthog.capture({
            distinctId: interaction.channelId,
            event: 'meme_disliked',
            properties: {
                template: analytics.split('-')[0],
                memeGeneratedOn: analytics.split('-')[1],
            },
        })
    }

    await posthog.flush();

    await interaction.update({
        components: [buildRow(newLikes, newDislikes, analytics)],
    });
}