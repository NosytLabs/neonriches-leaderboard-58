
/**
 * Utility functions for formatting data consistently across the application
 */

/**
 * Format a number as a dollar amount
 */
export const formatDollarAmount = (amount: number | string): string => {
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  if (isNaN(numericAmount)) {
    return '$0.00';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount);
};

/**
 * Format a timestamp as relative time (e.g., "2 hours ago")
 */
export const formatTimeAgo = (timestamp: string | Date): string => {
  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60) {
    return 'just now';
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) {
    return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) {
    return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
  }

  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
};

/**
 * Truncate an address (e.g., wallet address) for display
 */
export const truncateAddress = (address: string, start: number = 6, end: number = 4): string => {
  if (!address) return '';
  if (address.length <= start + end) return address;
  
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

/**
 * Format a number with commas as thousands separators
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Format a currency value without the currency symbol
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Format a date string
 */
export const formatDate = (date: Date | string | number, options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
    
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return 'Invalid date';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

/**
 * Format file size in KB, MB, etc.
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};
