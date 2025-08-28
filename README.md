# Bitcoin Price Tracker

A full-stack application that tracks and displays real-time Bitcoin prices from multiple cryptocurrency exchanges.

## 📋 Overview

This project consists of:

- **Backend API**: Node.js/Express server that fetches and normalizes Bitcoin prices from Blockchain.info and EXMO exchange
- **Frontend Application**: React-based web interface that displays prices with currency selection, auto-refresh, and price history visualization

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Asin-Junior-Honore/best-btc-price-asin-honore.git
   cd best-btc-price-asin-honore
   ```

2. **Setup Backend**

   ```bash
   cd server
   npm install
   cp .env.example .env  # Optional: configure environment variables
   npm start
   ```

   API will run on http://localhost:3000

3. **Setup Frontend** (in a new terminal)

   ```bash
   cd client
   npm install
   npm run dev
   ```

   Frontend will run on http://localhost:5173

4. **Open your browser**
   Navigate to http://localhost:5173 to view the application

## 📁 Project Structure

```
bitcoin-price-tracker/
├── server/                 # Backend API
│   ├── services/          # Exchange API integrations
│   ├── utils/             # Helper functions
│   ├── index.js           # Main server file
│   └── package.json
├── client/                # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API clients
│   │   └── utils/         # Utilities
│   └── package.json
└── README.md
```

## ⚡ Features

### Backend

- RESTful API with health check endpoint
- Fetches prices from Blockchain.info and EXMO exchange
- Supports GBP, EUR, and USD currencies
- 3-second timeout with graceful error handling
- Data normalization across different exchange formats

### Frontend

- Real-time price display with best price highlighting
- Currency selector (GBP/EUR/USD)
- Auto-refresh toggle (30-second intervals)
- Price history sparkline visualization
- Responsive design for all devices
- Loading and error states

## 🛠️ Development

### Backend Commands

```bash
cd server
npm install      # Install dependencies
npm start        # Start production server
npm run dev      # Start development server with auto-restart
```

### Frontend Commands

```bash
cd client
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run test       # Run tests
npm run preview    # Preview production build
```

## 🌐 API Endpoints

- `GET /api/health` - Health check
- `GET /api/exchanges?currency=GBP` - All exchange prices
- `GET /api/best?currency=GBP` - Best price only

## 📊 Supported Currencies

- GBP (British Pound) - Default
- EUR (Euro)
- USD (US Dollar)

## 📦 Deployment

### Backend Deployment

1. Set environment variables for production
2. Deploy to your preferred Node.js hosting platform

### Frontend Deployment

1. Update `VITE_API_BASE_URL` in environment variables
2. Build with `npm run build`
3. Deploy the `dist` folder to any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Happy Bitcoin Tracking!** 🚀💰
