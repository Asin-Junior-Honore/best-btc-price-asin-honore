# Bitcoin Price Tracker - Backend API

A Node.js/Express API that normalizes Bitcoin prices from multiple cryptocurrency exchanges.

## Features

- Real-time Bitcoin price aggregation from Blockchain.info and EXMO exchange
- Currency conversion support (GBP, EUR, USD)
- Health check endpoint for monitoring
- Robust error handling and timeout management
- Consistent data normalization across different exchange formats

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns API status
- **Response:** `{ "status": "ok" }`

### Get All Exchange Prices
- **GET** `/api/exchanges?currency=GBP`
- Returns normalized prices from all available exchanges
- **Parameters:** `currency` (optional) - GBP, EUR, or USD (default: GBP)
- **Response:** Array of exchange price objects

### Get Best Price
- **GET** `/api/best?currency=GBP`
- Returns the highest Bitcoin price from all exchanges
- **Parameters:** `currency` (optional) - GBP, EUR, or USD (default: GBP)
- **Response:** Single exchange price object with the highest price

## Supported Currencies

- **GBP** - British Pound (default)
- **EUR** - Euro
- **USD** - US Dollar

## Data Sources & Normalization

### Blockchain.info
- **Endpoint:** `https://blockchain.info/ticker`
- **Normalization:** Uses the `sell` field as it represents the price users pay to buy Bitcoin
- **Example Response:** `{ "GBP": { "sell": 45078.12, ... } }`

### EXMO Exchange
- **Endpoint:** `https://api.exmo.com/v1/ticker`
- **Normalization:** Uses the `sell_price` field as it represents the price users pay to buy Bitcoin
- **Example Response:** `{ "BTC_GBP": { "sell_price": "45516.08", ... } }`

## Error Handling

- **Timeout:** 3-second timeout for upstream API requests
- **Partial Failure:** If one exchange fails, returns data from available exchanges
- **Complete Failure:** Returns `502 { "error": "UPSTREAM_UNAVAILABLE" }` if all exchanges fail

## Setup Instructions

1. **Clone the repository**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   Create a `.env` file:
   ```env
   BLOCKCHAIN_API_URL=https://blockchain.info/ticker
   EXMO_API_URL=https://api.exmo.com/v1/ticker
   PORT=3000
   ```

4. **Start the server**
   ```bash
   # Production
   npm start
   
   # Development (with auto-restart)
   npm run dev
   ```

5. **Test the API**
   ```bash
   curl http://localhost:3000/api/health
   curl http://localhost:3000/api/best?currency=GBP
   ```

## Project Structure

```
bitcoin-price-api/
├── config.js                 # Configuration settings
├── index.js                  # Main application entry point
├── services/
│   ├── blockchainService.js  # Blockchain.info API integration
│   └── exmoService.js        # EXMO API integration
├── utils/
│   └── helpers.js            # Helper functions
├── .env.example              # Environment variables template
└── package.json              # Dependencies and scripts
```

## Dependencies

- **express** - Web framework
- **axios** - HTTP client for API requests
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Development

- Use `npm run dev` for development with auto-restart
- API will be available at `http://localhost:3000`
- Check console for any connection errors or issues

---