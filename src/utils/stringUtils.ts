
/**
 * Convert any value to a string safely
 * @param value - The value to convert
 * @returns The string representation or empty string if null/undefined
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
};

/**
 * Ensure a value is a string ID
 * @param id - The ID (could be number or string)
 * @returns A string ID
 */
export const ensureStringId = (id: string | number): string => {
  return safeToString(id);
};

/**
 * Truncate a string if it exceeds a certain length
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 * @returns The truncated string with ellipsis if needed
 */
export const truncateString = (str: string, maxLength: number = 30): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return `${str.substring(0, maxLength)}...`;
};

/**
 * Get the initials from a name
 * @param name - The name to extract initials from
 * @returns The initials (up to 2 characters)
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  const parts = name.trim().split(/\s+/);
  
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

/**
 * Convert a string to title case
 * @param str - The string to convert
 * @returns The title cased string
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Generate a random username
 * @param prefix - Optional prefix for the username
 * @returns A random username
 */
export const generateRandomUsername = (prefix: string = 'user'): string => {
  const randomId = Math.floor(Math.random() * 10000);
  return `${prefix}${randomId}`;
};

export { safeToString, ensureStringId, truncateString, getInitials, toTitleCase, generateRandomUsername };
