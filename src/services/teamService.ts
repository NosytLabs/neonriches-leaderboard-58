
import { TeamColor } from '@/types/team';
import { teamNames, teamMottos, teamTaglines, teamMascots, teamValues } from '@/utils/team/teamInfo';
import { teamLore, teamHistory } from '@/utils/team/teamLore';
import { teamColors, teamHexColors } from '@/utils/team/teamColors';
import { teamBenefits, teamDescriptions } from '@/utils/team/teamBenefits';

/**
 * Service for handling team-related functionality
 */
class TeamService {
  /**
   * Get all available teams
   * @returns Array of team colors
   */
  getAllTeams(): TeamColor[] {
    return ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'];
  }

  /**
   * Get the display name for a team
   * @param team - Team color identifier
   * @returns The display name for the team
   */
  getTeamName(team: TeamColor): string {
    return teamNames[team] || 'Unknown Team';
  }

  /**
   * Get the color hex code for a team
   * @param team - Team color identifier
   * @returns The color hex code
   */
  getTeamColor(team: TeamColor): string {
    return teamColors[team] || '#AAAAAA';
  }

  /**
   * Get the hex color for a team
   * @param team - Team color identifier
   * @returns The hex color code
   */
  getTeamHexColor(team: TeamColor): string {
    return teamHexColors[team] || '#AAAAAA';
  }

  /**
   * Get the motto for a team
   * @param team - Team color identifier
   * @returns The team motto
   */
  getTeamMotto(team: TeamColor): string {
    return teamMottos[team] || 'Unknown Motto';
  }

  /**
   * Get the benefits for a team
   * @param team - Team color identifier
   * @returns Array of team benefits
   */
  getTeamBenefits(team: TeamColor): string[] {
    return teamBenefits[team] || [];
  }

  /**
   * Get the lore for a team
   * @param team - Team color identifier
   * @returns The team lore
   */
  getTeamLore(team: TeamColor): string {
    return teamLore[team] || 'No lore available';
  }

  /**
   * Get the theme for a team
   * @param team - Team color identifier
   * @returns The team theme object
   */
  getTeamTheme(team: TeamColor): any {
    // Define team-specific themes
    const themes: Record<TeamColor, any> = {
      red: {
        primary: '#FF4136',
        secondary: '#DC3545',
        accent: '#FF6B6B',
        text: '#FFFFFF',
        border: '#FF6B6B',
        background: '#2D0A0A',
        backgroundSecondary: '#3D1515',
        hoverBg: '#4D1515',
        activeBg: '#5D1515'
      },
      blue: {
        primary: '#0074D9',
        secondary: '#1E88E5',
        accent: '#64B5F6',
        text: '#FFFFFF',
        border: '#64B5F6',
        background: '#0A192F',
        backgroundSecondary: '#152238',
        hoverBg: '#1A2A4A',
        activeBg: '#1F3256'
      },
      green: {
        primary: '#2ECC40',
        secondary: '#4CAF50',
        accent: '#81C784',
        text: '#FFFFFF',
        border: '#81C784',
        background: '#0F2A1A',
        backgroundSecondary: '#1A3828',
        hoverBg: '#1F4330',
        activeBg: '#285038'
      },
      gold: {
        primary: '#FFDC00',
        secondary: '#FFC107',
        accent: '#FFD54F',
        text: '#212121',
        border: '#FFD54F',
        background: '#2A2000',
        backgroundSecondary: '#382A0A',
        hoverBg: '#453615',
        activeBg: '#524020'
      },
      purple: {
        primary: '#B10DC9',
        secondary: '#9C27B0',
        accent: '#BA68C8',
        text: '#FFFFFF',
        border: '#BA68C8',
        background: '#1E0A29',
        backgroundSecondary: '#2A1238',
        hoverBg: '#351547',
        activeBg: '#421956'
      },
      none: {
        primary: '#85144b',
        secondary: '#E91E63',
        accent: '#F06292',
        text: '#FFFFFF',
        border: '#F06292',
        background: '#1A0914',
        backgroundSecondary: '#2A1020',
        hoverBg: '#3A162C',
        activeBg: '#4A1C38'
      },
      neutral: {
        primary: '#AAAAAA',
        secondary: '#9E9E9E',
        accent: '#BDBDBD',
        text: '#FFFFFF',
        border: '#BDBDBD',
        background: '#1F1F1F',
        backgroundSecondary: '#2A2A2A',
        hoverBg: '#353535',
        activeBg: '#404040'
      },
      silver: {
        primary: '#C0C0C0',
        secondary: '#BDBDBD',
        accent: '#E0E0E0',
        text: '#212121',
        border: '#E0E0E0',
        background: '#2A2A2A',
        backgroundSecondary: '#353535',
        hoverBg: '#404040',
        activeBg: '#4A4A4A'
      },
      bronze: {
        primary: '#CD7F32',
        secondary: '#BF8040',
        accent: '#D2A76F',
        text: '#FFFFFF',
        border: '#D2A76F',
        background: '#2A1F0A',
        backgroundSecondary: '#352815',
        hoverBg: '#40311C',
        activeBg: '#4A3923'
      }
    };

    return themes[team] || themes.neutral;
  }
}

export const teamService = new TeamService();

// For compatibility with default imports
export default teamService;
