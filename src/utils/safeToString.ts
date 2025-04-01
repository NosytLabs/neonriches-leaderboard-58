
/**
 * Safely converts a value to string, handling undefined, null, and other edge cases
 * @param value The value to convert to string
 * @param defaultValue Optional default value to return if value cannot be converted
 * @returns String representation of the value
 */
export function safeToString(value: any, defaultValue: string = ''): string {
  if (value === undefined || value === null) {
    return defaultValue;
  }
  
  try {
    // Handle objects, arrays, etc.
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    
    // Convert to string
    return String(value);
  } catch (error) {
    console.error('Error converting value to string:', error);
    return defaultValue;
  }
}
