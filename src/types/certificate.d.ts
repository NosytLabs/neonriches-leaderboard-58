
export type CertificateType = 'rank' | 'achievement' | 'founder' | 'event' | 'membership' | 'royal' | 'special' | 'milestone' | 'nobility' | 'seasonal';
export type CertificateStyle = 'royal' | 'classic' | 'modern' | 'gothic';
export type CertificateTeam = 'red' | 'blue' | 'green' | 'gold' | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  templateId: string;
  dateIssued: string;
  title?: string;
  description?: string;
  style?: CertificateStyle;
  team?: CertificateTeam;
  signature?: string;
  type?: CertificateType;
  userDisplayName?: string;
  metadata?: {
    rank?: number;
    tier?: string;
    name?: string;
    achievements?: string[];
  };
  mintAddress?: string;
  imageUrl?: string;
  
  // Add missing properties that are causing errors
  isMinted?: boolean;
  nftMintAddress?: string;
  shareUrl?: string;
  createdAt?: string;
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
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export interface CertificateRepository {
  getCertificatesByUserId: (userId: string) => Promise<Certificate[]>;
  getMintedCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  getCertificate: (id: string) => Promise<Certificate | null>;
  getCertificateById?: (id: string) => Promise<Certificate | null>;
  getCertificatesForUser?: (userId: string) => Promise<Certificate[]>;
  updateCertificate: (certificate: Certificate) => Promise<boolean>;
  deleteCertificate: (id: string) => Promise<boolean>;
}

export interface CertificateTemplateFactory {
  getTemplatesForUser: (userId: string, user: any) => CertificateTemplate[];
  createTemplate: (templateData: Partial<CertificateTemplate>) => CertificateTemplate;
  getTemplateById: (id: string) => CertificateTemplate | null;
  getAllTemplates: () => CertificateTemplate[];
  getTemplatesByType: (type: CertificateType) => CertificateTemplate[];
}
