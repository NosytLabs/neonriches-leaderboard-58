
import { TeamType, TeamColor } from '@/types/user-types';

/**
 * Gets the display name for a team
 */
export const getTeamName = (team?: TeamType | null): string => {
  if (!team) return 'No Team';
  
  switch (team) {
    case 'red': return 'Red Knights';
    case 'blue': return 'Blue Mages';
    case 'green': return 'Green Rangers';
    default: return `Team ${team.charAt(0).toUpperCase() + team.slice(1)}`;
  }
};

/**
 * Gets the color class for a team
 */
export const getTeamColor = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'text-gray-400';
  
  switch (team) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    default: return 'text-gray-400';
  }
};

/**
 * Gets the background color class for a team
 */
export const getTeamBgColor = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'bg-gray-800/50';
  
  switch (team) {
    case 'red': return 'bg-red-500/20';
    case 'blue': return 'bg-blue-500/20';
    case 'green': return 'bg-green-500/20';
    default: return 'bg-gray-800/50';
  }
};

/**
 * Gets the border color class for a team
 */
export const getTeamBorderColor = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'border-gray-700';
  
  switch (team) {
    case 'red': return 'border-red-500/70';
    case 'blue': return 'border-blue-500/70';
    case 'green': return 'border-green-500/70';
    default: return 'border-gray-700';
  }
};

/**
 * Gets the team icon name
 */
export const getTeamIcon = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'users';
  
  switch (team) {
    case 'red': return 'sword';
    case 'blue': return 'wand';
    case 'green': return 'bow-arrow';
    default: return 'users';
  }
};

// Additional utility functions for teams
export const getTeamMotto = (team: TeamType): string => {
  const mottos: Record<TeamType, string> = {
    'red': 'Buy First, Think Never',
    'green': 'Wealth So Strategic, It\'s Almost Pathetic',
    'blue': 'Patience in Spending, Unbridled in Pretending'
  };
  return mottos[team] || 'No motto available';
};

export const getTeamBenefit = (team: TeamType): string[] => {
  const benefits: Record<TeamType, string[]> = {
    'red': ['Royal Crimson profile effects', 'Dynasty badges and titles'],
    'green': ['Emerald Empire profile effects', 'Wealth architect badges'],
    'blue': ['Sapphire Sovereign profile effects', 'Alliance nobility badges']
  };
  return benefits[team] || ['No benefits available'];
};

export const getTeamSecurityGuarantee = (team: TeamType): string => {
  const guarantees: Record<TeamType, string> = {
    'red': 'Your data is secured with the same level of care as a dragon guards its hoard of gold.',
    'green': 'Your information is protected by mathematical encryption that would take centuries to break.',
    'blue': 'Your privacy is ensured by a magical agreement that cannot be broken.'
  };
  return guarantees[team] || 'No security guarantee available';
};

// For backward compatibility
export const getTeamColorClass = getTeamColor;
export const getTeamBgColorClass = getTeamBgColor;
export const getTeamBorderColorClass = getTeamBorderColor;
