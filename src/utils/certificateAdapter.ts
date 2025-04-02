
import { Certificate, CertificateType, CertificateTemplate } from '@/types/certificates';

/**
 * Adapter function to ensure a certificate has all required properties
 */
export function adaptCertificate(partialCertificate: Partial<Certificate>): Certificate {
  return {
    id: partialCertificate.id || `cert-${Date.now()}`,
    title: partialCertificate.title || 'Certificate',
    description: partialCertificate.description || '',
    imageUrl: partialCertificate.imageUrl || '/images/certificates/default.png',
    dateIssued: partialCertificate.dateIssued || partialCertificate.issuedAt || new Date().toISOString(),
    issuedAt: partialCertificate.issuedAt || partialCertificate.dateIssued || new Date().toISOString(),
    mintAddress: partialCertificate.mintAddress || '',
    status: partialCertificate.status || 'pending',
    type: partialCertificate.type || 'achievement',
    tier: partialCertificate.tier || 'silver',
    style: partialCertificate.style || 'standard',
    issuerName: partialCertificate.issuerName || 'Royal Court',
    recipientName: partialCertificate.recipientName || 'Royal Subject',
    recipientId: partialCertificate.recipientId || partialCertificate.userId || '',
    userId: partialCertificate.userId || partialCertificate.recipientId || ''
  };
}

/**
 * Adapter function to ensure a certificate template has all required properties
 */
export function adaptCertificateTemplate(partialTemplate: Partial<CertificateTemplate>): CertificateTemplate {
  return {
    id: partialTemplate.id || `template-${Date.now()}`,
    name: partialTemplate.name || 'Certificate Template',
    description: partialTemplate.description || '',
    previewUrl: partialTemplate.previewUrl || '/images/certificates/template-preview.png',
    imageUrl: partialTemplate.imageUrl || '/images/certificates/template.png',
    type: partialTemplate.type || 'achievement',
    team: partialTemplate.team || 'neutral',
    style: partialTemplate.style || 'standard',
    available: partialTemplate.available !== false
  };
}
