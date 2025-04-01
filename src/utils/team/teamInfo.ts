
import { TeamColor } from '@/types/team';
import { asTeamColor } from './teamColors';

/**
 * Get the name for a team
 * @param team The team to get name for
 * @returns The team name
 */
export function getTeamName(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const nameMap: Record<TeamColor, string> = {
    'red': 'Crimson Knights',
    'blue': 'Azure Guardians',
    'green': 'Emerald Seekers',
    'gold': 'Golden Crown',
    'purple': 'Royal Purple',
    'none': 'Unaligned',
    'neutral': 'Unaligned'
  };
  
  return nameMap[teamColor];
}

/**
 * Get the display name for a team (includes emoji)
 * @param team The team to get display name for
 * @returns The team display name with emoji
 */
export function getTeamDisplayName(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const displayMap: Record<TeamColor, string> = {
    'red': '🔴 Crimson Knights',
    'blue': '🔵 Azure Guardians',
    'green': '🟢 Emerald Seekers',
    'gold': '🟡 Golden Crown',
    'purple': '🟣 Royal Purple',
    'none': '⚪ Unaligned',
    'neutral': '⚪ Unaligned'
  };
  
  return displayMap[teamColor];
}

/**
 * Get the motto for a team
 * @param team The team to get motto for
 * @returns The team motto
 */
export function getTeamMotto(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const mottoMap: Record<TeamColor, string> = {
    'red': 'Fortune favors the bold spender',
    'blue': 'Knowledge is power, wealth is influence',
    'green': 'Growth through strategic investment',
    'gold': 'The crown that outshines them all',
    'purple': 'Royal by blood, royal by spending',
    'none': 'Carve your own path to glory',
    'neutral': 'Carve your own path to glory'
  };
  
  return mottoMap[teamColor];
}

export default {
  getTeamName,
  getTeamDisplayName,
  getTeamMotto
};
