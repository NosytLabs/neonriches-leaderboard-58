
/**
 * Format a number as currency
 * @param value Number to format as currency
 * @param currency Currency code (default: USD)
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number | string | undefined, currency: string = 'USD'): string => {
  if (value === undefined || value === null) return '$0.00';
  
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num);
};

/**
 * Format a number with thousands separators
 * @param value Number to format
 * @param decimalPlaces Number of decimal places
 * @returns Formatted number string
 */
export const formatNumber = (value: number, decimalPlaces: number = 0): string => {
  if (value === undefined || value === null) return '0';
  
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).format(value);
};

/**
 * Format a number as a dollar amount (without cents)
 * @param value Number to format as dollar amount
 * @returns Formatted dollar amount
 */
export const formatDollarAmount = (value: number | string | undefined): string => {
  if (value === undefined || value === null) return '$0';
  
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '$0';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
};

/**
 * Format a date to a readable string
 * @param date Date to format
 * @param options Formatting options
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string, options: Intl.DateTimeFormatOptions = {}): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Default options
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(dateObj);
};

/**
 * Format a date relative to current time (e.g., "2 days ago")
 * @param date Date to format
 * @returns Formatted relative time string
 */
export const formatTimeAgo = (date: Date | string): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  // Time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  if (seconds < 60) {
    return 'just now';
  }
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    
    if (interval >= 1) {
      return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
    }
  }
  
  return 'just now';
};

/**
 * Format a file size in bytes to human-readable format
 * @param bytes File size in bytes
 * @param decimals Number of decimal places
 * @returns Formatted file size
 */
export const formatFileSize = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};
