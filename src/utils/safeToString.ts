
/**
 * Safe conversion to string, handling null/undefined values.
 * Single-argument version for components that expect only one argument
 * @param value The value to convert to a string
 * @returns A string
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
};
