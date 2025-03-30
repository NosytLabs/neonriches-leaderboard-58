import React, { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Share2, Award, Crown, Shield, Wallet, ExternalLink } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { Certificate } from '@/types/certificates';
import { formatDate } from '@/utils/formatters';
import { getTeamName, getTeamColor, getTeamBorderColor } from '@/utils/teamUtils';
import { useSolana } from '@/contexts/SolanaContext';
import { mintCertificateAsNFT, generateShareableImage } from '@/services/certificateService';
import html2canvas from 'html2canvas';

interface TeamCertificateProps {
  user: UserProfile;
  certificate?: Certificate;
  onMintSuccess?: (mintAddress: string) => void;
  onShare?: () => void;
  isPreview?: boolean;
}

const TeamCertificate: React.FC<TeamCertificateProps> = ({
  user,
  certificate,
  onMintSuccess,
  onShare,
  isPreview = false
}) => {
  const { toast } = useToast();
  const { connected } = useSolana();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const teamName = getTeamName(user.team);
  const teamColor = getTeamColor(user.team);
  const teamBorder = getTeamBorderColor(user.team);
  const createdDate = certificate?.createdAt || new Date().toISOString();
  
  const getCertificateTitle = () => {
    if (user.rank === 1) {
      return "Royal Crown Certificate";
    } else if (user.rank && user.rank <= 10) {
      return "Elite Certificate of Nobility";
    } else if (user.rank && user.rank <= 100) {
      return "Distinguished Certificate of Status";
    } else {
      return "Certificate of Digital Status";
    }
  };
  
  const getUserTitle = () => {
    if (user.rank === 1) {
      return "Royal Sovereign";
    } else if (user.rank && user.rank <= 5) {
      return "Grand Duke/Duchess";
    } else if (user.rank && user.rank <= 20) {
      return "Count/Countess";
    } else if (user.rank && user.rank <= 50) {
      return "Baron/Baroness";
    } else if (user.rank && user.rank <= 100) {
      return "Knight/Dame";
    } else {
      return "Esquire";
    }
  };
  
  const getTeamMotto = () => {
    switch (user.team) {
      case 'red':
        return "Blood and Gold Above All";
      case 'green':
        return "Fortune Favors the Bold";
      case 'blue':
        return "Honor Through Knowledge and Service";
      default:
        return "Status Through Spending";
    }
  };
  
  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    setIsDownloading(true);
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
        description: "Your royal certificate has been saved to your device.",
      });
    } catch (error) {
      console.error('Error generating certificate image:', error);
      toast({
        title: "Download Failed",
        description: "There was an error generating your certificate image.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
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
    
    if (!certificate) {
      toast({
        title: "Certificate Required",
        description: "You need to have a certificate before minting an NFT.",
        variant: "destructive"
      });
      return;
    }
    
    setIsMinting(true);
    
    try {
      const result = await mintCertificateAsNFT(certificate, user);
      
      if (result.success && result.mintAddress) {
        toast({
          title: "NFT Minted Successfully",
          description: "Your Certificate of Nobility has been minted as an NFT on Solana.",
        });
        
        if (onMintSuccess) {
          onMintSuccess(result.mintAddress);
        }
      } else {
        throw new Error("Minting failed");
      }
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
  
  const handleShare = async () => {
    setIsSharing(true);
    
    try {
      if (!certificate) {
        throw new Error("No certificate to share");
      }
      
      const shareImageUrl = await generateShareableImage(certificate, user);
      
      if (navigator.share) {
        await navigator.share({
          title: `${user.displayName || user.username}'s SpendThrone Certificate`,
          text: `I am officially ranked #${user.rank} in the SpendThrone hierarchy. Behold my digital nobility!`,
          url: certificate.shareUrl || certificate.imageUrl || window.location.href,
        });
      } else {
        const shareUrl = certificate.shareUrl || certificate.imageUrl || window.location.href;
        await navigator.clipboard.writeText(shareUrl);
        
        toast({
          title: "Link Copied",
          description: "Certificate link copied to clipboard. Share it with the world!",
        });
      }
      
      if (onShare) {
        onShare();
      }
    } catch (error) {
      console.error('Error sharing certificate:', error);
      toast({
        title: "Sharing Failed",
        description: "There was an error sharing your certificate.",
        variant: "destructive"
      });
    } finally {
      setIsSharing(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center space-y-6">
      <div 
        ref={certificateRef} 
        className={`relative max-w-2xl w-full p-8 parchment-bg border-8 ${teamBorder} rounded-lg shadow-xl`}
      >
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className={`absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 ${teamBorder}`}></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className={`absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 ${teamBorder}`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <div className={`absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 ${teamBorder}`}></div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className={`absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 ${teamBorder}`}></div>
        </div>

        <div className="space-y-6 text-center">
          <div>
            <h1 className={`text-2xl font-bold font-medieval-title ${teamColor}`}>
              {getCertificateTitle()}
            </h1>
            <p className="text-sm text-gray-600 mt-1">Kingdom of SpendThrone</p>
            <p className="text-xs text-gray-500 italic">{getTeamMotto()}</p>
          </div>

          <div className="space-y-4">
            <p className="text-lg">This certifies that</p>
            <h2 className={`text-2xl font-bold ${teamColor}`}>
              {user.displayName || user.username}
            </h2>
            <p className="text-base">
              has attained the rank of <span className="font-bold">{getUserTitle()}</span>{' '}
              within the <span className={`font-bold ${teamColor}`}>{teamName}</span>
            </p>
            
            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="border rounded p-3">
                <div className="text-sm text-gray-600">Rank</div>
                <div className="text-xl font-bold">#{user.rank || '—'}</div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm text-gray-600">Contributions</div>
                <div className="text-xl font-bold">
                  ${user.amountSpent?.toLocaleString() || '0'}
                </div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm text-gray-600">Joined</div>
                <div className="text-sm font-medium">{formatDate(user.joinDate !== undefined ? user.joinDate : new Date())}</div>
              </div>
            </div>
            
            <p className="text-sm italic text-gray-600 my-4">
              "Wealth in the physical realm is fleeting, but digital status on SpendThrone is forever."
            </p>
            
            <div className="flex justify-between items-end mt-6">
              <div>
                <div className={`royal-seal ${teamBorder.replace('border', 'bg')}`}>
                  <span className="text-white text-xs">ROYAL SEAL</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Issued on</div>
                <div>{formatDate(createdDate)}</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mt-4">
              Certificate #{certificate?.id || user.id}
            </div>
            
            {certificate?.isMinted && certificate?.nftMintAddress && (
              <div className="flex justify-center mt-2">
                <Badge variant="outline" className="bg-green-500/20 text-green-600">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified On-Chain: {certificate.nftMintAddress.substring(0, 6)}...
                </Badge>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          className="glass-morphism border-white/10"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <Download className="mr-2 h-4 w-4" />
          {isDownloading ? "Generating..." : "Download Certificate"}
        </Button>
        
        <Button
          variant="outline"
          className="glass-morphism border-white/10"
          onClick={handleShare}
          disabled={isSharing || !certificate}
        >
          <Share2 className="mr-2 h-4 w-4" />
          {isSharing ? "Sharing..." : "Share Certificate"}
        </Button>
        
        {!certificate?.isMinted && (
          <Button
            variant="outline"
            className="glass-morphism border-white/10"
            onClick={handleMintNFT}
            disabled={!connected || isMinting || !certificate}
          >
            <Wallet className="mr-2 h-4 w-4" />
            {isMinting ? "Minting..." : "Mint as NFT"}
          </Button>
        )}
        
        {certificate?.isMinted && certificate?.nftMintAddress && (
          <Button
            variant="outline"
            className="glass-morphism border-white/10 bg-purple-500/10"
            onClick={() => window.open(`https://explorer.solana.com/address/${certificate.nftMintAddress}`, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View NFT on Solana
          </Button>
        )}
      </div>
      
      {!connected && (
        <div className="text-center text-white/60 text-sm">
          <Wallet className="h-4 w-4 inline mr-1" />
          Connect your Solana wallet to mint this certificate as an NFT
        </div>
      )}
    </div>
  );
};

export default TeamCertificate;
