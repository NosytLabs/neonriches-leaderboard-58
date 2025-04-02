
/**
 * Safely converts any value to a string
 * @param value The value to convert to a string
 * @returns The string representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return String(value);
    }
  }
  
  return String(value);
};

/**
 * Truncates a string to a specified length
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @param ellipsis Whether to add ellipsis at the end
 * @returns The truncated string
 */
export const truncateString = (
  str: string, 
  maxLength: number = 50, 
  ellipsis: boolean = true
): string => {
  if (!str || str.length <= maxLength) {
    return str;
  }
  
  return ellipsis 
    ? `${str.slice(0, maxLength)}...` 
    : str.slice(0, maxLength);
};

/**
 * Ensures a string starts with a specific prefix
 * @param str The string to check
 * @param prefix The prefix to ensure
 * @returns The string with the prefix
 */
export const ensurePrefix = (str: string, prefix: string): string => {
  if (!str) return prefix;
  if (str.startsWith(prefix)) return str;
  return `${prefix}${str}`;
};

/**
 * Strips HTML tags from a string
 * @param html The string with HTML to strip
 * @returns The string without HTML tags
 */
export const stripHtml = (html: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
};
