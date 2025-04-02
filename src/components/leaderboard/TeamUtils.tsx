
import { TeamColor } from '@/types/team';
import { getTeamColor, getTeamName } from '@/utils/teamUtils';

export { getTeamColor, getTeamName };

/**
 * Safely converts any string to TeamColor type
 * This provides a safeguard for when we receive team values as strings
 */
export function toTeamColor(team: string | TeamColor): TeamColor {
  return team as TeamColor;
}

export function getTeamDisplayName(team: string | TeamColor): string {
  return getTeamName(toTeamColor(team));
}

export function getTeamColorClass(team: string | TeamColor): string {
  return getTeamColor(toTeamColor(team));
}
