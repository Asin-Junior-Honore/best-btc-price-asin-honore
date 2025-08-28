import { useState, useEffect, useCallback } from 'react';
import { fetchBestPrice, fetchExchanges } from '../services/api';
import type { BitcoinPrice } from '../types';

export const useBitcoinData = () => {
  const [bestPrice, setBestPrice] = useState<BitcoinPrice | null>(null);
  const [exchanges, setExchanges] = useState<BitcoinPrice[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currency, setCurrency] = useState('GBP');
  const [priceHistory, setPriceHistory] = useState<number[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [bestData, exchangesData] = await Promise.all([
        fetchBestPrice(currency),
        fetchExchanges(currency)
      ]);

      if (bestData && bestData.length > 0) {
        setBestPrice(bestData[0]);
        // Add to price history for sparkline
        setPriceHistory(prev => {
          const newHistory = [...prev, bestData[0].Price];
          return newHistory.slice(-10); // Keep only last 10 prices
        });
      }

      setExchanges(exchangesData);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, [currency]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    bestPrice,
    exchanges,
    loading,
    error,
    currency,
    setCurrency,
    priceHistory,
    refreshData: fetchData
  };
};