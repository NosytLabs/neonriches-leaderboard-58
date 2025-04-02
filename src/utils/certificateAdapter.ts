
import { Certificate as CertificateUnified } from '@/types/certificate-unified';
import { Certificate } from '@/types/certificates';

// Create an adapter to convert between certificate types
export const adaptCertificate = (cert: any): Certificate => {
  return {
    id: cert.id || '',
    title: cert.title || cert.name || '',
    description: cert.description || '',
    imageUrl: cert.imageUrl || '',
    userId: cert.userId || cert.recipientId || '',
    dateIssued: cert.dateIssued || cert.issuedAt || new Date().toISOString(),
    mintAddress: cert.mintAddress || '',
    mintDate: cert.mintDate || '',
    type: ensureCertificateType(cert.type),
    style: cert.style || 'standard',
    team: cert.team || 'none',
    status: cert.status || 'issued',
    rarity: cert.rarity || 'common',
    issuerName: cert.issuerName || 'Royal System',
    recipientName: cert.recipientName || '',
    recipientId: cert.recipientId || cert.userId || '',
  };
};

// Ensure a string is a valid certificate type
const ensureCertificateType = (type?: string): any => {
  const validTypes = [
    'achievement', 'rank', 'team', 'royal', 'event', 
    'supporter', 'founder', 'vip', 'whale', 'special'
  ];
  
  return type && validTypes.includes(type) ? type : 'achievement';
};

// Wrap a certificate mint function to handle type conversions
export const wrapCertificateMint = (
  mintFn: (cert: CertificateUnified) => Promise<boolean>
): ((cert: Certificate) => Promise<boolean>) => {
  return async (cert: Certificate) => {
    // Convert the certificate to the unified type
    const unifiedCert: CertificateUnified = {
      ...cert,
      team: cert.team || 'none',
      // Add any missing required properties
      name: cert.title,
      issuedAt: cert.dateIssued,
      isMinted: !!cert.mintAddress,
      previewUrl: cert.imageUrl
    };
    
    return await mintFn(unifiedCert);
  };
};

// Wrap a certificate share function to handle type conversions
export const wrapCertificateShare = (
  shareFn: (cert: CertificateUnified) => Promise<string>
): ((cert: Certificate) => Promise<string>) => {
  return async (cert: Certificate) => {
    // Convert the certificate to the unified type
    const unifiedCert: CertificateUnified = {
      ...cert,
      team: cert.team || 'none',
      // Add any missing required properties
      name: cert.title,
      issuedAt: cert.dateIssued,
      isMinted: !!cert.mintAddress,
      previewUrl: cert.imageUrl
    };
    
    return await shareFn(unifiedCert);
  };
};

// Wrap a certificate download function to handle type conversions
export const wrapCertificateDownload = (
  downloadFn: (cert: CertificateUnified) => void
): ((cert: Certificate) => void) => {
  return (cert: Certificate) => {
    // Convert the certificate to the unified type
    const unifiedCert: CertificateUnified = {
      ...cert,
      team: cert.team || 'none',
      // Add any missing required properties
      name: cert.title,
      issuedAt: cert.dateIssued,
      isMinted: !!cert.mintAddress,
      previewUrl: cert.imageUrl
    };
    
    downloadFn(unifiedCert);
  };
};
