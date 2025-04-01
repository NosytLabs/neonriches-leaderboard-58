
/**
 * Safe conversion to string, handling null/undefined values.
 * Single-argument version for components that expect only one argument
 * @param value The value to convert to a string
 * @param defaultValue Optional default value if the input is null/undefined
 * @returns A string
 */
export const safeToString = (value: any, defaultValue: string = ''): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return String(value);
};

/**
 * Convert any value to a string safely
 * This is an overloaded version that takes an index and array parameter for use in maps
 */
export const mapSafeToString = (value: any, index: number, array: any[]): string => {
  return safeToString(value);
};

/**
 * Helper to safely convert to locale string
 * @param value Value to convert to a locale string
 * @param defaultValue Default value if null/undefined
 * @returns A locale formatted string
 */
export const safeToLocaleString = (value: any, defaultValue: string = ''): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  if (typeof value === 'number') {
    return value.toLocaleString();
  }
  
  try {
    return Number(value).toLocaleString();
  } catch (error) {
    return String(value);
  }
};
