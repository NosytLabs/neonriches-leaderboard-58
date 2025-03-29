
/**
 * Formats a number as a currency string
 * @param amount The amount to format
 * @param currency The currency code (default: USD)
 * @returns A formatted currency string
 */
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Formats a file size in bytes to a readable string
 * @param bytes The size in bytes
 * @returns A formatted file size string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Formats a number with commas
 * @param num The number to format
 * @returns A number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Formats a date to a localized string
 * @param date The date to format
 * @param options Intl.DateTimeFormatOptions
 * @returns A formatted date string
 */
export const formatDate = (date: string | Date, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  });
};

/**
 * Truncates a string to a specified length
 * @param str The string to truncate
 * @param length The maximum length
 * @returns A truncated string
 */
export const truncateString = (str: string, length = 50): string => {
  if (!str) return '';
  if (str.length <= length) return str;
  
  return str.substring(0, length) + '...';
};

/**
 * Formats a number as a percentage
 * @param value The value (0-1)
 * @param decimals The number of decimal places
 * @returns A formatted percentage string
 */
export const formatPercentage = (value: number, decimals = 0): string => {
  return (value * 100).toFixed(decimals) + '%';
};
