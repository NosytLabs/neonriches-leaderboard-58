
import { TeamColor } from '@/types/mockery-types';

/**
 * Get the display name for a team color
 */
export const getTeamName = (team: TeamColor | string): string => {
  switch (team) {
    case 'red': return 'Red Team';
    case 'blue': return 'Blue Team';
    case 'green': return 'Green Team';
    case 'gold': return 'Gold Team';
    case 'purple': return 'Purple Team';
    case 'none': return 'No Team';
    case 'neutral': return 'Neutral';
    default: return team ? `${team.charAt(0).toUpperCase()}${team.slice(1)} Team` : 'Unknown Team';
  }
};

/**
 * Get the color class for a team color
 */
export const getTeamColor = (team: TeamColor | string): string => {
  switch (team) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-yellow-500';
    case 'purple': return 'text-purple-500';
    case 'none': return 'text-gray-500';
    case 'neutral': return 'text-gray-500';
    default: return 'text-gray-500';
  }
};

/**
 * Convert a string to TeamColor
 */
export const asTeamColor = (team?: string | TeamColor | null): TeamColor => {
  if (!team) return 'none';
  
  switch (team) {
    case 'red':
    case 'blue':
    case 'green':
    case 'gold':
    case 'purple':
    case 'none':
    case 'neutral':
      return team as TeamColor;
    default:
      return 'none';
  }
};

/**
 * Get the Tailwind background color class for a team
 */
export const getTeamTailwindBgColor = (team: TeamColor | string): string => {
  switch (team) {
    case 'red': return 'bg-red-500';
    case 'blue': return 'bg-blue-500';
    case 'green': return 'bg-green-500';
    case 'gold': return 'bg-yellow-500';
    case 'purple': return 'bg-purple-500';
    case 'none': return 'bg-gray-500';
    case 'neutral': return 'bg-gray-500';
    default: return 'bg-gray-500';
  }
};

/**
 * Convert any team string to a standard format
 */
export const toTeamColor = (teamStr?: any): TeamColor => {
  if (!teamStr) return 'none';
  
  const team = typeof teamStr === 'string' ? teamStr.toLowerCase() : 'none';
  
  return asTeamColor(team);
};

export default {
  getTeamName,
  getTeamColor,
  asTeamColor,
  getTeamTailwindBgColor,
  toTeamColor
};
