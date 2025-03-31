
import { TeamType } from '@/types/team';
import { getTeamColor, getTeamName } from '@/utils/teamUtils';

export { getTeamColor, getTeamName };

export function getTeamDisplayName(team: TeamType): string {
  return getTeamName(team);
}

export function getTeamColorClass(team: TeamType): string {
  return getTeamColor(team);
}
