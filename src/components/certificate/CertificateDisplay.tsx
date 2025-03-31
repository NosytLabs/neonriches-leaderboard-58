
import React from 'react';
import { Certificate } from '@/types/certificate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/utils/dateUtils';
import { Badge } from '@/components/ui/badge';
import { Crown, Download, Globe, Shield } from 'lucide-react';

interface CertificateDisplayProps {
  certificate: Certificate;
  onMint?: (certificate: Certificate) => Promise<any>;
  onShare?: (certificate: Certificate) => void;
  onDownload?: (certificate: Certificate) => void;
  isMinting?: boolean;
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({ 
  certificate, 
  onMint, 
  onShare, 
  onDownload,
  isMinting = false
}) => {
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Crown className="h-5 w-5 mr-2 text-royal-gold" />
          {certificate.title || "Royal Certificate"}
          {certificate.isMinted && (
            <Badge className="ml-2 bg-royal-gold text-black">Minted</Badge>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 mb-4">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-10"></div>
          <img 
            src={certificate.imageUrl || "/images/certificates/default.jpg"} 
            alt={certificate.title || "Certificate"} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-royal-gold/20 backdrop-blur-sm border border-royal-gold/30 flex items-center justify-center">
                <Shield className="h-5 w-5 text-royal-gold" />
              </div>
              <div className="ml-3">
                <p className="text-xs text-white/70">Awarded to</p>
                <p className="font-medium text-white">{certificate.userDisplayName || certificate.username}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-medium text-white/70">Description</h3>
            <p className="text-sm">{certificate.description || "A royal certificate of achievement."}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-white/70">Type</h3>
              <p className="text-sm capitalize">{certificate.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white/70">Issued On</h3>
              <p className="text-sm">{formatDate(certificate.createdAt || new Date())}</p>
            </div>
          </div>
          
          {certificate.isMinted && certificate.mintAddress && (
            <div>
              <h3 className="text-sm font-medium text-white/70">NFT Address</h3>
              <p className="text-xs text-white/60 truncate">{certificate.mintAddress}</p>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2 border-t border-white/5">
        {onMint && !certificate.isMinted && (
          <Button 
            className="bg-gradient-to-r from-royal-gold to-royal-gold/80 text-black hover:from-royal-gold/90 hover:to-royal-gold/70" 
            onClick={() => onMint(certificate)}
            disabled={isMinting}
          >
            {isMinting ? "Minting..." : "Mint as NFT"}
          </Button>
        )}
        
        {onShare && (
          <Button variant="outline" onClick={() => onShare(certificate)}>
            <Globe className="h-4 w-4 mr-2" />
            Share
          </Button>
        )}
        
        {onDownload && (
          <Button variant="outline" onClick={() => onDownload(certificate)}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CertificateDisplay;
