
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
