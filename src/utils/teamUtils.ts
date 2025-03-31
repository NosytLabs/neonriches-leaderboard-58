import { TeamColor } from '@/types/mockery-types';

// Get the display name for a team
export const getTeamName = (team?: TeamColor): string => {
  if (!team) return 'Unaffiliated';
  
  const names: Record<TeamColor, string> = {
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
export const getTeamColor = (team?: TeamColor): string => {
  if (!team) return 'text-gray-400';
  
  const colors: Record<TeamColor, string> = {
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
export const getTeamBorderColor = (team?: TeamColor): string => {
  if (!team) return 'border-gray-400';
  
  const borderColors: Record<TeamColor, string> = {
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
export const getTeamBgColor = (team?: TeamColor): string => {
  if (!team) return 'bg-gray-400';
  
  const bgColors: Record<TeamColor, string> = {
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
export const getTeamCostFactor = (team: TeamColor): number => {
  const factors: Record<TeamColor, number> = {
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

// Additional team info getters (simplified)
export const getTeamMotto = (team: TeamColor): string => {
  const mottos: Record<TeamColor, string> = {
    'red': 'Blood and Honor',
    'blue': 'Wisdom and Loyalty',
    'green': 'Growth and Prosperity',
    'gold': 'Wealth and Power',
    'purple': 'Mystery and Magic',
    'none': 'Free Agent',
    'neutral': 'Balance in All Things'
  };
  
  return mottos[team] || '';
};

export const getTeamBenefit = (team: TeamColor): string => {
  // Simplified benefits
  return `Team ${team} benefits`;
};

// Removing complex, unused utility functions to simplify the file
