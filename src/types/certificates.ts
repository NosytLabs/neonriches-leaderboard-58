
import { TeamType, UserProfile } from './user';

export type CertificateType = 'nobility' | 'team' | 'achievement' | 'founder';
export type CertificateStyle = 'royal' | 'gold' | 'silver' | 'bronze';
export type CertificateTeam = TeamType;

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  type: CertificateType;
  rank: number;
  amountSpent: number;
  teamId?: TeamType;
  team?: TeamType;
  createdAt: string;
  isMinted?: boolean;
  mintAddress?: string;
  imageUri?: string;
  imageUrl?: string;
  shareUrl?: string;
  metadata?: Record<string, any>;
  title?: string;
  description?: string;
  mintedAt?: string;
  style?: CertificateStyle;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  previewUrl?: string;
  type: CertificateType;
  tier: string;
  team?: TeamType;
  bgColor: string;
  textColor: string;
  borderColor: string;
  accentColor: string;
  style?: CertificateStyle;
}

export interface RankCertificateMetadata {
  rank: number;
  amountSpent: number;
  username: string;
  displayName?: string;
  createdAt: string;
  teamId?: TeamType;
}

export interface CertificateTemplateFactory {
  createTemplate(type: CertificateType, team?: CertificateTeam, style?: CertificateStyle): CertificateTemplate;
  createNobilityTemplate(rank: number, user: UserProfile): CertificateTemplate;
  createTeamTemplate(team: TeamType): CertificateTemplate;
  createFounderTemplate(): CertificateTemplate;
}
