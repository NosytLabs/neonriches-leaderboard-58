
/**
 * Utility functions for formatting values
 */

/**
 * Format a number as currency (USD)
 */
export const formatCurrency = (amount: number, options?: Intl.NumberFormatOptions): string => {
  const defaultOptions = { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };
  
  return new Intl.NumberFormat('en-US', { ...defaultOptions, ...options }).format(amount);
};

/**
 * Format a number with commas and optional decimal places
 */
export const formatNumber = (number: number, decimalPlaces = 0): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).format(number);
};

/**
 * Format a number as a percentage
 */
export const formatPercent = (number: number, decimalPlaces = 0): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).format(number / 100);
};

/**
 * Format a number as a dollar amount (without currency symbol)
 */
export const formatDollarAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format file size in bytes to human readable format
 */
export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes < 1024) {
    return sizeInBytes + ' B';
  } else if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + ' KB';
  } else if (sizeInBytes < 1024 * 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
  } else {
    return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
};

/**
 * Format a rank number with suffix (1st, 2nd, 3rd, etc)
 */
export const formatRankWithSuffix = (rank: number): string => {
  if (rank % 100 >= 11 && rank % 100 <= 13) {
    return rank + 'th';
  }
  
  switch (rank % 10) {
    case 1: return rank + 'st';
    case 2: return rank + 'nd';
    case 3: return rank + 'rd';
    default: return rank + 'th';
  }
};

/**
 * Format a time duration in milliseconds to a human readable format
 */
export const formatDuration = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};

export default {
  formatCurrency,
  formatNumber,
  formatPercent,
  formatDollarAmount,
  formatFileSize,
  formatRankWithSuffix,
  formatDuration
};
