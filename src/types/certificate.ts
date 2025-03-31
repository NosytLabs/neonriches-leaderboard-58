
export type CertificateType = 
  | 'spending'
  | 'rank'
  | 'royal'
  | 'legendary'
  | 'team'
  | 'achievement'
  | 'special';

export type CertificateStyle =
  | 'ornate'
  | 'minimalist'
  | 'royal'
  | 'modern'
  | 'vintage';

export type CertificateTeam =
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none';

export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  dateIssued: string;
  issuer: string;
  mintAddress?: string;
  isMinted?: boolean;
  rarity?: string;
  team?: CertificateTeam;
  amount?: number;
  rank?: number;
  signature?: string;
  recipientName?: string;
  style?: CertificateStyle;
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
  availableForTier: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export interface CertificateRepository {
  getAllCertificates(userId: string): Promise<Certificate[]>;
  getCertificateById(id: string): Promise<Certificate | null>;
  createCertificate(certificate: Certificate): Promise<Certificate>;
  updateCertificate(id: string, certificate: Partial<Certificate>): Promise<Certificate>;
  deleteCertificate(id: string): Promise<boolean>;
}

export type CertificateFilter = 
  | 'all'
  | 'minted'
  | 'not-minted'
  | 'spending'
  | 'rank'
  | 'royal'
  | 'legendary'
  | 'team'
  | 'achievement'
  | 'special';

export interface CertificateTemplateFactory {
  getTemplatesByType(type: CertificateType): CertificateTemplate[];
  getTemplateById(id: string): CertificateTemplate | null;
  getTemplatesByTeam(team: CertificateTeam): CertificateTemplate[];
  getTemplatesByTier(tier: string): CertificateTemplate[];
  getTemplatesByRank(rank: number): CertificateTemplate[];
}
