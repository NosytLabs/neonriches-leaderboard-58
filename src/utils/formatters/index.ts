
/**
 * Format utility functions
 */

// Import and re-export individual formatters
import formatCurrency from '../formatCurrency';
import formatDate, { formatTimeAgo } from '../formatDate';
import { safeToString, getInitials } from '../stringUtils';

// Re-export all formatters
export { 
  formatCurrency,
  formatDate,
  formatTimeAgo,
  safeToString,
  getInitials
};

// Basic formatters
export const formatNumber = (number: number, decimals = 0): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(number);
};

export const formatPercent = (decimal: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(decimal);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

export { formatCurrency as formatDollarAmount };

// Also export default for backwards compatibility
export default {
  formatCurrency,
  formatDate,
  formatTimeAgo,
  formatNumber,
  formatPercent,
  formatFileSize,
  safeToString,
  getInitials
};
