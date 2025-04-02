
import { Certificate, CertificateType, CertificateTemplate, CertificateStyle } from '@/types/certificates';

/**
 * Adapter function to ensure a certificate has all required properties
 */
export function adaptCertificate(partialCertificate: Partial<Certificate>): Certificate {
  // Extract values or set defaults
  const issuerName = partialCertificate.issuerName || 'Royal Court';
  const recipientName = partialCertificate.recipientName || 'Royal Subject';
  const style = partialCertificate.style as CertificateStyle || 'standard' as CertificateStyle;
  const recipientId = partialCertificate.recipientId || partialCertificate.userId || '';
  const userId = partialCertificate.userId || partialCertificate.recipientId || '';
  
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
    style, 
    issuerName,
    recipientName,
    recipientId,
    userId
  };
}

/**
 * Adapter function to ensure a certificate template has all required properties
 */
export function adaptCertificateTemplate(partialTemplate: Partial<CertificateTemplate>): CertificateTemplate {
  const style = partialTemplate.style as CertificateStyle || 'standard' as CertificateStyle;
  
  return {
    id: partialTemplate.id || `template-${Date.now()}`,
    name: partialTemplate.name || 'Certificate Template',
    description: partialTemplate.description || '',
    previewUrl: partialTemplate.previewUrl || '/images/certificates/template-preview.png',
    imageUrl: partialTemplate.imageUrl || '/images/certificates/template.png',
    type: partialTemplate.type || 'achievement',
    team: partialTemplate.team || 'neutral',
    style,
    available: partialTemplate.available !== false
  };
}
