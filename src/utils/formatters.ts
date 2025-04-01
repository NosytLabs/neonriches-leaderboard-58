
/**
 * Format a number with commas (e.g. 1,234)
 */
export const formatNumber = (value: number): string => {
  return value.toLocaleString();
};

/**
 * Format a number as currency
 */
export const formatCurrency = (value: number): string => {
  return `$${formatNumber(value.toFixed(2))}`;
};

/**
 * Format a dollar amount with dollar sign
 */
export const formatDollarAmount = (value: number): string => {
  return `$${formatNumber(Math.round(value))}`;
};

/**
 * Format a date as a string
 */
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  });
};

/**
 * Format a date as a relative time string
 */
export const formatRelativeTime = (date: string): string => {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;
  if (interval === 1) return `1 year ago`;
  
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;
  if (interval === 1) return `1 month ago`;
  
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days ago`;
  if (interval === 1) return `1 day ago`;
  
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours ago`;
  if (interval === 1) return `1 hour ago`;
  
  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes ago`;
  if (interval === 1) return `1 minute ago`;
  
  return `just now`;
};

/**
 * Format a date as a time ago string (alias for formatRelativeTime)
 */
export const formatTimeAgo = formatRelativeTime;

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
