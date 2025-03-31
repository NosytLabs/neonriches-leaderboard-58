
// Team related type definitions

export type TeamColor = 'red' | 'blue' | 'green' | 'gold';
export type TeamType = TeamColor | 'none';

export interface TeamMember {
  id: string;
  username: string;
  profileImage?: string;
  rank: number;
  contribution: number;
  joinDate: string;
}

export interface TeamStats {
  totalMembers: number;
  totalContribution: number;
  averageContribution: number;
  rankingPosition: number;
  winCount: number;
}

export interface TeamEvent {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  teamParticipants: TeamColor[];
  winningTeam?: TeamColor;
}

export interface TeamBenefit {
  id: string;
  name: string;
  description: string;
  team: TeamColor;
  requiredRank?: number;
}

export interface TeamDetailsProps {
  color: TeamColor;
  name: string;
  description: string;
  slogan: string;
  members: number;
  contribution: number;
  imageUrl: string;
  leaderTitle: string;
  benefits: string[];
}

export interface TeamSelectorOption {
  value: TeamColor;
  label: string;
  description: string;
  image?: string;
  memberCount: number;
  color: string;
}
