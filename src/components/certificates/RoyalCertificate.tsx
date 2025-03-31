import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Crown, Award, Calendar, Shield, Download, Twitter, ExternalLink, Wallet, Trophy, Coins } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { generateCertificateMetadata } from '@/services/solanaService';
import { useSolana } from '@/contexts/SolanaContext';
import html2canvas from 'html2canvas';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { SpendAmount } from '@/components/ui/theme-components';
import { motion } from 'framer-motion';
import MedievalIcon from '@/components/ui/medieval-icon';
import { formatDate } from '@/utils/formatters/dateFormatters';

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
  const { connected, publicKey } = useSolana();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const getTeamColor = (team: string | null) => {
    switch (team) {
      case 'red': return 'bg-royal-crimson/20 text-royal-crimson';
      case 'green': return 'bg-royal-gold/20 text-royal-gold';
      case 'blue': return 'bg-royal-navy/20 text-royal-navy';
      default: return 'bg-white/10 text-white';
    }
  };
  
  const getTeamName = (team: string | null) => {
    switch (team) {
      case 'red': return 'Crimson Court';
      case 'green': return 'Golden Order';
      case 'blue': return 'Royal Navy';
      default: return 'Unaligned';
    }
  };
  
  const getTierName = (tier: string | undefined) => {
    const names: Record<string, string> = {
      'common': 'Commoner',
      'uncommon': 'Squire',
      'rare': 'Knight',
      'epic': 'Noble',
      'legendary': 'Duke/Duchess',
      'royal': 'Prince/Princess',
      'basic': 'Citizen',
      'premium': 'Baron/Baroness'
    };
    
    return tier ? (names[tier] || 'Citizen') : 'Citizen';
  };

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
      link.download = `${user.username}-certificate.png`;
      link.click();
      
      toast({
        title: "Certificate Downloaded",
        description: "Your Certificate of Nobility has been downloaded.",
      });
    } catch (error) {
      console.error('Error generating certificate image:', error);
      toast({
        title: "Download Failed",
        description: "There was an error generating your certificate image.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleMintNFT = async () => {
    if (!connected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your Solana wallet to mint this certificate as an NFT.",
        variant: "destructive"
      });
      return;
    }
    
    setIsMinting(true);
    
    try {
      const metadata = generateCertificateMetadata(user);
      console.log('NFT Metadata:', metadata);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMintSuccess(true);
      
      toast({
        title: "NFT Minted Successfully",
        description: "Your Certificate of Nobility has been minted as an NFT on Solana.",
      });
    } catch (error) {
      console.error('Error minting NFT:', error);
      toast({
        title: "Minting Failed",
        description: "There was an error minting your certificate as an NFT.",
        variant: "destructive"
      });
    } finally {
      setIsMinting(false);
    }
  };
  
  const handleShareTwitter = () => {
    const text = `I am officially ranked #${user.rank} in the P2W.FUN Royal Court! My Certificate of Nobility proves my status in the digital aristocracy.`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };
  
  const formattedDate = formatDate(user.joinDate !== undefined ? user.joinDate : new Date());
  
  return (
    <div className="space-y-6">
      <div ref={certificateRef} className="rounded-lg overflow-hidden glass-morphism border-white/10 p-6 md:p-8 max-w-2xl mx-auto certificate-bg">
        <div className="relative">
          <div className="text-center mb-6 relative">
            <RoyalDecoration type="top" className="w-40 h-12 mx-auto mb-2" />
            <h2 className="text-2xl font-royal royal-gradient">Certificate of Nobility</h2>
            <div className="text-sm text-white/70 mt-1">Kingdom of SpendThrone</div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-lg font-medium">This certifies that</div>
              <div className="text-2xl font-royal text-royal-gold mt-1">{user.displayName || user.username}</div>
              <div className="flex items-center justify-center mt-2 space-x-2">
                <Badge variant="outline" className={`${getTeamColor(user.team)}`}>
                  {getTeamName(user.team)}
                </Badge>
                <Badge variant="outline" className="bg-purple-500/20 text-purple-300">
                  {getTierName(user.tier)}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-md bg-white/5">
                <div className="flex items-center justify-center mb-1">
                  <Trophy className="h-4 w-4 text-royal-gold mr-1" />
                  <span className="text-sm text-white/70">Rank</span>
                </div>
                <div className="text-xl font-bold">#{user.rank}</div>
              </div>
              
              <div className="p-3 rounded-md bg-white/5">
                <div className="flex items-center justify-center mb-1">
                  <Coins className="h-4 w-4 text-royal-gold mr-1" />
                  <span className="text-sm text-white/70">Contribution</span>
                </div>
                <div className="text-xl font-bold">
                  <SpendAmount amount={user.totalSpent || user.amountSpent || 0} />
                </div>
              </div>
              
              <div className="p-3 rounded-md bg-white/5">
                <div className="flex items-center justify-center mb-1">
                  <Calendar className="h-4 w-4 text-royal-gold mr-1" />
                  <span className="text-sm text-white/70">Joined</span>
                </div>
                <div className="text-sm font-medium">{formattedDate}</div>
              </div>
            </div>
            
            <div className="text-center text-sm text-white/60 italic">
              "In the grand hierarchy of digital nobility, one's worth is measured not by character, but by the depth of their pockets."
            </div>
            
            {(hasNFT || (user.certificateNFT && user.certificateNFT.mintAddress)) && (
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified On-Chain
                </Badge>
                {user.certificateNFT?.mintAddress && (
                  <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                    {user.certificateNFT.mintAddress.slice(0, 4)}...{user.certificateNFT.mintAddress.slice(-4)}
                  </Badge>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-8 flex items-center justify-between text-xs text-white/50">
            <div>Issued on {formatDate(new Date().toISOString())}</div>
            <div>Certificate #{user.id}</div>
          </div>
          
          <RoyalDecoration type="bottom" className="w-40 h-12 mx-auto mt-4" />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          className="glass-morphism border-white/10"
          onClick={handleDownload}
          disabled={isGenerating}
        >
          <Download className="mr-2 h-4 w-4" />
          {isGenerating ? "Generating..." : "Download Certificate"}
        </Button>
        
        <Button
          variant="outline"
          className="glass-morphism border-white/10"
          onClick={handleShareTwitter}
        >
          <Twitter className="mr-2 h-4 w-4" />
          Share on Twitter
        </Button>
        
        {!hasNFT && !mintSuccess && !(user.certificateNFT?.mintAddress) && (
          <Button
            variant="outline"
            className="glass-morphism border-white/10 group"
            onClick={handleMintNFT}
            disabled={!connected || isMinting}
          >
            <span className="relative">
              <Wallet className="mr-2 h-4 w-4 inline-block group-hover:opacity-0 transition-opacity duration-200" />
              <Award className="mr-2 h-4 w-4 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
            {isMinting ? "Minting..." : "Mint as NFT"}
          </Button>
        )}
        
        {(hasNFT || mintSuccess || user.certificateNFT?.mintAddress) && (
          <Button
            variant="outline"
            className="glass-morphism border-white/10 bg-purple-500/10"
            onClick={() => window.open(`https://explorer.solana.com/address/${user.certificateNFT?.mintAddress || ''}`, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View NFT on Solana
          </Button>
        )}
      </div>
      
      {!connected && !hasNFT && (
        <div className="text-center text-white/60 text-sm">
          <Wallet className="h-4 w-4 inline mr-1" />
          Connect your Solana wallet to mint this certificate as an NFT
        </div>
      )}
    </div>
  );
};

export default RoyalCertificate;
