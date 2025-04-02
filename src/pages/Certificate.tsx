
import React, { useEffect, useState } from 'react';
import { Certificate, UseCertificateResult } from '@/types/certificate';
import { useCertificate } from '@/hooks/useCertificate';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/utils/formatters';

// Consistent usage of the Certificate type from @/types/certificate
const CertificatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('view');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [userCertificates, setUserCertificates] = useState<Certificate[]>([]);
  const [availableTemplates, setAvailableTemplates] = useState<Certificate[]>([]);
  
  const { userProfile } = useUser();
  const certificateService = useCertificate();
  
  const {
    certificates,
    templates,
    loading,
    createCertificate,
    fetchUserCertificates,
    fetchTemplates,
    mintCertificateAsNFT,
    issueCertificate,
    // Make sure we have these methods
    mint,
    download, 
    share
  } = certificateService as UseCertificateResult;
  
  useEffect(() => {
    const fetchData = async () => {
      if (userProfile) {
        try {
          const userCerts = await fetchUserCertificates(userProfile.id);
          setUserCertificates(userCerts);
          
          const allTemplates = await fetchTemplates();
          setAvailableTemplates(allTemplates);
          
          if (userCerts.length > 0) {
            setSelectedCertificate(userCerts[0]);
          }
        } catch (error) {
          console.error('Error fetching certificate data:', error);
        }
      }
    };
    
    fetchData();
  }, [userProfile]);
  
  const handleMintCertificate = async (certificate: Certificate) => {
    try {
      if (!certificate) return;
      
      // Here we use the mint method from the certificate service
      const result = await mint(certificate);
      
      if (result.success) {
        // Update the certificate in the list
        const updatedCertificates = userCertificates.map(cert => 
          cert.id === certificate.id 
            ? { ...cert, mintAddress: result.mintAddress, isMinted: true } 
            : cert
        );
        
        setUserCertificates(updatedCertificates);
        setSelectedCertificate({ ...certificate, mintAddress: result.mintAddress, isMinted: true });
      }
    } catch (error) {
      console.error('Error minting certificate:', error);
    }
  };
  
  const handleDownloadCertificate = (certificate: Certificate) => {
    if (!certificate) return;
    download(certificate);
  };
  
  const handleShareCertificate = async (certificate: Certificate) => {
    if (!certificate) return;
    try {
      await share(certificate);
    } catch (error) {
      console.error('Error sharing certificate:', error);
    }
  };
  
  const renderCertificateDetails = (certificate: Certificate | null) => {
    if (!certificate) {
      return <div className="p-4 text-center">No certificate selected</div>;
    }
    
    return (
      <div className="space-y-4">
        <div className="relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg">
          <img 
            src={certificate.previewUrl || certificate.imageUrl} 
            alt={certificate.title} 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="p-4 bg-black/20 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{certificate.title}</h2>
          <p className="text-white/70 mb-4">{certificate.description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-white/60">Issued By</p>
              <p>{certificate.issuerName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white/60">Issued To</p>
              <p>{certificate.recipientName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white/60">Date Issued</p>
              <p>{formatDate(certificate.dateIssued)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white/60">Certificate Type</p>
              <p className="capitalize">{certificate.type}</p>
            </div>
            {certificate.mintAddress && (
              <div className="col-span-2">
                <p className="text-sm font-medium text-white/60">Mint Address</p>
                <p className="font-mono text-xs break-all">{certificate.mintAddress}</p>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => handleDownloadCertificate(certificate)}
            >
              Download
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShareCertificate(certificate)}
            >
              Share
            </Button>
            {!certificate.isMinted && !certificate.mintAddress && (
              <Button
                onClick={() => handleMintCertificate(certificate)}
              >
                Mint as NFT
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  if (loading) {
    return <div className="container mx-auto p-8">Loading certificates...</div>;
  }
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="view">My Certificates</TabsTrigger>
          <TabsTrigger value="templates">Available Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="view" className="space-y-4">
          {userCertificates.length === 0 ? (
            <div className="p-8 text-center">
              <p className="mb-4">You don't have any certificates yet.</p>
              <Button onClick={() => setActiveTab('templates')}>
                View Available Templates
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-[300px,1fr] gap-6">
              <div className="bg-black/20 rounded-lg p-4 h-fit">
                <h3 className="font-medium mb-4">My Certificates</h3>
                <div className="space-y-2">
                  {userCertificates.map(cert => (
                    <div 
                      key={cert.id}
                      className={`p-2 cursor-pointer rounded-md ${selectedCertificate?.id === cert.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-white/60">{formatDate(cert.dateIssued)}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/10 rounded-lg p-4">
                {renderCertificateDetails(selectedCertificate)}
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map(template => (
              <div key={template.id} className="bg-black/20 rounded-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={template.previewUrl || template.imageUrl} 
                    alt={template.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{template.title}</h3>
                  <p className="text-sm text-white/70 mb-4">{template.description}</p>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled={!template.available}
                  >
                    {template.available ? 'Request Certificate' : 'Not Available'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CertificatePage;
