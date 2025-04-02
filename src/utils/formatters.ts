
/**
 * Format a number as currency
 * @param value The number to format
 * @param options Currency formatting options
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number,
  options: { decimals?: number; symbol?: string } = {}
): string => {
  const { decimals = 2, symbol = "" } = options;
  
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

/**
 * Format a large number in a compact way (e.g., 1.2k, 1.2M)
 * @param value The number to format
 * @returns Formatted compact number string
 */
export const formatCompactNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);
};

/**
 * Format a date into a readable string
 * @param date The date to format
 * @param format The format style to use
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string,
  format: 'short' | 'medium' | 'long' = 'medium'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'short' ? 'short' : 'long',
    day: 'numeric',
  };
  
  if (format === 'long') {
    options.hour = 'numeric';
    options.minute = 'numeric';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};
