
import { TeamColor } from './mockery-types';

export type CertificateType = 
  | 'nobility' 
  | 'achievement' 
  | 'spending' 
  | 'rank' 
  | 'team' 
  | 'founder' 
  | 'membership' 
  | 'participation' 
  | 'contest';

export type CertificateStyle = 
  | 'standard' 
  | 'royal' 
  | 'luxury' 
  | 'modern' 
  | 'vintage' 
  | 'minimalist' 
  | 'ornate' 
  | 'parchment';

export type CertificateTeam = TeamColor | 'neutral';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string;
  issuedAt?: string; // Alias for dateIssued
  status: 'pending' | 'minted' | 'revoked' | 'expired';
  type: CertificateType;
  userId: string;
  mintAddress?: string;
  mintDate?: string;
  isMinted?: boolean;
  style: CertificateStyle;
  issuerName: string;
  recipientName: string;
  recipientId: string;
  team?: CertificateTeam;
  tier?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: CertificateTeam;
  style: CertificateStyle;
  available: boolean;
}

// Add CertificateRepository interface to fix the missing type
export interface CertificateRepository {
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  getCertificateById: (id: string) => Promise<Certificate>;
  getCertificateTemplates: () => Promise<CertificateTemplate[]>;
  getTemplateById: (id: string) => Promise<CertificateTemplate>;
  getAvailableCertificateTemplates: () => Promise<CertificateTemplate[]>;
  mintCertificateAsNFT: (certificateId: string) => Promise<{ success: boolean; transactionHash?: string; message?: string }>;
  claimCertificate: (templateId: string, userId: string) => Promise<Certificate>;
  generateShareableImage: (certificateId: string) => Promise<string>;
}
