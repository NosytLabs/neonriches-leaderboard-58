
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SocialLink } from '@/types/user-consolidated'; // Import from user-consolidated.ts
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';

interface SocialMediaLinksEditorProps {
  links: SocialLink[];
  onChange: (links: SocialLink[]) => void;
  maxLinks?: number;
}

const SocialMediaLinksEditor: React.FC<SocialMediaLinksEditorProps> = ({
  links,
  onChange,
  maxLinks = 5,
}) => {
  const [editing, setEditing] = useState(false);
  
  const handleAddLink = () => {
    if (links.length >= maxLinks) {
      return; // Don't add more than maxLinks
    }
    
    const newLink: SocialLink = {
      id: `link-${Date.now()}`, // Generate a string ID
      platform: '',
      url: '',
      title: '', // Using title property which is now required
    };
    
    onChange([...links, newLink]);
  };
  
  const handleRemoveLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    onChange(newLinks);
  };
  
  const handleLinkChange = (index: number, field: keyof SocialLink, value: string) => {
    const newLinks = [...links];
    newLinks[index] = {
      ...newLinks[index],
      [field]: value,
    };
    onChange(newLinks);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Social Media Links</span>
          {links.length < maxLinks && (
            <Button 
              onClick={handleAddLink}
              size="sm"
              variant="outline"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Link
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {links.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              <p>No social links added yet.</p>
              <Button 
                onClick={handleAddLink} 
                className="mt-2"
                variant="outline"
                size="sm"
              >
                Add Your First Link
              </Button>
            </div>
          ) : (
            links.map((link, index) => (
              <div key={String(link.id)} className="space-y-2 border p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <Label>Link {index + 1}</Label>
                  <Button 
                    onClick={() => handleRemoveLink(index)}
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor={`platform-${index}`}>Platform</Label>
                  <Input
                    id={`platform-${index}`}
                    value={link.platform || ''}
                    onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                    placeholder="e.g. Twitter, Instagram, etc."
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor={`title-${index}`}>Title</Label>
                  <Input
                    id={`title-${index}`}
                    value={link.title || ''}
                    onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                    placeholder="e.g. Follow me on Twitter"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor={`url-${index}`}>URL</Label>
                  <Input
                    id={`url-${index}`}
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                    placeholder="https://..."
                  />
                </div>
              </div>
            ))
          )}
          
          {links.length > 0 && links.length < maxLinks && (
            <Button 
              onClick={handleAddLink}
              variant="outline"
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Another Link
            </Button>
          )}
          
          {links.length >= maxLinks && (
            <p className="text-sm text-muted-foreground text-center">
              You've reached the maximum number of links ({maxLinks}).
              <br />
              Upgrade your account to add more links.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaLinksEditor;
