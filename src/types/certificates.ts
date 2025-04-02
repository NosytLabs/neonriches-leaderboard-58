
export type CertificateType = 
  | 'achievement'
  | 'rank'
  | 'team'
  | 'spending'
  | 'special'
  | 'event'
  | 'royal'
  | 'noble'
  | 'nobility'; // Added to support existing code

export type CertificateStyle = 
  | 'classic'
  | 'modern'
  | 'medieval'
  | 'royal'
  | 'gothic'
  | 'minimalist';

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  type: CertificateType;
  style: CertificateStyle;
  imageUrl: string;
  dateIssued: string;
  issuedAt?: string; // Alternative date format
  issuerName: string;
  recipientName: string;
  recipientId: string;
  mintAddress?: string;
  isMinted?: boolean;
  status?: 'pending' | 'minted' | 'failed';
  team?: CertificateTeam;
  signature?: string;
  achievements?: string[];
  metadata?: Record<string, any>;
  nftAddress?: string; // Added to support existing code
  userId?: string; // Added to support existing code
  createdAt?: string; // Added to support existing code
}

export interface CertificateTemplate {
  id: string;
  type: CertificateType;
  style: CertificateStyle;
  imageUrl: string;
  name?: string;
  previewUrl?: string;
  description?: string;
  available: boolean;
  requiredTier?: string;
  price?: number;
  team?: CertificateTeam; // Added to support existing code
}

export interface CertificateRepository {
  getCertificateById(id: string): Promise<Certificate | null>;
  getCertificatesByUserId(userId: string): Promise<Certificate[]>;
  getUserCertificates(userId: string): Promise<Certificate[]>;
  mintCertificate(certificate: Certificate): Promise<Certificate>;
  createCertificate(certificate: Partial<Certificate>): Promise<Certificate>;
  verifyCertificate(id: string): Promise<boolean>;
}
