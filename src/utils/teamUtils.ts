
import { TeamColor, TeamType } from '@/types/team';
import { TeamData } from '@/types/team';

// Convert string to TeamColor safely
export const toTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  const normalizedTeam = String(team).toLowerCase();
  
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
    case 'none': return 'none';
    default: return 'none';
  }
};

// Alias for toTeamColor for backward compatibility
export const asTeamColor = toTeamColor;

// Get team name from TeamColor
export const getTeamName = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team);
  
  const teamNames: Record<TeamColor, string> = {
    red: 'Red Crown',
    blue: 'Blue Legion',
    green: 'Green Order',
    gold: 'Gold Dynasty',
    purple: 'Purple Realm',
    silver: 'Silver Alliance',
    bronze: 'Bronze Brigade',
    crimson: 'Crimson Court',
    neutral: 'Neutral Party',
    none: 'No Team'
  };
  
  return teamNames[teamColor] || 'Unknown Team';
};

// Get CSS color class for a team
export const getTeamColor = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team);
  
  const colorMap: Record<TeamColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-500',
    purple: 'text-purple-500',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    crimson: 'text-rose-600',
    neutral: 'text-gray-400',
    none: 'text-gray-400'
  };
  
  return colorMap[teamColor] || 'text-gray-400';
};

// Get CSS background color class for a team
export const getTeamTailwindBgColor = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team);
  
  const bgColorMap: Record<TeamColor, string> = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gold: 'border-yellow-500',
    purple: 'border-purple-500',
    silver: 'border-gray-300',
    bronze: 'border-amber-600',
    crimson: 'border-rose-600',
    neutral: 'border-gray-400',
    none: 'border-gray-400'
  };
  
  return bgColorMap[teamColor] || 'border-gray-400';
};

// Get tailwind color class for a team
export const getTeamTailwindColor = (team: TeamColor | string): string => {
  const teamColor = toTeamColor(team);
  
  const colorMap: Record<TeamColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-500',
    purple: 'text-purple-500',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    crimson: 'text-rose-600',
    neutral: 'text-gray-400',
    none: 'text-gray-400'
  };
  
  return colorMap[teamColor] || 'text-gray-400';
};

// Create a mock team data object
export const createTeamData = (color: TeamColor | string): TeamData => {
  const teamColor = toTeamColor(color);
  const teamName = getTeamName(teamColor);
  
  return {
    id: teamColor,
    name: teamName,
    description: `The ${teamName} is a prestigious faction in the royal court.`,
    color: teamColor,
    memberCount: Math.floor(Math.random() * 1000) + 500,
    totalContribution: Math.floor(Math.random() * 1000000) + 500000,
    rank: Math.floor(Math.random() * 5) + 1,
    motto: `Glory to the ${teamName}!`,
    icon: teamColor.toLowerCase()
  };
};

// Add ID to team if missing
export const addTeamId = (team: TeamData): TeamData & { id: string } => {
  return {
    ...team,
    id: team.id || team.color
  };
};

// Export a safety method for validation
export const isValidTeamColor = (color: string): boolean => {
  return ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'crimson', 'neutral', 'none'].includes(color.toLowerCase());
};
