
import { TeamColor } from '@/types/team';

/**
 * Get the CSS color class for a team
 */
export function getTeamColor(team: TeamColor): string {
  switch (team) {
    case 'red':
      return 'text-red-500 border-red-500';
    case 'blue':
      return 'text-blue-500 border-blue-500';
    case 'green':
      return 'text-green-500 border-green-500';
    case 'gold':
      return 'text-yellow-500 border-yellow-500';
    case 'purple':
      return 'text-purple-500 border-purple-500';
    case 'neutral':
      return 'text-gray-400 border-gray-400';
    case 'none':
    default:
      return 'text-gray-400 border-gray-400';
  }
}

/**
 * Get the display name for a team
 */
export function getTeamName(team: TeamColor): string {
  switch (team) {
    case 'red':
      return 'Red Dynasty';
    case 'blue':
      return 'Blue Monarchy';
    case 'green':
      return 'Green Kingdom';
    case 'gold':
      return 'Gold Empire';
    case 'purple':
      return 'Purple Realm';
    case 'neutral':
      return 'Neutral Territory';
    case 'none':
    default:
      return 'Unaffiliated';
  }
}

/**
 * Safely converts any string to TeamColor type
 */
export function asTeamColor(team: string | TeamColor | null | undefined): TeamColor {
  if (!team) return 'none';
  
  // Check if the string is a valid TeamColor
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Default to 'none' if not valid
  return 'none';
}

/**
 * Get the display name for a team
 */
export function getTeamDisplayName(team: string | TeamColor): string {
  return getTeamName(asTeamColor(team));
}

/**
 * Get the CSS color class for a team
 */
export function getTeamColorClass(team: string | TeamColor): string {
  return getTeamColor(asTeamColor(team));
}
