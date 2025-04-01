
/**
 * Get initials from a string (e.g. "John Doe" => "JD")
 */
export const getInitials = (name: string, maxChars: number = 2): string => {
  if (!name) return '??';
  
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, maxChars);
};

/**
 * Safely convert any value to a string
 */
export const safeToString = (value: any): string => {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  
  return String(value);
};

/**
 * Truncate a string to a specified length
 */
export const truncateString = (str: string, maxLength: number = 30): string => {
  if (!str || str.length <= maxLength) return str;
  return `${str.substring(0, maxLength)}...`;
};

/**
 * Convert a string to title case
 */
export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Convert kebab-case to camelCase
 */
export const kebabToCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * Convert camelCase to kebab-case
 */
export const camelToKebabCase = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
