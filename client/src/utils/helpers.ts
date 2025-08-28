export const formatCurrency = (amount: number, currency: string): string => {
    const formatters: Record<string, Intl.NumberFormat> = {
        GBP: new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }),
        USD: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }),
        EUR: new Intl.NumberFormat('de-DE', { // Using German locale for consistent EUR formatting
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    };

    const formatter = formatters[currency] || formatters.GBP;
    return formatter.format(amount);
};

export const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};


export const findMaxPrice = (prices: number[]): number => {
    if (prices.length === 0) return -Infinity;
    return Math.max(...prices);
};

export const testFindMaxPrice = (): boolean => {
    const testPrices = [100, 200, 150, 300, 250];
    return findMaxPrice(testPrices) === 300;
};