
/**
 * Safely converts a value to a string
 * @param value - The value to convert to a string
 * @returns The string representation of the value
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
};
