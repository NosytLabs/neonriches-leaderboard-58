
import { TeamColor } from '@/types/mockery-types';
import { TeamData } from '@/types/team';

// Get team name from TeamColor
export function getTeamName(team: TeamColor | string): string {
  const teamNames: Record<string, string> = {
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
  
  return teamNames[team.toLowerCase()] || 'Unknown Team';
}

// Get Tailwind color class for a team
export function getTeamTailwindColor(team: TeamColor | string): string {
  const colorClasses: Record<string, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-yellow-500',
    'purple': 'text-purple-500',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-700',
    'crimson': 'text-rose-700',
    'neutral': 'text-gray-300',
    'none': 'text-gray-500'
  };
  
  return colorClasses[team.toLowerCase()] || 'text-gray-500';
}

// Get Tailwind background color class for a team
export function getTeamTailwindBgColor(team: TeamColor | string): string {
  const bgClasses: Record<string, string> = {
    'red': 'bg-red-500',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'gold': 'bg-yellow-500',
    'purple': 'bg-purple-500',
    'silver': 'bg-gray-400',
    'bronze': 'bg-amber-700',
    'crimson': 'bg-rose-700',
    'neutral': 'bg-gray-300',
    'none': 'bg-gray-500'
  };
  
  return bgClasses[team.toLowerCase()] || 'bg-gray-500';
}

// Convert a string to TeamColor
export function toTeamColor(team: string | null | undefined): TeamColor {
  if (!team) return 'none';
  
  const normalized = team.toLowerCase();
  
  if (['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'crimson', 'neutral', 'none'].includes(normalized)) {
    return normalized as TeamColor;
  }
  
  return 'none';
}

// Generate TeamData from a string team identifier
export function createTeamData(team: string | TeamColor): TeamData {
  const teamColor = toTeamColor(team);
  
  return {
    id: teamColor,
    color: teamColor,
    name: getTeamName(teamColor),
    icon: `team-${teamColor}`,
    motto: `${getTeamName(teamColor)} Motto`,
    description: `This is the ${getTeamName(teamColor)} description.`,
    benefits: [`${getTeamName(teamColor)} Benefit 1`, `${getTeamName(teamColor)} Benefit 2`],
    ranking: Math.floor(Math.random() * 10) + 1,
    memberCount: Math.floor(Math.random() * 1000) + 100
  };
}

// Add ID to TeamData if it doesn't have one
export function addTeamId(team: TeamData): TeamData & { id: string } {
  return {
    ...team,
    id: team.id || team.color
  };
}
