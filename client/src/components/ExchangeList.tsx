import React from 'react';
import { formatCurrency, formatTimestamp } from '../utils/helpers';
import type { BitcoinPrice } from '../types';

interface ExchangeListProps {
  exchanges: BitcoinPrice[];
  loading: boolean;
}

export const ExchangeList: React.FC<ExchangeListProps> = ({ exchanges, loading }) => {
  if (loading) {
    return <div className="exchange-list loading">Loading exchanges...</div>;
  }

  return (
    <div className="exchange-list">
      <h3>All Exchanges</h3>
      <table>
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Price</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map((exchange) => (
            <tr key={exchange.exchange}>
              <td>{exchange.exchange}</td>
              <td>{formatCurrency(exchange.Price, exchange.Currency)}</td>
              <td>{formatTimestamp(exchange.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};