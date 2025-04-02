
/**
 * Certificate type definitions
 */

import { TeamColor } from './mockery-types';

export type CertificateType = 'spending' | 'achievement' | 'rank' | 'royal' | 'team' | 'founding' | 'special' | 'nobility' | 'event';

export type CertificateStyle = 'classic' | 'royal' | 'modern' | 'vintage' | 'minimalist' | 'ornate' | 'medieval' | 'elegant';

export type CertificateTeam = TeamColor | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  title: string;
  description: string;
  issueDate: string;
  imageUrl: string;
  nftAddress?: string;
  mintDate?: string;
  style: CertificateStyle;
  team?: CertificateTeam;
  tier?: string;
  metadata?: Record<string, any>;
  thumbnailUrl?: string;
  isPublic?: boolean;
  dateIssued?: string;
  dateExpires?: string;
  isVerified?: boolean;
  templateId?: string;
  keywords?: string[];
  signature?: string;
  status?: string;
  isMinted?: boolean;
  createdAt?: string;
  issuedAt?: string;
}

export interface CertificateTemplate {
  id: string;
  type: CertificateType;
  title: string;
  description: string;
  style: CertificateStyle;
  imageUrl: string;
  available: boolean;
  price?: number;
  requirements?: {
    minSpend?: number;
    minRank?: number;
    teamRequired?: boolean;
    tierRequired?: string;
  };
  name?: string;
  previewUrl?: string;
  team?: CertificateTeam;
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}
