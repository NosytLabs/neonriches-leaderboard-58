
import React, { useState } from 'react';
import { ProfileLink } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Trash, Plus, Pencil, Check, X, Link as LinkIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PLATFORM_OPTIONS = [
  { value: 'website', label: 'Website', icon: '🌐' },
  { value: 'twitter', label: 'Twitter', icon: '🐦' },
  { value: 'instagram', label: 'Instagram', icon: '📸' },
  { value: 'youtube', label: 'YouTube', icon: '📺' },
  { value: 'discord', label: 'Discord', icon: '💬' },
  { value: 'twitch', label: 'Twitch', icon: '🎮' },
  { value: 'github', label: 'GitHub', icon: '💻' },
  { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { value: 'other', label: 'Other', icon: '🔗' },
];

interface LinksEditorProps {
  links: ProfileLink[];
  onLinksChange: React.Dispatch<React.SetStateAction<ProfileLink[]>>;
}

const LinksEditor: React.FC<LinksEditorProps> = ({ links, onLinksChange }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newLink, setNewLink] = useState<Partial<ProfileLink>>({
    platform: '',
    url: '',
    title: '',
    label: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedLink, setEditedLink] = useState<Partial<ProfileLink>>({});

  const handleAddLink = () => {
    if (!newLink.platform || !newLink.url) return;
    
    const link: ProfileLink = {
      id: `link-${Date.now()}`,
      url: newLink.url,
      platform: newLink.platform,
      title: newLink.title || newLink.platform,
      label: newLink.label || '',
      icon: PLATFORM_OPTIONS.find(o => o.value === newLink.platform)?.icon || '🔗',
      clicks: 0
    };
    
    onLinksChange([...links, link]);
    setNewLink({ platform: '', url: '', title: '', label: '' });
    setIsAdding(false);
  };

  const handleRemoveLink = (id: string | number) => {
    onLinksChange(links.filter(link => link.id !== id));
  };

  const handleEditLink = (id: string | number) => {
    const link = links.find(link => link.id === id);
    if (!link) return;
    
    setEditedLink({ ...link });
    setEditingId(String(id));
  };

  const handleSaveEdit = () => {
    if (!editingId || !editedLink.url || !editedLink.platform) return;
    
    const updatedLinks = links.map(link => 
      link.id === editingId 
        ? {
            ...link,
            url: editedLink.url || link.url,
            platform: editedLink.platform || link.platform,
            title: editedLink.title || editedLink.platform || link.title,
            label: editedLink.label || link.label,
            icon: PLATFORM_OPTIONS.find(o => o.value === editedLink.platform)?.icon || link.icon || '🔗',
          }
        : link
    );
    
    onLinksChange(updatedLinks);
    setEditingId(null);
    setEditedLink({});
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedLink({});
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Profile Links</h3>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => setIsAdding(true)}
          disabled={isAdding}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Link
        </Button>
      </div>
      
      {isAdding && (
        <Card className="p-4">
          <h4 className="font-medium mb-3">Add New Link</h4>
          <div className="space-y-3">
            <div>
              <Label htmlFor="platform">Platform</Label>
              <Select 
                value={newLink.platform} 
                onValueChange={(val) => setNewLink({...newLink, platform: val})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {PLATFORM_OPTIONS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="flex items-center">
                        <span className="mr-2">{option.icon}</span>
                        {option.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="url">URL</Label>
              <Input 
                id="url" 
                value={newLink.url} 
                onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                placeholder="https://"
              />
            </div>
            
            <div>
              <Label htmlFor="title">Title (optional)</Label>
              <Input 
                id="title" 
                value={newLink.title} 
                onChange={(e) => setNewLink({...newLink, title: e.target.value})}
                placeholder="e.g. My Website"
              />
            </div>
            
            <div>
              <Label htmlFor="label">Label (optional)</Label>
              <Input 
                id="label" 
                value={newLink.label} 
                onChange={(e) => setNewLink({...newLink, label: e.target.value})}
                placeholder="e.g. Visit my site"
              />
            </div>
            
            <div className="flex space-x-2 pt-2">
              <Button onClick={handleAddLink} disabled={!newLink.platform || !newLink.url}>
                Add Link
              </Button>
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}
      
      <div className="space-y-3">
        {links.length === 0 && !isAdding && (
          <div className="text-center p-6 border border-white/10 rounded-lg bg-white/5">
            <p className="text-white/60">No links added yet.</p>
            <Button 
              variant="outline" 
              onClick={() => setIsAdding(true)}
              className="mt-4"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add First Link
            </Button>
          </div>
        )}
        
        {links.map((link) => (
          <Card key={link.id} className="p-3">
            {editingId === link.id ? (
              <div className="space-y-3">
                <div>
                  <Label htmlFor={`edit-platform-${link.id}`}>Platform</Label>
                  <Select 
                    value={editedLink.platform} 
                    onValueChange={(val) => setEditedLink({...editedLink, platform: val})}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {PLATFORM_OPTIONS.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          <span className="flex items-center">
                            <span className="mr-2">{option.icon}</span>
                            {option.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor={`edit-url-${link.id}`}>URL</Label>
                  <Input 
                    id={`edit-url-${link.id}`} 
                    value={editedLink.url} 
                    onChange={(e) => setEditedLink({...editedLink, url: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor={`edit-title-${link.id}`}>Title</Label>
                  <Input 
                    id={`edit-title-${link.id}`} 
                    value={editedLink.title} 
                    onChange={(e) => setEditedLink({...editedLink, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor={`edit-label-${link.id}`}>Label</Label>
                  <Input 
                    id={`edit-label-${link.id}`} 
                    value={editedLink.label} 
                    onChange={(e) => setEditedLink({...editedLink, label: e.target.value})}
                  />
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button 
                    size="sm"
                    onClick={handleSaveEdit} 
                    disabled={!editedLink.url || !editedLink.platform}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline" 
                    onClick={handleCancelEdit}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 flex items-center justify-center bg-black/20 rounded">
                    <span className="text-lg">{link.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium">{link.title}</p>
                    <p className="text-xs text-white/60 truncate max-w-[200px]">{link.url}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-8 w-8" 
                    onClick={() => handleEditLink(link.id)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-8 w-8" 
                    onClick={() => handleRemoveLink(link.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LinksEditor;
