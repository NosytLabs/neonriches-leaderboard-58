
import { TeamColor } from '@/types/team';

/**
 * Convert any value to TeamColor safely
 * @param team - Team value to convert
 * @returns Valid TeamColor
 */
export const toTeamColor = (team: TeamColor | string | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  const validColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'];
  const normalizedTeam = String(team).toLowerCase() as TeamColor;
  
  if (validColors.includes(normalizedTeam)) {
    return normalizedTeam;
  }
  
  return 'none';
};

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
 * Ensures a value is a valid string ID
 * @param id - Value to convert to a string ID
 * @returns String ID
 */
export const ensureStringId = (id: any): string => {
  if (!id) {
    return '';
  }
  return String(id);
};

/**
 * Safely convert any value to TeamColor and provide tailwind class
 * Similar to getTeamColor but doesn't require importing teamUtils
 */
export const safeTeamColor = (team: any): TeamColor => {
  return toTeamColor(team);
};

/**
 * Ensures a value is a valid number
 * @param val - Value to convert
 * @param defaultVal - Default value if conversion fails
 * @returns Number value
 */
export const ensureNumber = (val: any, defaultVal: number = 0): number => {
  if (val === null || val === undefined) return defaultVal;
  
  const num = Number(val);
  return isNaN(num) ? defaultVal : num;
};
