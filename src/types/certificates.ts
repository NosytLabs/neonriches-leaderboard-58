
import { TeamColor } from './team';

export type CertificateType = 
  | 'achievement'
  | 'rank'
  | 'team'
  | 'special'
  | 'royal'
  | 'founder'
  | 'nobility';

export type CertificateStyle = 
  | 'ornate'
  | 'minimalist'
  | 'royal'
  | 'medieval'
  | 'modern';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  type: CertificateType;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string;
  issuedBy?: string;
  team?: TeamColor;
  tier?: string;
  rank?: number;
  mintAddress?: string;
  signature?: string;
  metadata?: Record<string, any>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  style: CertificateStyle;
  team: TeamColor;
  previewUrl: string;
  imageUrl: string;
  description: string;
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export type CertificateTeam = TeamColor | 'neutral';
