/**
 * Get initials from a name
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  const names = name.split(' ');
  
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};

/**
 * Truncate text to a specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Convert a string to camelCase
 */
export const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

/**
 * Format a file size in bytes to a human-readable string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a wallet address for display
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length < 10) return address;
  
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

/**
 * Safely converts any value to string
 * Helps with "Property 'toString' does not exist on type 'never'" errors
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  // Handle primitive types
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
    return String(value);
  }
  
  // Handle objects with ids
  if (typeof value === 'object') {
    if ('id' in value) {
      return String(value.id);
    }
    
    // Try using toString() if available
    try {
      return String(value);
    } catch (e) {
      // Last resort - stringify the object
      try {
        return JSON.stringify(value);
      } catch (e) {
        return '[Object]';
      }
    }
  }
  
  // Default fallback
  return String(value);
};

/**
 * Safely formats a number as locale string
 */
export const safeToLocaleString = (value: any, options = {}): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  // If it's a number or can be parsed as one, format it
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (typeof numValue === 'number' && !isNaN(numValue)) {
    return numValue.toLocaleString(undefined, options);
  }
  
  // Otherwise just convert to string
  return safeToString(value);
};
