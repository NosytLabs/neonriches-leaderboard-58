
/**
 * String utility functions
 */

/**
 * Gets initials from a string (usually a name)
 * @param name The name to extract initials from
 * @param maxLength Maximum number of initials to return
 * @returns The initials
 */
export const getInitials = (name: string, maxLength = 2): string => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .slice(0, maxLength)
    .join('');
};

/**
 * Safely converts a value to string
 * @param value The value to convert
 * @returns The string representation
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) return '';
  return String(value);
};

// Export functions individually and as default object
export default {
  getInitials,
  safeToString
};
