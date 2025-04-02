
/**
 * Team utility functions for working with team data
 */
import { TeamColor } from '@/types/team';

/**
 * Convert a string to a valid TeamColor or return a default value
 * @param team Team color string
 * @param defaultColor Default color to return if invalid
 * @returns Valid TeamColor
 */
export const asTeamColor = (team?: string | null, defaultColor: TeamColor = 'none'): TeamColor => {
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  if (!team) return defaultColor;
  
  const normalizedTeam = team.toLowerCase() as TeamColor;
  return validTeamColors.includes(normalizedTeam) ? normalizedTeam : defaultColor;
};

/**
 * Get the CSS color class for a team
 */
export const getTeamColor = (team: TeamColor): string => {
  switch(team) {
    case 'red': return 'text-red-500';
    case 'green': return 'text-green-500';
    case 'blue': return 'text-blue-500';
    case 'gold': return 'text-amber-500';
    case 'purple': return 'text-purple-500';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-700';
    case 'crimson': return 'text-rose-600';
    default: return 'text-white/60';
  }
};

/**
 * Get the full name for a team
 */
export const getTeamName = (team: TeamColor): string => {
  switch(team) {
    case 'red': return 'Red Team';
    case 'green': return 'Green Team';
    case 'blue': return 'Blue Team';
    case 'gold': return 'Gold Team';
    case 'purple': return 'Purple Team';
    case 'silver': return 'Silver Team';
    case 'bronze': return 'Bronze Team';
    case 'crimson': return 'Crimson Team';
    default: return 'No Team';
  }
};
