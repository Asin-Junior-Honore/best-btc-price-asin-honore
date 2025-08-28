const normalizeData = (data) => {
    return data.filter(item => item !== null);
};

const findHighestPrice = (data) => {
    if (data.length === 0) return null;

    return data.reduce((highest, current) => {
        return current.Price > highest.Price ? current : highest;
    });
};

module.exports = { normalizeData, findHighestPrice };