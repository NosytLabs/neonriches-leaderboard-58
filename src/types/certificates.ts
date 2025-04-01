
export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string | Date;
  mintAddress?: string;
  userId?: string;
  team?: string;
  verified?: boolean;
  issuedAt?: string;
  issuedBy?: string;
  type?: string;
  status?: 'pending' | 'minted' | 'revoked';
  metadata?: Record<string, any>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: string;
  team?: string;
  requirements?: string[];
  metadata?: Record<string, any>;
}
