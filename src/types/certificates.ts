
import { TeamColor } from '@/types/mockery-types';

export type CertificateType = 
  | 'achievement'
  | 'spending'
  | 'ranking'
  | 'victory'
  | 'nobility'
  | 'royal'
  | 'team'
  | 'participation'
  | 'completion';

export type CertificateStatus = 
  | 'pending' 
  | 'minted' 
  | 'rejected' 
  | 'approved'
  | 'revoked'
  | 'expired';

export type CertificateStyle = 
  | 'royal'
  | 'classic'
  | 'medieval'
  | 'modern'
  | 'elegant'
  | 'simple'
  | 'ornate'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum'
  | 'diamond'
  | 'standard';

export type CertificateTeam = TeamColor | 'all';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string;
  issuedAt?: string; // Alias for dateIssued for backward compatibility
  mintAddress?: string;
  status: CertificateStatus;
  type: CertificateType;
  tier?: string;
  style: CertificateStyle;
  issuerName: string;
  recipientName: string;
  recipientId: string;
  userId: string;
  team?: TeamColor;
  isMinted?: boolean;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: TeamColor | string;
  style: CertificateStyle;
  available: boolean;
}

export interface CertificateIssuance {
  templateId: string;
  userId: string;
  title?: string;
  description?: string;
  customFields?: Record<string, string>;
  metadata?: Record<string, any>;
}
