
import { safeToString } from './stringUtils';
import { TeamColor } from '@/types/mockery';

/**
 * Safely converts a value to a number
 * @param value The value to convert
 * @param defaultValue The default value if conversion fails
 * @returns A number
 */
export const toNumber = (value: any, defaultValue: number = 0): number => {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }
  
  const num = Number(value);
  return isNaN(num) ? defaultValue : num;
};

/**
 * Safely converts a value to a boolean
 * @param value The value to convert
 * @param defaultValue The default value if conversion is ambiguous
 * @returns A boolean
 */
export const toBoolean = (value: any, defaultValue: boolean = false): boolean => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  
  if (typeof value === 'boolean') {
    return value;
  }
  
  if (typeof value === 'string') {
    const lowercased = value.toLowerCase().trim();
    if (lowercased === 'true' || lowercased === 'yes' || lowercased === '1') {
      return true;
    }
    if (lowercased === 'false' || lowercased === 'no' || lowercased === '0') {
      return false;
    }
  }
  
  if (typeof value === 'number') {
    return value !== 0;
  }
  
  return defaultValue;
};

/**
 * Safely converts a mixed type ID (string|number) to a string
 * @param id The ID to convert
 * @returns A string representation of the ID
 */
export const idToString = (id: string | number | undefined): string => {
  if (id === undefined || id === null) {
    return '';
  }
  return safeToString(id);
};

/**
 * Safely converts a TeamColor value or null to a valid TeamColor
 * @param team The team value to convert
 * @param defaultTeam The default team if null/invalid
 * @returns A valid TeamColor
 */
export const toTeamColor = (team: string | null | undefined, defaultTeam: TeamColor = 'red'): TeamColor => {
  if (!team) return defaultTeam;
  
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple'];
  
  return validTeams.includes(team as TeamColor) 
    ? (team as TeamColor) 
    : defaultTeam;
};

/**
 * Safely converts a string to a TeamColor or returns null if invalid
 * @param team The team string to validate
 * @returns TeamColor or null
 */
export const validateTeamColor = (team: string | null | undefined): TeamColor | null => {
  if (!team) return null;
  
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple'];
  
  return validTeams.includes(team as TeamColor) 
    ? (team as TeamColor) 
    : null;
};

/**
 * Converts array-like objects to actual arrays
 * @param obj The array-like object
 * @returns A proper array
 */
export const toArray = <T>(obj: any): T[] => {
  if (!obj) return [];
  if (Array.isArray(obj)) return obj;
  
  try {
    return Array.from(obj);
  } catch (e) {
    return [obj] as T[];
  }
};

/**
 * Ensures a value is an array, wrapping non-arrays in an array
 * @param value The value to ensure is an array
 * @returns An array containing the value, or the original array
 */
export const ensureArray = <T>(value: T | T[] | null | undefined): T[] => {
  if (value === null || value === undefined) {
    return [];
  }
  
  return Array.isArray(value) ? value : [value];
};

/**
 * Safely parses a JSON string, returning a default value if parsing fails
 * @param jsonString The JSON string to parse
 * @param defaultValue The default value if parsing fails
 * @returns The parsed object or default value
 */
export const safeJsonParse = <T>(jsonString: string, defaultValue: T): T => {
  try {
    return JSON.parse(jsonString) as T;
  } catch (e) {
    return defaultValue;
  }
};

/**
 * Ensures a value is a string array, handling different input types
 * @param value The value to convert to a string array
 * @returns A string array
 */
export const ensureStringArray = (value: any): string[] => {
  if (!value) return [];
  
  if (Array.isArray(value)) {
    return value.map(safeToString);
  }
  
  if (typeof value === 'number') {
    return [value.toString()];
  }
  
  if (typeof value === 'string') {
    return [value];
  }
  
  return [];
};

/**
 * Ensures an ID is represented as a string
 * @param id The ID that might be a number or string
 * @returns The ID as a string
 */
export const ensureStringId = (id: string | number | undefined): string => {
  if (id === undefined || id === null) {
    return '';
  }
  
  return typeof id === 'number' ? id.toString() : id;
};
