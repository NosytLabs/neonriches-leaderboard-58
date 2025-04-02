
import { TeamColor } from "./team";

export type CertificateType = 'nobility' | 'spending' | 'achievement' | 'membership' | 'rank' | 'team';
export type CertificateStatus = 'pending' | 'minted' | 'verified' | 'revoked';
export type CertificateTeam = TeamColor | 'none';
export type CertificateStyle = 'standard' | 'premium' | 'royal' | 'legendary' | 'classic';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string;
  status: CertificateStatus;
  type: CertificateType;
  style: CertificateStyle;
  issuerName: string;
  recipientName: string;
  recipientId: string;
  userId?: string;
  team?: CertificateTeam;
  issuedAt?: string;
  mintAddress?: string;
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
  availableForTier?: string | string[]; // Accept both string and string[]
}

export interface CertificateService {
  getUserCertificates(userId: string): Promise<Certificate[]>;
  mintCertificate(certificate: Certificate): Promise<Certificate>;
  verifyCertificate(id: string): Promise<boolean>;
  getCertificateTemplates(): Promise<CertificateTemplate[]>;
}
