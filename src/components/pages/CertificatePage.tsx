
// Fixing only the cosmetics property in CertificatePage.tsx at line 67
// To address error: src/components/pages/CertificatePage.tsx(67,7): error TS2561: Object literal may only specify known properties, but 'borders' does not exist in type 'UserCosmeticState'. Did you mean to write 'border'?

import React, { useState, useEffect } from 'react';
import { User, UserSettings } from '@/types/user';
import { useParams } from 'react-router-dom';
import { useCertificate } from '@/hooks/useCertificate';
import { SparklesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { Certificate } from '@/types/certificate';
import CertificateDisplay from '@/components/certificate/CertificateDisplay';
import CertificateSharing from '@/components/certificate/CertificateSharing';
import CertificateHistory from '@/components/certificate/CertificateHistory';
import { createToast } from '@/utils/toastUtils';
import PageLayout from '@/components/layouts/PageLayout';
import PageTitle from '@/components/common/PageTitle';

const CertificatePage: React.FC = () => {
  const { certificateId } = useParams<{ certificateId: string }>();
  const { getCertificate, mintCertificate } = useCertificate();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);
  const [mintLoading, setMintLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  // Mock user if not available (for demo purposes)
  const mockUser: User = {
    id: '1',
    username: 'JohnDoe',
    displayName: 'John Doe',
    email: 'john@example.com',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Lorem ipsum dolor sit amet',
    joinDate: '2023-01-01',
    tier: 'royal',
    team: 'gold',
    rank: 1,
    previousRank: 2,
    totalSpent: 5000,
    walletBalance: 1000,
    isFounder: true,
    isVerified: true,
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: false,
      soundEffects: true,
      showEmailOnProfile: false,
      rankChangeAlerts: true,
      newFollowerAlerts: true,
      teamNotifications: true,
      showRank: true,
      showTeam: true,
      showSpending: true
    },
    cosmetics: {
      border: ['gold', 'silver'], // Changed from borders to border
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    profileBoosts: []
  };
  
  const currentUser = user || mockUser;
  
  useEffect(() => {
    if (certificateId) {
      fetchCertificate(certificateId);
    }
  }, [certificateId]);
  
  const fetchCertificate = async (id: string) => {
    setLoading(true);
    try {
      const cert = await getCertificate(id);
      setCertificate(cert);
    } catch (error) {
      toast({
        title: "Error fetching certificate",
        description: "We couldn't load the certificate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleMintCertificate = async () => {
    if (!certificate) return;
    
    setMintLoading(true);
    try {
      const result = await mintCertificate(certificate);
      
      setCertificate({
        ...certificate,
        isMinted: true,
        mintAddress: result.mintAddress
      });
      
      toast({
        title: "Certificate Minted!",
        description: "Your certificate has been successfully minted as an NFT.",
        variant: "success"
      });
    } catch (error) {
      toast({
        title: "Minting Failed",
        description: "There was an error minting your certificate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setMintLoading(false);
    }
  };
  
  if (loading) {
    return (
      <PageLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-gold"></div>
        </div>
      </PageLayout>
    );
  }
  
  if (!certificate) {
    return (
      <PageLayout>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold">Certificate Not Found</h2>
          <p className="text-white/70 mt-2">The certificate you're looking for does not exist or has been removed.</p>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <PageTitle 
        title="Royal Certificate of Nobility" 
        subtitle="Your proof of status and contributions to the realm"
        icon={<SparklesIcon className="h-6 w-6 text-royal-gold" />}
      />
      
      <Tabs defaultValue="view" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="view">View Certificate</TabsTrigger>
          <TabsTrigger value="share">Share</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="view" className="mt-6">
          <div className="space-y-6">
            <CertificateDisplay certificate={certificate} />
            
            {!certificate.isMinted && currentUser.id === certificate.userId && (
              <Card className="p-4 bg-black/30 border-royal-gold/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Mint as NFT</h3>
                    <p className="text-sm text-white/70">
                      Preserve this certificate on the blockchain forever and showcase it in your wallet.
                    </p>
                  </div>
                  <Button
                    onClick={handleMintCertificate}
                    disabled={mintLoading}
                    className="bg-royal-gold hover:bg-royal-gold/90 text-black"
                  >
                    {mintLoading ? 'Minting...' : 'Mint Certificate'}
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="share" className="mt-6">
          <CertificateSharing certificate={certificate} />
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <CertificateHistory certificate={certificate} />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default CertificatePage;
