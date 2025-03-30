
import { User, UserProfile } from '@/types/user';
import { Certificate, CertificateType, CertificateTeam } from '@/types/certificates';
import { createCertificateNFT } from '@/services/solanaService';
import { getTeamName } from '@/utils/teamUtils';
import { formatDate } from '@/utils/formatters';

/**
 * Generates a certificate of nobility for the user
 */
export const generateCertificate = async (
  userId: string, 
  type: CertificateType = 'nobility',
  team?: CertificateTeam
): Promise<{ certificateId: string; imageUrl: string }> => {
  // This would normally call an API endpoint to generate the certificate
  // For now, we'll just mock the response

  return {
    certificateId: `cert-${Date.now()}`,
    imageUrl: `/images/certificates/${team || 'default'}-certificate.png`
  };
};

/**
 * Claims a certificate of nobility for the user
 */
export const claimCertificate = async (
  userProfile: UserProfile,
  type: CertificateType = 'nobility'
): Promise<boolean> => {
  // This would normally call an API endpoint to claim the certificate
  // For now, we'll just mock the response
  
  return true;
};

/**
 * Mints a certificate as an NFT
 */
export const mintCertificateAsNFT = async (
  certificate: Certificate,
  user: UserProfile
): Promise<{ success: boolean; mintAddress?: string }> => {
  try {
    // Call the Solana service to mint the NFT
    const result = await createCertificateNFT({
      username: user.username,
      displayName: user.displayName,
      rank: user.rank,
      team: user.team,
      amountSpent: user.amountSpent,
      tier: user.tier,
      certificateId: certificate.id,
      certificateType: certificate.type,
      certificateStyle: certificate.style
    });
    
    if (result.success) {
      return {
        success: true,
        mintAddress: result.mintAddress
      };
    }
    
    return { success: false };
  } catch (error) {
    console.error('Error minting certificate:', error);
    return { success: false };
  }
};

export const getCertificateById = async (certificateId: string): Promise<Certificate | null> => {
  // This would normally call an API endpoint to get certificate details
  // For now, we'll just mock the response
  
  return {
    id: certificateId,
    userId: 'user-123',
    type: 'nobility',
    style: 'royal',
    team: 'red',
    title: 'Certificate of Digital Nobility',
    description: 'This certifies that the bearer has attained the rank of nobility through financial contributions.',
    rank: 42,
    amountSpent: 5000,
    imageUrl: '/images/certificates/certificate-template.png',
    isMinted: false,
    createdAt: new Date().toISOString(),
    shareUrl: `/certificates/share/${certificateId}`
  };
};

/**
 * Gets available certificate templates for a user
 */
export const getAvailableCertificateTemplates = async (userProfile: UserProfile): Promise<CertificateTemplate[]> => {
  // This would normally call an API endpoint to get available templates
  // For now, we'll just mock the response
  
  // Team-specific templates
  const teamTemplates = userProfile.team ? [
    {
      id: `${userProfile.team}-nobility`,
      name: `${getTeamName(userProfile.team)} Nobility Certificate`,
      style: 'royal' as const,
      team: userProfile.team as CertificateTeam,
      previewUrl: `/images/certificates/${userProfile.team}-certificate.png`,
      description: `The official certificate of nobility for members of the ${getTeamName(userProfile.team)}.`,
      availableForTier: ['basic', 'premium', 'royal']
    }
  ] : [];
  
  // Rank-based templates
  const rankTemplates = userProfile.rank && userProfile.rank <= 10 ? [
    {
      id: 'top-10-rank',
      name: 'Elite Top 10 Certificate',
      style: 'fantasy' as const,
      team: 'none' as CertificateTeam,
      previewUrl: '/images/certificates/top-rank-certificate.png',
      description: 'An exclusive certificate reserved for the top 10 nobles of the realm.',
      availableForRank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ] : [];
  
  // Founder-only templates
  const founderTemplates = userProfile.cosmetics?.foundersPass ? [
    {
      id: 'founders-certificate',
      name: 'Founder\'s Certificate',
      style: 'minimalist' as const,
      team: 'none' as CertificateTeam,
      previewUrl: '/images/certificates/founder-certificate.png',
      description: 'The exclusive certificate proving your founding status in the SpendThrone kingdom.',
      requiresFounder: true
    }
  ] : [];
  
  // Default template that everyone can access
  const defaultTemplates = [
    {
      id: 'default-certificate',
      name: 'Standard Certificate of Status',
      style: 'classic' as const,
      team: 'none' as CertificateTeam,
      previewUrl: '/images/certificates/default-certificate.png',
      description: 'The standard certificate showing your status and rank in the SpendThrone realm.',
      availableForTier: ['basic', 'premium', 'royal']
    }
  ];
  
  return [...teamTemplates, ...rankTemplates, ...founderTemplates, ...defaultTemplates];
};

/**
 * Generates a shareable image for a certificate
 */
export const generateShareableImage = async (
  certificate: Certificate,
  user: UserProfile
): Promise<string> => {
  // This would normally call an API endpoint to generate a shareable image
  // For now, we'll just return the certificate's image URL
  
  return certificate.imageUrl || `/api/generate-certificate-image?userId=${user.id}&certificateId=${certificate.id}`;
};

export default {
  generateCertificate,
  claimCertificate,
  getCertificateById,
  mintCertificateAsNFT,
  getAvailableCertificateTemplates,
  generateShareableImage
};
