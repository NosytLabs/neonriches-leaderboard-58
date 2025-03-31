
import { TeamColor } from './user';

export type CertificateType = 
  | 'nobility' 
  | 'achievement' 
  | 'royal' 
  | 'team' 
  | 'founder' 
  | 'seasonal' 
  | 'custom';

export type CertificateStyle = 
  | 'default' 
  | 'medieval' 
  | 'royal' 
  | 'modern' 
  | 'minimalist' 
  | 'classic';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  title: string;
  type: CertificateType;
  description: string;
  rank?: number;
  totalSpent?: number;
  team?: TeamColor;
  issuedAt: string;
  dateIssued: string;
  expiresAt?: string;
  image?: string;
  bgImage?: string;
  style?: CertificateStyle;
  isMinted?: boolean;
  mintAddress?: string;
  mintDate?: string;
  profileImage?: string;
  tier?: string;
  templateId?: string;
  metadata?: Record<string, any>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  description: string;
  style: CertificateStyle;
  team?: TeamColor;
  previewImage: string;
  isPremium: boolean;
  isLimited: boolean;
  price?: number;
  availableFrom?: string;
  availableUntil?: string;
}
