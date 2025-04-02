
import { Certificate, CertificateTemplate, CertificateType, CertificateStyle, CertificateTeam, CertificateStatus } from '@/types/certificate';

export const adaptCertificateToTemplate = (certificate: Certificate): CertificateTemplate => {
  return {
    id: certificate.id,
    title: certificate.title,
    description: certificate.description,
    imageUrl: certificate.imageUrl,
    type: certificate.type,
    style: certificate.style,
    team: certificate.team,
    rarity: certificate.rarity,
    name: certificate.title // For compatibility
  };
};

export const adaptTemplateToCertificate = (template: CertificateTemplate, userId: string): Certificate => {
  return {
    id: template.id,
    title: template.title || 'Untitled Certificate',
    description: template.description || '',
    imageUrl: template.imageUrl,
    userId: userId,
    dateIssued: new Date().toISOString(),
    mintAddress: '',
    type: template.type,
    style: template.style,
    team: template.team,
    status: 'pending',
    rarity: template.rarity || 'common',
    issuerName: 'SpendThrone',
    recipientName: 'User',
    recipientId: userId
  };
};

export const createDefaultCertificate = (userId: string): Certificate => {
  return {
    id: crypto.randomUUID(),
    title: 'New Certificate',
    description: 'Certificate Description',
    imageUrl: '/assets/certificates/default.jpg',
    userId: userId,
    dateIssued: new Date().toISOString(),
    mintAddress: '',
    type: 'achievement',
    style: 'standard',
    team: 'none',
    status: 'pending',
    rarity: 'common',
    issuerName: 'SpendThrone',
    recipientName: 'User',
    recipientId: userId
  };
};

export const createDefaultTemplate = (): CertificateTemplate => {
  return {
    id: crypto.randomUUID(),
    title: 'Template',
    description: 'Certificate Template',
    imageUrl: '/assets/certificates/template.jpg',
    type: 'achievement',
    style: 'standard',
    team: 'none',
    rarity: 'common',
    name: 'Template' // For compatibility
  };
};

// Added for compatibility
export const adaptCertificate = (cert: any): Certificate => {
  return {
    ...cert,
    issuerName: cert.issuerName || 'SpendThrone',
    recipientName: cert.recipientName || cert.username || 'User',
    recipientId: cert.recipientId || cert.userId || ''
  };
};
