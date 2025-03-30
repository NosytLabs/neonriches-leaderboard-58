
export type TeamType = 'red' | 'green' | 'blue';
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
