
/**
 * Number formatting utility functions
 */

/**
 * Format a number with commas and decimal places
 */
export const formatNumber = (num: number, decimals: number = 0): string => {
  if (num === undefined || num === null) return '';
  
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

/**
 * Format a number as currency
 */
export const formatCurrency = (amount: number, currency: string = 'USD', locale: string = 'en-US'): string => {
  if (amount === undefined || amount === null) return '';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number as a percentage
 */
export const formatPercent = (num: number, decimals: number = 0): string => {
  if (num === undefined || num === null) return '';
  
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num / 100);
};

/**
 * Abbreviate large numbers (e.g., 1.2k, 2.3M)
 */
export const abbreviateNumber = (num: number): string => {
  if (num === undefined || num === null) return '';
  
  if (num < 1000) return num.toString();
  
  const abbreviations = ['', 'k', 'M', 'B', 'T'];
  const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
  
  if (tier >= abbreviations.length) return num.toString();
  
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  
  return scaled.toFixed(1).replace(/\.0$/, '') + abbreviations[tier];
};

/**
 * Convert a number to a readable string with ordinal suffix (1st, 2nd, 3rd, etc.)
 */
export const formatOrdinal = (num: number): string => {
  if (num === undefined || num === null) return '';
  
  const remainder = num % 100;
  
  if (remainder >= 11 && remainder <= 13) {
    return num + 'th';
  }
  
  switch (num % 10) {
    case 1: return num + 'st';
    case 2: return num + 'nd';
    case 3: return num + 'rd';
    default: return num + 'th';
  }
};
