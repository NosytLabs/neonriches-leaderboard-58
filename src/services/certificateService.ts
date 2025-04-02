
// Add missing methods that useCertificate expects

import { Certificate, CertificateType, CertificateTemplate, CertificateStyle } from '@/types/certificates';
import { User } from '@/types/user'; // Use user.ts instead of user-consolidated

/**
 * Mock certificate service
 */

// Get user certificates
const getUserCertificates = async (userId: string): Promise<Certificate[]> => {
  // Simulated API call
  return [
    {
      id: 'cert-001',
      title: 'Certificate of Nobility',
      description: 'Awarded for exemplary service to the royal court',
      imageUrl: '/images/certificates/nobility.png',
      dateIssued: new Date().toISOString(),
      status: 'pending',
      type: 'nobility',
      userId,
      style: 'royal' as CertificateStyle,
      issuerName: 'Royal Court',
      recipientName: 'Royal Subject',
      recipientId: userId,
      tier: 'gold',
      team: 'red'
    },
    {
      id: 'cert-002',
      title: 'Big Spender',
      description: 'Awarded for spending over $1000',
      imageUrl: '/images/certificates/spending.png',
      dateIssued: new Date().toISOString(),
      status: 'minted',
      type: 'spending',
      userId,
      mintAddress: '0x1234567890abcdef',
      mintDate: new Date().toISOString(),
      style: 'luxury' as CertificateStyle,
      issuerName: 'Royal Treasury',
      recipientName: 'Wealthy Patron',
      recipientId: userId,
      tier: 'platinum',
      team: 'red'
    }
  ];
};

// Get certificate by ID
const getCertificateById = async (id: string): Promise<Certificate> => {
  return {
    id,
    title: 'Certificate of Achievement',
    description: 'Awarded for an outstanding achievement',
    imageUrl: '/images/certificates/achievement.png',
    dateIssued: new Date().toISOString(),
    status: 'pending',
    type: 'achievement',
    userId: 'user-123',
    style: 'standard' as CertificateStyle,
    issuerName: 'Royal Court',
    recipientName: 'Royal Subject',
    recipientId: 'user-123',
    tier: 'silver',
    team: 'blue'
  };
};

// Get certificate templates
const getCertificateTemplates = async (): Promise<CertificateTemplate[]> => {
  return [
    {
      id: 'template-001',
      name: 'Royal Nobility',
      description: 'A certificate for nobility achievements',
      previewUrl: '/images/certificates/previews/nobility.png',
      imageUrl: '/images/certificates/nobility-template.png',
      type: 'nobility',
      team: 'red',
      style: 'royal' as CertificateStyle,
      available: true
    },
    {
      id: 'template-002',
      name: 'Spendthrift',
      description: 'A certificate for big spenders',
      previewUrl: '/images/certificates/previews/spending.png',
      imageUrl: '/images/certificates/spending-template.png',
      type: 'spending',
      team: 'green',
      style: 'luxury' as CertificateStyle,
      available: true
    }
  ];
};

// Get template by ID
const getTemplateById = async (id: string): Promise<CertificateTemplate> => {
  return {
    id,
    name: 'Template',
    description: 'Generic template',
    previewUrl: '/images/certificates/previews/generic.png',
    imageUrl: '/images/certificates/generic-template.png',
    type: 'achievement' as CertificateType,
    team: 'blue',
    style: 'standard' as CertificateStyle,
    available: true
  };
};

// Add the missing methods that useCertificate is looking for

// Get available certificate templates
const getAvailableCertificateTemplates = async (): Promise<CertificateTemplate[]> => {
  const templates = await getCertificateTemplates();
  return templates.filter(template => template.available);
};

// Mint certificate as NFT
const mintCertificateAsNFT = async (certificateId: string): Promise<{ success: boolean; transactionHash?: string; message?: string }> => {
  // Simulate minting delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: true,
    transactionHash: `0x${Math.random().toString(36).substring(2, 15)}`,
    message: 'Certificate successfully minted as NFT'
  };
};

// Claim certificate
const claimCertificate = async (templateId: string, userId: string): Promise<Certificate> => {
  // Simulate API call
  const template = await getTemplateById(templateId);
  
  return {
    id: `cert-${Date.now()}`,
    title: template.name,
    description: template.description,
    imageUrl: template.imageUrl,
    dateIssued: new Date().toISOString(),
    status: 'pending',
    type: template.type,
    userId,
    style: template.style,
    issuerName: 'Royal Court',
    recipientName: 'Claimant',
    recipientId: userId,
    tier: 'silver',
    team: 'red'
  };
};

// Generate shareable image
const generateShareableImage = async (certificateId: string): Promise<string> => {
  // Simulate API call to generate image
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return `/images/certificates/shareable/${certificateId}.png`;
};

export default {
  getUserCertificates,
  getCertificateById,
  getCertificateTemplates,
  getTemplateById,
  // Add these missing methods
  getAvailableCertificateTemplates,
  mintCertificateAsNFT,
  claimCertificate,
  generateShareableImage
};
