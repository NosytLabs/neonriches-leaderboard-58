
// This file provides standardized Certificate types

export type CertificateType = 
  | 'royal' 
  | 'noble' 
  | 'achievement' 
  | 'rank' 
  | 'spender' 
  | 'founder' 
  | 'supporter' 
  | 'special';

export type CertificateStyle = 
  | 'ornate' 
  | 'minimal' 
  | 'classic' 
  | 'modern' 
  | 'standard' 
  | 'royal';

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral' 
  | 'silver' 
  | 'bronze' 
  | 'crimson';

export type CertificateStatus = 
  | 'issued' 
  | 'revoked' 
  | 'minted' 
  | 'pending'
  | 'draft'
  | 'expired';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  recipientId?: string;
  recipientName?: string;
  issuerName?: string;
  dateIssued?: string;
  issuedAt?: string;
  mintAddress?: string;
  mintDate?: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  status: CertificateStatus;
  name?: string;
  isMinted?: boolean;
  previewUrl?: string;
  expiresAt?: string;
  tier?: string;
  rarity?: string;
}

export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  mintCertificate: (id: string) => Promise<boolean>;
  shareCertificate: (id: string) => Promise<string>;
  revokeCertificate: (id: string) => Promise<boolean>;
  createCertificate: (cert: Omit<Certificate, 'id'>) => Promise<Certificate>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  requirements?: {
    tier?: string;
    team?: CertificateTeam;
    minSpent?: number;
    minRank?: number;
  };
}
