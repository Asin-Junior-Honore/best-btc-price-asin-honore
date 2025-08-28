const express = require('express');
const cors = require('cors');
const config = require('./config');
const { getExchangeData } = require('./services/blockchainService');
const { getExmoData } = require('./services/exmoService');
const { findHighestPrice } = require('./utils/helpers');

const app = express();
const PORT = config.server.port;


// Middleware
app.use(cors());
app.use(express.json());

// Health endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Exchanges endpoint
app.get('/api/exchanges', async (req, res) => {
    const currency = req.query.currency || 'GBP';
    const supportedCurrencies = ['GBP', 'EUR', 'USD'];

    if (!supportedCurrencies.includes(currency.toUpperCase())) {
        return res.status(400).json({ error: 'UNSUPPORTED_CURRENCY' });
    }

    try {
        const timeout = 3000;
        const requests = [
            getExchangeData(currency, timeout),
            getExmoData(currency, timeout)
        ];

        // Wait for all requests with timeout handling
        const results = await Promise.allSettled(requests);

        let normalizedData = [];

        // Process successful responses
        results.forEach(result => {
            if (result.status === 'fulfilled' && result.value) {
                normalizedData = normalizedData.concat(result.value);
            }
        });

        if (normalizedData.length === 0) {
            return res.status(502).json({ error: 'UPSTREAM_UNAVAILABLE' });
        }

        res.json(normalizedData);
    } catch (error) {
        console.error('Error fetching exchange data:', error);
        res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
    }
});

// Best endpoint
app.get('/api/best', async (req, res) => {
    try {
        const currency = req.query.currency || 'GBP';
        const supportedCurrencies = ['GBP', 'EUR', 'USD'];

        if (!supportedCurrencies.includes(currency.toUpperCase())) {
            return res.status(400).json({ error: 'UNSUPPORTED_CURRENCY' });
        }

        // Reuse the exchanges endpoint logic
        const timeout = 3000;
        const requests = [
            getExchangeData(currency, timeout),
            getExmoData(currency, timeout)
        ];

        const results = await Promise.allSettled(requests);

        let normalizedData = [];

        results.forEach(result => {
            if (result.status === 'fulfilled' && result.value) {
                normalizedData = normalizedData.concat(result.value);
            }
        });

        if (normalizedData.length === 0) {
            return res.status(502).json({ error: 'UPSTREAM_UNAVAILABLE' });
        }

        const bestPrice = findHighestPrice(normalizedData);
        res.json([bestPrice]);
    } catch (error) {
        console.error('Error finding best price:', error);
        res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});