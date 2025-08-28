import { describe, test, expect } from 'vitest';
import { findMaxPrice, testFindMaxPrice, formatCurrency, formatTimestamp } from './helpers';

describe('Helper Functions', () => {
    describe('findMaxPrice', () => {
        test('returns the maximum price from an array', () => {
            const prices = [100, 200, 150, 300, 250];
            expect(findMaxPrice(prices)).toBe(300);
        });

        test('returns -Infinity for empty array', () => {
            expect(findMaxPrice([])).toBe(-Infinity);
        });

        test('handles negative numbers', () => {
            const prices = [-100, -50, -200, -25];
            expect(findMaxPrice(prices)).toBe(-25);
        });
    });

    describe('testFindMaxPrice', () => {
        test('returns true for correct implementation', () => {
            expect(testFindMaxPrice()).toBe(true);
        });
    });

    describe('formatCurrency', () => {
        test('formats GBP currency correctly', () => {
            expect(formatCurrency(45678.12, 'GBP')).toBe('£45,678.12');
        });

        test('formats USD currency correctly', () => {
            expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56');
        });

        test('formats EUR currency correctly', () => {
            expect(formatCurrency(7890.12, 'EUR')).toBe('7.890,12 €'); // German format
        });

        test('handles zero values', () => {
            expect(formatCurrency(0, 'GBP')).toBe('£0.00');
        });
    });

    describe('formatTimestamp', () => {
        test('formats ISO timestamp correctly', () => {
            const timestamp = '2025-08-26T17:00:00Z';
            const formatted = formatTimestamp(timestamp);
            expect(formatted).toBe('17:00:00');
        });

        test('handles different timezone', () => {
            const timestamp = '2025-08-26T12:30:45Z';
            const formatted = formatTimestamp(timestamp);
            expect(formatted).toBe('12:30:45');
        });
    });
});