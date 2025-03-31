
import { useMemo } from 'react';
import { TeamColor, TeamType, TeamData, TeamTheme } from '@/types/team';
import teamService from '@/services/TeamService';

/**
 * Custom hook for team-related functionality
 * This provides a convenient way to access team data in components
 */
export const useTeam = (teamId?: TeamType | TeamColor) => {
  // Memoize team data to prevent unnecessary recalculations
  const team = useMemo(() => {
    if (teamId) {
      return teamService.getTeam(teamId);
    }
    return null;
  }, [teamId]);

  // Memoize team theme to prevent unnecessary recalculations
  const theme = useMemo(() => {
    if (teamId) {
      return teamService.getTeamTheme(teamId);
    }
    return null;
  }, [teamId]);

  // Get all teams
  const allTeams = useMemo(() => teamService.getAllTeams(), []);

  return {
    team,
    theme,
    allTeams,
    // Utility methods
    getTeam: teamService.getTeam.bind(teamService),
    getTeamName: teamService.getTeamName.bind(teamService),
    getTeamColor: teamService.getTeamColor.bind(teamService),
    getTeamMotto: teamService.getTeamMotto.bind(teamService),
    getTeamBenefit: teamService.getTeamBenefit.bind(teamService),
    getTeamTheme: teamService.getTeamTheme.bind(teamService)
  };
};

export default useTeam;
