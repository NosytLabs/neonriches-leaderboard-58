
import { format, formatDistanceToNow, isValid } from 'date-fns';

/**
 * Format a date string into a human-readable format
 * @param dateString Date string to format
 * @param formatString Optional format string (default: 'PP')
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, formatString = 'PP'): string => {
  try {
    const date = new Date(dateString);
    if (!isValid(date)) return 'Invalid date';
    return format(date, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a date as relative time (e.g., "5 minutes ago")
 * @param dateString Date string to format
 * @returns Relative time string
 */
export const formatTimeAgo = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (!isValid(date)) return '';
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error('Error formatting time ago:', error);
    return '';
  }
};

/**
 * Format a number with thousands separators
 * @param value Number to format
 * @returns Formatted number string
 */
export const formatNumber = (value: number | string): string => {
  try {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '0';
    
    return new Intl.NumberFormat('en-US').format(numValue);
  } catch (error) {
    console.error('Error formatting number:', error);
    return '0';
  }
};

/**
 * Format a filesize in bytes to human readable format
 * @param bytes Filesize in bytes
 * @param decimals Number of decimal places to include
 * @returns Formatted filesize string (e.g., "2.5 MB")
 */
export const formatFileSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};

/**
 * Format a dollar amount with $ sign and commas
 * @param amount Amount to format
 * @returns Formatted dollar amount string
 */
export const formatDollarAmount = (amount: number | string): string => {
  try {
    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numAmount)) return '$0';
    
    return `$${numAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  } catch (error) {
    console.error('Error formatting dollar amount:', error);
    return '$0';
  }
};

/**
 * Format a percentage value
 * @param value Value to format as percentage
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals = 0): string => {
  try {
    if (isNaN(value)) return '0%';
    
    return `${value.toFixed(decimals)}%`;
  } catch (error) {
    console.error('Error formatting percentage:', error);
    return '0%';
  }
};

/**
 * Format a currency value
 * @param value Value to format as currency
 * @param currency Currency code
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number | string,
  currency: string = 'USD'
): string => {
  try {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '$0.00';
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(numValue);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return '$0.00';
  }
};
