
import { TeamColor } from '@/types/mockery-types';
import { TeamData } from '@/types/team';

// Convert any string to a valid TeamColor
export const toTeamColor = (team: string | undefined | null): TeamColor => {
  if (!team) return 'none';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'red';
    case 'blue':
      return 'blue';
    case 'green':
      return 'green';
    case 'gold':
      return 'gold';
    case 'purple':
      return 'purple';
    case 'silver':
      return 'silver';
    default:
      return 'none';
  }
};

// Alias for toTeamColor for backwards compatibility
export const asTeamColor = toTeamColor;

// Get team name based on team color
export const getTeamName = (team: TeamColor | string | undefined | null): string => {
  const teamColor = toTeamColor(team as string);
  
  switch (teamColor) {
    case 'red':
      return 'Royal Crimson';
    case 'blue':
      return 'Royal Navy';
    case 'green':
      return 'Royal Emerald';
    case 'gold':
      return 'Royal Gold';
    case 'purple':
      return 'Royal Purple';
    case 'silver':
      return 'Silver Legion';
    case 'none':
      return 'Unaffiliated';
    default:
      return 'Unknown Team';
  }
};

// Get team color in Tailwind classes
export const getTeamColor = (team: TeamColor | string | undefined | null): string => {
  const teamColor = toTeamColor(team as string);
  
  switch (teamColor) {
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'gold':
      return 'text-yellow-500';
    case 'purple':
      return 'text-purple-500';
    case 'silver':
      return 'text-gray-400';
    case 'none':
    default:
      return 'text-gray-300';
  }
};

// Get team background color in Tailwind classes
export const getTeamTailwindBgColor = (team: TeamColor | string | undefined | null): string => {
  const teamColor = toTeamColor(team as string);
  
  switch (teamColor) {
    case 'red':
      return 'bg-red-500/10';
    case 'blue':
      return 'bg-blue-500/10';
    case 'green':
      return 'bg-green-500/10';
    case 'gold':
      return 'bg-yellow-500/10';
    case 'purple':
      return 'bg-purple-500/10';
    case 'silver':
      return 'bg-gray-400/10';
    case 'none':
    default:
      return 'bg-gray-300/10';
  }
};

// Get mock team data
export const getMockTeam = (teamColor: TeamColor): TeamData => {
  return {
    id: teamColor,
    name: getTeamName(teamColor),
    description: `The mighty ${getTeamName(teamColor)} team, known throughout the kingdom.`,
    color: teamColor,
    memberCount: Math.floor(Math.random() * 100) + 50,
    leaderUsername: `${teamColor}Leader`,
    logo: `/assets/teams/${teamColor}.png`,
    slogan: `Glory to the ${getTeamName(teamColor)}!`,
    rankBonusMultiplier: 1.5,
    totalContribution: Math.floor(Math.random() * 10000) + 5000,
    totalSpent: Math.floor(Math.random() * 10000) + 5000,
    rank: Math.floor(Math.random() * 5) + 1,
  };
};
