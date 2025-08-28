import axios from 'axios';
import type { BitcoinPrice } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchBestPrice = async (currency: string): Promise<BitcoinPrice[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/best?currency=${currency}`);
  return response.data;
};

export const fetchExchanges = async (currency: string): Promise<BitcoinPrice[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/exchanges?currency=${currency}`);
  return response.data;
};