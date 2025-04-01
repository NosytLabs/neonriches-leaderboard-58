
export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string | Date;
  mintAddress?: string;
  userId?: string;
  team?: string;
  verified?: boolean;
  issuedAt?: string;
  issuedBy?: string;
  type?: string;
  style?: string;
  status?: 'pending' | 'minted' | 'revoked';
  metadata?: Record<string, any>;
  isMinted?: boolean;
  createdAt?: string;
  thumbnailUrl?: string;
  isPublic?: boolean;
  dateExpires?: string;
  nftId?: string;
  templateId?: string;
  keywords?: string[];
  signature?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: string;
  team?: string;
  requirements?: string[];
  metadata?: Record<string, any>;
  style?: string;
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

// Define necessary types that are missing
export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'team' 
  | 'founder' 
  | 'event' 
  | 'royal'
  | 'nobility'
  | 'custom';

export type CertificateStyle = 
  | 'modern'
  | 'vintage'
  | 'royal'
  | 'minimalist'
  | 'ornate'
  | 'classic'
  | 'medieval'
  | 'elegant';

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'neutral';

// Interface for CertificateRepository
export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  getMintedCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  updateCertificate: (certificate: Certificate) => Promise<boolean>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  deleteCertificate: (id: string) => Promise<boolean>;
}

// Interface for CertificateTemplateFactory
export interface CertificateTemplateFactory {
  getTemplatesForUser: (user: any) => Promise<CertificateTemplate[]>;
  createTemplateFromCertificate: (certificate: Certificate) => Promise<CertificateTemplate>;
  getTemplateById: (id: string) => Promise<CertificateTemplate | null>;
}
