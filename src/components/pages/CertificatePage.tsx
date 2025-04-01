
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Crown, Download, Check, Award } from 'lucide-react';
import { Certificate } from '@/types/certificates';
import { adaptToStandardUserProfile, ensureTotalSpent } from '@/utils/userTypeAdapter';
import { UserProfile } from '@/types/user';

// Mock certificate data
const defaultCertificate: Certificate = {
  id: 'cert-001',
  userId: 'user-001',
  title: 'Royal Spender',
  description: 'This certificate is awarded for exceptional spending on the platform.',
  imageUrl: '/images/certificates/royal-spender.png',
  issuedAt: new Date().toISOString(),
  mintAddress: '',
  status: 'minted',
  type: 'achievement',
  tier: 'gold',
};

const CertificatePage: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [certificate, setCertificate] = useState<Certificate>(defaultCertificate);
  const [isMinting, setIsMinting] = useState(false);
  
  // Adapt user to the standardized UserProfile type
  const standardizedUser = user ? adaptToStandardUserProfile(ensureTotalSpent(user as unknown as UserProfile)) : null;
  
  if (!standardizedUser) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="py-10 text-center">
            <h2 className="text-xl font-bold">Please log in to view certificates</h2>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleMintCertificate = async () => {
    setIsMinting(true);
    
    try {
      // Simulate API call for minting
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCertificate(prev => ({
        ...prev,
        status: 'minted',
        mintAddress: `mint_${Math.random().toString(36).substring(2, 15)}`,
      }));
      
      toast({
        title: "Certificate Minted!",
        description: "Your certificate has been successfully minted on the blockchain.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Minting Failed",
        description: "There was an error minting your certificate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsMinting(false);
    }
    
    // Return an empty string as required by the function signature
    return "";
  };
  
  const handleDownloadCertificate = async () => {
    // Simulate certificate download
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Certificate Downloaded",
      description: "Your certificate has been downloaded successfully.",
      variant: "success",
    });
    
    // Return an empty string as required by the function signature
    return "";
  };
  
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Royal Certificate</h1>
        <p className="text-royal-gold/80">Proof of your prestigious achievements</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="overflow-hidden glass-morphism border-royal-gold/30">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={certificate.imageUrl || '/images/certificates/default.png'} 
                  alt="Certificate" 
                  className="w-full object-cover"
                />
                
                <div className="absolute inset-0 flex items-center justify-center flex-col p-10 text-center text-royal-gold">
                  <Crown className="w-16 h-16 mb-4 text-royal-gold" />
                  <h2 className="text-3xl font-bold font-serif mb-2">{certificate.title}</h2>
                  <p className="text-lg mb-6">{certificate.description}</p>
                  <p className="text-sm">Awarded to</p>
                  <h3 className="text-2xl font-bold mb-6">{standardizedUser.displayName || standardizedUser.username}</h3>
                  <p className="text-sm">Issued on {new Date(certificate.issuedAt).toLocaleDateString()}</p>
                  
                  {certificate.mintAddress && (
                    <div className="mt-6 text-xs">
                      <p>NFT Address: {certificate.mintAddress.substring(0, 16)}...</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="glass-morphism border-royal-gold/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-royal-gold" />
                Certificate Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-royal-gold/5 rounded-lg border border-royal-gold/20">
                <h3 className="font-medium mb-2">Status: {certificate.status === 'minted' ? 'Minted' : 'Not Minted'}</h3>
                
                <div className="flex items-center text-sm text-green-500 mb-4">
                  {certificate.status === 'minted' ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      <span>Verified on blockchain</span>
                    </>
                  ) : (
                    <span className="text-amber-500">Pending verification</span>
                  )}
                </div>
                
                <div className="space-y-3">
                  {certificate.status !== 'minted' && (
                    <Button 
                      className="w-full bg-royal-gold hover:bg-royal-gold/90"
                      onClick={handleMintCertificate}
                      disabled={isMinting}
                    >
                      {isMinting ? 'Minting...' : 'Mint as NFT'}
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10"
                    onClick={handleDownloadCertificate}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Certificate Details</h3>
                <div className="space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium capitalize">{certificate.type}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Tier:</span>
                    <span className="font-medium capitalize">{certificate.tier}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Issue Date:</span>
                    <span className="font-medium">{new Date(certificate.issuedAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
