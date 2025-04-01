
/**
 * Safely converts a value to a string
 * @param value The value to convert to string
 * @returns A string representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) return '';
  return String(value);
};

/**
 * Safely limits a string to a maximum length with ellipsis
 * @param str The string to truncate
 * @param maxLength Maximum length before truncating
 * @returns The truncated string with ellipsis if needed
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
};

/**
 * Creates a string with the first letter capitalized
 * @param str The string to capitalize
 * @returns The capitalized string
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Safely escapes HTML characters to prevent XSS
 * @param str The string to escape
 * @returns The escaped string
 */
export const escapeHtml = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

/**
 * Converts camelCase to title case (e.g., "camelCase" to "Camel Case")
 * @param str The camelCase string
 * @returns The title case string
 */
export const camelToTitleCase = (str: string): string => {
  if (!str) return '';
  return capitalize(
    str
      .replace(/([A-Z])/g, ' $1')
      .trim()
  );
};

/**
 * Converts kebab-case to title case (e.g., "kebab-case" to "Kebab Case")
 * @param str The kebab-case string
 * @returns The title case string
 */
export const kebabToTitleCase = (str: string): string => {
  if (!str) return '';
  return str
    .split('-')
    .map(word => capitalize(word))
    .join(' ');
};
