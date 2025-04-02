
import { TeamColor } from '@/types/mockery-types';
import { TeamData } from '@/types/team';

// Get the friendly team name from TeamColor
export function getTeamName(team: TeamColor | string): string {
  const teamNames: Record<string, string> = {
    'red': 'Royal Order of Reckless Spending',
    'blue': 'Cobalt Credit Cartel',
    'green': 'Emerald Exchequer Cabaret',
    'gold': 'Golden Treasury Elite',
    'purple': 'Royal Purple Council',
    'neutral': 'Independent Spenders',
    'none': 'Unaffiliated',
    'silver': 'Silver Sovereign Society',
    'bronze': 'Bronze Bank Brigade',
    'crimson': 'Crimson Crown Command'
  };

  return teamNames[team] || 'Unknown Team';
}

// Get CSS color class for a team
export function getTeamColor(team: TeamColor | string): string {
  const teamColors: Record<string, string> = {
    'red': 'text-red-400',
    'blue': 'text-blue-400',
    'green': 'text-green-400',
    'gold': 'text-yellow-400',
    'purple': 'text-purple-400',
    'neutral': 'text-gray-400',
    'none': 'text-white',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'crimson': 'text-red-600'
  };

  return teamColors[team] || 'text-white';
}

// Get tailwind background color class for team
export function getTeamTailwindBgColor(team: TeamColor | string): string {
  const bgColors: Record<string, string> = {
    'red': 'border-red-500',
    'blue': 'border-blue-500',
    'green': 'border-green-500',
    'gold': 'border-yellow-500',
    'purple': 'border-purple-500',
    'neutral': 'border-gray-500',
    'none': 'border-white/20',
    'silver': 'border-gray-400',
    'bronze': 'border-amber-700',
    'crimson': 'border-red-700'
  };

  return bgColors[team] || 'border-white/20';
}

// Convert any string to a valid TeamColor or default to 'none'
export function asTeamColor(team: string): TeamColor {
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'neutral', 'none', 'silver', 'bronze', 'crimson'];
  return validTeams.includes(team as TeamColor) ? team as TeamColor : 'none';
}

// Alias for asTeamColor for better descriptive naming
export const toTeamColor = asTeamColor;

// Get tailwind text color for team
export function getTeamTailwindColor(team: TeamColor | string): string {
  return getTeamColor(team);
}

// Add an id field to TeamData objects if they don't have one
export function addTeamId(team: TeamData): TeamData & { id: string } {
  if (team.id) {
    return team as TeamData & { id: string };
  }
  
  return {
    ...team,
    id: team.color
  };
}

// Export from team/teamColors if those exist
export * from '@/utils/team/teamColors';
export * from '@/utils/team/teamNames';
export * from '@/utils/team/teamInfo';
