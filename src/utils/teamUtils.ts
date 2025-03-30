
import { Team } from '@/types/user';

// Get color class for a team
export const getTeamColor = (team: Team | string | null | undefined): string => {
  if (!team) return 'text-gray-400';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-400';
  }
};

// Get background color class for a team
export const getTeamBgColor = (team: Team | string | null | undefined): string => {
  if (!team) return 'bg-gray-800';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'bg-red-500/10';
    case 'green':
      return 'bg-green-500/10';
    case 'blue':
      return 'bg-blue-500/10';
    default:
      return 'bg-gray-800';
  }
};

// Get border color class for a team
export const getTeamBorderColor = (team: Team | string | null | undefined): string => {
  if (!team) return 'border-gray-800';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'border-red-500/30';
    case 'green':
      return 'border-green-500/30';
    case 'blue':
      return 'border-blue-500/30';
    default:
      return 'border-gray-800';
  }
};

// Get team name from key
export const getTeamName = (team: Team | string | null | undefined): string => {
  if (!team) return 'No Team';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'Red Team';
    case 'green':
      return 'Green Team';
    case 'blue':
      return 'Blue Team';
    default:
      return 'Unknown Team';
  }
};

// Get all available teams
export const getAllTeams = (): Team[] => {
  return ['red', 'green', 'blue'];
};

// Validate and normalize team value
export const validateTeam = (team: any): Team | null => {
  if (!team) return null;
  
  const normalizedTeam = String(team).toLowerCase();
  
  switch (normalizedTeam) {
    case 'red':
    case 'crimson':
    case 'ruby':
      return 'red';
    case 'green':
    case 'emerald':
    case 'jade':
      return 'green';
    case 'blue':
    case 'azure':
    case 'sapphire':
      return 'blue';
    default:
      return null;
  }
};
