import pkg from 'markov-strings';

const {default: Markov} = pkg;

let previous;

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
            // result.string !== previous;
        }
    }

    try {
        result = markov.generate(options);
    } catch (error) {
        console.error('Error generating text:', error);
        return false;
    }
    if (result && result.string) {
        previous = result.string;
        return result.string;
    } else {
        return false;
    }
}