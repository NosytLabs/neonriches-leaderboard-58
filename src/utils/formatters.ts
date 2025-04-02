
/**
 * Utility functions for formatting various data types
 */

/**
 * Format a currency value with dollar sign and commas
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format a date into a readable string
 */
export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateObj);
};

/**
 * Format a file size in bytes to a human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a dollar amount with optional decimal places
 */
export const formatDollarAmount = (amount: number, decimals: number = 0): string => {
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

/**
 * Format a time relative to now (e.g., "2 hours ago")
 */
export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const pastDate = typeof date === 'string' ? new Date(date) : date;
  const seconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  
  // Time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  
  // Check intervals
  if (seconds < 60) return 'just now';
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
    }
  }
  
  return 'just now';
};

/**
 * Truncate an address (like a blockchain address) with ellipsis
 */
export const truncateAddress = (address: string, chars: number = 4): string => {
  if (!address) return '';
  if (address.length <= chars * 2 + 2) return address;
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

export default {
  formatCurrency,
  formatDate,
  formatFileSize,
  formatDollarAmount,
  formatTimeAgo,
  truncateAddress
};
