
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
    if (typeof value === 'object') {
      if (value.toString && typeof value.toString === 'function' && value.toString !== Object.prototype.toString) {
        return value.toString();
      }
      return JSON.stringify(value);
    }
    
    // Handle primitive values
    return String(value);
  } catch (e) {
    // Return empty string if conversion fails
    return '';
  }
};

/**
 * Safely convert a number-like value to a number
 * @param value The value to convert to a number
 * @param defaultValue Default value to return if conversion fails
 * @returns The numeric value or the default value
 */
export const safeToNumber = (value: any, defaultValue = 0): number => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  try {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  } catch (e) {
    return defaultValue;
  }
};

/**
 * Safely get a property from an object that might be undefined
 * @param obj The object to get the property from
 * @param property The property to get
 * @param defaultValue The default value to return if property doesn't exist
 * @returns The property value or the default value
 */
export const safeGetProperty = <T, K extends keyof T>(
  obj: T | null | undefined,
  property: K,
  defaultValue: T[K]
): T[K] => {
  if (!obj) return defaultValue;
  return obj[property] !== undefined ? obj[property] : defaultValue;
};

export default safeToString;
