
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SocialLink, UserProfile } from '@/types/user';

// Define social platform types
type SocialPlatform = 'twitter' | 'instagram' | 'facebook' | 'linkedin' | 'github' | 'youtube' | 'twitch' | 'discord' | 'reddit' | 'tiktok' | 'other';

export interface SocialMediaLinksEditorProps {
  user: UserProfile;
  socialLinks: SocialLink[];
  onLinksChange: (links: SocialLink[]) => void;
}

const SocialMediaLinksEditor: React.FC<SocialMediaLinksEditorProps> = ({ user, socialLinks, onLinksChange }) => {
  const { toast } = useToast();
  const [platform, setPlatform] = useState<SocialPlatform>('twitter');
  const [url, setUrl] = useState('');

  // Maximum number of social links based on tier
  const getMaxLinks = () => {
    if (user.tier === 'free') return 2;
    if (user.tier === 'pro') return 5;
    return 10; // royal or other higher tiers
  };

  // Get icon for a social platform
  const getPlatformIcon = (platform: SocialPlatform): string => {
    switch (platform) {
      case 'twitter': return 'twitter';
      case 'instagram': return 'instagram';
      case 'facebook': return 'facebook';
      case 'linkedin': return 'linkedin';
      case 'github': return 'github';
      case 'youtube': return 'youtube';
      case 'twitch': return 'twitch';
      case 'discord': return 'discord';
      case 'reddit': return 'reddit';
      case 'tiktok': return 'tiktok';
      default: return 'link';
    }
  };

  const handleAddLink = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please provide a URL for your social profile",
        variant: "destructive"
      });
      return;
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g. https://example.com)",
        variant: "destructive"
      });
      return;
    }

    // Check if maximum links reached
    if (socialLinks.length >= getMaxLinks()) {
      toast({
        title: "Limit Reached",
        description: `${user.tier === 'free' ? 'Free' : 'Pro'} tier users can only add ${getMaxLinks()} social links. Upgrade for more!`,
        variant: "destructive"
      });
      return;
    }

    // Create a new social link with the platform, URL, and icon
    const newLink: SocialLink = {
      id: Date.now(), // Use a number for the ID
      platform,
      url,
      icon: getPlatformIcon(platform),
      clicks: 0 // Initialize clicks to 0
    };

    onLinksChange([...socialLinks, newLink]);
    
    // Reset form
    setUrl('');
    
    toast({
      title: "Social Link Added",
      description: "Your social media link has been added to your profile",
    });
  };

  const handleRemoveLink = (id: string | number) => {
    const updatedLinks = socialLinks.filter(link => link.id !== id);
    onLinksChange(updatedLinks);
    
    toast({
      title: "Social Link Removed",
      description: "The social media link has been removed from your profile",
    });
  };

  // Platform display names
  const platformNames: Record<SocialPlatform, string> = {
    twitter: 'Twitter / X',
    instagram: 'Instagram',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    youtube: 'YouTube',
    twitch: 'Twitch',
    discord: 'Discord',
    reddit: 'Reddit',
    tiktok: 'TikTok',
    other: 'Other'
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-base font-medium">Social Media Links</Label>
        
        <div className="space-y-2">
          {socialLinks.map((link) => (
            <div key={String(link.id)} className="glass-morphism rounded-lg p-3 border border-white/10 flex justify-between items-center">
              <div className="flex items-center">
                <ExternalLink size={16} className="text-royal-gold" />
                <div className="ml-2">
                  <p className="text-sm font-medium">{platformNames[link.platform as SocialPlatform] || link.platform}</p>
                  <p className="text-xs text-white/50 truncate max-w-[200px]">{link.url}</p>
                  {link.clicks !== undefined && (
                    <p className="text-xs text-white/30">{link.clicks} clicks</p>
                  )}
                </div>
              </div>
              <Button 
                size="sm"
                variant="ghost"
                className="text-white/50 hover:text-white hover:bg-white/10"
                onClick={() => handleRemoveLink(link.id)}
              >
                <Trash2 size={14} />
              </Button>
            </div>
          ))}
        </div>
        
        {socialLinks.length < getMaxLinks() && (
          <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
            <h3 className="text-base font-medium mb-2">Add Social Media</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="platform">Platform</Label>
                <Select value={platform} onValueChange={(val) => setPlatform(val as SocialPlatform)}>
                  <SelectTrigger className="glass-morphism border-white/10">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent className="glass-morphism border-white/10">
                    {Object.entries(platformNames).map(([key, name]) => (
                      <SelectItem key={key} value={key}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="socialUrl">Profile URL</Label>
                <Input 
                  id="socialUrl" 
                  type="text" 
                  placeholder="https://twitter.com/username" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="glass-morphism border-white/10"
                />
              </div>
              <Button 
                className="w-full mt-2 glass-morphism border-white/10 hover:bg-white/10"
                onClick={handleAddLink}
              >
                <Plus size={14} className="mr-2" />
                Add Social Link
              </Button>
            </div>
          </div>
        )}
        
        <div className="text-sm text-white/50">
          {user.tier === 'free' 
            ? `Free tier: ${socialLinks.length}/2 social links used. Upgrade for more!` 
            : user.tier === 'pro' 
              ? `Pro tier: ${socialLinks.length}/5 social links used.`
              : `Royal tier: ${socialLinks.length}/10 social links used.`}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinksEditor;
