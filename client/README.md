# Bitcoin Price Tracker - Frontend Application

A React-based frontend application that displays real-time Bitcoin prices from multiple exchanges.

## Features

- Real-time Bitcoin price display from backend API
- Currency selector (GBP, EUR, USD)
- Best price highlighting with exchange information
- Auto-refresh functionality (30-second intervals)
- Price history sparkline visualization
- Responsive design for mobile and desktop
- Loading and error states

## Setup Instructions

1. **Navigate to the frontend directory**

   ```bash
   cd client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file:

   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the application**
   Navigate to `http://localhost:5173` in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
bitcoin-price-frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── BestPrice.tsx
│   │   ├── ExchangeList.tsx
│   │   ├── CurrencySelector.tsx
│   │   ├── AutoRefreshToggle.tsx
│   │   └── Sparkline.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useBitcoinData.ts
│   ├── services/           # API services
│   │   └── api.ts
│   ├── types.ts             # TypeScript type definitions
│   │  
│   ├── utils/              # Utility functions
│   │   └── helpers.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── App.css             # Application styles
├── .env                    # Environment variables
├── vite.config.ts          # Vite configuration
├── vitest.config.ts        # Vitest configuration
└── package.json            # Dependencies and scripts
```

## Components

### BestPrice

Displays the highest Bitcoin price with exchange information and timestamp.

### ExchangeList

Shows a table of all available exchange prices with their current rates.

### CurrencySelector

Dropdown menu for selecting preferred currency (GBP, EUR, USD).

### AutoRefreshToggle

Toggle button for enabling/disabling automatic price refreshes every 30 seconds.

### Sparkline

Miniature line graph showing the last 10 best-price points.

## Custom Hook

### useBitcoinData

Manages Bitcoin price data fetching, state management, and automatic refreshing.

## Testing

The application uses Vitest for testing. Run tests with:

```bash
npm test
```

Key tests include:

- Pure function to find maximum price
- Currency formatting utilities
- Timestamp formatting

## Environment Variables

- `VITE_API_BASE_URL` - Backend API base URL (default: http://localhost:3000)

## Dependencies

### Runtime

- **react** - React library
- **react-dom** - React DOM rendering
- **axios** - HTTP client for API requests
- **lucide-react** - Icon library

### Development

- **typescript** - TypeScript support
- **vite** - Build tool and dev server
- **vitest** - Testing framework
- **@testing-library/react** - React testing utilities
- **eslint** - Code linting

## Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones

## Performance Features

- Efficient re-rendering with React hooks
- Debounced API calls to prevent excessive requests
- Memory-efficient sparkline implementation
- Optimized currency formatting

## Error Handling

- Network error displays with retry button
- Loading states during data fetching
- Graceful handling of API failures
- User-friendly error messages
