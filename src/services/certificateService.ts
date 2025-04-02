
import { Certificate, CertificateType, CertificateTemplate } from '@/types/certificates';
import { TeamColor } from '@/types/mockery-types';
import { adaptCertificate, adaptCertificateTemplate } from '@/utils/certificateAdapter';

// Get certificates for a user
export const getUserCertificates = async (userId: string): Promise<Certificate[]> => {
  // Mock implementation
  const certificates = [
    adaptCertificate({
      id: 'cert-1',
      title: 'Noble Certificate',
      description: 'Awarded for noble deeds',
      imageUrl: '/images/certificates/noble.png',
      dateIssued: new Date().toISOString(),
      status: 'pending',
      type: 'nobility',
      userId: userId
    }),
    
    adaptCertificate({
      id: 'cert-2',
      title: 'Spending Certificate',
      description: 'Awarded for spending achievements',
      imageUrl: '/images/certificates/spending.png',
      dateIssued: new Date().toISOString(),
      status: 'minted',
      type: 'spending',
      userId: userId,
      team: 'red' as TeamColor
    })
  ];
  
  return certificates;
};

// Get certificate by ID
export const getCertificateById = async (id: string): Promise<Certificate | null> => {
  const certificates = await getUserCertificates('user-1');
  return certificates.find(cert => cert.id === id) || null;
};

// Get certificate templates
export const getCertificateTemplates = async (): Promise<CertificateTemplate[]> => {
  // Mock implementation
  const templates = [
    adaptCertificateTemplate({
      id: 'template-1',
      name: 'Noble Certificate',
      description: 'Template for noble certificates',
      previewUrl: '/images/certificates/noble-preview.png',
      imageUrl: '/images/certificates/noble-template.png',
      type: 'nobility',
      team: 'blue'
    }),
    
    adaptCertificateTemplate({
      id: 'template-2',
      name: 'Spending Certificate',
      description: 'Template for spending certificates',
      previewUrl: '/images/certificates/spending-preview.png',
      imageUrl: '/images/certificates/spending-template.png',
      type: 'spending',
      team: 'gold'
    })
  ];
  
  return templates;
};

// Get template by ID
export const getTemplateById = async (id: string): Promise<CertificateTemplate | null> => {
  // Mock implementation
  const template = adaptCertificateTemplate({
    id,
    name: 'Generic Certificate',
    description: 'A generic certificate template',
    previewUrl: '/images/certificates/generic-preview.png',
    imageUrl: '/images/certificates/generic-template.png',
    type: 'achievement' as CertificateType,
    team: 'neutral' as TeamColor
  });
  
  return template;
};

// Export as default for consistency
export default {
  getUserCertificates,
  getCertificateById,
  getCertificateTemplates,
  getTemplateById
};
