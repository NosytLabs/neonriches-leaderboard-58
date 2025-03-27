
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UserProfile } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Megaphone, Image, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { spendFromWallet } from '@/services/walletService';

interface AdvertisementBannerProps {
  user: UserProfile;
  onUpdate: () => void;
}

interface Advertisement {
  title: string;
  description: string;
  imageUrl?: string;
  bannerColor: string;
  linkUrl?: string;
  isActive: boolean;
  viewCount: number;
  clickCount: number;
}

const AdvertisementBanner: React.FC<AdvertisementBannerProps> = ({ user, onUpdate }) => {
  const { toast } = useToast();
  const [showEditor, setShowEditor] = useState(false);
  
  // Get advertisement data from localStorage or use default
  const getAdvertisementData = (): Advertisement | null => {
    try {
      const data = localStorage.getItem(`p2w_ad_${user.id}`);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error('Error loading advertisement data:', error);
      return null;
    }
  };
  
  const adData = getAdvertisementData();
  const hasActiveAd = !!adData;
  
  const [formData, setFormData] = useState<Advertisement>(adData || {
    title: '',
    description: '',
    imageUrl: '',
    bannerColor: '#4B0082', // Default royal purple
    linkUrl: '',
    isActive: true,
    viewCount: 0,
    clickCount: 0
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isActive: checked }));
  };
  
  const handleSave = async () => {
    try {
      // Validate form
      if (!formData.title.trim()) {
        throw new Error('Advertisement title is required');
      }
      
      if (!formData.description.trim()) {
        throw new Error('Advertisement description is required');
      }
      
      // Calculate cost based on user tier
      const cost = user.tier === 'pro' ? 10 : 25; // Pro users get discounted ad placement
      
      // Process payment from wallet
      const success = await spendFromWallet(
        user,
        cost,
        'advertisement',
        'Advertisement banner placement',
        { adTitle: formData.title }
      );
      
      if (!success) {
        throw new Error('Payment failed. Check your wallet balance.');
      }
      
      // Save advertisement to localStorage
      localStorage.setItem(`p2w_ad_${user.id}`, JSON.stringify(formData));
      
      toast({
        title: "Royal Proclamation Published!",
        description: "Your advertisement has been posted throughout the kingdom.",
      });
      
      setShowEditor(false);
      onUpdate();
    } catch (error) {
      toast({
        title: "Publication Failed",
        description: error.message || "Failed to publish your advertisement.",
        variant: "destructive"
      });
    }
  };
  
  const handleDelete = () => {
    localStorage.removeItem(`p2w_ad_${user.id}`);
    
    toast({
      title: "Advertisement Removed",
      description: "Your advertisement has been removed from the kingdom.",
    });
    
    onUpdate();
  };
  
  const getMaxCharCount = () => {
    return user.tier === 'pro' ? 500 : 200;
  };
  
  const getMaxAdImages = () => {
    return user.tier === 'pro' ? 1 : 0;
  };
  
  const showAdPreview = () => {
    // Increment view count for analytics
    if (adData) {
      const updatedAd = {...adData, viewCount: adData.viewCount + 1};
      localStorage.setItem(`p2w_ad_${user.id}`, JSON.stringify(updatedAd));
    }
  };
  
  const recordAdClick = () => {
    // Increment click count for analytics
    if (adData) {
      const updatedAd = {...adData, clickCount: adData.clickCount + 1};
      localStorage.setItem(`p2w_ad_${user.id}`, JSON.stringify(updatedAd));
      
      // Open link in new tab if provided
      if (adData.linkUrl) {
        window.open(adData.linkUrl, '_blank');
      }
    }
  };
  
  // Show ad preview if it exists
  if (hasActiveAd && adData?.isActive) {
    showAdPreview();
    
    return (
      <Card 
        className="glass-morphism border-white/10 overflow-hidden cursor-pointer hover:border-royal-gold/30 transition-all"
        style={{ background: `linear-gradient(to right, rgba(0,0,0,0.3), ${adData.bannerColor}40)` }}
        onClick={recordAdClick}
      >
        <CardContent className="pt-6 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-royal text-lg text-white">{adData.title}</h3>
              <p className="text-white/70 text-sm mt-1">{adData.description}</p>
              
              {user.tier === 'pro' && (
                <div className="flex items-center mt-2 text-white/50 text-xs">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>Views: {adData.viewCount}</span>
                  <span className="mx-2">•</span>
                  <span>Clicks: {adData.clickCount}</span>
                </div>
              )}
            </div>
            
            {adData.imageUrl && (
              <div className="ml-4 w-16 h-16 rounded overflow-hidden">
                <img src={adData.imageUrl} alt="Ad" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
          
          <div className="flex mt-3 justify-between">
            <Badge variant="outline" className="bg-black/30 text-white/70">
              <Megaphone className="h-3 w-3 mr-1" />
              Sponsored
            </Badge>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="glass-morphism border-white/20 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                setShowEditor(true);
              }}
            >
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  // Show create button if no active ad
  return (
    <>
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-royal royal-gradient flex items-center">
            <Megaphone size={18} className="text-royal-gold mr-2" />
            Royal Proclamation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 mb-4">
            Announce your presence throughout the kingdom with a custom advertisement banner.
          </p>
          
          <Button 
            className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
            onClick={() => setShowEditor(true)}
          >
            <Megaphone className="mr-2 h-4 w-4" />
            Create Advertisement
          </Button>
          
          <div className="mt-3 text-white/50 text-xs">
            <p>Cost: ${user.tier === 'pro' ? '10' : '25'} from your royal purse</p>
            {user.tier === 'pro' ? (
              <p>Pro tier benefits: Reduced cost, analytics, image support</p>
            ) : (
              <p>Upgrade to Pro for reduced cost and enhanced features</p>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="royal-gradient">Create Royal Proclamation</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Announce your royal presence"
                className="glass-morphism border-white/10"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your glory to the peasants"
                className="glass-morphism border-white/10 h-20 resize-none"
                maxLength={getMaxCharCount()}
              />
              <p className="text-white/50 text-xs text-right">
                {formData.description.length}/{getMaxCharCount()} characters
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkUrl">Link URL (optional)</Label>
              <Input
                id="linkUrl"
                name="linkUrl"
                value={formData.linkUrl}
                onChange={handleChange}
                placeholder="https://your-royal-domain.com"
                className="glass-morphism border-white/10"
              />
            </div>
            
            {user.tier === 'pro' && (
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL (Pro feature)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://image-url.com/your-image.jpg"
                    className="glass-morphism border-white/10"
                  />
                  <Image className="h-5 w-5 text-royal-gold" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="bannerColor">Banner Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="bannerColor"
                  name="bannerColor"
                  type="color"
                  value={formData.bannerColor}
                  onChange={handleChange}
                  className="w-12 h-8 p-1"
                />
                <div 
                  className="flex-1 h-8 rounded" 
                  style={{ background: `linear-gradient(to right, rgba(0,0,0,0.2), ${formData.bannerColor}40)` }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="isActive">Active advertisement</Label>
            </div>
            
            <div className="flex justify-between pt-4">
              {hasActiveAd ? (
                <Button 
                  variant="destructive" 
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  onClick={() => setShowEditor(false)}
                  className="glass-morphism border-white/10"
                >
                  Cancel
                </Button>
              )}
              
              <Button 
                onClick={handleSave}
                className="bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
              >
                Publish
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdvertisementBanner;
