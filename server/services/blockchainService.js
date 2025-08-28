const axios = require('axios');
const config = require('../config');

const getExchangeData = async (currency, timeout) => {
    try {
        const response = await axios.get(config.blockchain.apiUrl, {
            timeout: timeout
        });

        const data = response.data;
        const currencyData = data[currency.toUpperCase()];

        if (!currencyData) {
            return null;
        }

        return {
            exchange: 'Blockchain',
            Symbol: `BTC/${currency.toUpperCase()}`,
            Price: currencyData.sell,
            Currency: currency.toUpperCase(),
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error fetching from Blockchain.info:', error.message);
        return null;
    }
};

module.exports = { getExchangeData };