
/**
 * Safely converts a value to a string
 * @param value Any value that needs to be safely converted to a string
 * @returns String representation of the value or empty string if null/undefined
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) return '';
  return String(value);
};

/**
 * Safely applies toLocaleString to a number, handling non-number types
 * @param value A number, string, or other value to format
 * @param locale Optional locale for formatting (defaults to user's locale)
 * @param options Optional formatting options
 * @returns Formatted string or empty string for invalid inputs
 */
export const safeToLocaleString = (
  value: any, 
  locale?: string | string[], 
  options?: Intl.NumberFormatOptions
): string => {
  if (value === null || value === undefined) return '';
  
  // Handle Number and numeric strings
  const num = Number(value);
  if (!isNaN(num)) {
    return num.toLocaleString(locale, options);
  }
  
  // For non-numeric strings, return as is
  if (typeof value === 'string') {
    return value;
  }
  
  // For any other type, convert to string
  return String(value);
};

/**
 * Formats a number as currency
 * @param value Number to format as currency
 * @param currency Currency code (default: USD)
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number | string, 
  currency: string = 'USD'
): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '';
  
  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: currency
  });
};

export default safeToString;
