
/**
 * Format a date string to a human-readable format
 * @param dateString The date string to format
 * @returns A formatted date string
 */
export const formatDate = (dateString?: string): string => {
  if (!dateString) {
    return 'Unknown Date';
  }
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    return 'Unknown Date';
  }
};

/**
 * Format a date string to include time
 * @param dateString The date string to format
 * @returns A formatted date and time string
 */
export const formatDateTime = (dateString?: string): string => {
  if (!dateString) {
    return 'Unknown Date';
  }
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  } catch (error) {
    return 'Unknown Date';
  }
};

/**
 * Format a number as currency
 * @param value The value to format
 * @param currency The currency code
 * @returns A formatted currency string
 */
export const formatCurrency = (value: any, currency: string = 'USD'): string => {
  const num = Number(value);
  if (isNaN(num)) {
    return '$0.00';
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(num);
};

/**
 * Format a number with appropriate suffixes (K, M, B)
 * @param value The value to format
 * @returns A formatted number string
 */
export const formatCompactNumber = (value: any): string => {
  const num = Number(value);
  if (isNaN(num)) {
    return '0';
  }
  
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num);
};

/**
 * Format a time duration in seconds to a human-readable format
 * @param seconds Number of seconds
 * @returns A formatted duration string
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  }
  
  const hours = Math.floor(seconds / 3600);
  const remainingMinutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${remainingMinutes}m`;
};

/**
 * Format a number with thousands separators
 * @param value The value to format
 * @returns A formatted number string
 */
export const formatNumber = (value: any): string => {
  const num = Number(value);
  if (isNaN(num)) {
    return '0';
  }
  
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Format a dollar amount
 * @param value The value to format
 * @returns A formatted dollar amount string
 */
export const formatDollarAmount = (value: any): string => {
  return formatCurrency(value, 'USD');
};

/**
 * Format a file size in bytes to a human-readable format
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
 * Format a time difference to a human-readable form (e.g., "2 days ago")
 * @param dateString The date string to format
 * @returns A formatted time ago string
 */
export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  
  if (years > 0) return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  if (months > 0) return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  if (days > 0) return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  if (hours > 0) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  if (minutes > 0) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  
  return 'Just now';
};
