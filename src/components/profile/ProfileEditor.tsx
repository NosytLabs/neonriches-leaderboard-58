
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Image, Link as LinkIcon } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';

interface ProfileImage {
  id: number;
  url: string;
  caption: string;
}

interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: ProfileLink[];
}

interface ProfileEditorProps {
  user: UserProfile;
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
  onCancel: () => void;
}

const ProfileEditor = ({ user, profileData, onSave, onCancel }: ProfileEditorProps) => {
  const { toast } = useToast();
  
  const [bio, setBio] = useState(profileData.bio);
  const [images, setImages] = useState(profileData.images);
  const [links, setLinks] = useState(profileData.links);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [newLinkLabel, setNewLinkLabel] = useState("");

  const handleSaveProfile = () => {
    const updatedProfileData = {
      bio,
      images,
      links
    };
    
    onSave(updatedProfileData);
  };

  const handleAddImage = () => {
    if (!newImageUrl) {
      toast({
        title: "Error",
        description: "Please provide an image URL",
        variant: "destructive"
      });
      return;
    }

    if (user.tier === 'free' && images.length >= 1) {
      toast({
        title: "Limit Reached",
        description: "Free tier users can only add 1 image. Upgrade to Pro for more!",
        variant: "destructive"
      });
      return;
    }

    if (user.tier === 'pro' && images.length >= 5) {
      toast({
        title: "Limit Reached",
        description: "You've reached the maximum of 5 images.",
        variant: "destructive"
      });
      return;
    }

    setImages([
      ...images,
      {
        id: Date.now(),
        url: newImageUrl,
        caption: newImageCaption || "My image"
      }
    ]);
    
    setNewImageUrl("");
    setNewImageCaption("");
  };

  const handleRemoveImage = (id: number) => {
    setImages(images.filter(image => image.id !== id));
  };

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

    setLinks([
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
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardContent className="pt-6">
        <Tabs defaultValue="info">
          <TabsList className="glass-morphism border-white/10 mb-6">
            <TabsTrigger value="info">Basic Info</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself..." 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="glass-morphism border-white/10 min-h-[120px]"
                maxLength={user.tier === 'pro' ? 1000 : 200}
              />
              <p className="text-xs text-white/50 text-right">
                {bio.length}/{user.tier === 'pro' ? 1000 : 200} characters
              </p>
            </div>
            
            <div className="mt-4">
              <Button 
                className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                onClick={handleSaveProfile}
              >
                Save Changes
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="images" className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base font-medium">Current Images</Label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map(image => (
                  <div key={image.id} className="glass-morphism rounded-lg p-3 border border-white/10 relative group">
                    <div className="relative aspect-video mb-2 overflow-hidden rounded-md">
                      <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
                      <Button 
                        size="sm"
                        variant="destructive"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveImage(image.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                    <p className="text-sm text-white/70 truncate">{image.caption}</p>
                  </div>
                ))}
              </div>
              
              {((user.tier === 'free' && images.length < 1) || (user.tier === 'pro' && images.length < 5)) && (
                <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
                  <h3 className="text-base font-medium mb-2">Add New Image</h3>
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor="imageUrl">Image URL</Label>
                      <Input 
                        id="imageUrl" 
                        type="text" 
                        placeholder="https://example.com/image.jpg" 
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        className="glass-morphism border-white/10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="imageCaption">Caption</Label>
                      <Input 
                        id="imageCaption" 
                        type="text" 
                        placeholder="Image description" 
                        value={newImageCaption}
                        onChange={(e) => setNewImageCaption(e.target.value)}
                        className="glass-morphism border-white/10"
                      />
                    </div>
                    <Button 
                      className="w-full mt-2 glass-morphism border-white/10 hover:bg-white/10"
                      onClick={handleAddImage}
                    >
                      <Plus size={14} className="mr-2" />
                      Add Image
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="text-sm text-white/50">
                {user.tier === 'free' 
                  ? `Free tier: ${images.length}/1 images used. Upgrade to Pro for up to 5 images!` 
                  : `Pro tier: ${images.length}/5 images used.`}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="links" className="space-y-6">
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
