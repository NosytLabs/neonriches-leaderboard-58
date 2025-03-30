
export type TeamType = 'red' | 'green' | 'blue' | 'gold';
export type TeamColor = TeamType | 'none';

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

// Explicitly export the types
export type { TeamType, TeamColor, UserTeam, Team, TeamBenefit, TeamString };
