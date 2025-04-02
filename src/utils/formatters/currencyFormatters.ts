
/**
 * Currency formatting utilities
 */

/**
 * Format a number as currency with dollar sign
 * @param amount - Amount to format
 * @param options - Formatting options
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, options?: Intl.NumberFormatOptions): string => {
  if (amount === null || amount === undefined) return '$0';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options
  };
  
  return amount.toLocaleString('en-US', defaultOptions);
};

/**
 * Format a dollar amount with $ symbol and commas
 * @param amount - Amount to format
 * @returns Formatted dollar amount string
 */
export const formatDollarAmount = (amount: number): string => {
  if (amount === null || amount === undefined) return '$0';
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

/**
 * Format a number with a specific unit (e.g. $, %, etc.)
 * @param value - Value to format
 * @param unit - Unit to append
 * @returns Formatted string with unit
 */
export const formatWithUnit = (value: number, unit: string): string => {
  if (value === null || value === undefined) return `0${unit}`;
  return `${value.toLocaleString('en-US')}${unit}`;
};

/**
 * Format a number in compact notation (e.g. 1K, 1M, etc.)
 * @param value - Value to format
 * @returns Formatted compact number string
 */
export const formatCompactNumber = (value: number): string => {
  if (value === null || value === undefined) return '0';
  
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  });
  
  return formatter.format(value);
};

/**
 * Format a number as a percentage
 * @param value - Value to format (e.g. 0.1 for 10%)
 * @returns Formatted percentage string
 */
export const formatPercent = (value: number): string => {
  if (value === null || value === undefined) return '0%';
  
  return `${(value * 100).toFixed(1)}%`;
};

