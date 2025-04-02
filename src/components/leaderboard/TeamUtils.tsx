
import { TeamColor } from '@/types/team';
import { getTeamColor, getTeamName } from '@/utils/teamUtils';

export { getTeamColor, getTeamName };

/**
 * Safely converts any string to TeamColor type
 * This provides a safeguard for when we receive team values as strings
 */
export function asTeamColor(team: string | TeamColor | null | undefined): TeamColor {
  if (!team) return 'none';
  
  // Check if the string is a valid TeamColor
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze', 'crimson'];
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Default to 'none' if not valid
  return 'none';
}

export function getTeamDisplayName(team: string | TeamColor): string {
  return getTeamName(asTeamColor(team));
}

export function getTeamColorClass(team: string | TeamColor): string {
  return getTeamColor(asTeamColor(team));
}
