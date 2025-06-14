export const runRandomFunction = async (functionsWithWeights) => {
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
};

export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};