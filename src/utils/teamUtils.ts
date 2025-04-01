
import { TeamColor } from '@/types/team';
import { teamColors } from './team/teamColors';
import { teamNames } from './team/teamNames';
import { teamMottos } from './team/teamMottos';
import { teamBenefits } from './team/teamBenefits';
import { toTeamColor } from './typeConverters';

// Export functions to get team information
export const getTeamColor = (team: TeamColor | string | null | undefined): string => {
  const safeTeam = toTeamColor(team);
  return teamColors[safeTeam] || teamColors.none;
};

export const getTeamName = (team: TeamColor | string | null | undefined): string => {
  const safeTeam = toTeamColor(team);
  return teamNames[safeTeam] || teamNames.none;
};

export const getTeamMotto = (team: TeamColor | string | null | undefined): string => {
  const safeTeam = toTeamColor(team);
  return teamMottos[safeTeam] || teamMottos.none;
};

export const getTeamBenefits = (team: TeamColor | string | null | undefined): string[] => {
  const safeTeam = toTeamColor(team);
  return teamBenefits[safeTeam] || teamBenefits.none;
};

export const getTeamBorderColor = (team: TeamColor | string | null | undefined): string => {
  const safeTeam = toTeamColor(team);
  const colorMap: Record<TeamColor, string> = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gold: 'border-yellow-400',
    purple: 'border-purple-500',
    none: 'border-gray-400',
    neutral: 'border-gray-400',
    silver: 'border-slate-400',
    bronze: 'border-amber-600'
  };
  return colorMap[safeTeam] || colorMap.none;
};

// Alias for toTeamColor to maintain backward compatibility
export const asTeamColor = toTeamColor;
