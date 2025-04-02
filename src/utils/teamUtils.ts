
import { TeamColor } from '@/types/team';

// Convert any string to a valid TeamColor
export const toTeamColor = (team: string): TeamColor => {
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'none', 'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  // If the input is already a valid TeamColor, return it
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Default fallback
  return 'none';
};

// Get the display name for a team color
export const getTeamName = (team: TeamColor): string => {
  const names: Record<TeamColor, string> = {
    red: 'Crimson Crown',
    blue: 'Azure Knights',
    green: 'Golden Order',
    gold: 'Royal Gold',
    purple: 'Royal Purple',
    none: 'No Team',
    neutral: 'Neutral',
    silver: 'Silver League',
    bronze: 'Bronze League',
    crimson: 'Crimson League'
  };
  
  return names[team] || team;
};

// Get the appropriate CSS color class for a team
export const getTeamColor = (team: TeamColor): string => {
  const colorClasses: Record<TeamColor, string> = {
    red: 'text-royal-crimson border-royal-crimson',
    blue: 'text-royal-navy border-royal-navy',
    green: 'text-royal-gold border-royal-gold',
    gold: 'text-amber-500 border-amber-500',
    purple: 'text-purple-500 border-purple-500',
    none: 'text-gray-400 border-gray-400',
    neutral: 'text-gray-500 border-gray-500',
    silver: 'text-gray-300 border-gray-300',
    bronze: 'text-amber-700 border-amber-700',
    crimson: 'text-red-700 border-red-700'
  };
  
  return colorClasses[team] || 'text-gray-400 border-gray-400';
};
