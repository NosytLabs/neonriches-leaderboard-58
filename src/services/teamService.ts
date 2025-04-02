
import { TeamColor } from '@/types/mockery-types';

class TeamService {
  private teamColors: Record<TeamColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-400',
    purple: 'text-purple-500',
    none: 'text-gray-400',
    neutral: 'text-slate-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    crimson: 'text-red-700'
  };

  private teamNames: Record<TeamColor, string> = {
    red: 'Red Team',
    blue: 'Blue Team',
    green: 'Green Team',
    gold: 'Gold Team',
    purple: 'Purple Team',
    none: 'No Team',
    neutral: 'Neutral',
    silver: 'Silver Team',
    bronze: 'Bronze Team',
    crimson: 'Crimson Team'
  };

  private teamMottos: Record<TeamColor, string> = {
    red: 'Fire and Passion!',
    blue: 'Calm and Determined!',
    green: 'Growth and Prosperity!',
    gold: 'Wealth and Glory!',
    purple: 'Royalty and Power!',
    none: 'Independent and Free!',
    neutral: 'Balanced and Fair!',
    silver: 'Swift and Clever!',
    bronze: 'Strong and Steadfast!',
    crimson: 'Bold and Fearless!'
  };

  getTeamColor(team: TeamColor): string {
    return this.teamColors[team] || 'text-gray-400';
  }

  getTeamName(team: TeamColor): string {
    return this.teamNames[team] || 'Unknown Team';
  }

  getTeamMotto(team: TeamColor): string {
    return this.teamMottos[team] || 'Join a team today!';
  }

  getTeamBenefits(team: TeamColor): string[] {
    const commonBenefits = ['Team profile badge', 'Team chat access', 'Team leaderboard'];
    
    const specificBenefits: Record<TeamColor, string[]> = {
      red: ['5% bonus on deposits', 'Red-themed profile items', 'Fire effects'],
      blue: ['Bonus profile visibility', 'Blue-themed profile items', 'Water effects'],
      green: ['10% discount on purchases', 'Green-themed profile items', 'Nature effects'],
      gold: ['Royal profile decorations', 'Gold-themed profile items', 'Sparkle effects'],
      purple: ['Exclusive profile badges', 'Purple-themed profile items', 'Magic effects'],
      silver: ['Fast transaction speed', 'Silver-themed profile items', 'Speed effects'],
      bronze: ['Strength boosts', 'Bronze-themed profile items', 'Armor effects'],
      crimson: ['Attack bonuses', 'Crimson-themed profile items', 'Blood effects'],
      neutral: ['Balance bonuses', 'Neutral-themed profile items', 'Zen effects'],
      none: ['Full independence', 'No team restrictions', 'Freedom to choose']
    };
    
    return [...commonBenefits, ...(specificBenefits[team] || [])];
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
