
/**
 * Safely convert any value to a string
 * @param value The value to convert to string
 * @returns A string representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
};

/**
 * Safely convert a number to a locale string
 * @param value The number to format
 * @param options Formatting options
 * @returns A formatted string
 */
export const safeToLocaleString = (value: any, options?: Intl.NumberFormatOptions): string => {
  if (value === null || value === undefined) {
    return '0';
  }
  
  const num = Number(value);
  if (isNaN(num)) {
    return '0';
  }
  
  return num.toLocaleString(undefined, options);
};

/**
 * Convert any value to a number safely
 * @param value The value to convert
 * @param defaultValue Default value if conversion fails
 * @returns A number
 */
export const safeToNumber = (value: any, defaultValue: number = 0): number => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  const num = Number(value);
  return isNaN(num) ? defaultValue : num;
};

/**
 * Convert any value to a boolean safely
 * @param value The value to convert
 * @param defaultValue Default value if conversion fails
 * @returns A boolean
 */
export const safeToBoolean = (value: any, defaultValue: boolean = false): boolean => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  if (typeof value === 'boolean') {
    return value;
  }
  
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true' || value === '1';
  }
  
  if (typeof value === 'number') {
    return value === 1;
  }
  
  return defaultValue;
};

/**
 * Format a number as currency
 * @param value The value to format
 * @param currency The currency code
 * @returns A formatted currency string
 */
export const formatCurrency = (value: any, currency: string = 'USD'): string => {
  const num = safeToNumber(value);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(num);
};
