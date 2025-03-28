
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Trash2, LayoutGrid, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile, ProfileImage } from '@/types/user';

export interface ImagesEditorProps {
  user: UserProfile;
  images: ProfileImage[];
  onImagesChange: (images: ProfileImage[]) => void;
}

const ImagesEditor: React.FC<ImagesEditorProps> = ({ user, images, onImagesChange }) => {
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  const getMaxImages = () => {
    if (user.tier === 'free') return 1;
    if (user.tier === 'pro') return 5;
    return 10; // royal or other higher tiers
  };

  const handleAddImage = () => {
    if (!imageUrl) {
      toast({
        title: "Error",
        description: "Please provide an image URL",
        variant: "destructive"
      });
      return;
    }

    // Check if the max number of images has been reached
    const maxImages = getMaxImages();
    if (images.length >= maxImages) {
      toast({
        title: "Limit Reached",
        description: `${user.tier === 'free' ? 'Free' : 'Pro'} tier users can only add ${maxImages} images. Upgrade for more!`,
        variant: "destructive"
      });
      return;
    }

    // Create a new image
    const newImage: ProfileImage = {
      id: `img_${Date.now()}`,
      url: imageUrl,
      isPrimary: images.length === 0, // Make it primary if it's the first image
      caption: caption || undefined
    };

    onImagesChange([...images, newImage]);
    
    // Reset form
    setImageUrl('');
    setCaption('');

    toast({
      title: "Image Added",
      description: "Your image has been added to your profile",
    });
  };

  const handleRemoveImage = (id: string) => {
    // Check if we're removing the primary image
    const imageToRemove = images.find(img => img.id === id);
    const updatedImages = images.filter(image => image.id !== id);
    
    // If we removed the primary image and there are other images, make the first one primary
    if (imageToRemove?.isPrimary && updatedImages.length > 0) {
      updatedImages[0].isPrimary = true;
    }
    
    onImagesChange(updatedImages);
    
    toast({
      title: "Image Removed",
      description: "The image has been removed from your profile",
    });
  };

  const handleSetPrimary = (id: string) => {
    const updatedImages = images.map(image => ({
      ...image,
      isPrimary: image.id === id
    }));
    
    onImagesChange(updatedImages);
    
    toast({
      title: "Primary Image Set",
      description: "Your primary profile image has been updated",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-base font-medium">Profile Images</Label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="glass-morphism rounded-lg p-3 border border-white/10">
              <div className="aspect-square w-full rounded-md overflow-hidden mb-2">
                <img 
                  src={image.url} 
                  alt={image.caption || "Profile image"} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                {image.caption && (
                  <p className="text-sm text-white/70 truncate">{image.caption}</p>
                )}
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    variant={image.isPrimary ? "default" : "outline"}
                    className={image.isPrimary ? "bg-royal-gold hover:bg-royal-gold/90 text-black" : "glass-morphism border-white/10"}
                    onClick={() => handleSetPrimary(image.id)}
                    disabled={image.isPrimary}
                  >
                    {image.isPrimary ? 'Primary' : 'Set Primary'}
                  </Button>
                  <Button 
                    size="sm"
                    variant="ghost"
                    className="text-white/50 hover:text-white hover:bg-white/10"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {images.length < getMaxImages() && (
          <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
            <h3 className="text-base font-medium mb-2">Add Image</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input 
                  id="imageUrl" 
                  type="text" 
                  placeholder="https://example.com/image.jpg" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="glass-morphism border-white/10"
                />
              </div>
              <div>
                <Label htmlFor="caption">Caption (optional)</Label>
                <Input 
                  id="caption" 
                  type="text" 
                  placeholder="Caption for this image" 
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="glass-morphism border-white/10"
                />
              </div>
              <Button 
                className="w-full mt-2 glass-morphism border-white/10 hover:bg-white/10"
                onClick={handleAddImage}
              >
                <Upload size={14} className="mr-2" />
                Add Image
              </Button>
            </div>
          </div>
        )}
        
        <div className="text-sm text-white/50">
          {user.tier === 'free' 
            ? `Free tier: ${images.length}/1 images used. Upgrade for more!` 
            : user.tier === 'pro' 
              ? `Pro tier: ${images.length}/5 images used.`
              : `Royal tier: ${images.length}/10 images used.`}
        </div>
      </div>
    </div>
  );
};

export default ImagesEditor;
