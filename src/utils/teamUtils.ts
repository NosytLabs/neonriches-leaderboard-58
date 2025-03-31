
import { TeamColor, TeamType } from '@/types/team';
import teamService from '@/services/TeamService';

/**
 * Team color utility functions
 * This file maintains the original API for backward compatibility
 * It delegates all actual logic to the TeamService
 */
export const getTeamColor = (team: TeamType | TeamColor): string => {
  return teamService.getTeamColor(team);
};

// Alias for getTeamColor to support existing code
export const getTeamBorderColor = getTeamColor;

export const getTeamName = (team: TeamType | TeamColor): string => {
  return teamService.getTeamName(team);
};

export const getTeamMotto = (team: TeamType | TeamColor): string => {
  return teamService.getTeamMotto(team);
};

export const getTeamBenefit = (team: TeamType | TeamColor): string[] => {
  return teamService.getTeamBenefit(team);
};

export const getTeamSecurityGuarantee = (team: TeamType | TeamColor): string => {
  return teamService.getTeamSecurityGuarantee(team);
};

export const getTeamAbsurdStat = (team: TeamType | TeamColor): string => {
  return teamService.getTeamAbsurdStat(team);
};

export const getTeamHistoricalNote = (team: TeamType | TeamColor): string => {
  return teamService.getTeamHistoricalNote(team);
};

export const getTeamNFTJoke = (team: TeamType | TeamColor): string => {
  return teamService.getTeamNFTJoke(team);
};

export const getTeamCryptoRoast = (team: TeamType | TeamColor): string => {
  return teamService.getTeamCryptoRoast(team);
};

// Additional utility functions that leverage TeamService
export const getTeamTheme = (team: TeamType | TeamColor) => {
  return teamService.getTeamTheme(team);
};

export const getAllTeams = () => {
  return teamService.getAllTeams();
};
