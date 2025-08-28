import { useBitcoinData } from './hooks/useBitcoinData';
import { BestPrice } from './components/BestPrice';
import { ExchangeList } from './components/ExchangeList';
import { CurrencySelector } from './components/CurrencySelector';
import { AutoRefreshToggle } from './components/AutoRefreshToggle';
import { RefreshCw } from 'lucide-react';
import './App.css';

function App() {
  const {
    bestPrice,
    exchanges,
    loading,
    error,
    currency,
    setCurrency,
    priceHistory,
    refreshData
  } = useBitcoinData();

  if (error) {
    return (
      <div className="app error">
        <h1>Bitcoin Price Tracker</h1>
        <div className="error-message">{error}</div>
        <button onClick={refreshData} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Bitcoin Price Tracker</h1>
        <div className="controls">
          <CurrencySelector currency={currency} onChange={setCurrency} />
          <button onClick={refreshData} className="refresh-btn" disabled={loading}>
            <RefreshCw size={16} />
            Refresh
          </button>
          <AutoRefreshToggle onRefresh={refreshData} />
        </div>
      </header>

      <main>
        <BestPrice 
          bestPrice={bestPrice} 
          priceHistory={priceHistory} 
          loading={loading} 
        />
        <ExchangeList exchanges={exchanges} loading={loading} />
      </main>
    </div>
  );
}

export default App;