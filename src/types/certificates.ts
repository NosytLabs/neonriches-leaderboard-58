
export type CertificateType = 
  | 'nobility'
  | 'rank'
  | 'achievement'
  | 'team'
  | 'founder'
  | 'royal';

export type CertificateStatus = 
  | 'draft'
  | 'issued'
  | 'minted'
  | 'revoked'
  | 'expired';

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  bgImage: string;
  description?: string;
  previewUrl?: string;
}

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  templateId: string;
  type: CertificateType;
  status: CertificateStatus;
  title: string;
  description: string;
  issueDate: string;
  expiryDate?: string;
  imageUrl: string;
  signature?: string;
  achievements?: string[];
  team?: string;
  createdAt?: string;
  isMinted?: boolean;
  mintedAt?: string;
  mintAddress?: string;
  shareUrl?: string;
}
