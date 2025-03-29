
import { format, formatDistanceToNow as formatDistanceToNowFn } from 'date-fns';

/**
 * Format a currency amount with proper formatting
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  }
  
  if (currency === 'SOL') {
    return `${amount.toLocaleString(undefined, { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 4
    })} SOL`;
  }
  
  // Generic "coins" or other currencies
  return `${amount.toLocaleString()}`;
};

/**
 * Format a number with commas and optional decimal places
 */
export const formatNumber = (number: number, decimals: number = 0): string => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

/**
 * Format a date to a readable string
 */
export const formatDate = (date: Date | string, formatString: string = 'PPP'): string => {
  try {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    return format(dateObject, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a date as a relative time (e.g., "2 days ago")
 */
export const formatDistanceToNow = (date: Date | string): string => {
  try {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    return formatDistanceToNowFn(dateObject, { addSuffix: true });
  } catch (error) {
    console.error('Error calculating distance to now:', error);
    return 'Unknown time';
  }
};

/**
 * Format a percentage value
 */
export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}%`;
};

/**
 * Format a file size in bytes to a human-readable string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

/**
 * Format a rank position (adds st, nd, rd, th)
 */
export const formatRank = (position: number): string => {
  const j = position % 10;
  const k = position % 100;
  
  if (j === 1 && k !== 11) {
    return `${position}st`;
  }
  if (j === 2 && k !== 12) {
    return `${position}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${position}rd`;
  }
  return `${position}th`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Format a wallet address
 */
export const formatWalletAddress = (address: string): string => {
  if (!address) return '';
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};
