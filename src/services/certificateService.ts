import { User, UserProfile } from '@/types/user';
import { Certificate, CertificateType, CertificateTeam, CertificateRepository, CertificateTemplateFactory, CertificateTemplate } from '@/types/certificates';
import { createCertificateRepository } from '@/repositories/certificateRepository';
import DefaultCertificateTemplateFactory from '@/factories/certificateTemplateFactory';

// Create the mock certificate NFT creation function since it doesn't exist
const createCertificateNFT = async (data: any) => {
  return {
    success: true,
    mintAddress: `mint_${Math.random().toString(36).substring(2, 9)}`
  };
};

// Create instances of repository and factory
const certificateRepository = createCertificateRepository();
const templateFactory = new DefaultCertificateTemplateFactory();

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
      // Update the certificate with minting information
      const updatedCertificate = {
        ...certificate,
        isMinted: true,
        mintAddress: result.mintAddress,
        mintedAt: new Date().toISOString()
      };
      
      // Save the updated certificate
      await certificateRepository.updateCertificate(updatedCertificate);
      
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
  return await certificateRepository.getCertificateById(certificateId);
};

/**
 * Gets available certificate templates for a user
 */
export const getAvailableCertificateTemplates = async (userProfile: UserProfile): Promise<CertificateTemplate[]> => {
  return await templateFactory.getTemplatesForUser(userProfile);
};

/**
 * Gets certificates owned by a user
 */
export const getUserCertificates = async (userId: string): Promise<Certificate[]> => {
  return await certificateRepository.getCertificatesForUser(userId);
};

/**
 * Gets minted certificates for a user
 */
export const getUserMintedCertificates = async (userId: string): Promise<Certificate[]> => {
  return await certificateRepository.getMintedCertificatesForUser(userId);
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
  getUserCertificates,
  getUserMintedCertificates,
  generateShareableImage
};
