export const parseCount = label => {
    const match = label.match(/\d+\s*$/);
    return match ? Number(match[0]) : 0;
};
