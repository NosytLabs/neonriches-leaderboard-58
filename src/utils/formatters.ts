
/**
 * A collection of formatting utilities for consistent display of values
 */

/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency symbol (default: $)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | undefined, currency = '$'): string => {
  if (amount === undefined) return `${currency}0.00`;
  return `${currency}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

/**
 * Formats a date string to a localized date
 * @param dateString - The date string to format
 * @param options - Intl.DateTimeFormatOptions for customizing format
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string | Date | undefined,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
): string => {
  if (!dateString) return '-';
  const date = dateString instanceof Date ? dateString : new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

/**
 * Formats a number with commas for thousands
 * @param num - The number to format
 * @param defaultValue - Value to return if num is undefined
 * @returns Formatted number string
 */
export const formatNumber = (num: number | undefined, defaultValue = '0'): string => {
  if (num === undefined) return defaultValue;
  return num.toLocaleString();
};

/**
 * Formats a rank number with # prefix
 * @param rank - The rank to format
 * @returns Formatted rank string
 */
export const formatRank = (rank: number | undefined): string => {
  if (rank === undefined) return '-';
  return `#${rank.toLocaleString()}`;
};

/**
 * Formats a file size in bytes to a human-readable format
 * @param bytes - The file size in bytes
 * @param decimals - Number of decimal places to show
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};

/**
 * Formats a duration in milliseconds to a human-readable format
 * @param ms - The duration in milliseconds
 * @returns Formatted duration string
 */
export const formatDuration = (ms: number): string => {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(1);
  return `${minutes}m ${seconds}s`;
};

/**
 * Formats a percentage value
 * @param value - The value to format as percentage
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Formats a wallet address by truncating the middle
 * @param address - The wallet address to format
 * @returns Truncated address string
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 12) return address;
  
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

/**
 * Formats a historical value with an ancient unit
 * @param value - The value to format
 * @returns Formatted string with ancient unit
 */
export const formatHistoricalValue = (value: number): string => {
  const units = ['talents', 'sesterces', 'denarii', 'drachmas', 'solidi'];
  const unit = units[Math.floor(Math.random() * units.length)];
  
  return `${value.toLocaleString()} ${unit}`;
};

/**
 * Formats a dollar amount with appropriate scaling (K, M, B)
 * @param amount - The amount to format
 * @returns Formatted dollar amount string
 */
export const formatDollarAmount = (amount: number): string => {
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  } else if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  } else if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}K`;
  } else {
    return `$${amount.toFixed(2)}`;
  }
};

/**
 * Formats a number as a dollar amount (for inputs)
 * @param value - The value to format
 * @returns Formatted dollar amount
 */
export const formatDollarInput = (value: string | number): string => {
  // Convert to string and remove all non-digit characters except decimal
  const numericValue = String(value).replace(/[^\d.]/g, '');
  
  // Ensure only one decimal point
  const parts = numericValue.split('.');
  if (parts.length > 2) {
    parts[1] = parts.slice(1).join('');
    return `${parts[0]}.${parts[1]}`;
  }
  
  // Return formatted value
  return numericValue;
};
