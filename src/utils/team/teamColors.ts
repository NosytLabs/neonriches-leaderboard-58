
import { TeamColor } from '@/types/team';

/**
 * Convert a string to a TeamColor type if valid, otherwise return a default
 * @param team The team string to convert
 * @returns A valid TeamColor value
 */
export const asTeamColor = (team: TeamColor | string | null): TeamColor => {
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (team && validTeams.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  return 'neutral';
};

/**
 * Get the text and background color for a team
 * @param team The team to get color for
 * @returns CSS classes for the team color
 */
export const getTeamColor = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'text-red-400 bg-red-500/20',
    'blue': 'text-blue-400 bg-blue-500/20',
    'green': 'text-green-400 bg-green-500/20',
    'gold': 'text-yellow-400 bg-yellow-500/20',
    'purple': 'text-purple-400 bg-purple-500/20',
    'none': 'text-gray-400 bg-gray-500/20',
    'neutral': 'text-gray-400 bg-gray-500/20'
  };
  
  return teamMap[team as string] || 'text-gray-400 bg-gray-500/20';
};

/**
 * Get the border color for a team
 * @param team The team to get border color for
 * @returns CSS border color class for the team
 */
export const getTeamBorderColor = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'border-red-500/30',
    'blue': 'border-blue-500/30',
    'green': 'border-green-500/30',
    'gold': 'border-yellow-500/30',
    'purple': 'border-purple-500/30',
    'none': 'border-gray-500/30',
    'neutral': 'border-gray-500/30'
  };
  
  return teamMap[team as string] || 'border-gray-500/30';
};
