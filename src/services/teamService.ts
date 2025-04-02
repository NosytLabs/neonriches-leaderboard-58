
/**
 * Team service provides functionality for team management
 */
import { TeamColor } from '@/types/team';

// Define interfaces for domain entities
export interface Team {
  id: string;
  name: string;
  description?: string;
  color: TeamColor;
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

// Team service with methods implementing single responsibility
class TeamService {
  /**
   * Get all available teams
   * @returns Promise with all teams
   */
  getAllTeams = (): Promise<Team[]> => {
    return Promise.resolve(MOCK_TEAMS);
  };

  /**
   * Get a team by ID
   * @param id Team identifier
   * @returns Promise with team or null if not found
   */
  getTeamById = (id: string): Promise<Team | null> => {
    const team = MOCK_TEAMS.find(team => team.id === id) || null;
    return Promise.resolve(team);
  };

  /**
   * Get the top team by total spending
   * @returns Promise with the top spending team
   */
  getTopTeam = (): Promise<Team> => {
    const sortedTeams = [...MOCK_TEAMS].sort((a, b) => b.totalSpent - a.totalSpent);
    return Promise.resolve(sortedTeams[0]);
  };

  /**
   * Get team color string
   * @param team Team color identifier
   * @returns CSS color class
   */
  getTeamColor = (team: TeamColor | string): string => {
    switch(team) {
      case 'red': return 'text-red-500';
      case 'green': return 'text-green-500';
      case 'blue': return 'text-blue-500';
      default: return 'text-white/60';
    }
  };

  /**
   * Get full team name
   * @param team Team color identifier
   * @returns Full team name
   */
  getTeamName = (team: TeamColor | string): string => {
    switch(team) {
      case 'red': return 'Red Team';
      case 'green': return 'Green Team';
      case 'blue': return 'Blue Team';
      default: return 'No Team';
    }
  };

  /**
   * Get team motto
   * @param team Team color identifier
   * @returns Team motto
   */
  getTeamMotto = (team: TeamColor | string): string => {
    switch(team) {
      case 'red': return 'Glory through Spending!';
      case 'green': return 'Wealth is Power!';
      case 'blue': return 'Strategic Extravagance!';
      default: return 'Choose your path to glory!';
    }
  };

  /**
   * Get team benefits
   * @param team Team color identifier
   * @returns Array of team benefits
   */
  getTeamBenefits = (team: TeamColor | string): string[] => {
    const benefits: Record<string, string[]> = {
      red: [
        "20% bonus on direct deposits",
        "Exclusive crimson profile frames",
        "Access to special fire-themed effects"
      ],
      green: [
        "15% discount on profile boosts",
        "Nature-themed custom emojis",
        "Emerald crown cosmetic item"
      ],
      blue: [
        "5% royalty on team member spending",
        "Sapphire profile decorations",
        "Water-themed animation effects"
      ]
    };
    
    return benefits[team as string] || ["Unknown benefit"];
  };
}

// Create a singleton instance of the service
const teamService = new TeamService();

export default teamService;
