
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Award, Crown, Medal, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';  // Added Button import
import CertificateDisplay from '@/components/certificates/CertificateDisplay';
import { useCertificate } from '@/hooks/useCertificate';

const CertificatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<string>(user?.team || 'default');
  
  const { 
    certificate, 
    templates, 
    userCertificates, 
    loading, 
    isMinting, 
    mintCertificate, 
    generateShareableImage 
  } = useCertificate({ 
    user: user, 
    certificateId: id 
  });
  
  const handleMint = async (cert) => {
    return await mintCertificate(cert);
  };
  
  const handleShare = async (cert) => {
    const imageUrl = await generateShareableImage(cert);
    if (imageUrl) {
      // Implementation would depend on how sharing is handled in the app
      console.log('Share certificate:', imageUrl);
    }
  };
  
  const handleDownload = async (cert) => {
    // Implementation would depend on how downloading works in the app
    console.log('Download certificate:', cert);
  };
  
  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-10 pt-24">
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Please Sign In</h2>
            <p className="mb-6">You need to be signed in to view certificates.</p>
            <Button onClick={() => navigate('/login')}>Sign In</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Royal Certificates</h1>
          <p className="text-muted-foreground mb-6">
            Your proof of nobility in the SpendThrone kingdom. Mint and share your certificates to showcase your status.
          </p>
          
          <Separator className="my-6" />
          
          {loading ? (
            <div className="py-10 text-center">
              <p>Loading certificates...</p>
            </div>
          ) : (
            <>
              {certificate ? (
                <CertificateDisplay 
                  certificate={certificate}
                  user={user}
                  onMint={handleMint}
                  onShare={handleShare}
                  onDownload={handleDownload}
                  isMinting={isMinting}
                />
              ) : (
                <>
                  <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-3 mb-8">
                      <TabsTrigger value="red" disabled={!user.team}>
                        <Crown className="h-4 w-4 mr-2 text-royal-crimson" />
                        <span className="hidden sm:inline">Crimson Crown</span>
                      </TabsTrigger>
                      <TabsTrigger value="green" disabled={!user.team}>
                        <Medal className="h-4 w-4 mr-2 text-royal-gold" />
                        <span className="hidden sm:inline">Golden Order</span>
                      </TabsTrigger>
                      <TabsTrigger value="blue" disabled={!user.team}>
                        <Shield className="h-4 w-4 mr-2 text-royal-navy" />
                        <span className="hidden sm:inline">Azure Knights</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    {['red', 'green', 'blue'].map(team => (
                      <TabsContent key={team} value={team}>
                        {userCertificates.filter(cert => cert.team === team).length > 0 ? (
                          userCertificates
                            .filter(cert => cert.team === team)
                            .map(cert => (
                              <CertificateDisplay 
                                key={cert.id}
                                certificate={cert}
                                user={user}
                                onMint={handleMint}
                                onShare={handleShare}
                                onDownload={handleDownload}
                                isMinting={isMinting && certificate?.id === cert.id}
                              />
                            ))
                        ) : (
                          <Card className="glass-morphism border-white/10">
                            <CardContent className="p-6 text-center">
                              <Award className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                              <h3 className="text-lg font-semibold mb-2">No Certificates Yet</h3>
                              <p className="text-muted-foreground">
                                You haven't claimed any certificates for this team.
                              </p>
                            </CardContent>
                          </Card>
                        )}
                      </TabsContent>
                    ))}
                  </Tabs>
                
                  <Separator className="my-8" />
                  
                  <h2 className="text-xl font-semibold mb-4">Available Certificate Templates</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {templates.map((template) => (
                      <Card key={template.id} className="glass-morphism border-white/10">
                        <CardContent className="p-4">
                          <div className="aspect-video relative overflow-hidden rounded-md mb-2">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                            <img 
                              src={template.previewUrl} 
                              alt={template.name} 
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <h3 className="font-semibold text-sm">{template.name}</h3>
                          <p className="text-xs text-muted-foreground">{template.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CertificatePage;
