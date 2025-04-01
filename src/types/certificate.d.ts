
import { TeamColor } from '@/types/mockery';

export type CertificateType = 
  | 'nobility' 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'custom'
  | 'founder';

export type CertificateStyle = 
  | 'medieval' 
  | 'royal' 
  | 'elegant' 
  | 'modern'
  | 'vintage'
  | 'classic';

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam | TeamColor;
  isPublic: boolean;
  dateIssued: string;
  dateExpires?: string;
  mintAddress?: string;
  nftId?: string;
  isVerified?: boolean;
  templateId?: string;
  keywords?: string[];
  metadata?: Record<string, any>;
  signature?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  previewUrl: string;
  imageUrl: string;
  description: string;
  availableForTier: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}
