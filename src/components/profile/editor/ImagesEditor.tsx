
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';
import { ProfileImage } from '@/types/profile';

interface ImagesEditorProps {
  user: UserProfile;
  images: ProfileImage[];
  onImagesChange: (images: ProfileImage[]) => void;
}

const ImagesEditor = ({ user, images, onImagesChange }: ImagesEditorProps) => {
  const { toast } = useToast();
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");

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

    onImagesChange([
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
    onImagesChange(images.filter(image => image.id !== id));
  };

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ImagesEditor;
