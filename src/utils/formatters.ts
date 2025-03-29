
/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes The file size in bytes
 * @returns A formatted string like "1.2 KB" or "3.4 MB"
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

/**
 * Formats a number as a dollar amount
 * @param amount The amount to format
 * @returns A formatted string like "$1,234.56"
 */
export const formatDollarAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats a number to a compact representation
 * @param num The number to format
 * @returns A formatted string like "1.2K" or "3.4M"
 */
export const formatCompactNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(num);
};

/**
 * Formats a date to a readable string
 * @param date The date to format
 * @returns A formatted string like "Jan 1, 2023"
 */
export const formatDate = (date: string | Date): string => {
  if (!date) return 'Unknown';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Formats a time elapsed since a date
 * @param date The date to calculate elapsed time from
 * @returns A formatted string like "2 days ago"
 */
export const formatTimeElapsed = (date: string | Date): string => {
  if (!date) return 'Unknown';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - dateObj.getTime();
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
};
