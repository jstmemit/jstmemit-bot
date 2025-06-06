export const runRandomFunction = async (functions) => {
    const randomIndex = Math.floor(Math.random() * functions.length);
    const selectedFunction = functions[randomIndex];

    const functionName = selectedFunction.toString().match(/generate\w+/)?.[0];

    const result = await selectedFunction();
    return {result, functionName};
};

export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};