import React from 'react';
import { formatCurrency, formatTimestamp } from '../utils/helpers';
import { Sparkline } from './Sparkline';
import type { BitcoinPrice } from '../types';

interface BestPriceProps {
    bestPrice: BitcoinPrice | null;
    priceHistory: number[];
    loading: boolean;
}

export const BestPrice: React.FC<BestPriceProps> = ({
    bestPrice,
    priceHistory,
    loading
}) => {
    if (loading) {
        return <div className="best-price loading">Loading...</div>;
    }

    if (!bestPrice) {
        return <div className="best-price error">No data available</div>;
    }

    return (
        <div className="best-price">
            <div className="price-display">
                <span className="amount">
                    {formatCurrency(bestPrice.Price, bestPrice.Currency)}
                </span>
                <span className="exchange">— {bestPrice.exchange}</span>
            </div>
            <div className="timestamp">
                Last updated: {formatTimestamp(bestPrice.timestamp)}
            </div>
            <div className="sparkline-container">
                <Sparkline data={priceHistory} />
            </div>
        </div>
    );
};