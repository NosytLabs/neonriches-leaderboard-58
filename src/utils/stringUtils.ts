
/**
 * Utility functions for string manipulation
 */

/**
 * Ensures a value is returned as a string
 * @param value - The value to convert to string
 * @returns The value as a string
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) return '';
  return String(value);
};

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string with ellipsis if needed
 */
export const truncateString = (str: string, maxLength: number = 20): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns String with first letter capitalized
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a kebab-case string to camelCase
 * @param str - The kebab-case string
 * @returns camelCase string
 */
export const kebabToCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

/**
 * Converts a camelCase string to kebab-case
 * @param str - The camelCase string
 * @returns kebab-case string
 */
export const camelToKebabCase = (str: string): string => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export default {
  safeToString,
  truncateString,
  capitalizeFirstLetter,
  kebabToCamelCase,
  camelToKebabCase
};
