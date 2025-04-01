
import { TeamColor } from '@/types/team';

/**
 * Convert a string to a TeamColor type if valid, otherwise return a default
 * @param input The team string to convert
 * @returns A valid TeamColor value
 */
export function asTeamColor(input: string | TeamColor | undefined | null): TeamColor {
  const validColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (!input) return 'neutral';
  
  const normalized = input.toLowerCase() as TeamColor;
  return validColors.includes(normalized) ? normalized : 'neutral';
}

/**
 * Get the CSS color class for a team
 * @param team The team to get color for
 * @returns The CSS color class
 */
export function getTeamColor(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const colorMap: Record<TeamColor, string> = {
    'red': '#ef4444',
    'blue': '#3b82f6',
    'green': '#22c55e',
    'gold': '#f59e0b',
    'purple': '#a855f7',
    'none': '#6b7280',
    'neutral': '#6b7280'
  };
  
  return colorMap[teamColor];
}

/**
 * Get the CSS border color class for a team
 * @param team The team to get border color for
 * @returns The CSS border color class
 */
export function getTeamBorderColor(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const borderMap: Record<TeamColor, string> = {
    'red': 'border-red-500',
    'blue': 'border-blue-500',
    'green': 'border-green-500',
    'gold': 'border-amber-500',
    'purple': 'border-purple-500',
    'none': 'border-gray-500',
    'neutral': 'border-gray-500'
  };
  
  return borderMap[teamColor];
}

export default {
  asTeamColor,
  getTeamColor,
  getTeamBorderColor
};
