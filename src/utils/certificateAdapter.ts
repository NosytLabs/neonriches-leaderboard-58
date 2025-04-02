
import { Certificate, CertificateStyle, CertificateTeam, CertificateType, CertificateStatus } from '@/types/certificates';

// This function adapts any certificate-like object to match the Certificate interface
export const adaptCertificate = (partialCert: Partial<Certificate>): Certificate => {
  return {
    id: partialCert.id || `cert-${Math.random().toString(36).substring(2, 9)}`,
    title: partialCert.title || partialCert.name || 'Certificate of Nobility',
    description: partialCert.description || 'A royal certificate of status and nobility',
    userId: partialCert.userId || '',
    username: partialCert.username || '',
    recipientId: partialCert.recipientId || partialCert.userId || '',
    dateIssued: partialCert.dateIssued || partialCert.issuedAt || new Date().toISOString(),
    issuedAt: partialCert.issuedAt || partialCert.dateIssued || new Date().toISOString(),
    imageUrl: partialCert.imageUrl || '/assets/certificates/default.png',
    type: partialCert.type || 'achievement',
    style: partialCert.style || 'standard',
    team: partialCert.team || 'none',
    status: partialCert.status || 'issued',
    recipientName: partialCert.recipientName || partialCert.username || 'Royal User',
    issuerName: partialCert.issuerName || 'Royal Court',
    recipientId: partialCert.recipientId || partialCert.userId || '',
    rank: partialCert.rank || 0,
    name: partialCert.name || partialCert.title || 'Certificate',
    tier: partialCert.tier || 'common',
    displayName: partialCert.displayName || partialCert.recipientName || partialCert.username || '',
    mintAddress: partialCert.mintAddress || '',
    mintDate: partialCert.mintDate || '',
    isMinted: !!partialCert.isMinted || !!partialCert.mintAddress,
    expiresAt: partialCert.expiresAt || '',
    previewUrl: partialCert.previewUrl || partialCert.imageUrl || '',
    rarity: partialCert.rarity || 'common',
    signature: partialCert.signature || '',
  };
};

// Helper function to mock certificate mint operation
export const wrapCertificateMint = async (cert: Certificate): Promise<boolean> => {
  console.log(`Minting certificate: ${cert.title}`);
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1500));
  return true;
};

// Helper function to mock certificate share operation
export const wrapCertificateShare = async (cert: Certificate): Promise<string> => {
  console.log(`Sharing certificate: ${cert.title}`);
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 800));
  return `https://share.domain.com/certificates/${cert.id}`;
};

// Helper function to mock certificate download operation
export const wrapCertificateDownload = (cert: Certificate): void => {
  console.log(`Downloading certificate: ${cert.title}`);
  // In a real app, this would trigger a download
};
