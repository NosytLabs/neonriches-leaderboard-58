
/**
 * Team-related type definitions
 */

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'neutral' | 'none';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple';

export interface TeamData {
  id: TeamType;
  name: string;
  description: string;
  color: string;
  icon: string;
  banner: string;
  emblem: string;
  totalContribution?: number; // Add this field to fix the missing property errors
  securityGuarantee?: string; // Add missing properties from TeamService
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
}

export interface TeamTheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  background: string;
  backgroundSecondary: string; // Add these missing properties
  hoverBg: string;
  activeBg: string;
}

export interface TeamMember {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  contribution: number;
  rank?: number;
}

export interface TeamStats {
  memberCount: number;
  totalContribution: number;
  avgContribution: number;
  topContributor: TeamMember | null;
  rankings: {
    daily: number;
    weekly: number;
    monthly: number;
    allTime: number;
  };
}
