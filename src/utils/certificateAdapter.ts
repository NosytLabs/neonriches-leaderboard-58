
import { Certificate, CertificateTeam, CertificateType, CertificateStyle, CertificateStatus } from '@/types/certificates';

// Adapt a certificate to ensure it has all required fields
export function adaptCertificate(cert: Partial<Certificate>): Certificate {
  return {
    id: cert.id || `cert_${Math.random().toString(36).substring(2, 9)}`,
    title: cert.title || cert.name || 'Certificate',
    description: cert.description || '',
    imageUrl: cert.imageUrl || '/assets/certificates/default.png',
    userId: cert.userId || cert.recipientId || '',
    dateIssued: cert.dateIssued || cert.issuedAt || new Date().toISOString(),
    mintAddress: cert.mintAddress || '',
    mintDate: cert.mintDate || '',
    type: cert.type || 'achievement',
    style: (cert.style || 'standard') as CertificateStyle,
    team: (cert.team || 'none') as CertificateTeam,
    status: (cert.status || 'issued') as CertificateStatus,
    recipientName: cert.recipientName || '',
    issuerName: cert.issuerName || 'Royal System',
    recipientId: cert.recipientId || cert.userId || '',
    tier: cert.tier || '',
    name: cert.name || cert.title || '',
    isMinted: cert.isMinted || false,
    issuedAt: cert.issuedAt || cert.dateIssued || new Date().toISOString(),
    expiresAt: cert.expiresAt || '',
    previewUrl: cert.previewUrl || cert.imageUrl || '',
    rarity: cert.rarity || 'common'
  };
}

// Wrapper for certificate mint function
export async function wrapCertificateMint(cert: Certificate): Promise<boolean> {
  console.log(`Minting certificate: ${cert.id}`);
  // In a real implementation, this would call a blockchain service
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
}

// Wrapper for certificate share function
export async function wrapCertificateShare(cert: Certificate): Promise<string> {
  console.log(`Sharing certificate: ${cert.id}`);
  // In a real implementation, this would generate a sharing link
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`https://example.com/certificates/${cert.id}`);
    }, 500);
  });
}

// Wrapper for certificate download function
export function wrapCertificateDownload(cert: Certificate): void {
  console.log(`Downloading certificate: ${cert.id}`);
  // In a real implementation, this would trigger a file download
  alert(`Certificate ${cert.title} would be downloaded here.`);
}
