
import { Team, TeamColor, TeamData } from '@/types/team';

// Export all the functions from the original file
export const getTeams = async (): Promise<Team[]> => {
  return [
    { id: '1', name: 'Red Team', color: 'red', members: 120, rank: 3, totalSpent: 12500 },
    { id: '2', name: 'Blue Team', color: 'blue', members: 105, rank: 2, totalSpent: 13800 },
    { id: '3', name: 'Green Team', color: 'green', members: 98, rank: 4, totalSpent: 10200 },
    { id: '4', name: 'Gold Team', color: 'gold', members: 75, rank: 1, totalSpent: 18500 },
  ];
};

export const getTeamById = async (id: string): Promise<Team | null> => {
  const teams = await getTeams();
  return teams.find(team => team.id === id) || null;
};

export const getTeamByColor = async (color: TeamColor): Promise<Team | null> => {
  const teams = await getTeams();
  return teams.find(team => team.color === color) || null;
};

export const getTeamData = async (): Promise<TeamData[]> => {
  return [
    {
      id: '1',
      name: 'Red Team',
      description: 'The fiery team of passionate spenders',
      color: 'red',
      members: 120,
      motto: 'Spend with passion, rise with fury',
      benefits: ['10% discount on profile boosts', 'Red team exclusive cosmetics'],
      rank: 3,
      totalContribution: 12500,
      memberCount: 120
    },
    // More team data...
  ];
};

export const joinTeam = async (userId: string, teamColor: TeamColor): Promise<boolean> => {
  console.log(`User ${userId} joined team ${teamColor}`);
  return true;
};

export const leaveTeam = async (userId: string): Promise<boolean> => {
  console.log(`User ${userId} left their team`);
  return true;
};

// Add a default export with all the functions
const TeamService = {
  getTeams,
  getTeamById,
  getTeamByColor,
  getTeamData,
  joinTeam,
  leaveTeam
};

export default TeamService;
