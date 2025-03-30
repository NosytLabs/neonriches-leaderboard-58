
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamCertificate from '@/components/certificates/TeamCertificate';
import CertificateOfNobility from '@/components/certificates/CertificateOfNobility';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Award, Crown, Medal, Shield, Sword, Scroll } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { Certificate, CertificateTemplate } from '@/types/certificates';
import { getCertificateById, getAvailableCertificateTemplates } from '@/services/certificateService';
import { useToast } from '@/hooks/use-toast';

const CertificatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [templates, setTemplates] = useState<CertificateTemplate[]>([]);
  const [activeTab, setActiveTab] = useState<string>('team');
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      try {
        // If ID is provided, fetch the specific certificate
        if (id && id !== 'new') {
          const cert = await getCertificateById(id);
          if (cert) {
            setCertificate(cert);
          }
        }
        
        // Load available certificate templates
        if (user) {
          const availableTemplates = await getAvailableCertificateTemplates(user as UserProfile);
          setTemplates(availableTemplates);
          
          // Set active tab based on user's team
          if (user.team) {
            setActiveTab(user.team);
          }
        }
      } catch (error) {
        console.error('Error loading certificate data:', error);
        toast({
          title: 'Error Loading Certificate',
          description: 'Could not load the certificate data. Please try again.',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [id, user, toast]);
  
  const handleMintSuccess = (mintAddress: string) => {
    if (certificate) {
      setCertificate({
        ...certificate,
        isMinted: true,
        mintAddress,
        mintedAt: new Date().toISOString()
      });
      
      toast({
        title: 'NFT Minted Successfully',
        description: 'Your certificate has been minted as an NFT on the Solana blockchain.',
      });
    }
  };
  
  const handleShare = () => {
    toast({
      title: 'Certificate Shared',
      description: 'Your certificate link has been copied to clipboard.',
    });
  };
  
  const CertificateIcon = ({ team }: { team?: string }) => {
    switch (team) {
      case 'red':
        return <Crown className="h-5 w-5 text-royal-crimson" />;
      case 'green':
        return <Medal className="h-5 w-5 text-royal-gold" />;
      case 'blue':
        return <Shield className="h-5 w-5 text-royal-navy" />;
      default:
        return <Award className="h-5 w-5" />;
    }
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
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="red" disabled={!user.team}>
                <Crown className="h-4 w-4 mr-2 text-royal-crimson" />
                <span className="hidden sm:inline">Crimson Crown</span>
              </TabsTrigger>
              <TabsTrigger value="green" disabled={!user.team}>
                <Sword className="h-4 w-4 mr-2 text-royal-gold" />
                <span className="hidden sm:inline">Golden Order</span>
              </TabsTrigger>
              <TabsTrigger value="blue" disabled={!user.team}>
                <Shield className="h-4 w-4 mr-2 text-royal-navy" />
                <span className="hidden sm:inline">Azure Knights</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="red">
              <TeamCertificate 
                user={{ ...user as UserProfile, team: 'red' }}
                certificate={certificate}
                onMintSuccess={handleMintSuccess}
                onShare={handleShare}
              />
            </TabsContent>
            
            <TabsContent value="green">
              <TeamCertificate 
                user={{ ...user as UserProfile, team: 'green' }}
                certificate={certificate}
                onMintSuccess={handleMintSuccess}
                onShare={handleShare}
              />
            </TabsContent>
            
            <TabsContent value="blue">
              <TeamCertificate 
                user={{ ...user as UserProfile, team: 'blue' }}
                certificate={certificate}
                onMintSuccess={handleMintSuccess}
                onShare={handleShare}
              />
            </TabsContent>
          </Tabs>
          
          <Separator className="my-8" />
          
          <h2 className="text-xl font-semibold mb-4">Classic Certificate</h2>
          <Card className="glass-morphism border-white/10 bg-black/20">
            <CardContent className="p-6">
              <CertificateOfNobility 
                user={user as UserProfile}
                onVerify={() => {}}
                onDismiss={() => {}}
                onDownload={() => {}}
              />
            </CardContent>
          </Card>
          
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
                    <div className="absolute bottom-2 left-2 z-20">
                      <CertificateIcon team={template.team} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm">{template.name}</h3>
                  <p className="text-xs text-muted-foreground">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CertificatePage;
