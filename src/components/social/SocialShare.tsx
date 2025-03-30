
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Share2, Copy, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export type ShareType = 'rank' | 'milestone' | 'deposit' | 'custom';

interface SocialShareProps {
  type: ShareType;
  data: {
    rank?: number;
    previousRank?: number;
    amountSpent?: number;
    deposit?: number;
    milestone?: string;
    customMessage?: string;
    username?: string;
  };
  className?: string;
  buttonText?: string;
  iconOnly?: boolean;
}

const SocialShare: React.FC<SocialShareProps> = ({
  type,
  data,
  className,
  buttonText = "Share",
  iconOnly = false
}) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const generateShareText = (): string => {
    switch (type) {
      case 'rank':
        return `I'm now ranked #${data.rank} on SpendThrone, the pay-to-win social platform! ${data.previousRank && data.rank < data.previousRank 
          ? `Moved up ${data.previousRank - data.rank} positions!` 
          : ''} Join me in this extravagant display of digital status!`;
      case 'milestone':
        return `I just reached the "${data.milestone}" milestone on SpendThrone by contributing $${data.amountSpent?.toLocaleString()}! Join the pay-to-win social competition!`;
      case 'deposit':
        return `Just dropped $${data.deposit?.toLocaleString()} on SpendThrone to boost my rank! Total spent: $${data.amountSpent?.toLocaleString()}. Who says you can't buy status?`;
      case 'custom':
      default:
        return data.customMessage || 'Check out my profile on SpendThrone, the satirical pay-to-win social platform!';
    }
  };
  
  const [shareText, setShareText] = useState(generateShareText());
  const shareUrl = `https://spendthrone.com/${data.username ? `profile/${data.username}` : ''}`;
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    toast({
      title: "Copied to clipboard!",
      description: "Share text has been copied to your clipboard",
    });
  };
  
  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
    setOpen(false);
  };
  
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank');
    setOpen(false);
  };
  
  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
    window.open(linkedinUrl, '_blank');
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size={iconOnly ? "icon" : "default"} 
          className={className}
        >
          <Share2 className={iconOnly ? "" : "mr-2"} size={16} />
          {!iconOnly && buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Achievement</DialogTitle>
          <DialogDescription>
            Share your SpendThrone achievement on social media
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="customize" className="mt-4">
          <TabsList className="grid grid-cols-2 glass-morphism">
            <TabsTrigger value="customize">Customize</TabsTrigger>
            <TabsTrigger value="share">Share</TabsTrigger>
          </TabsList>
          
          <TabsContent value="customize" className="space-y-4 mt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Message</label>
              <Textarea
                value={shareText}
                onChange={(e) => setShareText(e.target.value)}
                className="glass-morphism border-white/10 min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Share URL</label>
              <Input
                value={shareUrl}
                readOnly
                className="glass-morphism border-white/10"
              />
            </div>
            
            <Button 
              onClick={handleCopyToClipboard} 
              variant="outline" 
              className="w-full glass-morphism border-white/10"
            >
              <Copy className="mr-2" size={16} />
              Copy to Clipboard
            </Button>
          </TabsContent>
          
          <TabsContent value="share" className="space-y-4 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <Button
                onClick={handleTwitterShare}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 glass-morphism border-white/10 hover:bg-white/10"
              >
                <Twitter size={24} className="text-[#1DA1F2] mb-2" />
                <span className="text-xs">Twitter</span>
              </Button>
              
              <Button
                onClick={handleFacebookShare}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 glass-morphism border-white/10 hover:bg-white/10"
              >
                <Facebook size={24} className="text-[#4267B2] mb-2" />
                <span className="text-xs">Facebook</span>
              </Button>
              
              <Button
                onClick={handleLinkedInShare}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 glass-morphism border-white/10 hover:bg-white/10"
              >
                <Linkedin size={24} className="text-[#0A66C2] mb-2" />
                <span className="text-xs">LinkedIn</span>
              </Button>
            </div>
            
            <div className="pt-2">
              <p className="text-sm text-white/60 text-center">
                Share your achievement and invite others to join the status competition!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SocialShare;
