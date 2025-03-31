
import { TeamColor } from './team';

export type CertificateType = 
  | 'achievement'
  | 'rank'
  | 'team'
  | 'special'
  | 'royal'
  | 'founder'
  | 'nobility'
  | 'spending'
  | 'legendary'
  | 'event'
  | 'membership'
  | 'milestone'
  | 'seasonal'
  | 'custom'
  | 'authentic';

export type CertificateStyle = 
  | 'ornate'
  | 'minimalist'
  | 'royal'
  | 'medieval'
  | 'modern'
  | 'classic'
  | 'gothic'
  | 'default'
  | 'vintage';

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
  isMinted?: boolean;
  createdAt?: string;
  style?: CertificateStyle;
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
  availableForTier: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export type CertificateTeam = TeamColor | 'neutral';

// Add additional interfaces needed for backward compatibility
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
