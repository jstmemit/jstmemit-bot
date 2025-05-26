import pkg from 'markov-strings';

const {default: Markov} = pkg;

export const generateText = async (corpus, minLength, maxLength) => {
    console.log(corpus, minLength, maxLength);
    let result;
    const markov = new Markov({stateSize: 2})
    const data = corpus;

    console.log(data)

    markov.addData(data);

    const options = {
        maxTries: 100,
        filter: (result) => {
            return result.string.split(' ').length >= minLength &&
                result.string.split(' ').length <= maxLength;
        }
    }

    try {
        result = markov.generate(options);
    } catch (error) {
        console.error('Error generating text:', error);
        return false;
    }
    if (result && result.string) {
        return result.string;
    } else {
        return false;
    }
}