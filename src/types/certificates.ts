
import { TeamColor } from './mockery-types';

export type CertificateStyle = 'royal' | 'noble' | 'jester' | 'standard' | 'premium' | 'gold' | 'silver' | 'ornate' | 'modern' | 'classic' | 'minimal' | 'legendary' | 'elite';
export type CertificateTeam = TeamColor;
export type CertificateType = 'achievement' | 'membership' | 'spending' | 'team' | 'nobility' | 'royal' | 'supporter' | 'special' | 'custom' | 'founder' | 'rank';
export type CertificateStatus = 'pending' | 'issued' | 'minted' | 'revoked' | 'expired' | 'draft';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  rank: number;
  tier: string;
  team: CertificateTeam;
  issuedAt: string;
  imageUrl?: string;
  expiresAt?: string;
  isMinted?: boolean;
  mintAddress?: string;
  mintDate?: string;
  style?: CertificateStyle;
  signature?: string;
  
  // Add missing properties used in components
  title?: string;
  name?: string;
  description?: string;
  dateIssued?: string;
  status?: CertificateStatus;
  recipientName?: string;
  issuerName?: string;
  recipientId?: string;
  type?: CertificateType;
  rarity?: string;
  previewUrl?: string;
}
