
import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import useAuth from '@/hooks/useAuth';
import CertificateDisplay from '@/components/certificates/CertificateDisplay';
import { Certificate, CertificateTeam, CertificateType, CertificateStyle } from '@/types/certificates';
import { wrapCertificateMint, wrapCertificateShare, wrapCertificateDownload, adaptCertificate } from '@/utils/certificateAdapter';

const CertificatePage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isMinting, setIsMinting] = useState(false);
  
  // Create a sample certificate for demonstration
  const certificate: Certificate = adaptCertificate({
    id: 'cert-123456',
    title: 'Master Spender Certificate',
    description: 'Awarded for exceptional spending prowess in the Royal Court',
    imageUrl: '/assets/certificates/royal-spender.jpg',
    userId: user?.id || '',
    recipientName: user?.displayName || user?.username || '',
    dateIssued: new Date().toISOString(),
    type: 'supporter' as CertificateType,
    style: 'royal' as CertificateStyle,
    team: 'gold' as CertificateTeam,
    status: 'issued',
    rarity: 'legendary'
  });
  
  const handleMint = async (cert: Certificate) => {
    setIsMinting(true);
    
    try {
      const success = await wrapCertificateMint(cert);
      
      if (success) {
        toast({
          title: 'Certificate Minted!',
          description: 'Your certificate has been successfully minted to the blockchain.',
          variant: 'success'
        });
        return true;
      } else {
        throw new Error('Minting failed');
      }
    } catch (error) {
      toast({
        title: 'Minting Failed',
        description: 'There was an error minting your certificate. Please try again.',
        variant: 'destructive'
      });
      return false;
    } finally {
      setIsMinting(false);
    }
  };
  
  const handleShare = async (cert: Certificate) => {
    try {
      const shareUrl = await wrapCertificateShare(cert);
      
      toast({
        title: 'Certificate Shared!',
        description: `Your certificate sharing link: ${shareUrl}`,
        variant: 'success'
      });
      
      // In a real app, you'd copy to clipboard:
      // navigator.clipboard.writeText(shareUrl);
      
      return shareUrl;
    } catch (error) {
      toast({
        title: 'Sharing Failed',
        description: 'There was an error sharing your certificate. Please try again.',
        variant: 'destructive'
      });
      return '';
    }
  };
  
  const handleDownload = (cert: Certificate) => {
    try {
      wrapCertificateDownload(cert);
      
      toast({
        title: 'Certificate Downloaded!',
        description: 'Your certificate has been downloaded.',
        variant: 'success'
      });
    } catch (error) {
      toast({
        title: 'Download Failed',
        description: 'There was an error downloading your certificate. Please try again.',
        variant: 'destructive'
      });
    }
  };
  
  if (!user) {
    return (
      <Shell>
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Certificate Viewer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Please log in to view your certificates.</p>
              <Button className="mt-4">Log In</Button>
            </CardContent>
          </Card>
        </div>
      </Shell>
    );
  }
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Royal Certificates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificateDisplay 
            certificate={certificate}
            user={user}
            onMint={handleMint}
            onShare={handleShare}
            onDownload={handleDownload}
            isMinting={isMinting}
          />
          
          {/* Mock certificates for UI demonstration */}
          <CertificateDisplay 
            certificate={adaptCertificate({
              id: 'cert-789012',
              title: 'Royal Court Member',
              description: 'Recognizes official membership in the Royal Court',
              imageUrl: '/assets/certificates/royal-member.jpg',
              userId: user.id,
              recipientName: user.displayName || user.username,
              dateIssued: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
              type: 'royal',
              style: 'ornate',
              team: 'gold',
              status: 'issued',
              mintAddress: '0x1234567890abcdef',
              mintDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
              isMinted: true
            })}
            user={user}
            onMint={handleMint}
            onShare={handleShare}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </Shell>
  );
};

export default CertificatePage;
