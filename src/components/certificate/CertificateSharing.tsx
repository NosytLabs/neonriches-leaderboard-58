
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Share2, Copy, Twitter, Facebook, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Certificate } from '@/types/certificates';

interface CertificateSharingProps {
  certificate: Certificate;
  shareableImage?: string;
  shareableUrl?: string;
}

const CertificateSharing: React.FC<CertificateSharingProps> = ({
  certificate,
  shareableImage,
  shareableUrl = 'https://spendthrone.com/certificates/share/12345',
}) => {
  const { toast } = useToast();
  const [isShareOpen, setIsShareOpen] = useState(false);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    toast({
      title: "Link Copied",
      description: "Share link copied to clipboard",
      variant: "success",
    });
  };
  
  const handleShareTwitter = () => {
    const text = `Check out my SpendThrone Certificate: ${certificate.title}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareableUrl)}`;
    window.open(url, '_blank');
  };
  
  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
    window.open(url, '_blank');
  };
  
  const handleDownloadImage = () => {
    if (!shareableImage) {
      toast({
        title: "Download Failed",
        description: "No image available to download",
        variant: "destructive",
      });
      return;
    }
    
    // Create an anchor element and set the href to the image source
    const link = document.createElement('a');
    link.href = shareableImage;
    link.download = `SpendThrone-Certificate-${certificate.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your certificate image is downloading",
      variant: "success",
    });
  };
  
  return (
    <>
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Share2 className="h-5 w-5 text-royal-gold" />
            Share Certificate
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-white/70 mb-4">
            Share your achievement with the world and show off your royal status.
          </p>
          
          <Button 
            variant="default" 
            className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
            onClick={() => setIsShareOpen(true)}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Certificate
          </Button>
        </CardContent>
      </Card>
      
      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Your Certificate</DialogTitle>
            <DialogDescription>
              Show off your achievement and royal status to your network.
            </DialogDescription>
          </DialogHeader>
          
          {shareableImage && (
            <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
              <img 
                src={shareableImage} 
                alt={certificate.title} 
                className="w-full h-auto"
              />
            </div>
          )}
          
          <div className="flex items-center gap-2 mb-4">
            <Input 
              value={shareableUrl} 
              readOnly 
              className="glass-morphism border-white/10"
            />
            <Button size="sm" onClick={handleCopyLink} variant="outline" className="glass-morphism border-white/10">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="glass-morphism border-white/10" onClick={handleShareTwitter}>
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            
            <Button variant="outline" className="glass-morphism border-white/10" onClick={handleShareFacebook}>
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            
            {shareableImage && (
              <Button variant="outline" className="glass-morphism border-white/10" onClick={handleDownloadImage}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            )}
          </div>
          
          <DialogFooter className="sm:justify-start">
            <p className="text-xs text-white/50">
              Certificate ID: {certificate.id.substring(0, 8)}...
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateSharing;
