
export type CertificateType = 'nobility' | 'rank' | 'achievement' | 'contribution' | 'founder';
export type CertificateStyle = 'classic' | 'royal' | 'modern' | 'fantasy' | 'minimalist';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  style: CertificateStyle;
  title: string;
  description?: string;
  rank?: number;
  amountSpent?: number;
  imageUrl?: string;
  mintAddress?: string;
  metadataUri?: string;
  isMinted: boolean;
  mintedAt?: string;
  createdAt: string;
}
