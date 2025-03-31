
/**
 * Currency and number formatting utilities
 */

/**
 * Format a number as currency
 */
export const formatCurrency = (amount: number | undefined | null, currency: string = 'USD'): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number with thousands separators
 */
export const formatNumber = (value: number | undefined | null, options?: Intl.NumberFormatOptions): string => {
  if (value === undefined || value === null) return '0';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  
  return new Intl.NumberFormat('en-US', options || defaultOptions).format(value);
};

/**
 * Format a dollar amount with simpler display (e.g., $1,234)
 */
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

/**
 * Format a percentage value
 */
export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Format a percentage (value is between 0 and 1)
 */
export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

/**
 * Format a currency with a plus or minus sign
 */
export const formatCurrencyWithSign = (amount: number): string => {
  const formatted = formatCurrency(Math.abs(amount));
  return amount >= 0 ? `+${formatted}` : `-${formatted}`;
};

/**
 * Format a large number with appropriate suffix (K, M, B)
 */
export const formatLargeNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * Format a historical value with exaggerated units for satirical purposes
 */
export const formatHistoricalValue = (
  value: number, 
  unit: string, 
  exaggeration: number = 1000, 
  era: string = 'medieval'
): string => {
  const exaggeratedValue = value * exaggeration;
  const formattedValue = formatNumber(exaggeratedValue);
  return `${formattedValue} ${unit} (${era} equivalent)`;
};
