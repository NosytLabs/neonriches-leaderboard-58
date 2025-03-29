
/**
 * Format a number as currency with dollar sign
 * @param amount The number to format as currency
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Format a number with compact notation (e.g., 1.2K, 1.5M)
 * @param num The number to format
 * @returns Compact formatted number
 */
export const formatCompactNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(num);
};

/**
 * Format a date string to a readable format
 * @param dateString ISO date string
 * @param options Formatting options
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, options: Intl.DateTimeFormatOptions = {}): string => {
  try {
    const date = new Date(dateString);
    
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...options
    };
    
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString || 'Invalid date';
  }
};

/**
 * Format a date to show elapsed time (e.g., "2 days ago")
 * @param dateString ISO date string
 * @returns Elapsed time string
 */
export const formatTimeElapsed = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);
  
  if (diffYears > 0) {
    return `${diffYears} year${diffYears !== 1 ? 's' : ''} ago`;
  } else if (diffMonths > 0) {
    return `${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
};

/**
 * Format a number as a file size (e.g., "1.5 MB")
 * @param bytes Number of bytes
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a dollar amount with full dollar sign and potentially decimals
 * @param amount The amount to format
 * @param showCents Whether to show cents (decimal places)
 * @returns Formatted dollar amount
 */
export const formatDollarAmount = (amount: number, showCents: boolean = false): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0
  }).format(amount);
};

/**
 * Format a percentage
 * @param value The percentage value (e.g., 0.5 for 50%)
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals: number = 0): string => {
  return (value * 100).toFixed(decimals) + '%';
};
