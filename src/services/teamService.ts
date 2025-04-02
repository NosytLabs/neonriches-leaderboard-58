
/**
 * Team service provides functionality for team management
 */

export interface Team {
  id: string;
  name: string;
  description?: string;
  color: string;
  memberCount: number;
  totalSpent: number;
}

// Mock teams data - in a real app this would come from API
const MOCK_TEAMS: Team[] = [
  {
    id: 'red-team',
    name: 'Red Team',
    description: 'The team of passion and fire',
    color: 'red',
    memberCount: 156,
    totalSpent: 12400000
  },
  {
    id: 'green-team',
    name: 'Green Team',
    description: 'The team of growth and prosperity',
    color: 'green',
    memberCount: 142,
    totalSpent: 11800000
  },
  {
    id: 'blue-team',
    name: 'Blue Team',
    description: 'The team of calm and wisdom',
    color: 'blue',
    memberCount: 168,
    totalSpent: 13100000
  }
];

/**
 * Get all available teams
 */
const getAllTeams = (): Promise<Team[]> => {
  return Promise.resolve(MOCK_TEAMS);
};

/**
 * Get a team by ID
 */
const getTeamById = (id: string): Promise<Team | null> => {
  const team = MOCK_TEAMS.find(team => team.id === id) || null;
  return Promise.resolve(team);
};

/**
 * Get the top team by total spending
 */
const getTopTeam = (): Promise<Team> => {
  const sortedTeams = [...MOCK_TEAMS].sort((a, b) => b.totalSpent - a.totalSpent);
  return Promise.resolve(sortedTeams[0]);
};

const teamService = {
  getAllTeams,
  getTeamById,
  getTopTeam
};

export default teamService;
