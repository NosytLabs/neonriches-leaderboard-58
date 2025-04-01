
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
