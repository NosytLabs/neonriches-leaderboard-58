
/**
 * Certificate related type definitions
 */

import { TeamColor } from './team';

export type CertificateType = 'nobility' | 'spending' | 'achievement' | 'special';
export type CertificateTeam = TeamColor | 'all';
export type CertificateStatus = 'active' | 'expired' | 'pending' | 'revoked';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  issuedAt: string;
  issueDate: string; // For backwards compatibility
  expiresAt?: string;
  status: CertificateStatus | string;
  type: CertificateType;
  userId: string;
  team?: CertificateTeam;
  style: string;
  isMinted?: boolean;
  nftAddress?: string;
  mintAddress?: string; // For backwards compatibility
  metadata?: Record<string, any>;
  recipientName?: string;
  dateIssued?: string; // For backwards compatibility
}

export interface CertificateTemplate {
  id: string;
  name: string;
  title: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: CertificateTeam;
  style: string;
  available: boolean;
  metadata?: Record<string, any>;
}

export interface CertificateRepository {
  getCertificate: (id: string) => Promise<Certificate | null>;
  getCertificatesByUserId: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  updateCertificate: (id: string, updates: Partial<Certificate>) => Promise<Certificate>;
  deleteCertificate: (id: string) => Promise<boolean>;
  getCertificateTemplates: () => Promise<CertificateTemplate[]>;
  getCertificates: () => Promise<Certificate[]>;
}

export interface CertificateService {
  getCertificate: (id: string) => Promise<Certificate | null>;
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  getLatestCertificate: (userId: string) => Promise<Certificate | null>;
  createCertificate: (certificate: Partial<Certificate>) => Promise<Certificate>;
  mintNFT: (certificateId: string) => Promise<string>;
  getCertificateTemplates: () => Promise<CertificateTemplate[]>;
  getTeamCertificate: (userId: string, team: TeamColor) => Promise<Certificate | null>;
}
