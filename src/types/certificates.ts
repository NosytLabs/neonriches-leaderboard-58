
export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  mintAddress?: string;
  dateIssued?: string;
  issuedAt: string; // Added for compatibility
  status: string; // Added for compatibility
  type: CertificateType | string; // Allow strings for flexibility
  tier: string;
  createdAt?: string; // Added for compatibility
  isMinted?: boolean; // Added for compatibility
  mintedAt?: string;
  team?: string;
  style?: string;
  // Compatibility fields
  issueDate?: string;
  nftAddress?: string;
}

export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'team' 
  | 'founder' 
  | 'event' 
  | 'royal'
  | 'nobility';

export type CertificateStyle = 
  | 'modern'
  | 'vintage'
  | 'royal'
  | 'minimalist'
  | 'ornate'
  | 'classic'; // Added classic as valid style

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'neutral'; // Added neutral as valid team

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType | string; // Allow string to accommodate more types
  style: CertificateStyle | string; // Allow string for flexibility
  team: CertificateTeam | string; // Allow string for more teams
  previewUrl: string;
  imageUrl: string;
  description: string;
  availableForTier: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
  // Compatibility fields
  title?: string;
  available?: boolean | string[];
}

export interface CertificateRepository {
  getCertificate: (id: string) => Promise<Certificate | null>;
  getCertificateByUserId: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  updateCertificate: (id: string, updates: Partial<Certificate>) => Promise<Certificate>;
  deleteCertificate: (id: string) => Promise<boolean>;
  getCertificates: () => Promise<Certificate[]>;
}
