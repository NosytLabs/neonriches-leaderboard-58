
import { TeamColor } from '@/types/user';

/**
 * Ensures a value is a string, converting if necessary
 * @param id The ID that might be a string or number
 * @returns A string representation of the ID
 */
export const ensureStringId = (id: string | number): string => {
  if (id === null || id === undefined) return '';
  return String(id);
};

/**
 * Ensures a value is a number, converting if necessary
 * @param value The value that might be a string or number
 * @returns A numeric representation of the value
 */
export const ensureNumber = (value: string | number): number => {
  if (value === null || value === undefined) return 0;
  if (typeof value === 'number') return value;
  return parseFloat(value) || 0;
};

/**
 * Converts a team string to a valid TeamColor
 * @param team The team name or identifier
 * @returns A valid TeamColor or null
 */
export const toTeamColor = (team: string | null | undefined): TeamColor | null => {
  if (!team) return null;
  
  const teamString = String(team).toLowerCase();
  
  switch (teamString) {
    case 'red':
    case 'blue':
    case 'green':
    case 'gold':
    case 'purple':
    case 'none':
    case 'neutral':
      return teamString as TeamColor;
    default:
      // Return null for any invalid team value
      return null;
  }
};

/**
 * Safely access array elements with a fallback
 * @param arr The array to access
 * @param index The index to access
 * @param fallback Fallback value if index is out of bounds
 * @returns The array element or fallback
 */
export const safeArrayAccess = <T>(arr: T[] | undefined | null, index: number, fallback: T): T => {
  if (!arr || !Array.isArray(arr) || index < 0 || index >= arr.length) {
    return fallback;
  }
  return arr[index];
};

/**
 * Convert boolean-like values to actual booleans
 * @param value The value to convert
 * @returns A boolean representation
 */
export const toBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lowercased = value.toLowerCase();
    return lowercased === 'true' || lowercased === 'yes' || lowercased === '1';
  }
  if (typeof value === 'number') return value !== 0;
  return Boolean(value);
};
