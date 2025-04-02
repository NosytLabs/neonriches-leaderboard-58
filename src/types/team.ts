
export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  role: TeamRole;
  joinDate: string;
  contribution: number;
  rank: number;
}

export type TeamRole = 
  | 'leader'
  | 'co-leader'
  | 'officer'
  | 'member'
  | 'recruit'
  | 'elite'
  | 'champion';

export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  averageRank: number;
  globalRank: number;
  winCount: number;
  lossCount: number;
}

export interface TeamBenefits {
  discountRate: number;
  bonusRate: number;
  exclusiveAccess: boolean;
  specialBadges: boolean;
  prioritySupport: boolean;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  inviterId: string;
  inviteeId: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  createdAt: string;
  expiresAt: string;
}

export interface TeamDataCompat {
  id: string;
  name: string;
  color: string;
  memberCount: number;
  totalSpent: number;
  rank: number;
  crest: string;
  leaderUsername?: string;
  leaderAvatar?: string;
}
