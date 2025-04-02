import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Certificate } from '@/types/certificates';
import CertificateDisplay from '@/components/certificates/CertificateDisplay';
import useAuth from '@/hooks/useAuth';
import { wrapCertificateMint, wrapCertificateShare, wrapCertificateDownload } from '@/utils/certificateAdapter';
import { toStandardUserProfile } from '@/utils/typeUnifier';

const CertificatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchCertificate = async () => {
      // Simulate fetching certificate data
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock certificate data
      const mockCertificate: Certificate = {
        id: id || 'cert_123',
        title: 'Royal Supporter',
        description: 'Awarded for outstanding support of the Royal Throne.',
        imageUrl: '/assets/certificates/supporter.png',
        userId: user?.id || 'user_123',
        dateIssued: new Date().toISOString(),
        mintAddress: '',
        mintDate: '',
        type: 'supporter',
        style: 'standard',
        team: 'gold',
        status: 'issued',
        rarity: 'rare',
        issuerName: 'Royal System',
        recipientName: user?.displayName || 'User',
        recipientId: user?.id || 'user_123',
      };
      
      setCertificate(mockCertificate);
    };
    
    fetchCertificate();
  }, [id, user]);
  
  // Adapt the certificate mint, share, and download functions
  const handleMintCertificate = wrapCertificateMint(async (cert) => {
    try {
      setIsMinting(true);
      // Simulate minting
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update the certificate with mint details
      setCertificate({
        ...certificate!,
        mintAddress: `mint_${Math.random().toString(36).substring(2, 15)}`,
        mintDate: new Date().toISOString(),
        status: 'minted'
      });
      
      toast({
        title: "Certificate Minted!",
        description: "Your certificate has been successfully minted on the blockchain.",
      });
      
      return true;
    } catch (error) {
      console.error('Error minting certificate:', error);
      
      toast({
        title: "Minting Failed",
        description: "There was an error minting your certificate. Please try again.",
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsMinting(false);
    }
  });
  
  const handleShareCertificate = wrapCertificateShare(async (cert) => {
    try {
      // Simulate sharing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const shareUrl = `https://yourwebsite.com/certificate/${id}`;
      
      toast({
        title: "Certificate Shared",
        description: "Share link copied to clipboard!",
      });
      
      // Copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      
      return shareUrl;
    } catch (error) {
      console.error('Error sharing certificate:', error);
      
      toast({
        title: "Sharing Failed",
        description: "There was an error sharing your certificate.",
        variant: "destructive"
      });
      
      return '';
    }
  });
  
  const handleDownloadCertificate = wrapCertificateDownload((cert) => {
    try {
      // In a real app, this would download an image
      toast({
        title: "Certificate Downloaded",
        description: "Your certificate has been downloaded.",
      });
    } catch (error) {
      console.error('Error downloading certificate:', error);
      
      toast({
        title: "Download Failed",
        description: "There was an error downloading your certificate.",
        variant: "destructive"
      });
    }
  });
  
  
  return (
    <Shell>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            ← Back
          </Button>
          
          <h1 className="text-3xl font-bold">Certificate Details</h1>
        </div>
        
        {certificate ? (
          <CertificateDisplay
            certificate={certificate}
            user={toStandardUserProfile(user)}
            onMint={handleMintCertificate}
            onShare={handleShareCertificate}
            onDownload={handleDownloadCertificate}
            isMinting={isMinting}
          />
        ) : (
          <div className="glass-morphism border-white/10 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Loading Certificate...</h2>
            <div className="w-8 h-8 border-4 border-t-royal-gold border-white/20 rounded-full animate-spin mx-auto"></div>
          </div>
        )}
      </div>
    </Shell>
  );
};

export default CertificatePage;
