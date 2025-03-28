
/**
 * Utility functions for formatting data
 */

/**
 * Format a number as currency
 * @param amount The amount to format
 * @param currency The currency code (default: USD)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number with specified decimal places
 * @param value The number to format
 * @param decimals Number of decimal places (default: 2)
 * @returns Formatted number string
 */
export const formatNumber = (value: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  }).format(value);
};

/**
 * Format a date
 * @param date The date to format
 * @param format The format to use (default: locale string)
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string | number, format: string = 'locale'): string => {
  const dateObj = new Date(date);
  
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString();
    case 'long':
      return dateObj.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    case 'relative':
      return getRelativeTimeString(dateObj);
    default:
      return dateObj.toLocaleString();
  }
};

/**
 * Get a relative time string (e.g., "2 hours ago")
 * @param date The date to format
 * @returns Relative time string
 */
const getRelativeTimeString = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHr = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHr / 24);
  
  if (diffSec < 60) {
    return `${diffSec} second${diffSec !== 1 ? 's' : ''} ago`;
  } else if (diffMin < 60) {
    return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
  } else if (diffHr < 24) {
    return `${diffHr} hour${diffHr !== 1 ? 's' : ''} ago`;
  } else if (diffDay < 30) {
    return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`;
  } else {
    return formatDate(date, 'long');
  }
};

/**
 * Format a number as a percentage
 * @param value The value to format (0-1)
 * @param decimals Number of decimal places (default: 0)
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals: number = 0): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
};

/**
 * Format a file size in bytes to a human-readable format
 * @param bytes The size in bytes
 * @param decimals Number of decimal places (default: 2)
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};

/**
 * Format a large number with abbreviations (K, M, B)
 * @param num Number to format
 * @param digits Number of digits after decimal point (default: 1)
 * @returns Formatted string with appropriate suffix
 */
export const formatCompactNumber = (num: number, digits: number = 1): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" }
  ];
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(item => num >= item.value);
    
  return item
    ? (num / item.value).toFixed(digits).replace(regex, "$1") + item.symbol
    : "0";
};

/**
 * Format time in seconds to a readable duration (e.g., 1h 30m)
 * @param seconds Time in seconds
 * @returns Formatted duration string
 */
export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  let result = "";
  
  if (hours > 0) {
    result += `${hours}h `;
  }
  
  if (minutes > 0 || hours > 0) {
    result += `${minutes}m `;
  }
  
  if (remainingSeconds > 0 || (hours === 0 && minutes === 0)) {
    result += `${remainingSeconds}s`;
  }
  
  return result.trim();
};
