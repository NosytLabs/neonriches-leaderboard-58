
/**
 * Gets the initials from a name
 * @param name - The name to get initials from
 * @param maxLength - Maximum number of initials to return
 * @returns The initials
 */
export const getInitials = (name: string, maxLength: number = 2): string => {
  if (!name) return '';
  
  // Split the name and take the first letter of each part
  const parts = name.trim().split(/\s+/);
  let initials = parts.map(part => part.charAt(0).toUpperCase()).join('');
  
  // Limit to maxLength
  if (maxLength > 0 && initials.length > maxLength) {
    initials = initials.substring(0, maxLength);
  }
  
  return initials;
};

/**
 * Safely gets a specific number of characters from a string
 * @param str - The string to get characters from
 * @param start - Starting position
 * @param length - Number of characters to get
 * @returns The substring
 */
export const safeSubstring = (str: string, start: number, length: number): string => {
  if (!str) return '';
  
  // Ensure we don't go out of bounds
  const end = Math.min(start + length, str.length);
  return str.substring(start, end);
};

/**
 * Safely converts a value to a string, handling nulls and undefined
 * @param value - The value to convert to string
 * @param defaultValue - Optional default value if the input is null/undefined
 * @returns The string representation of the value
 */
export const safeToString = (value: any, defaultValue: string = ''): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  return String(value);
};
