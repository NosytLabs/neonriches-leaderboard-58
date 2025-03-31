
import { format, formatDistance, formatRelative, differenceInDays, differenceInHours } from 'date-fns';

/**
 * Format a date to a string in the specified format
 */
export const formatDate = (date: string | Date | number, formatString: string = 'MMM d, yyyy'): string => {
  if (!date) return 'N/A';
  
  try {
    const dateObj = typeof date === 'string' || typeof date === 'number' 
      ? new Date(date) 
      : date;
      
    return format(dateObj, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a date and time 
 */
export const formatDateTime = (date: string | Date | number, formatString: string = 'MMM d, yyyy h:mm a'): string => {
  return formatDate(date, formatString);
};

/**
 * Format a date to a relative string (e.g., "2 days ago")
 */
export const formatRelativeDate = (date: string | Date | number): string => {
  if (!date) return 'N/A';
  
  try {
    const dateObj = typeof date === 'string' || typeof date === 'number' 
      ? new Date(date) 
      : date;
      
    return formatDistance(dateObj, new Date(), { addSuffix: true });
  } catch (error) {
    console.error('Error formatting relative date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a date to a relative string with custom base date
 */
export const formatRelativeTo = (date: string | Date | number, baseDate: string | Date | number): string => {
  if (!date || !baseDate) return 'N/A';
  
  try {
    const dateObj = typeof date === 'string' || typeof date === 'number' 
      ? new Date(date) 
      : date;
    
    const baseDateObj = typeof baseDate === 'string' || typeof baseDate === 'number' 
      ? new Date(baseDate) 
      : baseDate;
      
    return formatRelative(dateObj, baseDateObj);
  } catch (error) {
    console.error('Error formatting relative date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a number with commas
 */
export const formatNumber = (num: number): string => {
  if (num === null || num === undefined || isNaN(num)) return '0';
  return num.toLocaleString();
};

/**
 * Format a dollar amount
 */
export const formatDollarAmount = (amount: number): string => {
  if (amount === null || amount === undefined || isNaN(amount)) return '$0.00';
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Format currency with symbol
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  if (amount === null || amount === undefined || isNaN(amount)) return '$0.00';
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Format a file size in bytes to human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a percentage
 */
export const formatPercent = (value: number, options: { decimalPlaces?: number; includeSymbol?: boolean } = {}): string => {
  const { decimalPlaces = 2, includeSymbol = true } = options;
  const formattedValue = (value * 100).toFixed(decimalPlaces);
  return includeSymbol ? `${formattedValue}%` : formattedValue;
};

/**
 * Format an address (e.g., wallet address) by showing only the first and last few characters
 */
export const formatAddress = (address: string, startChars: number = 6, endChars: number = 4): string => {
  if (!address) return '';
  if (address.length <= startChars + endChars) return address;
  return `${address.substring(0, startChars)}...${address.substring(address.length - endChars)}`;
};

/**
 * Format a time duration in milliseconds to a readable string
 */
export const formatDuration = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
};

/**
 * Format a historical value with exaggerated units for satirical purposes
 */
export const formatHistoricalValue = (
  value: number, 
  unit: string, 
  exaggeration: number = 1000, 
  era: string = 'medieval'
): string => {
  const exaggeratedValue = value * exaggeration;
  const formattedValue = formatNumber(exaggeratedValue);
  return `${formattedValue} ${unit} (${era} equivalent)`;
};

export default {
  formatDate,
  formatDateTime,
  formatRelativeDate,
  formatRelativeTo,
  formatNumber,
  formatDollarAmount,
  formatCurrency,
  formatFileSize,
  formatPercent,
  formatAddress,
  formatDuration,
  formatHistoricalValue
};
