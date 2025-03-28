
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { ProfileLink } from '@/types/profile';

interface LinksEditorProps {
  user: UserProfile;
  links: ProfileLink[];
  onLinksChange: (links: ProfileLink[]) => void;
}

const LinksEditor = ({ user, links, onLinksChange }: LinksEditorProps) => {
  const { toast } = useToast();
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [newLinkLabel, setNewLinkLabel] = useState("");

  const handleAddLink = () => {
    if (!newLinkUrl || !newLinkLabel) {
      toast({
        title: "Error",
        description: "Please provide both URL and label for the link",
        variant: "destructive"
      });
      return;
    }

    if (user.tier === 'free' && links.length >= 1) {
      toast({
        title: "Limit Reached",
        description: "Free tier users can only add 1 link. Upgrade to Pro for more!",
        variant: "destructive"
      });
      return;
    }

    if (user.tier === 'pro' && links.length >= 5) {
      toast({
        title: "Limit Reached",
        description: "You've reached the maximum of 5 links.",
        variant: "destructive"
      });
      return;
    }

    onLinksChange([
      ...links,
      {
        id: Date.now(),
        url: newLinkUrl,
        label: newLinkLabel
      }
    ]);
    
    setNewLinkUrl("");
    setNewLinkLabel("");
  };

  const handleRemoveLink = (id: number) => {
    onLinksChange(links.filter(link => link.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-base font-medium">Current Links</Label>
        
        <div className="space-y-2">
          {links.map(link => (
            <div key={link.id} className="glass-morphism rounded-lg p-3 border border-white/10 flex justify-between items-center">
              <div className="flex items-center">
                <LinkIcon size={14} className="mr-2 text-white/50" />
                <div>
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="text-xs text-white/50 truncate max-w-[200px]">{link.url}</p>
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
        
        {((user.tier === 'free' && links.length < 1) || (user.tier === 'pro' && links.length < 5)) && (
          <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
            <h3 className="text-base font-medium mb-2">Add New Link</h3>
            <div className="space-y-2">
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
              <div>
                <Label htmlFor="linkLabel">Label</Label>
                <Input 
                  id="linkLabel" 
                  type="text" 
                  placeholder="My Website" 
                  value={newLinkLabel}
                  onChange={(e) => setNewLinkLabel(e.target.value)}
                  className="glass-morphism border-white/10"
                />
              </div>
              <Button 
                className="w-full mt-2 glass-morphism border-white/10 hover:bg-white/10"
                onClick={handleAddLink}
              >
                <Plus size={14} className="mr-2" />
                Add Link
              </Button>
            </div>
          </div>
        )}
        
        <div className="text-sm text-white/50">
          {user.tier === 'free' 
            ? `Free tier: ${links.length}/1 links used. Upgrade to Pro for up to 5 links!` 
            : `Pro tier: ${links.length}/5 links used.`}
        </div>
      </div>
    </div>
  );
};

export default LinksEditor;
