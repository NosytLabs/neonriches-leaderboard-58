
import { TeamColor } from '@/types/team';

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
 * Helper function to convert a string to a valid TeamColor
 * @param team - Team string to convert
 * @returns Valid TeamColor
 */
export const toTeamColor = (team: string | TeamColor | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  // Handle case insensitivity
  const normalizedTeam = typeof team === 'string' ? team.toLowerCase() : team;
  
  switch (normalizedTeam) {
    case 'red':
    case 'blue':
    case 'green':
    case 'gold':
    case 'purple':
    case 'none':
    case 'neutral':
    case 'silver':
    case 'bronze':
      return normalizedTeam as TeamColor;
    default:
      return 'none';
  }
};
