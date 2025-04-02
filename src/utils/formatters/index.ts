
// Import all formatters
import { getInitials, truncateString, capitalizeWords, formatUsername } from './stringFormatters';
import { formatDate, formatTimeAgo, formatCurrency } from './dateFormatters';

// Re-export all formatters
export {
  getInitials,
  truncateString,
  capitalizeWords,
  formatUsername,
  formatDate,
  formatTimeAgo,
  formatCurrency
};

/**
 * Format a number as currency
 */
export const formatMoney = (amount: number | string): string => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  if (isNaN(num)) return '$0';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
};

/**
 * Format a number with commas
 */
export const formatNumber = (num: number | string): string => {
  const parsedNum = typeof num === 'string' ? parseFloat(num) : num;
  
  if (isNaN(parsedNum)) return '0';
  
  return new Intl.NumberFormat('en-US').format(parsedNum);
};

/**
 * Format a rank number (1st, 2nd, 3rd, etc)
 */
export const formatRankNumber = (num: number): string => {
  if (isNaN(num)) return '0th';
  
  const j = num % 10;
  const k = num % 100;
  
  if (j === 1 && k !== 11) {
    return num + 'st';
  }
  if (j === 2 && k !== 12) {
    return num + 'nd';
  }
  if (j === 3 && k !== 13) {
    return num + 'rd';
  }
  
  return num + 'th';
};
