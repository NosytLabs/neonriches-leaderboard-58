
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SocialLink } from '@/types/user-consolidated';
import { PlusCircle, X } from 'lucide-react';

interface SocialMediaLinksEditorProps {
  socialLinks: SocialLink[];
  onAddLink: (link: SocialLink) => void;
  onRemoveLink: (id: string) => void;
  onUpdateLink: (id: string, link: Partial<SocialLink>) => void;
}

// Extended SocialLink that includes icon property
interface ExtendedSocialLink extends SocialLink {
  icon?: string;
}

const SocialMediaLinksEditor: React.FC<SocialMediaLinksEditorProps> = ({
  socialLinks,
  onAddLink,
  onRemoveLink,
  onUpdateLink
}) => {
  const [newLink, setNewLink] = useState<ExtendedSocialLink>({
    id: '',
    platform: '',
    url: '',
    username: '',
    verified: false,
    icon: ''
  });

  const handleAddLink = () => {
    if (!newLink.platform || !newLink.url) return;
    
    const linkToAdd: SocialLink = {
      id: `social-${Date.now()}`,
      platform: newLink.platform,
      url: newLink.url.startsWith('http') ? newLink.url : `https://${newLink.url}`,
      username: newLink.username || '',
      verified: false,
      title: newLink.platform
    };
    
    onAddLink(linkToAdd);
    setNewLink({ id: '', platform: '', url: '', username: '', verified: false, icon: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {socialLinks.map((link) => (
          <div key={link.id} className="flex items-center justify-between border p-2 rounded">
            <div>
              <p className="font-medium">{link.platform}</p>
              <p className="text-sm text-muted-foreground truncate">{link.url}</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onRemoveLink(link.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <div className="space-y-4 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="platform">Platform</Label>
              <Input
                id="platform"
                placeholder="Twitter"
                value={newLink.platform}
                onChange={(e) => setNewLink({...newLink, platform: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="@username"
                value={newLink.username}
                onChange={(e) => setNewLink({...newLink, username: e.target.value})}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              placeholder="https://twitter.com/username"
              value={newLink.url}
              onChange={(e) => setNewLink({...newLink, url: e.target.value})}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddLink} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> 
          Add Social Link
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SocialMediaLinksEditor;
