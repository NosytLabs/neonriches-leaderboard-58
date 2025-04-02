
/**
 * Utility functions for formatting values
 */

/**
 * Format a number as currency
 */
export const formatCurrency = (value: number, options?: Intl.NumberFormatOptions): string => {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };

  const mergedOptions = { ...defaultOptions, ...options };
  
  return new Intl.NumberFormat('en-US', mergedOptions).format(value);
};

/**
 * Format a date string to a localized date string
 */
export const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions): string => {
  if (!dateString) return '';
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', mergedOptions);
};

/**
 * Format a number with a specific precision
 */
export const formatNumber = (value: number, precision: number = 0): string => {
  return value.toFixed(precision);
};

/**
 * Format a number as a percentage
 */
export const formatPercentage = (value: number, precision: number = 0): string => {
  return `${(value * 100).toFixed(precision)}%`;
};

/**
 * Format a file size in bytes to a human-readable string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};
