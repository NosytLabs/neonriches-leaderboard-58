
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { UserSettings } from '@/types/user-consolidated';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCertificate } from '@/hooks/useCertificate';
import { Button } from '@/components/ui/button';
import { Sparkles, Download, Share2, Clock } from 'lucide-react';
import TeamCertificate from '@/components/certificates/TeamCertificate';
import { useToast } from '@/hooks/use-toast';

const CertificatePage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTemplate, setActiveTemplate] = useState('royal');
  const { 
    certificate, 
    templates, 
    userCertificates, 
    loading, 
    isMinting,
    mintCertificate,
    claimCertificate,
    generateShareableImage 
  } = useCertificate();

  useEffect(() => {
    // Fetch user certificate on component mount
    if (user?.id) {
      // Note: Implement fetch logic here when backend is available
    }
  }, [user?.id]);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Certificate of Nobility</h1>
        <p>Please login to view your certificates.</p>
      </div>
    );
  }

  // Default settings
  const defaultSettings: UserSettings = {
    profileVisibility: "public",
    allowProfileLinks: true,
    theme: "dark",
    notifications: true,
    emailNotifications: true,
    marketingEmails: false,
    soundEffects: true,
    darkMode: true,
    newFollowerAlerts: true,
    teamNotifications: true,
    showTeam: true,
    showSpending: true
  };

  const handleClaimCertificate = async () => {
    try {
      const result = await claimCertificate();
      if (result.success) {
        toast({
          title: "Certificate Claimed",
          description: "Your certificate of nobility has been created successfully.",
          variant: "success"
        });
      } else {
        toast({
          title: "Claim Failed",
          description: result.error || "Failed to claim certificate.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error claiming certificate:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    }
  };

  const handleMintNFT = async () => {
    if (!certificate) return;

    try {
      const result = await mintCertificate(certificate);
      if (result.success) {
        toast({
          title: "NFT Minted",
          description: "Your certificate has been minted as an NFT successfully.",
          variant: "success"
        });
      } else {
        toast({
          title: "Minting Failed",
          description: result.error || "Failed to mint certificate as NFT.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error minting certificate:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while minting.",
        variant: "destructive"
      });
    }
  };

  const handleDownload = async () => {
    if (!certificate) return;

    try {
      // Mock download function
      const result = await generateShareableImage(certificate);
      if (result) {
        toast({
          title: "Certificate Downloaded",
          description: "Your certificate has been downloaded successfully.",
          variant: "success"
        });
      }
    } catch (error) {
      console.error("Error downloading certificate:", error);
      toast({
        title: "Download Failed",
        description: "Failed to download your certificate.",
        variant: "destructive"
      });
    }
  };

  const handleShare = async () => {
    if (!certificate) return;

    try {
      // Mock share function that returns a string URL
      const shareImageUrl = await generateShareableImage(certificate);
      
      // Try to use native share API if available
      if (navigator.share) {
        await navigator.share({
          title: "My Certificate of Nobility",
          text: "Check out my Certificate of Nobility from SpendThrone!",
          url: window.location.href
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied",
          description: "Certificate link copied to clipboard!",
          variant: "success"
        });
      }
    } catch (error) {
      console.error("Error sharing certificate:", error);
      toast({
        title: "Share Failed",
        description: "Failed to share your certificate.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Certificate of Nobility</h1>
      <p className="text-gray-400 mb-8">A permanent record of your status and contributions</p>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="mt-4">Loading your royal certificates...</p>
        </div>
      ) : !certificate ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-gray-700 rounded-lg bg-black/20">
          <h3 className="text-xl font-semibold mb-2">No Certificate Found</h3>
          <p className="text-center text-gray-400 mb-6">You don't have a certificate yet. Claim your certificate of nobility to showcase your status.</p>
          
          <Button 
            onClick={handleClaimCertificate} 
            className="glass-morphism bg-purple-900/30"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Claim Certificate
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          <Tabs defaultValue={activeTemplate} onValueChange={setActiveTemplate}>
            <TabsList className="w-full">
              <TabsTrigger value="royal">Royal</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="royal" className="mt-8">
              <TeamCertificate 
                user={user} 
                certificate={certificate}
                onMintSuccess={(mintAddress) => console.log("Minted with address:", mintAddress)}
                onShare={() => handleShare()}
              />
            </TabsContent>
            
            <TabsContent value="team" className="mt-8">
              <TeamCertificate 
                user={user}
                certificate={certificate}
                onMintSuccess={(mintAddress) => console.log("Minted with address:", mintAddress)}
                onShare={() => handleShare()}
              />
            </TabsContent>
            
            <TabsContent value="history" className="mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Certificate History</h3>
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <Clock className="text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Certificate Claimed</p>
                      <p className="text-xs text-gray-500">
                        {certificate.dateIssued ? new Date(certificate.dateIssued).toLocaleDateString() : 'Unknown date'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="outline"
              onClick={handleDownload}
              className="glass-morphism border-white/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            
            <Button
              variant="outline"
              onClick={handleShare}
              className="glass-morphism border-white/10"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            
            <Button
              variant="outline"
              onClick={handleMintNFT}
              disabled={isMinting || certificate.mintAddress}
              className="glass-morphism border-white/10"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {isMinting
                ? "Minting..."
                : certificate.mintAddress
                ? "Already Minted"
                : "Mint as NFT"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
