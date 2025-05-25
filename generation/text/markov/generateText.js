import pkg from 'markov-strings';

const {default: Markov} = pkg;

export const generateText = async (corpus, minLength, maxLength) => {
    console.log(corpus, minLength, maxLength);
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

    const result = markov.generate(options);
    if (result && result.string) {
        return result.string;
    } else {
        return false;
    }
}