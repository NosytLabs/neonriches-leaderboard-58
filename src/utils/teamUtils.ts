
import { TeamColor, TeamType } from '@/types/mockery-types';

/**
 * Convert any string to a valid TeamColor
 */
export const toTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  const normalizedTeam = team.toLowerCase();
  switch (normalizedTeam) {
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'gold': return 'gold';
    case 'purple': return 'purple';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'crimson': return 'crimson';
    case 'neutral': return 'neutral';
    default: return 'none';
  }
};

/**
 * Alias for backward compatibility with components using asTeamColor
 */
export const asTeamColor = toTeamColor;

/**
 * Get the display name for a team
 */
export const getTeamName = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team as string);
  
  const teamNames: Record<TeamColor, string> = {
    'red': 'Red Team',
    'blue': 'Blue Team',
    'green': 'Green Team',
    'gold': 'Gold Team',
    'purple': 'Purple Team',
    'silver': 'Silver Team',
    'bronze': 'Bronze Team',
    'crimson': 'Crimson Team',
    'neutral': 'Neutral',
    'none': 'No Team'
  };
  
  return teamNames[teamColor] || 'Unknown Team';
};

/**
 * Get the CSS color class for a team
 */
export const getTeamColor = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team as string);
  
  const colorClasses: Record<TeamColor, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-yellow-500',
    'purple': 'text-purple-500',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-700',
    'crimson': 'text-red-700',
    'neutral': 'text-gray-300',
    'none': 'text-gray-500'
  };
  
  return colorClasses[teamColor] || 'text-gray-500';
};

/**
 * Get the CSS background color class for a team
 */
export const getTeamTailwindColor = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team as string);
  
  const bgClasses: Record<TeamColor, string> = {
    'red': 'bg-red-500/20 text-red-500',
    'blue': 'bg-blue-500/20 text-blue-500',
    'green': 'bg-green-500/20 text-green-500',
    'gold': 'bg-yellow-500/20 text-yellow-500',
    'purple': 'bg-purple-500/20 text-purple-500',
    'silver': 'bg-gray-400/20 text-gray-400',
    'bronze': 'bg-amber-700/20 text-amber-700',
    'crimson': 'bg-red-700/20 text-red-700',
    'neutral': 'bg-gray-300/20 text-gray-300',
    'none': 'bg-gray-500/20 text-gray-500'
  };
  
  return bgClasses[teamColor] || 'bg-gray-500/20 text-gray-500';
};

/**
 * Get the CSS background color class for a team
 */
export const getTeamTailwindBgColor = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team as string);
  
  const bgClasses: Record<TeamColor, string> = {
    'red': 'bg-red-500/20',
    'blue': 'bg-blue-500/20',
    'green': 'bg-green-500/20',
    'gold': 'bg-yellow-500/20',
    'purple': 'bg-purple-500/20',
    'silver': 'bg-gray-400/20',
    'bronze': 'bg-amber-700/20',
    'crimson': 'bg-red-700/20',
    'neutral': 'bg-gray-300/20',
    'none': 'bg-gray-500/20'
  };
  
  return bgClasses[teamColor] || 'bg-gray-500/20';
};

/**
 * Create a default team data object
 */
export const createTeamData = (color: TeamColor | string) => {
  const teamColor = toTeamColor(color as string);
  
  return {
    id: `team-${teamColor}`,
    name: getTeamName(teamColor),
    color: teamColor,
    ranking: Math.floor(Math.random() * 100) + 1,
    memberCount: Math.floor(Math.random() * 1000) + 100,
    icon: teamColor,
    motto: `${getTeamName(teamColor)} Motto`,
    description: `Description for ${getTeamName(teamColor)}`,
    benefits: [
      `${getTeamName(teamColor)} Benefit 1`,
      `${getTeamName(teamColor)} Benefit 2`,
      `${getTeamName(teamColor)} Benefit 3`
    ]
  };
};

/**
 * Add an ID to a team data object if it doesn't have one
 */
export const addTeamId = (team: any) => {
  if (team.id) return team;
  return {
    ...team,
    id: `team-${team.color || 'unknown'}`
  };
};
