
import { UserTier } from './user';

export type CertificateType = 'rank' | 'team' | 'nobility' | 'achievement' | 'royal';
export type CertificateStatus = 'draft' | 'published' | 'minted' | 'revoked';
export type CertificateStyle = 'classic' | 'modern' | 'minimalist' | 'ornate' | 'royal';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  title: string;
  description: string;
  imageUrl?: string;
  mintAddress?: string;
  metadata?: string;
  createdAt: string;
  status: CertificateStatus;
  style: CertificateStyle;
  rank?: number;
  amountSpent?: number;
  team?: string;
  achievementId?: string;
  achievementName?: string;
  minterAddress?: string;
  mintTxSignature?: string;
  mintedAt?: string;
  verificationUrl?: string;
}

export interface CertificateTemplate {
  id: string;
  type: CertificateType;
  name: string;
  description: string;
  style: CertificateStyle;
  previewImageUrl: string;
  minTier?: UserTier;
  price?: number;
  isPremium: boolean;
}

export interface CertificateTemplateProps {
  certificate: Certificate;
  showControls?: boolean;
  showDownloadButton?: boolean;
  showMintButton?: boolean;
  showShareButton?: boolean;
  onDownload?: () => void;
  onMint?: () => void;
  onShare?: () => void;
  className?: string;
  preview?: boolean;
  width?: number;
  height?: number;
}

export interface CertificateService {
  createCertificate: (userId: string, type: CertificateType, options: any) => Promise<Certificate>;
  getCertificateById: (id: string) => Promise<Certificate>;
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  mintCertificate: (certificateId: string, userWallet: string) => Promise<{ success: boolean; mintAddress?: string; error?: string }>;
  verifyCertificate: (mintAddress: string) => Promise<{ valid: boolean; certificate?: Certificate }>;
}

export interface CertificateRankData {
  rank: number;
  username: string;
  displayName: string;
  amountSpent: number;
  date: string;
  userId: string;
  team: string;
  tier: UserTier;
}

export interface CertificateOfNobilityData {
  username: string;
  displayName: string;
  rank: number;
  amountSpent: number;
  date: string;
  userId: string;
  title: string;
}

export interface CertificateTeamData {
  team: string;
  username: string;
  displayName: string;
  teamDisplayName: string;
  rank: number;
  amountSpent: number;
  date: string;
  userId: string;
}
