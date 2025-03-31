
import { TeamColor } from '@/types/mockery-types';
import { getTeamColor, getTeamName } from '@/utils/teamUtils';

export { getTeamColor, getTeamName };

export function getTeamDisplayName(team: TeamColor): string {
  return getTeamName(team);
}

export function getTeamColorClass(team: TeamColor): string {
  return getTeamColor(team);
}
