
/**
 * Format a date string to a readable format
 * @param dateString ISO date string or Date object
 * @returns Formatted date string
 */
export const formatDate = (dateString?: string | Date): string => {
  if (!dateString) return 'N/A';
  
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Format a number as currency
 * @param amount Number to format
 * @param currency Currency code
 * @returns Formatted currency string
 */
export const formatCurrency = (amount?: number, currency = 'USD'): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number with commas for thousands
 * @param num Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num?: number): string => {
  if (num === undefined || num === null) return '0';
  
  return new Intl.NumberFormat('en-US').format(num);
};

export default {
  formatDate,
  formatCurrency,
  formatNumber
};
