
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Instagram, Twitter, Facebook, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SocialLink } from '@/types/user';

interface SocialMediaLinksEditorProps {
  user: UserProfile;
  socialLinks: SocialLink[];
  onLinksChange: (links: SocialLink[]) => void;
}

type SocialPlatform = 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'website' | 'other';

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  instagram: <Instagram size={16} className="text-pink-400" />,
  twitter: <Twitter size={16} className="text-blue-400" />,
  facebook: <Facebook size={16} className="text-blue-600" />,
  linkedin: <Linkedin size={16} className="text-blue-700" />,
  website: <Globe size={16} className="text-gray-400" />,
  other: <ExternalLink size={16} className="text-gray-400" />
};

const platformLabels: Record<SocialPlatform, string> = {
  instagram: 'Instagram',
  twitter: 'Twitter',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  website: 'Website',
  other: 'Other'
};

const SocialMediaLinksEditor: React.FC<SocialMediaLinksEditorProps> = ({ user, socialLinks, onLinksChange }) => {
  const { toast } = useToast();
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [newLinkPlatform, setNewLinkPlatform] = useState<SocialPlatform>("website");

  const handleAddLink = () => {
    if (!newLinkUrl) {
      toast({
        title: "Error",
        description: "Please provide URL for the social link",
        variant: "destructive"
      });
      return;
    }

    // Validate URL format
    try {
      new URL(newLinkUrl);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g. https://example.com)",
        variant: "destructive"
      });
      return;
    }

    // Check limits based on user tier
    const maxLinks = user.tier === 'free' ? 2 : 
                     user.tier === 'pro' ? 5 : 8;

    if (socialLinks.length >= maxLinks) {
      toast({
        title: "Limit Reached",
        description: `${user.tier === 'free' ? 'Free' : 'Pro'} tier users can only add ${maxLinks} social links. Upgrade for more!`,
        variant: "destructive"
      });
      return;
    }

    // Create a new social link
    const newLink: SocialLink = {
      platform: newLinkPlatform,
      url: newLinkUrl,
      clicks: 0
    };

    onLinksChange([...socialLinks, newLink]);
    
    setNewLinkUrl("");
    setNewLinkPlatform("website");
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    onLinksChange(updatedLinks);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-base font-medium">Social Media Links</Label>
        
        <div className="space-y-2">
          {socialLinks.map((link, index) => (
            <div key={index} className="glass-morphism rounded-lg p-3 border border-white/10 flex justify-between items-center">
              <div className="flex items-center">
                {platformIcons[link.platform as SocialPlatform] || platformIcons.other}
                <div className="ml-2">
                  <p className="text-sm font-medium">{platformLabels[link.platform as SocialPlatform] || 'Link'}</p>
                  <p className="text-xs text-white/50 truncate max-w-[200px]">{link.url}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-white/50">{link.clicks} clicks</span>
                <Button 
                  size="sm"
                  variant="ghost"
                  className="text-white/50 hover:text-white hover:bg-white/10"
                  onClick={() => handleRemoveLink(index)}
                >
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {socialLinks.length < (user.tier === 'free' ? 2 : user.tier === 'pro' ? 5 : 8) && (
          <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
            <h3 className="text-base font-medium mb-2">Add Social Link</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="linkPlatform">Platform</Label>
                <Select value={newLinkPlatform} onValueChange={(value) => setNewLinkPlatform(value as SocialPlatform)}>
                  <SelectTrigger className="glass-morphism border-white/10">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="linkUrl">URL</Label>
                <Input 
                  id="linkUrl" 
                  type="text" 
                  placeholder="https://example.com" 
                  value={newLinkUrl}
                  onChange={(e) => setNewLinkUrl(e.target.value)}
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
              : `Royal tier: ${socialLinks.length}/8 social links used.`}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinksEditor;
