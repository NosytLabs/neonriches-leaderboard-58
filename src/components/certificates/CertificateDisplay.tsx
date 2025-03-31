
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Certificate } from '@/types/certificates';
import { UserProfile } from '@/types/user';
import { formatDate } from '@/utils/formatters';
import { Download, Share2, Award, Clock } from 'lucide-react';

interface CertificateDisplayProps {
  certificate: Certificate;
  user: UserProfile;
  onMint?: (cert: Certificate) => Promise<boolean>;
  onShare?: (cert: Certificate) => Promise<string>;
  onDownload?: (cert: Certificate) => void;
  isMinting?: boolean;
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({
  certificate,
  user,
  onMint,
  onShare,
  onDownload,
  isMinting = false
}) => {
  const handleMint = async () => {
    if (onMint) {
      try {
        await onMint(certificate);
      } catch (error) {
        console.error("Error minting certificate:", error);
      }
    }
  };

  const handleShare = async () => {
    if (onShare) {
      try {
        await onShare(certificate);
      } catch (error) {
        console.error("Error sharing certificate:", error);
      }
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      try {
        onDownload(certificate);
      } catch (error) {
        console.error("Error downloading certificate:", error);
      }
    }
  };

  // Handle the dateIssued safely to avoid toString on never error
  const formattedDate = certificate.dateIssued 
    ? typeof certificate.dateIssued === 'string' 
      ? formatDate(certificate.dateIssued) 
      : formatDate(new Date(certificate.dateIssued).toISOString())
    : 'No date';

  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <div className="relative">
        <img 
          src={certificate.imageUrl} 
          alt={certificate.title} 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-xs text-white/60">Issued on {formattedDate}</p>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-royal-gold" />
          {certificate.title}
        </CardTitle>
        <p className="text-sm text-white/70">{certificate.description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="glass-morphism border-white/10" 
            onClick={handleMint}
            disabled={isMinting || Boolean(certificate.mintAddress)}
          >
            {isMinting ? (
              <>
                <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Minting...
              </>
            ) : certificate.mintAddress ? (
              <>
                <Award className="h-4 w-4 mr-2" />
                Minted
              </>
            ) : (
              <>
                <Award className="h-4 w-4 mr-2" />
                Mint Certificate
              </>
            )}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="glass-morphism border-white/10"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="glass-morphism border-white/10"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
        
        <div className="flex items-center gap-2 mt-6 text-xs text-white/50">
          <Clock className="h-3 w-3" />
          <span>Certificate ID: {certificate.id.substring(0, 8)}...</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateDisplay;
