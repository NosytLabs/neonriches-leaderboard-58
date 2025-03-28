
// Team types

export type TeamColor = 'red' | 'green' | 'blue';

export interface TeamData {
  id: TeamColor;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  members: number;
  rank?: number;
}

export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  averageSpent: number;
  topContributor: string;
  topContributorAmount: number;
  weeklyGrowth: number;
  weeklySpent: number;
}

export interface TeamEvent {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  teamId: TeamColor;
  reward: string;
}

export interface TeamChallenge {
  id: string;
  title: string;
  description: string;
  goal: number;
  current: number;
  teamId: TeamColor;
  reward: string;
  endDate: string;
}

export interface TeamMember {
  id: string;
  username: string;
  profileImage?: string;
  contribution: number;
  rank: number;
  joinDate: string;
}
