
import { useState, useEffect } from 'react';
import { Certificate, CertificateTemplate, CertificateType } from '@/types/certificates';
import { UserProfile } from '@/types/user';
import certificateService from '@/services/certificateService';
import { useToast } from '@/hooks/use-toast';

interface UseCertificateProps {
  user: UserProfile;
  certificateId?: string;
}

export const useCertificate = ({ user, certificateId }: UseCertificateProps) => {
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [templates, setTemplates] = useState<CertificateTemplate[]>([]);
  const [userCertificates, setUserCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      try {
        // If certificateId is provided, load that specific certificate
        if (certificateId) {
          const cert = await certificateService.getCertificateById(certificateId);
          if (cert) {
            setCertificate(cert);
          }
        }
        
        // Load available templates and user certificates
        const [availableTemplates, userCerts] = await Promise.all([
          certificateService.getAvailableCertificateTemplates(user),
          certificateService.getUserCertificates(user.id)
        ]);
        
        setTemplates(availableTemplates);
        setUserCertificates(userCerts);
      } catch (error) {
        console.error('Error loading certificate data:', error);
        toast({
          title: 'Error Loading Certificate Data',
          description: 'Could not load certificate information. Please try again.',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };
    
    if (user?.id) {
      loadData();
    }
  }, [user, certificateId, toast]);

  const mintCertificate = async (certificateToMint: Certificate): Promise<boolean> => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to mint a certificate.',
        variant: 'destructive'
      });
      return false;
    }
    
    setIsMinting(true);
    
    try {
      const result = await certificateService.mintCertificateAsNFT(certificateToMint, user);
      
      if (result.success) {
        // Update the certificate if we're viewing it
        if (certificate && certificate.id === certificateToMint.id) {
          setCertificate({
            ...certificate,
            isMinted: true,
            mintAddress: result.mintAddress
          });
        }
        
        // Update the user certificates list
        const updatedCerts = userCertificates.map(cert => 
          cert.id === certificateToMint.id 
            ? { 
                ...cert, 
                isMinted: true, 
                mintAddress: result.mintAddress
              }
            : cert
        );
        setUserCertificates(updatedCerts);
        
        toast({
          title: 'Certificate Minted',
          description: 'Your certificate has been successfully minted as an NFT.',
        });
        
        return true;
      } else {
        toast({
          title: 'Minting Failed',
          description: 'There was an error minting your certificate as an NFT.',
          variant: 'destructive'
        });
        
        return false;
      }
    } catch (error) {
      console.error('Error minting certificate:', error);
      toast({
        title: 'Minting Failed',
        description: 'There was an unexpected error during the minting process.',
        variant: 'destructive'
      });
      
      return false;
    } finally {
      setIsMinting(false);
    }
  };

  const claimCertificate = async (type: CertificateType = 'nobility'): Promise<boolean> => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to claim a certificate.',
        variant: 'destructive'
      });
      return false;
    }
    
    try {
      const success = await certificateService.claimCertificate(user, type);
      
      if (success) {
        // Refresh certificates after claiming
        const updatedCerts = await certificateService.getUserCertificates(user.id);
        setUserCertificates(updatedCerts);
        
        toast({
          title: 'Certificate Claimed',
          description: 'Your certificate has been successfully claimed.',
        });
        
        return true;
      } else {
        toast({
          title: 'Claim Failed',
          description: 'There was an error claiming your certificate.',
          variant: 'destructive'
        });
        
        return false;
      }
    } catch (error) {
      console.error('Error claiming certificate:', error);
      toast({
        title: 'Claim Failed',
        description: 'There was an unexpected error during the claiming process.',
        variant: 'destructive'
      });
      
      return false;
    }
  };

  const generateShareableImage = async (certificateToShare: Certificate): Promise<string> => {
    try {
      const imageUrl = await certificateService.generateShareableImage(certificateToShare, user);
      
      if (imageUrl) {
        toast({
          title: 'Image Generated',
          description: 'Shareable image has been generated successfully.'
        });
        return imageUrl;
      } else {
        // Fallback in case no URL is returned
        toast({
          title: 'Image Generation Limited',
          description: 'Using default certificate image.',
          variant: 'destructive'
        });
        return certificateToShare.imageUrl || '/images/certificates/default.png';
      }
    } catch (error) {
      console.error('Error generating shareable image:', error);
      toast({
        title: 'Image Generation Failed',
        description: 'Could not generate a shareable image for your certificate.',
        variant: 'destructive'
      });
      // Return a fallback URL in case of error
      return certificateToShare.imageUrl || '/images/certificates/default.png';
    }
  };

  return {
    certificate,
    templates,
    userCertificates,
    loading,
    isMinting,
    mintCertificate,
    claimCertificate,
    generateShareableImage
  };
};

export default useCertificate;
