
import { Team } from '@/types/user';
import { TeamColor } from '@/types/team';

// Mock team data for development
const teams: Team[] = [
  {
    id: '1',
    name: 'Red Team',
    color: 'red',
    members: 120,
    leader: 'redLeader',
    totalSpent: 50000,
    rank: 1,
    description: 'The fierce Red Team, known for their aggressive spending strategy.'
  },
  {
    id: '2',
    name: 'Blue Team',
    color: 'blue',
    members: 110,
    leader: 'blueLeader',
    totalSpent: 45000,
    rank: 2,
    description: 'The strategic Blue Team, always planning their spending carefully.'
  },
  {
    id: '3',
    name: 'Green Team',
    color: 'green',
    members: 95,
    leader: 'greenLeader',
    totalSpent: 40000,
    rank: 3,
    description: 'The growth-focused Green Team, steadily rising through the ranks.'
  },
  {
    id: '4',
    name: 'Gold Team',
    color: 'gold',
    members: 60,
    leader: 'goldLeader',
    totalSpent: 35000,
    rank: 4,
    description: 'The exclusive Gold Team, with the highest spending per member.'
  }
];

// Get all teams
export const getTeams = async (): Promise<Team[]> => {
  return teams;
};

// Get team by ID
export const getTeamById = async (id: string): Promise<Team | null> => {
  const team = teams.find(t => t.id === id);
  return team || null;
};

// Get team by color
export const getTeamByColor = async (color: TeamColor): Promise<Team | null> => {
  const team = teams.find(t => t.color === color);
  return team || null;
};

// Default export for tests
export default {
  getTeams,
  getTeamById,
  getTeamByColor
};
