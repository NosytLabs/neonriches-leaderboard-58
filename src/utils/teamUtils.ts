
import { Team } from '@/types/team';

/**
 * Get team colors based on team name
 */
export const getTeamColors = (teamName: string): { primary: string; secondary: string } => {
  switch (teamName.toLowerCase()) {
    case 'red':
      return { primary: 'rgb(220, 38, 38)', secondary: 'rgb(254, 202, 202)' };
    case 'blue':
      return { primary: 'rgb(37, 99, 235)', secondary: 'rgb(191, 219, 254)' };
    case 'green':
      return { primary: 'rgb(22, 163, 74)', secondary: 'rgb(187, 247, 208)' };
    case 'gold':
      return { primary: 'rgb(217, 119, 6)', secondary: 'rgb(253, 230, 138)' };
    case 'purple':
      return { primary: 'rgb(124, 58, 237)', secondary: 'rgb(221, 214, 254)' };
    default:
      return { primary: 'rgb(156, 163, 175)', secondary: 'rgb(229, 231, 235)' };
  }
};

/**
 * Convert team name to noble house name
 */
export const getNobleHouseName = (teamName: string): string => {
  switch (teamName.toLowerCase()) {
    case 'red':
      return 'House Crimson';
    case 'blue':
      return 'House Azure';
    case 'green':
      return 'House Emerald';
    case 'gold':
      return 'House Aurum';
    case 'purple':
      return 'House Violet';
    default:
      return 'House Neutral';
  }
};

/**
 * Get all available teams
 */
export const getAllTeams = (): Team[] => {
  return [
    {
      id: 'red',
      name: 'Red',
      nobleHouse: 'House Crimson',
      description: 'Warriors of flame and passion, always charging ahead',
      members: 124,
      totalSpent: 48750,
      rank: 1,
      color: 'rgb(220, 38, 38)'
    },
    {
      id: 'blue',
      name: 'Blue',
      nobleHouse: 'House Azure',
      description: 'Strategic thinkers who value wisdom and patience',
      members: 98,
      totalSpent: 37200,
      rank: 2,
      color: 'rgb(37, 99, 235)'
    },
    {
      id: 'green',
      name: 'Green',
      nobleHouse: 'House Emerald',
      description: 'Prosperous and growth-oriented, always investing wisely',
      members: 76,
      totalSpent: 29500,
      rank: 3,
      color: 'rgb(22, 163, 74)'
    },
    {
      id: 'gold',
      name: 'Gold',
      nobleHouse: 'House Aurum',
      description: 'The wealthiest house, known for extravagance and luxury',
      members: 45,
      totalSpent: 19800,
      rank: 4,
      color: 'rgb(217, 119, 6)'
    },
    {
      id: 'purple',
      name: 'Purple',
      nobleHouse: 'House Violet',
      description: 'Mysterious and magical, devoted to secret knowledge',
      members: 67,
      totalSpent: 24300,
      rank: 5,
      color: 'rgb(124, 58, 237)'
    }
  ];
};

/**
 * Get team by ID
 */
export const getTeamById = (teamId: string): Team | undefined => {
  return getAllTeams().find(team => team.id === teamId);
};

export default {
  getTeamColors,
  getNobleHouseName,
  getAllTeams,
  getTeamById
};
