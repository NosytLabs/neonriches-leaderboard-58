
import React from 'react';
import { Certificate } from '@/types/certificates';
import { UserProfile } from '@/types/user';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Share, Award, Shield, ExternalLink } from 'lucide-react';
import { formatDate } from '@/utils/formatters';

interface CertificateDisplayProps {
  certificate: Certificate;
  user: UserProfile;
  onMint: (certificate: Certificate) => Promise<boolean>;
  onShare: (certificate: Certificate) => Promise<void>;
  onDownload: (certificate: Certificate) => Promise<void>;
  isMinting?: boolean;
}

const CertificateDisplay = ({
  certificate,
  user,
  onMint,
  onShare,
  onDownload,
  isMinting = false
}: CertificateDisplayProps) => {
  const getTeamColor = (team: string | null | undefined) => {
    switch (team) {
      case 'red': return 'text-royal-crimson';
      case 'green': return 'text-royal-gold';
      case 'blue': return 'text-royal-navy';
      default: return 'text-white';
    }
  };

  const getBorderColor = (team: string | null | undefined) => {
    switch (team) {
      case 'red': return 'border-royal-crimson/30';
      case 'green': return 'border-royal-gold/30';
      case 'blue': return 'border-royal-navy/30';
      default: return 'border-white/10';
    }
  };

  return (
    <Card className={`glass-morphism ${getBorderColor(certificate.team)}`}>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="text-center">
            <h2 className={`text-2xl font-bold ${getTeamColor(certificate.team)}`}>
              {certificate.title || `${certificate.type} Certificate`}
            </h2>
            {certificate.description && (
              <p className="text-white/70 mt-2">{certificate.description}</p>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-sm text-white/60">Issued: {formatDate(certificate.createdAt)}</p>
              {certificate.isMinted && certificate.mintedAt && (
                <p className="text-sm text-white/60">Minted: {formatDate(certificate.mintedAt)}</p>
              )}
            </div>
            <Badge variant="outline" className="bg-white/10">
              ID: {certificate.id.substring(0, 8)}
            </Badge>
          </div>

          {(certificate.imageUrl || certificate.imageUri) && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <img 
                src={certificate.imageUrl || certificate.imageUri} 
                alt={certificate.title || certificate.type} 
                className="w-full object-contain"
              />
            </div>
          )}

          <div className="mt-4">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Button 
                variant="outline"
                className="w-full sm:w-auto" 
                onClick={() => onDownload(certificate)}
              >
                <Download size={16} className="mr-2" />
                Download
              </Button>
              
              <Button 
                variant="outline"
                className="w-full sm:w-auto" 
                onClick={() => onShare(certificate)}
              >
                <Share size={16} className="mr-2" />
                Share
              </Button>
              
              {!certificate.isMinted && (
                <Button 
                  variant="default"
                  className="w-full sm:w-auto" 
                  onClick={() => onMint(certificate)}
                  disabled={isMinting}
                >
                  <Award size={16} className="mr-2" />
                  {isMinting ? 'Minting...' : 'Mint as NFT'}
                </Button>
              )}
              
              {certificate.isMinted && certificate.mintAddress && (
                <a 
                  href={`https://explorer.solana.com/address/${certificate.mintAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 px-4 py-2 w-full sm:w-auto items-center justify-center rounded-md bg-purple-500/10 text-purple-300 text-sm font-medium ring-offset-background transition-colors hover:bg-purple-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-purple-500/20"
                >
                  <Shield size={16} className="mr-2" />
                  View on Solana
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateDisplay;
