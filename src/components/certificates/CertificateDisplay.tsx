
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Share2, Download, Award, Calendar, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Certificate } from '@/types/certificates';
import { getTeamColor } from '@/utils/teamUtils';
import { useToast } from '@/hooks/use-toast';

interface CertificateDisplayProps {
  certificate: Certificate;
  onShare?: () => void;
  onDownload?: () => void;
  onView?: () => void;
  className?: string;
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({
  certificate,
  onShare,
  onDownload,
  onView,
  className = '',
}) => {
  const { toast } = useToast();
  
  if (!certificate) return null;
  
  const handleShare = () => {
    if (onShare) {
      onShare();
      return;
    }
    
    // Default share functionality if no callback provided
    if (navigator.share) {
      navigator.share({
        title: certificate.title || `Royal Certificate for ${certificate.userDisplayName}`,
        text: certificate.description || 'Check out my royal certificate!',
        url: certificate.shareUrl || window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback if Web Share API not available
      toast({
        title: 'Share Link Copied',
        description: 'Certificate link copied to clipboard.',
      });
      navigator.clipboard.writeText(window.location.href);
    }
  };
  
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
      return;
    }
    
    // Default download functionality
    toast({
      title: 'Download Started',
      description: 'Your certificate is being downloaded.',
    });
    
    // Create a link element
    const link = document.createElement('a');
    link.href = certificate.imageUrl;
    link.download = `certificate-${certificate.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const getTimeAgo = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (e) {
      return 'recently';
    }
  };
  
  const getCertificateTypeColor = () => {
    switch (certificate.type) {
      case 'rank': return 'bg-purple-500/20 text-purple-400';
      case 'achievement': return 'bg-green-500/20 text-green-400';
      case 'membership': return 'bg-blue-500/20 text-blue-400';
      case 'royal': return 'bg-amber-500/20 text-amber-400';
      case 'special': return 'bg-red-500/20 text-red-400';
      case 'event': return 'bg-teal-500/20 text-teal-400';
      case 'milestone': return 'bg-pink-500/20 text-pink-400';
      case 'team': return 'bg-indigo-500/20 text-indigo-400';
      case 'nobility': return 'bg-rose-500/20 text-rose-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  const getTeamBadge = () => {
    if (!certificate.team || certificate.team === 'neutral') return null;
    
    const teamColorClass = getTeamColor(certificate.team);
    
    return (
      <Badge className={`${teamColorClass} ml-2`}>
        <Shield className="h-3 w-3 mr-1" />
        {certificate.team.charAt(0).toUpperCase() + certificate.team.slice(1)}
      </Badge>
    );
  };
  
  return (
    <Card className={`glass-morphism border-royal-gold/20 overflow-hidden ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center">
            <Badge className={getCertificateTypeColor()}>
              <Award className="h-3 w-3 mr-1" />
              {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}
            </Badge>
            {getTeamBadge()}
          </div>
          <Badge variant="outline" className="text-white/70">
            <Calendar className="h-3 w-3 mr-1" />
            {certificate.createdAt ? getTimeAgo(certificate.createdAt) : 'Recently issued'}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold mt-2">
          {certificate.title || `${certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)} Certificate`}
        </h3>
        {certificate.description && (
          <p className="text-sm text-white/70">{certificate.description}</p>
        )}
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <div 
          className="relative rounded-lg overflow-hidden transition-transform hover:scale-[1.01] cursor-pointer" 
          onClick={onView}
        >
          <img 
            src={certificate.imageUrl} 
            alt={certificate.title || 'Royal Certificate'} 
            className="w-full h-auto object-contain"
          />
          {certificate.isMinted && (
            <Badge className="absolute top-2 right-2 bg-green-500/20 text-green-400 border-green-500/30">
              NFT Minted
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 p-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="glass-morphism border-royal-gold/20 hover:bg-royal-gold/10" 
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="glass-morphism border-royal-gold/20 hover:bg-royal-gold/10" 
          onClick={handleDownload}
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        {certificate.isMinted && certificate.nftMintAddress && (
          <Button 
            variant="outline" 
            size="sm" 
            className="glass-morphism border-royal-gold/20 hover:bg-royal-gold/10"
            onClick={() => window.open(`https://solscan.io/token/${certificate.nftMintAddress}`, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View NFT
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CertificateDisplay;
