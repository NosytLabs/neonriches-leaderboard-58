
import { format, formatDistanceToNow, formatRelative } from 'date-fns';

/**
 * Format a number as US currency
 */
export const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined || amount === null) return '$0.00';
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a dollar amount with comma separators and decimals
 */
export const formatDollarAmount = (amount: number | undefined): string => {
  if (amount === undefined || amount === null) return '$0.00';
  return `$${amount.toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}`;
};

/**
 * Format a number with comma separators
 */
export const formatNumber = (num: number | undefined): string => {
  if (num === undefined || num === null) return '0';
  return num.toLocaleString();
};

/**
 * Format a date string in a standard format
 */
export const formatDate = (dateString: string | Date | undefined): string => {
  if (!dateString) return '';
  
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return format(date, 'MMM d, yyyy');
  } catch (e) {
    console.error('Error formatting date:', e);
    return '';
  }
};

/**
 * Format a date string as a relative time (e.g., "2 days ago")
 */
export const formatRelativeTime = (dateString: string | Date | undefined): string => {
  if (!dateString) return '';
  
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (e) {
    console.error('Error formatting relative time:', e);
    return '';
  }
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
 * Format a percentage value
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

/**
 * Format a date in a short format
 */
export const formatShortDate = (dateString: string | Date | undefined): string => {
  if (!dateString) return '';
  
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return format(date, 'MM/dd/yyyy');
  } catch (e) {
    console.error('Error formatting short date:', e);
    return '';
  }
};

// Export all formatters as both named exports and default object
export default {
  formatCurrency,
  formatDollarAmount,
  formatNumber,
  formatDate,
  formatRelativeTime,
  formatFileSize,
  formatPercentage,
  formatShortDate
};
