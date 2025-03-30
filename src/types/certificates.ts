
import { User, TeamType } from './user';

export type CertificateType = 'nobility' | 'achievement' | 'team' | 'founder' | 'royal';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  issueDate: Date;
  title: string;
  description: string;
  imageUrl?: string;
  nftTokenId?: string;
  verified: boolean;
  data: Record<string, any>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  type: CertificateType;
  imageTemplate: string;
  requiredFields: string[];
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export interface CertificateTemplateFactory {
  createTemplate(type: CertificateType, user: User): CertificateTemplate;
  createNobilityTemplate(user: User): CertificateTemplate;
  createTeamTemplate(user: User, teamType: TeamType): CertificateTemplate;
  createFounderTemplate(user: User): CertificateTemplate;
}

export interface CertificateRepository {
  getCertificatesForUser(userId: string): Promise<Certificate[]>;
  getCertificateById(id: string): Promise<Certificate | null>;
  createCertificate(certificate: Omit<Certificate, 'id'>): Promise<Certificate>;
  verifyCertificate(certificateId: string): Promise<boolean>;
}

