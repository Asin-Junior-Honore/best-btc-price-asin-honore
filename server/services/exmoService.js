const axios = require('axios');
const config = require('../config');

const getExmoData = async (currency, timeout) => {
    try {
        const response = await axios.get(config.exmo.apiUrl, {
            timeout: timeout
        });

        const data = response.data;
        const pair = `BTC_${currency.toUpperCase()}`;
        const pairData = data[pair];

        if (!pairData) {
            return null;
        }

        return {
            exchange: 'EXMO',
            Symbol: `BTC/${currency.toUpperCase()}`,
            Price: parseFloat(pairData.sell_price),
            Currency: currency.toUpperCase(),
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error fetching from EXMO:', error.message);
        return null;
    }
};

module.exports = { getExmoData };