export const makeCorpus = (messages) => {
    if (!Array.isArray(messages) || messages.length === 0) {
        return '';
    }

    return messages.map(msg => msg.content).join(' ');
}