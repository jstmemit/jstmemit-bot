export const runRandomFunction = async (functionsWithWeights) => {
    try {
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
    } catch (error) {
        console.error('Error in runRandomFunction:', error.message);
        throw error;
    }
};

export const getTimestamp = () => {
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
};

export const withTimeout = (promise, ms = 30000) => {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Operation timed out')), ms),
        )
    ]);
};