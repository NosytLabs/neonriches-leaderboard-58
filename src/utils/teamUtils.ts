
import { TeamColor } from '@/types/team';

/**
 * Get the CSS color class for a team color
 * @param team - The team color
 * @returns CSS class for the team color
 */
export const getTeamColor = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-yellow-500';
    case 'purple': return 'text-purple-500';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-700';
    case 'crimson': return 'text-red-800';
    case 'neutral': return 'text-gray-400';
    case 'none':
    default: return 'text-gray-500';
  }
};

/**
 * Get the CSS background color class for a team color
 * @param team - The team color
 * @returns CSS class for the team background color
 */
export const getTeamBackgroundColor = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'bg-red-500';
    case 'blue': return 'bg-blue-500';
    case 'green': return 'bg-green-500';
    case 'gold': return 'bg-yellow-500';
    case 'purple': return 'bg-purple-500';
    case 'silver': return 'bg-gray-300';
    case 'bronze': return 'bg-amber-700';
    case 'crimson': return 'bg-red-800';
    case 'neutral': return 'bg-gray-400';
    case 'none':
    default: return 'bg-gray-500';
  }
};

/**
 * Get the display name for a team color
 * @param team - The team color
 * @returns Display name for the team
 */
export const getTeamName = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'Red Team';
    case 'blue': return 'Blue Team';
    case 'green': return 'Green Team';
    case 'gold': return 'Gold Team';
    case 'purple': return 'Purple Team';
    case 'silver': return 'Silver Team';
    case 'bronze': return 'Bronze Team';
    case 'crimson': return 'Crimson Team';
    case 'neutral': return 'Neutral';
    case 'none':
    default: return 'No Team';
  }
};

/**
 * Check if a team color is valid
 * @param team - The team color to check
 * @returns Boolean indicating if the team color is valid
 */
export const isValidTeam = (team: string): boolean => {
  const validTeams: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'silver', 'bronze', 'crimson', 'neutral', 'none'
  ];
  
  return validTeams.includes(team as TeamColor);
};

export default {
  getTeamColor,
  getTeamBackgroundColor,
  getTeamName,
  isValidTeam
};
