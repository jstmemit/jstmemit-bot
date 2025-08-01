export const parseSurveyId = customId => {
    const parts = customId.split('-');
    return {
        type: parts[0],
        surveyId: parts[1],
        questionId: parts[2],
        value: parts[3],
        userId: parts[4]
    };
};