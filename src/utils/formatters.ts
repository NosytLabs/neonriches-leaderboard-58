
/**
 * Utility functions for formatting values consistently throughout the application
 */

/**
 * Format a currency value with dollar sign
 */
export const formatCurrency = (value: number | undefined | null): string => {
  if (value === undefined || value === null) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Format a currency value without dollar sign
 */
export const formatDollarAmount = (value: number | undefined | null): string => {
  if (value === undefined || value === null) return '0.00';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Format a date in a human-readable format
 */
export const formatDate = (date: Date | string | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObj);
};

/**
 * Format a historical monetary value with adjustments
 */
export const formatHistoricalValue = (
  value: number, 
  year: number, 
  currentYear = new Date().getFullYear()
): string => {
  // Simple inflation adjustment (very approximate)
  const averageInflation = 0.03; // 3% per year
  const yearsDifference = currentYear - year;
  const adjustmentFactor = Math.pow(1 + averageInflation, yearsDifference);
  const adjustedValue = value * adjustmentFactor;
  
  return formatCurrency(adjustedValue);
};

/**
 * Format a wallet address for display
 */
export const formatAddress = (address: string | null | undefined): string => {
  if (!address) return 'Unknown Address';
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

/**
 * Format a number with commas
 */
export const formatNumber = (value: number | undefined | null): string => {
  if (value === undefined || value === null) return '0';
  return new Intl.NumberFormat('en-US').format(value);
};

