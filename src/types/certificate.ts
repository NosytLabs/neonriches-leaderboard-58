
export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  mintAddress?: string;
  dateIssued?: string;
  issuedAt: string; // Added for compatibility
  status: string; // Added for compatibility
  type: string;
  tier: string;
  createdAt?: string; // Added for compatibility
  isMinted?: boolean; // Added for compatibility
  mintedAt?: string;
  team?: string;
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
  | 'classic'; // Added classic as valid style

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'neutral'; // Added neutral as valid team

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
