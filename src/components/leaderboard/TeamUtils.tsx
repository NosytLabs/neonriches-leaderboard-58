
import { TeamColor } from '@/types/team';
import { getTeamColor, getTeamName, asTeamColor } from '@/utils/teamUtils';

export { getTeamColor, getTeamName };

/**
 * Safely converts any string to TeamColor type
 * This provides a safeguard for when we receive team values as strings
 */
export { asTeamColor };

export function getTeamDisplayName(team: string | TeamColor): string {
  return getTeamName(asTeamColor(team));
}

export function getTeamColorClass(team: string | TeamColor): string {
  return getTeamColor(asTeamColor(team));
}
