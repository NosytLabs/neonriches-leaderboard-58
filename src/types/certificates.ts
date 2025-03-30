
import { TeamType } from './team';
import { UserTier } from './user-types';

export type CertificateType = 
  | 'rank' 
  | 'team' 
  | 'spending' 
  | 'achievement'
  | 'nobility'
  | 'royal';

export type CertificateStyle = 
  | 'classic' 
  | 'modern' 
  | 'medieval' 
  | 'royal' 
  | 'gothic' 
  | 'elegant'
  | 'basic'
  | 'fantasy'
  | 'minimalist';

export type CertificateTeam = TeamType;

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  issueDate: string;
  expireDate?: string;
  imageUrl: string;
  nftMintAddress?: string;
  isNFT?: boolean;
  rank?: number;
  team?: CertificateTeam;
  title?: string;
  description?: string;
  style?: CertificateStyle;
  // New properties
  createdAt?: string;
  isMinted?: boolean;
  mintedAt?: string;
  mintAddress?: string;
  shareUrl?: string;
  updatedAt?: string;
}

export interface RankCertificateMetadata {
  title: string;
  description: string;
  issueDate: string;
  userName: string;
  userRank: number;
  displayName?: string;
  rank?: number;
  amountSpent?: number;
}

export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getCertificatesByUserId: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  updateCertificate: (certificate: Certificate) => Promise<boolean>;
  deleteCertificate: (id: string) => Promise<boolean>;
  getMintedCertificatesForUser?: (userId: string) => Promise<Certificate[]>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  imageUrl: string;
  previewUrl?: string;
  description: string;
  requiresFounder?: boolean;
  availableForTier?: string[];
  availableForRank?: number[];
}

export interface CertificateTemplateFactory {
  createTemplate: (options: any) => CertificateTemplate;
  getTemplateById: (id: string) => CertificateTemplate | null;
  getAllTemplates: () => CertificateTemplate[];
  getTemplatesByType: (type: CertificateType) => CertificateTemplate[];
  getTemplatesForUser?: (user: any) => Promise<CertificateTemplate[]>;
}

export interface CertificateWithUser extends Certificate {
  user: {
    id: string;
    username: string;
    displayName?: string;
    tier?: UserTier;
    team?: TeamType;
  };
}
