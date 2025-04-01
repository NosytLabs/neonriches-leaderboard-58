
import { TeamColor } from '@/types/user-consolidated';
import { safeToString } from '@/utils/safeToString';

/**
 * Convert any value to a TeamColor
 * @param team The team value to convert
 * @returns A valid TeamColor or null
 */
export const toTeamColor = (team: any): TeamColor | null => {
  if (!team) return null;
  
  const teamString = String(team).toLowerCase();
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'];
  
  if (validTeams.includes(teamString as TeamColor)) {
    return teamString as TeamColor;
  }
  
  // Map some common variations
  const teamMap: Record<string, TeamColor> = {
    'crimson': 'red',
    'azure': 'blue', 
    'emerald': 'green',
    'golden': 'gold',
    'violet': 'purple',
    'neutral': 'none',
    'none': 'none',
    'unaffiliated': 'none',
    'independent': 'neutral'
  };
  
  return teamMap[teamString] || null;
};

/**
 * Makes sure that user IDs are handled consistently as strings
 * @param id The ID to convert to string
 * @returns The string representation of the ID
 */
export const ensureStringId = (id: string | number | undefined | null): string => {
  if (id === undefined || id === null) return '';
  return String(id);
};

/**
 * Convert an array of values to strings
 * @param values Array of values to convert
 * @returns Array of strings
 */
export const arrayToStringArray = (values: any[] | undefined | null): string[] => {
  if (!values) return [];
  if (!Array.isArray(values)) return [];
  
  return values.map(value => safeToString(value));
};

/**
 * Convert a user tier to a standardized string format
 * @param tier The tier to convert
 * @returns A standardized tier string
 */
export const normalizeTier = (tier: string | undefined | null): string => {
  if (!tier) return 'free';
  
  const tierString = String(tier).toLowerCase();
  const validTiers = [
    'free', 'basic', 'premium', 'royal', 'founder', 
    'noble', 'legendary', 'whale', 'pro', 'standard', 
    'elite', 'platinum', 'diamond', 'gold', 'silver', 
    'bronze', 'vip', 'knight', 'baron', 'viscount', 
    'earl', 'duke', 'prince', 'king', 'emperor'
  ];
  
  if (validTiers.includes(tierString)) {
    return tierString;
  }
  
  // Map some common variations
  const tierMap: Record<string, string> = {
    'f': 'free',
    'b': 'basic',
    'p': 'premium',
    'r': 'royal',
    'vip': 'royal',
    'king': 'royal',
    'queen': 'royal',
    'standard': 'basic',
    'advanced': 'premium',
    'ultra': 'royal'
  };
  
  return tierMap[tierString] || 'basic';
};

/**
 * Convert a numeric or string value to a boolean
 * @param value The value to convert
 * @param defaultValue The default value if conversion fails
 * @returns A boolean value
 */
export const toBoolean = (value: any, defaultValue: boolean = false): boolean => {
  if (typeof value === 'boolean') return value;
  if (value === 'true' || value === '1' || value === 1) return true;
  if (value === 'false' || value === '0' || value === 0) return false;
  return defaultValue;
};
