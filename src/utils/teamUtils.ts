
import { TeamColor } from '@/types/team';
import { teamColors, teamTailwindColors, teamTailwindBgColors } from './team/teamColors';
import { teamNames } from './team/teamInfo';
import { teamMottos } from './team/teamInfo';
import { teamBenefits } from './team/teamBenefits';
import { toTeamColor } from './typeConverters';

/**
 * Alias for toTeamColor from typeConverters for better semantic meaning
 */
export const asTeamColor = toTeamColor;

/**
 * Get the display name for a team
 * @param team - The team color identifier
 * @returns The display name for the team
 */
export const getTeamName = (team: TeamColor | string): string => {
  const normalizedTeam = asTeamColor(team);
  return teamNames[normalizedTeam] || 'Unknown Team';
};

/**
 * Get the color for a team
 * @param team - The team color identifier
 * @returns The color hex code for the team
 */
export const getTeamColor = (team: TeamColor | string): string => {
  const normalizedTeam = asTeamColor(team);
  return teamColors[normalizedTeam] || '#AAAAAA';
};

/**
 * Get the Tailwind CSS color class for a team
 * @param team - The team color identifier
 * @returns The Tailwind color class for the team
 */
export const getTeamTailwindColor = (team: TeamColor | string): string => {
  const normalizedTeam = asTeamColor(team);
  return teamTailwindColors[normalizedTeam] || 'text-gray-500';
};

/**
 * Get the Tailwind CSS background color class for a team
 * @param team - The team color identifier
 * @returns The Tailwind background color class for the team
 */
export const getTeamTailwindBgColor = (team: TeamColor | string): string => {
  const normalizedTeam = asTeamColor(team);
  return teamTailwindBgColors[normalizedTeam] || 'bg-gray-500';
};

/**
 * Get the team motto
 * @param team - The team color identifier
 * @returns The motto for the team
 */
export const getTeamMotto = (team: TeamColor | string): string => {
  const normalizedTeam = asTeamColor(team);
  return teamMottos[normalizedTeam] || 'Unknown Motto';
};

/**
 * Get the team benefits
 * @param team - The team color identifier
 * @returns An array of benefit descriptions for the team
 */
export const getTeamBenefits = (team: TeamColor | string): string[] => {
  const normalizedTeam = asTeamColor(team);
  return teamBenefits[normalizedTeam] || [];
};

/**
 * Get the border color for a team (for styling)
 * @param team - The team color identifier
 * @returns The Tailwind border color class for the team
 */
export const getTeamBorderColor = (team: TeamColor | string): string => {
  const normalizedTeam = asTeamColor(team);
  // Use the background color classes but replace "bg-" with "border-"
  const bgClass = getTeamTailwindBgColor(normalizedTeam);
  return bgClass.replace('bg-', 'border-');
};
