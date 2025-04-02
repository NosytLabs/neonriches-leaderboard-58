
import { TeamColor } from '@/types/mockery-types';
import { getTeamColor, getTeamName, getTeamMotto, getTeamBenefits } from '@/utils/teamUtils';

class TeamService {
  getTeamColor(team: TeamColor): string {
    return getTeamColor(team);
  }

  getTeamName(team: TeamColor): string {
    return getTeamName(team);
  }

  getTeamMotto(team: TeamColor): string {
    return getTeamMotto(team);
  }

  getTeamBenefits(team: TeamColor): string[] {
    return getTeamBenefits(team);
  }

  getTeamMembers(team: TeamColor): Promise<string[]> {
    // Mock implementation - would connect to API in real app
    return Promise.resolve(['user1', 'user2', 'user3']);
  }

  getTeamRank(team: TeamColor): Promise<number> {
    // Mock implementation - would connect to API in real app
    const mockRanks: Record<TeamColor, number> = {
      red: 3,
      blue: 2,
      green: 4,
      gold: 1,
      purple: 5,
      silver: 6,
      bronze: 7,
      crimson: 8,
      neutral: 9,
      none: 10
    };
    
    return Promise.resolve(mockRanks[team] || 0);
  }

  getAllTeams(): TeamColor[] {
    return ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'crimson', 'neutral', 'none'];
  }

  getTeamById(id: string): any {
    // Mock implementation
    const teams = [
      { id: 'team-1', color: 'red', name: 'Red Team' },
      { id: 'team-2', color: 'blue', name: 'Blue Team' },
      { id: 'team-3', color: 'green', name: 'Green Team' }
    ];
    return teams.find(team => team.id === id) || null;
  }

  getTeamByColor(color: string): any {
    // Mock implementation
    const teams = [
      { id: 'team-1', color: 'red', name: 'Red Team' },
      { id: 'team-2', color: 'blue', name: 'Blue Team' },
      { id: 'team-3', color: 'green', name: 'Green Team' }
    ];
    return teams.find(team => team.color === color) || null;
  }
}

// Create singleton instance
const teamService = new TeamService();

// Export default and named export
export default teamService;
export { teamService };
