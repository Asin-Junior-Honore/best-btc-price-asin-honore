import React from 'react';

interface CurrencySelectorProps {
    currency: string;
    onChange: (currency: string) => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
    currency,
    onChange
}) => {
    return (
        <select
            value={currency}
            onChange={(e) => onChange(e.target.value)}
            className="currency-selector"
        >
            <option value="GBP">GBP (£)</option>
            <option value="EUR">EUR (€)</option>
            <option value="USD">USD ($)</option>
        </select>
    );
};