
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Crown, Award, Calendar, Shield, Download, Twitter, ExternalLink, Wallet } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { generateCertificateMetadata } from '@/services/solanaService';
import html2canvas from 'html2canvas';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { SpendAmount } from '@/components/ui/theme-components';
import { motion } from 'framer-motion';
import MedievalIcon from '@/components/ui/medieval-icon';
import { formatDate } from '@/utils/dates';

interface RoyalCertificateProps {
  user: UserProfile;
  isPreview?: boolean;
  hasNFT?: boolean;
}

const RoyalCertificate: React.FC<RoyalCertificateProps> = ({ 
  user, 
  isPreview = false,
  hasNFT = false
}) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${user.username}-nobility-certificate.png`;
      link.click();
      
      toast({
        title: "Certificate Downloaded",
        description: "Your certificate has been downloaded successfully.",
      });
    } catch (error) {
      console.error('Error generating certificate:', error);
      toast({
        title: "Error",
        description: "Failed to generate certificate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleShareTwitter = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    try {
      // Generate image first (would be uploaded to server in real implementation)
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: null,
      });
      
      const image = canvas.toDataURL('image/png');
      
      // In a real implementation, you would upload this image to your server
      // and get a URL to share. For this demo, we'll just pretend.
      const imageUrl = 'https://p2w.fun/certificate/preview.png';
      
      // Create Twitter share URL
      const tweetText = `I've achieved rank #${user.rank} in @P2WFUN's Royal Court with a contribution of $${user.amountSpent}! Join the nobility at`;
      const tweetUrl = `https://p2w.fun/profile/${user.username}`;
      const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(tweetUrl)}`;
      
      // Open Twitter share dialog
      window.open(twitterShareUrl, '_blank');
      
      toast({
        title: "Preparing Twitter Share",
        description: "Opening Twitter to share your certificate.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare Twitter share. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleMintNFT = async () => {
    setIsMinting(true);
    try {
      // In a real implementation, this would call your Solana service to mint an NFT
      const metadata = generateCertificateMetadata(user);
      console.log('Certificate metadata for minting:', metadata);
      
      // Simulate a delay for the minting process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "NFT Minting Started",
        description: "Your certificate is being minted as an NFT. This may take a few moments.",
      });
      
      // In a real implementation, you would wait for the transaction to confirm
      setTimeout(() => {
        toast({
          title: "NFT Minted Successfully",
          description: "Your certificate has been minted as an NFT on the Solana blockchain.",
        });
      }, 3000);
    } catch (error) {
      console.error('Error minting NFT:', error);
      toast({
        title: "Minting Failed",
        description: "Failed to mint your certificate as an NFT. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsMinting(false);
    }
  };
  
  return (
    <div className="flex flex-col space-y-4">
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Award className="h-5 w-5 text-royal-gold mr-2" />
            Certificate of Nobility
            {hasNFT && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-royal-gold/20 text-royal-gold rounded-md">
                NFT Minted
              </span>
            )}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div 
            ref={certificateRef}
            className="certificate-container relative overflow-hidden p-6 border-4 border-royal-gold/40 rounded-md bg-gradient-to-b from-[#12121f] to-[#1a1a2e] shadow-lg"
          >
            <RoyalDecoration variant="corner-flourish" position="top-left" color="gold" size="sm" />
            <RoyalDecoration variant="corner-flourish" position="top-right" color="gold" size="sm" />
            <RoyalDecoration variant="corner-flourish" position="bottom-left" color="gold" size="sm" />
            <RoyalDecoration variant="corner-flourish" position="bottom-right" color="gold" size="sm" />
            
            <div className="text-center">
              <motion.div 
                initial={isPreview ? { opacity: 0, y: -20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-2"
              >
                <MedievalIcon name="crown" color="gold" size="xl" />
              </motion.div>
              
              <motion.h1 
                initial={isPreview ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-royal text-center royal-gradient mb-1"
              >
                Certificate of Nobility
              </motion.h1>
              
              <motion.div
                initial={isPreview ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-white/60 mb-4"
              >
                Pay to Win Aristocracy
              </motion.div>
              
              <motion.div
                initial={isPreview ? { opacity: 0, scale: 0.9 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 p-4 rounded-md mb-6"
              >
                <p className="mb-4 text-white/80 italic">
                  This certificate proudly acknowledges that
                </p>
                
                <h2 className="text-xl font-bold mb-2 royal-gradient">
                  {user.displayName || user.username}
                </h2>
                
                <p className="mb-4 text-white/80 italic">
                  has attained the distinguished rank of
                </p>
                
                <div className="flex justify-center items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-royal-gold" />
                  <span className="text-3xl font-royal royal-gradient">#{user.rank}</span>
                </div>
                
                <p className="text-sm text-white/60 mb-4">
                  in the Royal Court of P2W.FUN
                </p>
                
                <div className="flex justify-center items-center gap-1 text-white/80">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    Issued on {formatDate(new Date())}
                  </span>
                </div>
              </motion.div>
              
              <motion.div
                initial={isPreview ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-3 gap-4 mb-4"
              >
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-md">
                  <Crown className="h-5 w-5 text-royal-crimson mb-1" />
                  <span className="text-xs text-white/60">Nobility Tier</span>
                  <span className="font-bold capitalize">{user.tier}</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-md">
                  <Shield className="h-5 w-5 text-royal-navy-bright mb-1" />
                  <span className="text-xs text-white/60">Royal House</span>
                  <span className="font-bold capitalize">{user.team || 'None'}</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-md">
                  <Wallet className="h-5 w-5 text-royal-gold mb-1" />
                  <span className="text-xs text-white/60">Contribution</span>
                  <SpendAmount amount={user.amountSpent || 0} size="sm" />
                </div>
              </motion.div>
              
              <motion.div
                initial={isPreview ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xs text-white/40 italic"
              >
                Verified by the P2W.FUN Royal Treasury on the Solana Blockchain
              </motion.div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-wrap gap-2 justify-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownload}
            disabled={isGenerating}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          
          <Button 
            variant="outline"
            size="sm"
            onClick={handleShareTwitter}
            disabled={isGenerating}
            className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2]"
          >
            <Twitter className="h-4 w-4 mr-2" />
            Share on Twitter
          </Button>
          
          {!hasNFT && (
            <Button 
              size="sm"
              onClick={handleMintNFT}
              disabled={isMinting}
              className="bg-gradient-to-r from-purple-700 to-orange-500 text-white hover:from-purple-800 hover:to-orange-600"
            >
              <MedievalIcon name="sparkles" size="sm" className="mr-2" />
              {isMinting ? "Minting..." : "Mint as NFT"}
            </Button>
          )}
          
          {hasNFT && (
            <Button 
              variant="outline"
              size="sm"
              className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View NFT
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoyalCertificate;
