
/**
 * Utility functions for type conversion and validation
 */

import { TeamColor } from '@/types/team';

/**
 * Convert a string to a valid TeamColor or return a default value
 * @param team - Team color string
 * @param defaultColor - Default color to return if invalid
 * @returns Valid TeamColor
 */
export const toTeamColor = (team?: string | null): TeamColor => {
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  if (!team) return 'none';
  
  const normalizedTeam = team.toLowerCase() as TeamColor;
  return validTeamColors.includes(normalizedTeam) ? normalizedTeam : 'none';
};

/**
 * Ensures a value is a string
 * @param id - Any value
 * @returns String representation of the value
 */
export const ensureStringId = (id: any): string => {
  if (id === null || id === undefined) return '';
  return String(id);
};

export default {
  toTeamColor,
  ensureStringId
};
