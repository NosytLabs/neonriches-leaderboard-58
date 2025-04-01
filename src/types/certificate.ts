
export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  mintAddress?: string;
  dateIssued?: string;
  issuedAt: string;
  status: string;
  type: string;
  tier: string;
  createdAt?: string;
  isMinted?: boolean;
  mintedAt?: string;
}

export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'team' 
  | 'founder' 
  | 'event' 
  | 'royal'
  | 'nobility';

export type CertificateStyle = 
  | 'modern'
  | 'vintage'
  | 'royal'
  | 'minimalist'
  | 'ornate'
  | 'classic'; // Add this as valid style

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'neutral'; // Add this as valid team

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
