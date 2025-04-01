
import { TeamColor, TeamType, TeamData, TeamTheme } from '@/types/team';
import { teams, getTeamById } from '@/data/teamData';

/**
 * TeamService - Service class that handles all team-related operations
 * Following Single Responsibility Principle, this class is responsible for team data operations only
 */
class TeamService {
  /**
   * Get team data by team identifier
   */
  public getTeam(team: TeamType | TeamColor): TeamData {
    return getTeamById(team as TeamColor);
  }

  /**
   * Get team color (CSS color code)
   */
  public getTeamColor(team: TeamType | TeamColor): string {
    return this.getTeam(team).color;
  }

  /**
   * Get team name
   */
  public getTeamName(team: TeamType | TeamColor): string {
    return this.getTeam(team).name;
  }

  /**
   * Get team motto
   */
  public getTeamMotto(team: TeamType | TeamColor): string {
    return this.getTeam(team).motto;
  }

  /**
   * Get team benefits
   */
  public getTeamBenefit(team: TeamType | TeamColor): string[] {
    return this.getTeam(team).benefits;
  }

  /**
   * Get team security guarantee
   */
  public getTeamSecurityGuarantee(team: TeamType | TeamColor): string {
    return this.getTeam(team).securityGuarantee;
  }

  /**
   * Get team absurd statistic
   */
  public getTeamAbsurdStat(team: TeamType | TeamColor): string {
    return this.getTeam(team).absurdStat;
  }

  /**
   * Get team historical note
   */
  public getTeamHistoricalNote(team: TeamType | TeamColor): string {
    return this.getTeam(team).historicalNote;
  }

  /**
   * Get team NFT joke
   */
  public getTeamNFTJoke(team: TeamType | TeamColor): string {
    return this.getTeam(team).nftJoke;
  }

  /**
   * Get team crypto roast
   */
  public getTeamCryptoRoast(team: TeamType | TeamColor): string {
    return this.getTeam(team).cryptoRoast;
  }

  /**
   * Get complete theme object for a team
   */
  public getTeamTheme(team: TeamType | TeamColor): TeamTheme {
    const color = this.getTeamColor(team);
    
    // Create a themed set of colors based on the team's primary color
    return {
      primary: color,
      secondary: this.adjustColor(color, 0.8),
      accent: this.adjustColor(color, 1.2),
      text: this.isLightColor(color) ? '#1f2937' : '#f9fafb',
      border: this.adjustColor(color, 0.7),
      background: this.adjustColor(color, 0.1)
    };
  }

  /**
   * Check if all teams have valid data
   * This is useful for testing
   */
  public validateTeamData(): boolean {
    const requiredFields = [
      'name', 'motto', 'color', 'benefits', 
      'securityGuarantee', 'absurdStat', 'historicalNote', 
      'nftJoke', 'cryptoRoast'
    ];

    for (const teamId in teams) {
      const team = teams[teamId as TeamColor];
      
      // Check if all required fields are present
      for (const field of requiredFields) {
        if (!team[field as keyof TeamData]) {
          console.error(`Team ${teamId} is missing ${field}`);
          return false;
        }
      }
      
      // Check if benefits is an array with items
      if (!Array.isArray(team.benefits) || team.benefits.length === 0) {
        console.error(`Team ${teamId} benefits should be a non-empty array`);
        return false;
      }
    }
    
    return true;
  }

  /**
   * Get all available teams
   */
  public getAllTeams(): TeamData[] {
    return Object.values(teams);
  }

  /**
   * Utility method to adjust a color's brightness
   * @param hexColor Hex color code
   * @param factor Factor to adjust brightness (>1 for lighter, <1 for darker)
   */
  private adjustColor(hexColor: string, factor: number): string {
    // Remove the hash
    hexColor = hexColor.replace('#', '');
    
    // Parse the hex values
    let r = parseInt(hexColor.substring(0, 2), 16);
    let g = parseInt(hexColor.substring(2, 4), 16);
    let b = parseInt(hexColor.substring(4, 6), 16);
    
    // Adjust the brightness
    r = Math.min(255, Math.max(0, Math.round(r * factor)));
    g = Math.min(255, Math.max(0, Math.round(g * factor)));
    b = Math.min(255, Math.max(0, Math.round(b * factor)));
    
    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  /**
   * Determine if a color is light or dark
   * @param hexColor Hex color code
   */
  private isLightColor(hexColor: string): boolean {
    // Remove the hash
    hexColor = hexColor.replace('#', '');
    
    // Parse the hex values
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    
    // Calculate perceived brightness
    // Formula: (0.299*R + 0.587*G + 0.114*B)
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return brightness > 0.5;
  }
}

// Create a singleton instance
const teamService = new TeamService();

export { teamService };
export default teamService;
