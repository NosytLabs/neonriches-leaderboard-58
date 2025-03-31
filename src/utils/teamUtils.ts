
import { TeamColor, TeamType } from '@/types/team';

// Get the display name for a team
export const getTeamName = (team?: TeamType): string => {
  if (!team) return 'Unaffiliated';
  
  const names: Record<TeamType, string> = {
    'red': 'House Crimson',
    'blue': 'House Azure',
    'green': 'House Emerald',
    'gold': 'House Aureate',
    'purple': 'House Violet',
    'none': 'Unaffiliated',
    'neutral': 'Neutral'
  };
  
  return names[team] || 'Unaffiliated';
};

// Get CSS color class for a team
export const getTeamColor = (team?: TeamType): string => {
  if (!team) return 'text-gray-400';
  
  const colors: Record<TeamType, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-yellow-400',
    'purple': 'text-purple-500',
    'none': 'text-gray-400',
    'neutral': 'text-gray-400'
  };
  
  return colors[team] || 'text-gray-400';
};

// Get border color class for a team
export const getTeamBorderColor = (team?: TeamType): string => {
  if (!team) return 'border-gray-400';
  
  const borderColors: Record<TeamType, string> = {
    'red': 'border-red-500',
    'blue': 'border-blue-500',
    'green': 'border-green-500',
    'gold': 'border-yellow-400',
    'purple': 'border-purple-500',
    'none': 'border-gray-400',
    'neutral': 'border-gray-400'
  };
  
  return borderColors[team] || 'border-gray-400';
};

// Get background color class for a team
export const getTeamBgColor = (team?: TeamType): string => {
  if (!team) return 'bg-gray-400';
  
  const bgColors: Record<TeamType, string> = {
    'red': 'bg-red-500',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'gold': 'bg-yellow-400',
    'purple': 'bg-purple-500',
    'none': 'bg-gray-400',
    'neutral': 'bg-gray-400'
  };
  
  return bgColors[team] || 'bg-gray-400';
};

// Get team points cost factor (some teams pay more to join)
export const getTeamCostFactor = (team: TeamType): number => {
  const factors: Record<TeamType, number> = {
    'red': 1.0,
    'blue': 1.0,
    'green': 1.0,
    'gold': 1.5,
    'purple': 1.25,
    'none': 0,
    'neutral': 0
  };
  
  return factors[team] || 1.0;
};

// For backward compatibility
export const getTeamDisplayName = getTeamName;
export const getTeamColorClass = getTeamColor;
export const getTeamBorderColorClass = getTeamBorderColor;
export const getTeamBackgroundColorClass = getTeamBgColor;
