
import { TeamColor } from './mockery-types';

export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'contribution'
  | 'team' 
  | 'membership' 
  | 'royal' 
  | 'founder'
  | 'throne'
  | 'prestige'
  | 'special';

export type CertificateStyle = 
  | 'basic' 
  | 'standard' 
  | 'royal' 
  | 'premium'
  | 'elite'
  | 'legendary'
  | 'gold'
  | 'silver'
  | 'bronze';

export type CertificateTeam = TeamColor | 'none';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  type: CertificateType;
  imageUrl: string;
  dateIssued: string;
  issuedAt?: string; // For backward compatibility
  userId: string;
  style: CertificateStyle;
  team?: CertificateTeam;
  mintAddress?: string;
  mintDate?: string;
  isMinted?: boolean;
  status?: 'pending' | 'minted' | 'failed';
  previewUrl?: string; // Added for compatibility
  name?: string; // Added for compatibility
}

export interface CertificateTemplate {
  id: string;
  title: string;
  description: string;
  type: CertificateType;
  imageUrl: string;
  style: CertificateStyle;
  team?: CertificateTeam;
  requiredRank?: number;
  requiredSpending?: number;
  requiredTeam?: TeamColor;
  isLimited?: boolean;
}

export interface CertificateRepository {
  getCertificates: (userId: string) => Promise<Certificate[]>;
  getCertificate: (id: string) => Promise<Certificate | null>;
  mintCertificate: (id: string) => Promise<boolean>;
  createCertificate: (template: CertificateTemplate, userId: string) => Promise<Certificate>;
}
