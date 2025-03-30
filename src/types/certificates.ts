
import { UserProfile } from "./user";

export type CertificateType = 
  | 'royal'
  | 'team'
  | 'achievement'
  | 'milestone'
  | 'rank'
  | 'nobility'
  | 'custom';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  type: CertificateType;
  title: string;
  description: string;
  createdAt: string;
  rank?: number;
  team?: string;
  amountSpent?: number;
  signature?: string;
  shareUrl?: string;
  mintAddress?: string;
  isMinted: boolean;
  mintedAt?: string;
  templateId?: string;
  properties?: Record<string, any>;
  imageUrl?: string;
  style?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  team?: string;
  backgroundImage?: string;
  borderImage?: string;
  sealImage?: string;
  colorScheme: Record<string, string>;
  minRank?: number;
  maxRank?: number;
  templateHtml?: string;
  previewUrl?: string;
  description?: string;
  style?: string;
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  properties: {
    files: {
      uri: string;
      type: string;
    }[];
    category: string;
    creators: {
      address: string;
      share: number;
    }[];
  };
}

// Additional interfaces for certificate-related repositories and factories
export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getCertificatesByUser: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Omit<Certificate, 'id'>) => Promise<Certificate>;
  updateCertificate: (id: string, updates: Partial<Certificate>) => Promise<Certificate>;
  deleteCertificate: (id: string) => Promise<boolean>;
}

export interface CertificateTemplateFactory {
  createTemplate: (type: CertificateType, team?: string, style?: string) => CertificateTemplate;
  getDefaultTemplate: (team?: string) => CertificateTemplate;
}

export type CertificateTeam = 'red' | 'green' | 'blue' | null;
export type CertificateStyle = 'classic' | 'modern' | 'minimal' | 'ornate';

export type RankCertificateMetadata = CertificateMetadata;
