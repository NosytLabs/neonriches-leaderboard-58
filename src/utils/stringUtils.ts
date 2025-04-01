
/**
 * Safe conversion to string, handling null/undefined values
 * @param value The value to convert to a string
 * @param defaultValue Default value to return if value is null/undefined
 * @returns A string
 */
export const safeToString = (value: any, defaultValue: string = ''): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return String(value);
};

/**
 * Safely converts a value to a localized string representation
 * @param value The value to convert
 * @param defaultValue The default value if conversion fails
 * @returns A localized string representation of the value
 */
export const safeToLocaleString = (value: any, defaultValue: string = ''): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  try {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    
    const num = Number(value);
    if (!isNaN(num)) {
      return num.toLocaleString();
    }
  } catch (e) {
    // Ignore conversion errors and return the value as-is or default
  }
  
  return safeToString(value, defaultValue);
};

/**
 * Gets initials from a string (usually a name)
 * @param text The text to extract initials from
 * @param length Maximum number of initials to return
 * @returns The initials
 */
export const getInitials = (text: string, length: number = 2): string => {
  if (!text) return '';
  
  const words = text.trim().split(/\s+/);
  
  if (words.length === 1) {
    return text.substring(0, length).toUpperCase();
  }
  
  return words
    .slice(0, length)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};

/**
 * Truncate a string and add ellipsis if needed
 * @param text The text to truncate
 * @param maxLength Maximum length before truncation
 * @param suffix The suffix to add after truncation (default: "...")
 * @returns The truncated string
 */
export const truncateText = (text: string, maxLength: number, suffix: string = '...'): string => {
  if (!text || text.length <= maxLength) {
    return text || '';
  }
  
  return text.substring(0, maxLength) + suffix;
};
