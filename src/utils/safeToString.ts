
/**
 * Safely convert any value to a string
 * @param value Value to convert to a string
 * @returns String representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === undefined || value === null) {
    return '';
  }
  
  if (typeof value === 'string') {
    return value;
  }
  
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  
  if (typeof value === 'object') {
    // Special handling for objects that might have id properties (like for ShameModalWrapper)
    if ('id' in value) {
      return String(value.id);
    }
    
    try {
      return JSON.stringify(value);
    } catch (e) {
      return '[Object]';
    }
  }
  
  return String(value);
};

/**
 * Safely convert a value to a localized string
 * @param value Value to format
 * @param options Intl.NumberFormat options
 * @returns Formatted string
 */
export const safeToLocaleString = (value: any, options = {}): string => {
  if (value === undefined || value === null) {
    return '';
  }
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (typeof numValue === 'number' && !isNaN(numValue)) {
    return numValue.toLocaleString(undefined, options);
  }
  
  return safeToString(value);
};
