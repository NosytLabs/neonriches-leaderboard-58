
/**
 * Formats a number as a currency string
 * @param amount The amount to format
 * @param currency The currency code (default: USD)
 * @returns Formatted currency string
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
 * Formats a file size in bytes to a human-readable string
 * @param bytes The file size in bytes
 * @returns Formatted size string (e.g. "1.5 MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Formats a date to a readable string
 * @param date The date to format (Date object or string)
 * @param format The format style ('full', 'long', 'medium', 'short')
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string, format: 'full' | 'long' | 'medium' | 'short' = 'medium'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: format
  }).format(dateObj);
};

/**
 * Formats a timestamp as a relative time string (e.g. "2 hours ago")
 * @param timestamp The timestamp to format
 * @returns Relative time string
 */
export const formatRelativeTime = (timestamp: string | number | Date): string => {
  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  
  if (diffSec < 60) {
    return `${diffSec} second${diffSec === 1 ? '' : 's'} ago`;
  }
  if (diffMin < 60) {
    return `${diffMin} minute${diffMin === 1 ? '' : 's'} ago`;
  }
  if (diffHour < 24) {
    return `${diffHour} hour${diffHour === 1 ? '' : 's'} ago`;
  }
  if (diffDay < 30) {
    return `${diffDay} day${diffDay === 1 ? '' : 's'} ago`;
  }
  
  // Fall back to standard date format for older dates
  return formatDate(date, 'short');
};

/**
 * Formats a number with appropriate suffixes (e.g. 1K, 1M)
 * @param num The number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};
