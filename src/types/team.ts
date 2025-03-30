
// Team-related types
export type TeamType = 'red' | 'green' | 'blue' | 'gold' | 'none';

export type TeamColor = 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'black';

export type UserTeam = 'red' | 'green' | 'blue' | 'gold' | 'none';

export interface Team {
  id: TeamType;
  name: string;
  color: TeamColor;
  description: string;
  motto: string;
  benefits: TeamBenefit[];
  memberCount: number;
  leaderUsername?: string;
  iconPath: string;
}

export interface TeamBenefit {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'passive' | 'active' | 'special';
}

export type { TeamType, TeamColor, UserTeam, Team, TeamBenefit };
