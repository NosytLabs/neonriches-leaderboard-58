import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Download, Share2, ChevronLeft, AlertCircle } from 'lucide-react';
import CertificateDisplay from '@/components/certificates/CertificateDisplay';
import RoyalCertificate from '@/components/certificates/RoyalCertificate';
import { useToast } from '@/hooks/use-toast';
import { Certificate, adaptCertificate } from '@/types/certificate-unified';
import { formatDate } from '@/utils/formatters';

interface RouteParams {
  certificateId: string;
}

const CertificatePage = () => {
  const { certificateId } = useParams<RouteParams>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!certificateId) {
      setError('Certificate ID is missing.');
      setIsLoading(false);
      return;
    }

    // Mock API call to fetch certificate data
    setTimeout(() => {
      const mockCertificate: Certificate = {
        id: certificateId,
        title: 'SpendThrone Royal Certificate',
        description: 'Awarded for outstanding contributions to the SpendThrone community.',
        imageUrl: '/assets/certificates/royal.png',
        dateIssued: new Date().toISOString(),
        type: 'royal',
        style: 'royal',
        team: 'none',
        status: 'issued',
        rarity: 'rare',
        issuerName: 'SpendThrone',
        recipientName: user?.displayName || 'User',
        recipientId: user?.id || 'user-id',
        isMinted: false,
        name: 'SpendThrone Royal Certificate'
      };

      setCertificate(mockCertificate);
      setIsLoading(false);
    }, 500);
  }, [certificateId, user]);

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  const handleMintCertificate = async (certificate: Certificate) => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        toast({
          title: 'Certificate Minted',
          description: `Certificate "${certificate.title}" has been successfully minted.`,
        });
        resolve(true);
      }, 1500);
    });
  };

  const handleShareCertificate = async (certificate: Certificate) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        const shareUrl = `https://example.com/certificates/${certificate.id}`;
        toast({
          title: 'Certificate Shared',
          description: `Certificate "${certificate.title}" has been shared.`,
        });
        resolve(shareUrl);
      }, 1000);
    });
  };

  const handleDownloadCertificate = (certificate: Certificate) => {
    toast({
      title: 'Certificate Downloaded',
      description: `Certificate "${certificate.title}" has been downloaded.`,
    });
  };

  const handleCertificateDisplay = (certificate: any) => {
    const adaptedCertificate = adaptCertificate(certificate);
    
    return (
      <CertificateDisplay
        certificate={adaptedCertificate}
        user={user!}
        onMint={handleMintCertificate}
        onShare={handleShareCertificate}
        onDownload={handleDownloadCertificate}
      />
    );
  };

  if (isLoading) {
    return (
      <Shell>
        <Card>
          <CardContent>Loading certificate...</CardContent>
        </Card>
      </Shell>
    );
  }

  if (error) {
    return (
      <Shell>
        <Card>
          <CardContent>
            <AlertCircle className="h-4 w-4 mr-2 inline-block" />
            Error: {error}
          </CardContent>
        </Card>
      </Shell>
    );
  }

  if (!certificate) {
    return (
      <Shell>
        <Card>
          <CardContent>Certificate not found.</CardContent>
        </Card>
      </Shell>
    );
  }

  return (
    <Shell>
      <Button onClick={handleGoBack} variant="ghost" className="mb-4">
        <ChevronLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>
      {handleCertificateDisplay(certificate)}
    </Shell>
  );
};

export default CertificatePage;
