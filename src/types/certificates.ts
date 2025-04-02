
export type CertificateType = 
  | 'spending'
  | 'rank'
  | 'achievement'
  | 'membership'
  | 'founder'
  | 'vip'
  | 'team';

export type CertificateStyle = 
  | 'royal'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'simple'
  | 'ornate'
  | 'modern';

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none';

export interface Certificate {
  id: string;
  type: CertificateType;
  style: CertificateStyle;
  title: string;
  description: string;
  recipientId: string;
  recipientName: string;
  issuerId: string;
  issuerName: string;
  dateIssued: string;
  imageUrl?: string;
  data?: Record<string, any>;
  team?: CertificateTeam;
  mintAddress?: string;
  mintDate?: string;
}

export interface CertificateTemplate {
  id: string;
  type: CertificateType;
  style: CertificateStyle;
  title: string;
  description: string;
  imageUrl?: string;
  team?: CertificateTeam;
}

export interface CertificateRepository {
  getCertificate: (id: string) => Promise<Certificate | null>;
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificateData: Omit<Certificate, 'id'>) => Promise<Certificate>;
  verifyCertificate: (id: string) => Promise<boolean>;
}
