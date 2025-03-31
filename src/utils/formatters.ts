
/**
 * Utility functions for formatting values
 */

/**
 * Format a number as USD currency
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format a dollar amount with commas and dollar sign
 */
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
};

/**
 * Format a file size in bytes to a human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

/**
 * Format a date as a relative time (e.g., "2 days ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  
  if (diffSec < 60) return `${diffSec} seconds ago`;
  if (diffMin < 60) return `${diffMin} minutes ago`;
  if (diffHour < 24) return `${diffHour} hours ago`;
  if (diffDay < 30) return `${diffDay} days ago`;
  
  // For older dates, return the formatted date
  return past.toLocaleDateString();
};

/**
 * Format a number with abbreviations (K, M, B)
 */
export const formatCompactNumber = (num: number): string => {
  if (num < 1000) return num.toString();
  
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const magnitude = Math.floor(Math.log10(num) / 3);
  
  return (num / Math.pow(1000, magnitude)).toFixed(1).replace(/\.0$/, '') + suffixes[magnitude];
};

/**
 * Format a number as a percentage
 */
export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`;
};

/**
 * Format a date to a readable string format
 */
export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Format a number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

/**
 * Format an address (like a wallet address) to show only beginning and ending
 */
export const formatAddress = (address: string, start: number = 6, end: number = 4): string => {
  if (!address || address.length <= start + end) return address || '';
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

/**
 * Format a historical value with appropriate period style
 */
export const formatHistoricalValue = (value: number, unit: string = 'coins'): string => {
  return `${formatNumber(value)} ${unit}`;
};

export default {
  formatCurrency,
  formatDollarAmount,
  formatFileSize,
  formatRelativeTime,
  formatCompactNumber,
  formatPercentage,
  formatDate,
  formatNumber,
  formatAddress,
  formatHistoricalValue
};
