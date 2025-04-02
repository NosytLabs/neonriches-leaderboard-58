
import { Certificate, CertificateTemplate } from '@/types/certificate';

export const adaptCertificate = (certData: any): Certificate => {
  return {
    id: certData.id || '',
    title: certData.title || certData.name || '',
    description: certData.description || '',
    imageUrl: certData.imageUrl || '',
    userId: certData.userId || '',
    dateIssued: certData.dateIssued || certData.issuedAt || new Date().toISOString(),
    mintAddress: certData.mintAddress || '',
    type: certData.type || 'achievement',
    style: certData.style || 'standard',
    team: certData.team || 'none',
    status: certData.status || 'pending',
    rarity: certData.rarity || 'common',
    issuerName: certData.issuerName || 'SpendThrone',
    recipientName: certData.recipientName || certData.username || 'User',
    recipientId: certData.recipientId || certData.userId || ''
  };
};

export const formatCertificateType = (type: string): string => {
  switch(type) {
    case 'achievement': return 'Achievement';
    case 'rank': return 'Rank';
    case 'spending': return 'Spending';
    case 'membership': return 'Membership';
    case 'royal': return 'Royal';
    case 'team': return 'Team';
    case 'special': return 'Special';
    case 'nobility': return 'Nobility';
    default: return type.charAt(0).toUpperCase() + type.slice(1);
  }
};

export const getTemplateBorderColor = (template: CertificateTemplate): string => {
  switch (template.style) {
    case 'gold': return 'border-yellow-500';
    case 'silver': return 'border-gray-300';
    case 'royal': return 'border-purple-500';
    case 'premium': return 'border-blue-500';
    case 'modern': return 'border-cyan-500';
    case 'classic': return 'border-amber-800';
    case 'legendary': return 'border-orange-500';
    default: return 'border-gray-200';
  }
};

export const getCertificateStatus = (certificate: Certificate): string => {
  switch (certificate.status) {
    case 'pending': return 'Pending';
    case 'issued': return 'Issued';
    case 'revoked': return 'Revoked';
    case 'expired': return 'Expired';
    case 'draft': return 'Draft';
    case 'minted': return 'Minted';
    default: return certificate.status;
  }
};
