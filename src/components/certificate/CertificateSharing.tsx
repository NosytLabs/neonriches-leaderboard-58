
import React, { useState } from 'react';
import { Certificate } from '@/types/certificate';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Twitter, Facebook, Linkedin, Mail, Link, Copy, Check } from 'lucide-react';

interface CertificateSharingProps {
  certificate: Certificate;
}

const CertificateSharing: React.FC<CertificateSharingProps> = ({ certificate }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('link');
  
  // Generate sharing URLs
  const shareUrl = `${window.location.origin}/certificate/${certificate.id}`;
  const shareTitle = `Check out my ${certificate.title || 'Royal Certificate'} at SpendThrone!`;
  const shareText = `I earned a ${certificate.type} certificate at SpendThrone. Come join the royal competition!`;
  
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="link" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="link">Link</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="embed">Embed</TabsTrigger>
          <TabsTrigger value="qr">QR Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="link" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardContent className="pt-6">
              <div className="flex space-x-2">
                <Input
                  value={shareUrl}
                  readOnly
                  className="bg-black/20 border-white/10"
                />
                <Button variant="outline" onClick={copyToClipboard}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href={mailUrl}>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="embed" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardContent className="pt-6">
              <p className="text-sm text-white/70 mb-2">Copy this code to embed your certificate in a website:</p>
              <div className="flex space-x-2">
                <Input
                  value={`<iframe src="${shareUrl}/embed" width="100%" height="400" frameborder="0"></iframe>`}
                  readOnly
                  className="bg-black/20 border-white/10 font-mono text-xs"
                />
                <Button variant="outline" onClick={() => {
                  navigator.clipboard.writeText(`<iframe src="${shareUrl}/embed" width="100%" height="400" frameborder="0"></iframe>`);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="qr" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="bg-white p-3 rounded-lg mb-3">
                {/* QR code could be generated here with a library or an API */}
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-black">QR Code for Certificate</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => {
                // In a real app, this would download the QR code
                alert('QR Code download feature coming soon');
              }}>
                <Download className="h-4 w-4 mr-2" />
                Download QR Code
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CertificateSharing;
