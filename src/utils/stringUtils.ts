
/**
 * Safely convert any value to a string
 * @param value - The value to convert to a string
 * @returns A string representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  
  return String(value);
};

/**
 * Safe way to extract string from object
 * @param obj - The object to extract from
 * @param path - The dot notation path to extract
 * @param defaultValue - Default value if path not found
 * @returns The extracted value or default
 */
export const getStringValue = (obj: any, path: string, defaultValue: string = ''): string => {
  try {
    const parts = path.split('.');
    let current = obj;
    
    for (const part of parts) {
      if (current === null || current === undefined) {
        return defaultValue;
      }
      current = current[part];
    }
    
    return safeToString(current) || defaultValue;
  } catch {
    return defaultValue;
  }
};

/**
 * Format a string for use in URLs (slug)
 * @param str - The string to slugify
 * @returns A URL-friendly version of the string
 */
export const slugify = (str: string): string => {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

/**
 * Get initials from a name or username
 * @param name - The name to get initials from
 * @param maxChars - Maximum number of characters to return
 * @returns Initials from the name
 */
export const getInitials = (name: string, maxChars: number = 2): string => {
  if (!name) return '';
  
  const parts = name.split(/[\s-_]+/);
  if (parts.length === 1) {
    // If single word, take first N characters
    return name.substring(0, maxChars).toUpperCase();
  }
  
  // Take first character of each word
  return parts
    .slice(0, maxChars)
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
};

/**
 * Ensure a value is a string
 * @param id - The ID value, could be number or string
 * @returns The ID as a string
 */
export const ensureStringId = (id: string | number): string => {
  return typeof id === 'number' ? String(id) : id;
};

// Export all functions
export {
  safeToString,
  getStringValue,
  slugify,
  getInitials,
  ensureStringId
};
