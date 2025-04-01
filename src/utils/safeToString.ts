
/**
 * Safely convert any value to a string, handling 'never' type and nullish values
 * @param value The value to convert to a string
 * @returns The string representation or an empty string for nullish values
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  try {
    // Try to convert to string using toString if it exists
    if (typeof value.toString === 'function') {
      return value.toString();
    }
    
    // Fallback to string conversion
    return String(value);
  } catch (e) {
    // Return empty string if conversion fails
    return '';
  }
};

export default safeToString;
