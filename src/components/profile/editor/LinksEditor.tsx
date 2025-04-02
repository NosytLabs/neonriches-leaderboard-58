
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, X } from 'lucide-react';
import { ProfileLink } from '@/types/user';

interface LinksEditorProps {
  links: ProfileLink[];
  onAddLink: (link: ProfileLink) => void;
  onRemoveLink: (id: string) => void;
  onUpdateLink: (id: string, link: Partial<ProfileLink>) => void;
}

// Create an extended type for our profile links with the clicks property
interface ExtendedProfileLink extends ProfileLink {
  clicks?: number;
}

const LinksEditor: React.FC<LinksEditorProps> = ({
  links,
  onAddLink,
  onRemoveLink,
  onUpdateLink
}) => {
  const [newLink, setNewLink] = React.useState<ExtendedProfileLink>({
    id: '',
    platform: '',
    url: '',
    title: '',
    clicks: 0
  });

  const handleAddLink = () => {
    if (!newLink.url || !newLink.platform) return;
    
    const linkToAdd: ProfileLink = {
      id: `link-${Date.now()}`,
      platform: newLink.platform,
      url: newLink.url.startsWith('http') ? newLink.url : `https://${newLink.url}`,
      title: newLink.title || newLink.platform,
      label: newLink.title || newLink.platform,
      displayText: newLink.title || newLink.platform
    };
    
    onAddLink(linkToAdd);
    setNewLink({ id: '', platform: '', url: '', title: '', clicks: 0 });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profile Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="flex items-center space-x-2 border p-2 rounded-md">
            <div className="flex-1">
              <p className="font-medium">{link.title || link.platform}</p>
              <p className="text-sm text-muted-foreground truncate">{link.url}</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onRemoveLink(link.id || '')}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <div className="space-y-2 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="platform">Platform</Label>
              <Input
                id="platform"
                placeholder="Instagram"
                value={newLink.platform}
                onChange={(e) => setNewLink({...newLink, platform: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="title">Display Name</Label>
              <Input
                id="title"
                placeholder="My Instagram"
                value={newLink.title}
                onChange={(e) => setNewLink({...newLink, title: e.target.value})}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              placeholder="https://example.com/profile"
              value={newLink.url}
              onChange={(e) => setNewLink({...newLink, url: e.target.value})}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddLink} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Link
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LinksEditor;
