
/**
 * Get initials from a name (first letters of first and last name)
 */
export const getInitials = (name: string): string => {
  if (!name) return '?';
  
  const nameParts = name.split(' ').filter(part => part.length > 0);
  
  if (nameParts.length === 0) return '?';
  if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
  
  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Truncate a string if it exceeds the maximum length
 */
export const truncateString = (str: string, maxLength: number = 20): string => {
  if (!str || str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
};

/**
 * Convert a string to title case (first letter of each word capitalized)
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Generate a random ID
 */
export const generateId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
};

/**
 * Convert a string to snake_case
 */
export const toSnakeCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^\w_]/g, '');
};

/**
 * Convert a string to kebab-case
 */
export const toKebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

export default {
  getInitials,
  truncateString,
  toTitleCase,
  generateId,
  toSnakeCase,
  toKebabCase
};
