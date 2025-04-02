
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

/**
 * Safely formats a number as a locale string, handling nulls and undefined
 * @param value - The number to format
 * @param defaultValue - Optional default value if the input is null/undefined
 * @returns The locale string representation of the number
 */
export const safeToLocaleString = (value: number | string | null | undefined, defaultValue: string = '0'): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  const num = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(num)) {
    return defaultValue;
  }
  
  return num.toLocaleString();
};

export default safeToString;
