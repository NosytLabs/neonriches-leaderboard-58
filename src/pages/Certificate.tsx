
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Certificate } from '@/types/certificates';
import { UserProfile } from '@/types/user-consolidated';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { toStandardUserProfile } from '@/utils/typeUnifier';
import TeamCertificate from '@/components/certificates/TeamCertificate';

const CertificatePage: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isMinting, setIsMinting] = useState(false);
  const [certificate, setCertificate] = useState<Certificate>({
    id: 'cert-123',
    title: 'Certificate of Digital Nobility',
    description: 'This certifies your status in the SpendThrone digital hierarchy',
    imageUrl: '/assets/certificates/nobility.png',
    type: 'noble',
    style: 'ornate',
    team: user?.team || 'none',
    userId: user?.id || '',
    username: user?.username || '',
    issuedAt: new Date().toISOString(),
    dateIssued: new Date().toISOString(),
    isMinted: false,
    previewUrl: '/assets/certificates/nobility-preview.png',
    status: 'issued',
    name: 'Digital Nobility'
  });
  
  // Create a standardized user profile
  const standardUser: UserProfile = user ? toStandardUserProfile(user) : {} as UserProfile;
  
  const handleMintSuccess = (mintAddress: string) => {
    setCertificate(prev => ({
      ...prev,
      isMinted: true,
      mintAddress,
      mintDate: new Date().toISOString()
    }));
    
    toast({
      title: "Certificate Minted",
      description: "Your digital certificate has been minted as an NFT!",
      variant: "default"
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Certificate Shared",
      description: "A link to your certificate has been copied to your clipboard!",
      variant: "default"
    });
  };
  
  if (!user) {
    return (
      <Shell>
        <div className="container px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Certificate</h1>
          <p>Please log in to view your certificate.</p>
        </div>
      </Shell>
    );
  }
  
  return (
    <Shell>
      <div className="container px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Your Royal Certificate</h1>
        <p className="text-muted-foreground mb-6">
          This certificate represents your standing in the SpendThrone hierarchy.
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          <TeamCertificate 
            user={standardUser}
            certificate={certificate}
            onMintSuccess={handleMintSuccess}
            onShare={handleShare}
          />
        </div>
      </div>
    </Shell>
  );
};

export default CertificatePage;
