
/**
 * Format a date string into a human-readable format
 * @param dateString The date string to format
 * @param options Optional formatting options
 * @returns Formatted date string
 */
export function formatDate(dateString: string, options: Intl.DateTimeFormatOptions = {}): string {
  if (!dateString) return 'N/A';
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  };
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}

/**
 * Format a currency value
 * @param value The value to format
 * @param currency The currency code
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
}

/**
 * Format a number with separator
 * @param value The number to format
 * @param separator The separator to use
 * @returns Formatted number string
 */
export function formatNumberWithSeparator(value: number, separator: string = ','): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
