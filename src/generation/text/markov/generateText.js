import pkg from 'markov-strings';

const {default: Markov} = pkg;

export const generateText = async (corpus, minLength, maxLength) => {
    let result;
    const markov = new Markov({stateSize: 1})
    const data = corpus;

    if (!data || data.length === 0) {
        return false;
    }

    markov.addData(data);

    const options = {
        maxTries: 10000,
        filter: (result) => {
            return result.string.split(' ').length >= minLength &&
                result.string.split(' ').length <= maxLength // &&
        }
    }

    try {
        result = markov.generate(options);
    } catch (error) {
        return false;
    }
    if (result && result.string) {
        return result.string;
    } else {
        return false;
    }
}