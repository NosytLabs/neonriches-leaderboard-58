
import { TeamColor } from '@/types/team';

/**
 * Get the display name for a team
 * @param team The team to get name for
 * @returns The display name for the team
 */
export const getTeamName = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Crimson',
    'blue': 'Azure',
    'green': 'Emerald',
    'gold': 'Gold',
    'purple': 'Royal',
    'none': 'Neutral',
    'neutral': 'Neutral'
  };
  
  return teamMap[team as string] || 'Neutral';
};

/**
 * Get the display name for a team (alias for getTeamName)
 * @param team The team to get name for
 * @returns The display name for the team
 */
export const getTeamDisplayName = getTeamName;

/**
 * Get a team motto
 * @param team The team to get motto for
 * @returns The motto for the team
 */
export const getTeamMotto = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Blood and Gold Above All',
    'blue': 'Honor Through Knowledge and Service',
    'green': 'Fortune Favors the Bold',
    'gold': 'Glory Through Golden Prosperity',
    'purple': 'Power Through Royal Bloodlines',
    'none': 'Status Through Spending',
    'neutral': 'Status Through Spending'
  };
  
  return teamMap[team as string] || 'Status Through Spending';
};
