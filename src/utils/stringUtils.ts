
/**
 * Safely converts a value to a string
 * This is especially useful for dealing with mixed string|number types
 * @param value The value to convert to a string
 * @returns The string representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  return String(value);
};

/**
 * Safely converts a string value to a number
 * @param value The string to convert
 * @param defaultValue The default value to return if conversion fails
 * @returns A number or the default value
 */
export const safeToNumber = (value: string | number | undefined, defaultValue: number = 0): number => {
  if (value === undefined || value === null || value === '') {
    return defaultValue;
  }
  
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return isNaN(num) ? defaultValue : num;
};

/**
 * Safely truncates a string to the specified length
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @param suffix The suffix to add if the string is truncated
 * @returns The truncated string
 */
export const truncateString = (str: string, maxLength: number, suffix: string = '...'): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  
  return str.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Formats a display handle from a username
 * @param username The username to format
 * @returns The formatted handle
 */
export const formatHandle = (username: string): string => {
  if (!username) return '';
  return username.startsWith('@') ? username : `@${username}`;
};

/**
 * Gets initials from a name string
 * @param name The name to get initials from
 * @param count The maximum number of initials to return
 * @returns The initials
 */
export const getInitials = (name: string, count: number = 2): string => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .filter(char => char.length > 0)
    .slice(0, count)
    .join('')
    .toUpperCase();
};

/**
 * Safely converts a value to a locale string
 * @param value The value to convert
 * @param options Intl.NumberFormatOptions
 * @returns The formatted string
 */
export const safeToLocaleString = (value: any, options?: Intl.NumberFormatOptions): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '';
  
  try {
    return num.toLocaleString(undefined, options);
  } catch (error) {
    return String(value);
  }
};

/**
 * Formats a number as currency
 * @param amount The amount to format
 * @param currency The currency code
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | string, currency: string = 'USD'): string => {
  const numAmount = safeToNumber(amount);
  return safeToLocaleString(numAmount, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Capitalizes the first letter of a string
 * @param str The string to capitalize
 * @returns The capitalized string
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formats a number of items with the correct plural form
 * @param count The number of items
 * @param singular The singular form of the word
 * @param plural The plural form of the word
 * @returns Formatted count with the correct word form
 */
export const pluralize = (count: number, singular: string, plural: string): string => {
  return `${count} ${count === 1 ? singular : plural}`;
};
