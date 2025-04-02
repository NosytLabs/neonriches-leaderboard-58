
import { TeamColor } from '@/types/team';

/**
 * Get team details by ID
 */
export const getTeamDetails = (teamId: TeamColor) => {
  const teams = {
    red: {
      name: 'Red Team',
      description: 'The most competitive and aggressive team.',
      color: 'red',
      icon: 'fire',
      memberCount: 1245,
      totalSpent: 2345000
    },
    blue: {
      name: 'Blue Team',
      description: 'The most strategic and loyal team.',
      color: 'blue',
      icon: 'shield',
      memberCount: 1568,
      totalSpent: 1987000
    },
    green: {
      name: 'Green Team',
      description: 'The most resourceful and collaborative team.',
      color: 'green',
      icon: 'leaf',
      memberCount: 987,
      totalSpent: 1456000
    },
    gold: {
      name: 'Gold Team',
      description: 'The most elite and exclusive team.',
      color: 'gold',
      icon: 'crown',
      memberCount: 345,
      totalSpent: 3678000
    },
    purple: {
      name: 'Purple Team',
      description: 'The most creative and innovative team.',
      color: 'purple',
      icon: 'star',
      memberCount: 567,
      totalSpent: 980000
    },
    silver: {
      name: 'Silver Team',
      description: 'The most balanced and steady team.',
      color: 'silver',
      icon: 'moon',
      memberCount: 789,
      totalSpent: 1230000
    },
    bronze: {
      name: 'Bronze Team',
      description: 'The most determined and resilient team.',
      color: 'bronze',
      icon: 'hammer',
      memberCount: 1002,
      totalSpent: 890000
    },
    neutral: {
      name: 'Neutral',
      description: 'No team affiliation.',
      color: 'gray',
      icon: 'user',
      memberCount: 3456,
      totalSpent: 560000
    },
    none: {
      name: 'No Team',
      description: 'No team affiliation.',
      color: 'gray',
      icon: 'user',
      memberCount: 450,
      totalSpent: 120000
    },
    crimson: {
      name: 'Crimson Team',
      description: 'The most ruthless and unforgiving team.',
      color: 'crimson',
      icon: 'skull',
      memberCount: 666,
      totalSpent: 1500000
    }
  };
  
  return teams[teamId] || teams.none;
};

/**
 * Get the current team rankings
 */
export const getTeamRankings = () => {
  return [
    { team: 'gold', rank: 1, totalSpent: 3678000, memberCount: 345 },
    { team: 'red', rank: 2, totalSpent: 2345000, memberCount: 1245 },
    { team: 'blue', rank: 3, totalSpent: 1987000, memberCount: 1568 },
    { team: 'green', rank: 4, totalSpent: 1456000, memberCount: 987 },
    { team: 'silver', rank: 5, totalSpent: 1230000, memberCount: 789 },
    { team: 'purple', rank: 6, totalSpent: 980000, memberCount: 567 },
    { team: 'bronze', rank: 7, totalSpent: 890000, memberCount: 1002 },
    { team: 'neutral', rank: 8, totalSpent: 560000, memberCount: 3456 },
    { team: 'none', rank: 9, totalSpent: 120000, memberCount: 450 }
  ];
};

/**
 * Switch a user's team
 */
export const switchTeam = async (userId: string, team: TeamColor) => {
  console.log(`Switching user ${userId} to team ${team}`);
  // Mock implementation
  return {
    success: true,
    team
  };
};

// Add missing functions required by imports.ts
export const getAllTeams = (): TeamColor[] => {
  return ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'crimson', 'neutral', 'none'];
};

export const getTeamById = (id: string) => {
  // Mock implementation
  const teams = [
    { id: 'team-1', color: 'red', name: 'Red Team' },
    { id: 'team-2', color: 'blue', name: 'Blue Team' },
    { id: 'team-3', color: 'green', name: 'Green Team' }
  ];
  return teams.find(team => team.id === id) || null;
};

export const getTeamByColor = (color: string) => {
  // Mock implementation
  const teams = [
    { id: 'team-1', color: 'red', name: 'Red Team' },
    { id: 'team-2', color: 'blue', name: 'Blue Team' },
    { id: 'team-3', color: 'green', name: 'Green Team' }
  ];
  return teams.find(team => team.color === color) || null;
};

// Default export for compatibility with tests
export default {
  getTeamDetails,
  getTeamRankings,
  switchTeam,
  getAllTeams,
  getTeamById,
  getTeamByColor
};
