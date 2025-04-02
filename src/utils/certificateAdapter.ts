
import { Certificate, CertificateType, CertificateStyle, CertificateStatus, CertificateTeam } from '@/types/certificates';

// Convert any partial certificate data to a complete Certificate
export function adaptCertificate(partialCert: Partial<Certificate>): Certificate {
  const defaultCert: Certificate = {
    id: partialCert.id || `cert-${Date.now()}`,
    title: partialCert.title || 'Certificate of Recognition',
    description: partialCert.description || 'A certificate of recognition for outstanding contributions',
    imageUrl: partialCert.imageUrl || '/images/default-certificate.png',
    type: (partialCert.type || 'achievement') as CertificateType,
    style: (partialCert.style || 'classic') as CertificateStyle,
    team: (partialCert.team || 'neutral') as CertificateTeam,
    userId: partialCert.userId || 'unknown',
    username: partialCert.username || 'Anonymous',
    issuedAt: partialCert.issuedAt || new Date().toISOString(),
    dateIssued: partialCert.dateIssued || partialCert.issuedAt || new Date().toISOString(),
    isMinted: partialCert.isMinted || false,
    previewUrl: partialCert.previewUrl || partialCert.imageUrl || '/images/default-certificate.png',
    status: (partialCert.status || 'issued') as CertificateStatus,
    name: partialCert.name || partialCert.title || 'Certificate',
    // Optional fields
    expiresAt: partialCert.expiresAt,
    mintAddress: partialCert.mintAddress,
    mintDate: partialCert.mintDate,
    metadataUrl: partialCert.metadataUrl,
    achievementId: partialCert.achievementId,
    achievement: partialCert.achievement,
    mintTransaction: partialCert.mintTransaction,
    background: partialCert.background,
    border: partialCert.border
  };

  return defaultCert;
}

// Wraps mint certificate function for proper error handling
export async function wrapCertificateMint(cert: Certificate): Promise<boolean> {
  try {
    console.log(`Minting certificate ${cert.id}`);
    // This would make an API call in a real implementation
    return true;
  } catch (error) {
    console.error('Error minting certificate:', error);
    return false;
  }
}

// Wraps share certificate function for proper error handling
export async function wrapCertificateShare(cert: Certificate): Promise<string> {
  try {
    console.log(`Sharing certificate ${cert.id}`);
    // This would make an API call in a real implementation
    return `https://example.com/certificates/${cert.id}`;
  } catch (error) {
    console.error('Error sharing certificate:', error);
    return '';
  }
}

// Wraps download certificate function
export function wrapCertificateDownload(cert: Certificate): void {
  try {
    console.log(`Downloading certificate ${cert.id}`);
    // This would trigger a download in a real implementation
  } catch (error) {
    console.error('Error downloading certificate:', error);
  }
}
