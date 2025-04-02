
export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'membership' 
  | 'royal' 
  | 'team' 
  | 'special';

export type CertificateStyle = 
  | 'standard' 
  | 'gold' 
  | 'silver' 
  | 'royal' 
  | 'premium' 
  | 'modern' 
  | 'classic';

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none'
  | 'all';

export type CertificateStatus = 
  | 'pending' 
  | 'issued' 
  | 'revoked' 
  | 'expired' 
  | 'draft';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  dateIssued: string;
  mintAddress?: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  status: CertificateStatus;
  rarity?: string;
  issuerName: string;
  recipientName: string;
  recipientId: string;
}

export interface CertificateTemplate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  rarity?: string;
  dateIssued?: string;
  userId?: string;
  status?: CertificateStatus;
}

export interface UseCertificateResult {
  certificates: Certificate[];
  templates: CertificateTemplate[];
  loading: boolean;
  error: Error | null;
  createCertificate: (data: Partial<Certificate>) => Promise<Certificate>;
  fetchUserCertificates: () => Promise<Certificate[]>;
  fetchTemplates: () => Promise<CertificateTemplate[]>;
  mint: (certificate: Certificate) => Promise<void>;
  download: (certificate: Certificate) => void;
  share: (certificate: Certificate) => void;
}
