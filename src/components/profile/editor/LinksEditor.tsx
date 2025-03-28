
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Link, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile, ProfileLink } from '@/types/user';

interface LinksEditorProps {
  user: UserProfile;
  links: ProfileLink[];
  onLinksChange: (links: ProfileLink[]) => void;
}

const LinksEditor: React.FC<LinksEditorProps> = ({ user, links, onLinksChange }) => {
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
    const maxLinks = user.tier === 'free' ? 1 : 
                    user.tier === 'pro' ? 5 : 10;

    if (links.length >= maxLinks) {
      toast({
        title: "Limit Reached",
        description: `${user.tier === 'free' ? 'Free' : 'Pro'} tier users can only add ${maxLinks} links. Upgrade for more!`,
        variant: "destructive"
      });
      return;
    }

    // Create a new link
    const newLink: ProfileLink = {
      id: `link_${Date.now()}`,
      url: newLinkUrl,
      title: newLinkLabel, // Using title as required by ProfileLink
      label: newLinkLabel  // Also storing as label for display
    };

    onLinksChange([...links, newLink]);
    
    setNewLinkUrl("");
    setNewLinkLabel("");
  };

  const handleRemoveLink = (id: string) => {
    const updatedLinks = links.filter(link => String(link.id) !== id);
    onLinksChange(updatedLinks);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-base font-medium">Profile Links</Label>
        
        <div className="space-y-2">
          {links.map((link) => (
            <div key={String(link.id)} className="glass-morphism rounded-lg p-3 border border-white/10 flex justify-between items-center">
              <div className="flex items-center">
                <Link size={16} className="text-royal-gold" />
                <div className="ml-2">
                  <p className="text-sm font-medium">{link.label || link.title}</p>
                  <p className="text-xs text-white/50 truncate max-w-[200px]">{link.url}</p>
                </div>
              </div>
              <Button 
                size="sm"
                variant="ghost"
                className="text-white/50 hover:text-white hover:bg-white/10"
                onClick={() => handleRemoveLink(String(link.id))}
              >
                <Trash2 size={14} />
              </Button>
            </div>
          ))}
        </div>
        
        {links.length < (user.tier === 'free' ? 1 : user.tier === 'pro' ? 5 : 10) && (
          <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
            <h3 className="text-base font-medium mb-2">Add Link</h3>
            <div className="space-y-3">
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
                Add Link
              </Button>
            </div>
          </div>
        )}
        
        <div className="text-sm text-white/50">
          {user.tier === 'free' 
            ? `Free tier: ${links.length}/1 links used. Upgrade for more!` 
            : user.tier === 'pro' 
              ? `Pro tier: ${links.length}/5 links used.`
              : `Royal tier: ${links.length}/10 links used.`}
        </div>
      </div>
    </div>
  );
};

export default LinksEditor;
