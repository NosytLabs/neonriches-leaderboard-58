
/**
 * Team types for user teams and group functionality
 */

export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'none';
export type TeamColor = TeamType;

export interface UserTeam {
  teamId: string;
  name: string;
  color: TeamColor;
  joinDate: string;
  contribution: number;
  rank: number;
}

export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  memberCount: number;
  totalContribution: number;
  rank: number;
  leaderUserId?: string;
}

export interface TeamBenefit {
  id: string;
  name: string;
  description: string;
  icon: string;
  teamColor: TeamColor;
  minTeamSize: number;
  discount: number;
}

// Define a type for the team string values used in the TeamChat component
export type TeamString = 'red' | 'green' | 'blue' | 'gold' | 'top';
