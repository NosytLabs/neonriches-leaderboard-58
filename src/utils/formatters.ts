
/**
 * Formats a currency amount
 * @param amount Amount to format
 * @param currency Currency code (default: USD)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  if (currency === 'SOL') {
    return `${amount.toFixed(3)} SOL`;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Formats a large number in a compact way (e.g., 1,200 -> 1.2K)
 * @param number Number to format
 * @returns Formatted compact number
 */
export const formatCompactNumber = (number: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(number);
};

/**
 * Formats a date to a human-readable string
 * @param date Date to format (string or Date)
 * @returns Formatted date string
 */
export const formatDate = (date: string | Date): string => {
  if (!date) return 'Unknown date';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObj);
};

/**
 * Formats a dollar amount with $ symbol
 * @param amount Amount to format
 * @returns Formatted dollar amount
 */
export const formatDollarAmount = (amount: number): string => {
  return formatCurrency(amount, 'USD');
};

/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes Size in bytes
 * @returns Formatted file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Formats a time elapsed since a given date
 * @param date Date to measure from
 * @returns Human-readable time elapsed
 */
export const formatDistanceToNow = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSecs < 60) {
    return `${diffInSecs} second${diffInSecs === 1 ? '' : 's'} ago`;
  }
  
  if (diffInMins < 60) {
    return `${diffInMins} minute${diffInMins === 1 ? '' : 's'} ago`;
  }
  
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }
  
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
  }
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
};

/**
 * Formats a time period in seconds to a human-readable string
 * @param seconds Time in seconds
 * @returns Formatted time
 */
export const formatTimeElapsed = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? '' : 's'}`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? '' : 's'}`;
  }
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'}`;
  }
  
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? '' : 's'}`;
};
