
import { TeamColor } from '@/types/team';
import { teamBenefits } from './team/teamBenefits';
import { teamLore } from './team/teamLore';
import { teamColors } from './team/teamColors';
import { teamNames, teamTaglines, teamMottos } from './team/teamInfo';

/**
 * Get benefits for a specific team
 * @param team Team color
 * @returns Array of team benefits
 */
export const getTeamBenefit = (team: TeamColor): string[] => {
  return teamBenefits[team] || teamBenefits.none;
};

/**
 * Get security guarantee statement for a team
 * @param team Team color
 * @returns Security guarantee statement
 */
export const getTeamSecurityGuarantee = (team: TeamColor): string => {
  const guarantees: Record<TeamColor, string> = {
    red: 'The Red Team ensures all transactions are backed by our Crimson Security Protocol.',
    blue: 'The Blue Team implements a multi-layered Azure Shield protection system for all members.',
    green: 'The Green Team surrounds your data with our Emerald Encryption, sustainable and strong.',
    gold: 'The Gold Team protects its members with the Royal Guard Protocol, the highest standard of security.',
    purple: 'The Purple Team casts a Mystical Shield over all transactions, a security system like no other.',
    none: 'Even unaffiliated nobles receive our standard Kingdom Protection security package.',
    neutral: 'The Neutral position offers Balanced Security, drawing from the best practices of all teams.',
    silver: 'The Silver Team provides Sterling Security, a balanced approach to transaction protection.',
    bronze: 'The Bronze Team offers Stalwart Security, reliable protection for all your transactions.'
  };
  
  return guarantees[team] || guarantees.none;
};

/**
 * Get color for a specific team
 * @param team Team color
 * @returns Hex color code
 */
export const getTeamColor = (team: TeamColor): string => {
  return teamColors[team] || teamColors.none;
};

/**
 * Get name for a specific team
 * @param team Team color
 * @returns Team name
 */
export const getTeamName = (team: TeamColor): string => {
  return teamNames[team] || teamNames.none;
};

/**
 * Get motto for a specific team
 * @param team Team color
 * @returns Team motto
 */
export const getTeamMotto = (team: TeamColor): string => {
  return teamMottos[team] || teamMottos.none;
};

/**
 * Get lore for a specific team
 * @param team Team color
 * @returns Team lore
 */
export const getTeamLore = (team: TeamColor): string => {
  return teamLore[team] || teamLore.none;
};

/**
 * Get tagline for a specific team
 * @param team Team color
 * @returns Team tagline
 */
export const getTeamTagline = (team: TeamColor): string => {
  return teamTaglines[team] || teamTaglines.none;
};

/**
 * Check if a user can join a team
 * @param team Team to check
 * @param userSpent Amount user has spent
 * @returns Boolean indicating if user can join team
 */
export const canJoinTeam = (team: TeamColor, userSpent: number): boolean => {
  const requirements: Record<TeamColor, number> = {
    red: 0,    // Anyone can join Red
    blue: 0,   // Anyone can join Blue
    green: 0,  // Anyone can join Green
    gold: 500, // Must spend at least $500 to join Gold
    purple: 250, // Must spend at least $250 to join Purple
    none: 0,    // Anyone can be unaffiliated
    neutral: 0, // Anyone can be neutral
    silver: 100, // Must spend at least $100 to join Silver
    bronze: 0    // Anyone can join Bronze
  };
  
  return userSpent >= requirements[team];
};
