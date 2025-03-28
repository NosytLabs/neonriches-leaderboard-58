
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, ExternalLink } from 'lucide-react';
import { SocialLink, UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';

type SocialPlatform = 
  | 'twitter' 
  | 'instagram' 
  | 'facebook' 
  | 'youtube' 
  | 'twitch' 
  | 'discord' 
  | 'github' 
  | 'linkedin'
  | 'tiktok'
  | 'custom';

const platformOptions: Array<{value: SocialPlatform, label: string, icon: string}> = [
  { value: 'twitter', label: 'Twitter', icon: 'twitter' },
  { value: 'instagram', label: 'Instagram', icon: 'instagram' },
  { value: 'facebook', label: 'Facebook', icon: 'facebook' },
  { value: 'youtube', label: 'YouTube', icon: 'youtube' },
  { value: 'twitch', label: 'Twitch', icon: 'twitch' },
  { value: 'discord', label: 'Discord', icon: 'discord' },
  { value: 'github', label: 'GitHub', icon: 'github' },
  { value: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { value: 'tiktok', label: 'TikTok', icon: 'tiktok' },
  { value: 'custom', label: 'Custom Link', icon: 'link' }
];

interface SocialMediaLinksEditorProps {
  profile: UserProfile;
  onSave: (links: SocialLink[]) => void;
}

const SocialMediaLinksEditor: React.FC<SocialMediaLinksEditorProps> = ({ profile, onSave }) => {
  const { toast } = useToast();
  const [links, setLinks] = useState<SocialLink[]>(profile.socialLinks || []);
  const [newPlatform, setNewPlatform] = useState<SocialPlatform>('twitter');
  const [newUrl, setNewUrl] = useState('');
  const tierBasedLinkLimit = profile.tier === 'free' ? 1 : profile.tier === 'basic' ? 3 : 10;
  
  const handleAddLink = () => {
    if (links.length >= tierBasedLinkLimit) {
      toast({
        title: "Link Limit Reached",
        description: profile.tier === 'free' ? "Upgrade to add more links." : "You've reached the maximum number of links for your tier.",
        variant: "destructive"
      });
      return;
    }
    
    if (!newUrl) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL.",
        variant: "destructive"
      });
      return;
    }
    
    const platformData = platformOptions.find(p => p.value === newPlatform);
    
    const newLink: SocialLink = {
      id: Date.now().toString(),
      platform: newPlatform,
      url: newUrl,
      icon: platformData?.icon || 'link',
      clicks: 0
    };
    
    const updatedLinks = [...links, newLink];
    setLinks(updatedLinks);
    onSave(updatedLinks);
    
    // Reset form
    setNewUrl('');
    
    toast({
      title: "Link Added",
      description: "Your social link has been added.",
      variant: "success"
    });
  };
  
  const handleRemoveLink = (id: string) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
    onSave(updatedLinks);
    
    toast({
      title: "Link Removed",
      description: "Your social link has been removed.",
      variant: "success"
    });
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Social Media Links</CardTitle>
        <CardDescription>
          {profile.tier === 'free' 
            ? "Free accounts can have 1 social link. Upgrade for more." 
            : `You can add up to ${tierBasedLinkLimit} links to your profile.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {links.map((link) => (
            <div 
              key={link.id} 
              className="flex items-center justify-between p-3 bg-white/5 rounded-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`fa fa-${link.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{link.platform}</p>
                  <p className="text-xs text-white/60 truncate">{link.url}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {link.clicks !== undefined && (
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
                    {link.clicks} clicks
                  </span>
                )}
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 text-white/60 hover:text-white"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 text-white/60 hover:text-destructive"
                  onClick={() => handleRemoveLink(link.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {links.length < tierBasedLinkLimit && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Select
                  value={newPlatform}
                  onValueChange={(value) => setNewPlatform(value as SocialPlatform)}
                >
                  <SelectTrigger className="glass-morphism border-white/10">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {platformOptions.map((platform) => (
                      <SelectItem key={platform.value} value={platform.value}>
                        {platform.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="col-span-2 flex gap-2">
                <Input
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://example.com/profile"
                  className="glass-morphism border-white/10 flex-1"
                />
                
                <Button 
                  size="icon" 
                  onClick={handleAddLink}
                  className="shrink-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {profile.tier === 'free' && (
              <p className="text-xs text-white/60 italic">
                Pro accounts can add up to 10 social links with click tracking.
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SocialMediaLinksEditor;
