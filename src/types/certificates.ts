
import { TeamType, UserProfile } from './user';

export type CertificateType = 'nobility' | 'team' | 'achievement' | 'founder';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  type: CertificateType;
  rank: number;
  amountSpent: number;
  teamId?: TeamType;
  createdAt: string;
  isMinted?: boolean;
  mintAddress?: string;
  imageUri?: string;
  shareUrl?: string;
  metadata?: Record<string, any>;
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
}

export interface RankCertificateMetadata {
  rank: number;
  amountSpent: number;
  username: string;
  displayName?: string;
  createdAt: string;
  teamId?: TeamType;
}
