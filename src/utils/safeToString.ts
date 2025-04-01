
/**
 * Convert any value to string safely
 * @param value - Value to convert to string
 * @returns String representation of the value
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
 * Convert any value to localized string safely with fallback
 * @param value - Value to convert
 * @param options - Intl formatting options
 * @returns Localized string representation
 */
export const safeToLocaleString = (value: any, options?: Intl.NumberFormatOptions): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  if (typeof value === 'number') {
    return value.toLocaleString(undefined, options);
  }
  
  const num = Number(value);
  if (!isNaN(num)) {
    return num.toLocaleString(undefined, options);
  }
  
  return String(value);
};
