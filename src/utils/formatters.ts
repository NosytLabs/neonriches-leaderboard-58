
/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes The size in bytes
 * @returns Formatted string (e.g., "1.5 KB", "2.3 MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Formats a number with commas as thousands separators
 * @param num The number to format
 * @returns Formatted string with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Formats a currency value
 * @param amount The amount to format
 * @param currency The currency code (default: 'USD')
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Formats a date to a readable string
 * @param date The date to format
 * @param format The format style ('short', 'medium', 'long', or 'full')
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string,
  format: 'short' | 'medium' | 'long' | 'full' = 'medium'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: format,
  }).format(dateObj);
};

/**
 * Truncates a string to a specified length and adds an ellipsis
 * @param str The string to truncate
 * @param maxLength Maximum length before truncating
 * @returns Truncated string with ellipsis if needed
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

export default {
  formatFileSize,
  formatNumber,
  formatCurrency,
  formatDate,
  truncateString
};
