
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Image, Plus, X, CheckCircle } from 'lucide-react';
import { ProfileImage, UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ImagesEditorProps {
  profile: UserProfile;
  onSave: (images: ProfileImage[]) => void;
}

const ImagesEditor: React.FC<ImagesEditorProps> = ({ profile, onSave }) => {
  const { toast } = useToast();
  const [images, setImages] = useState<ProfileImage[]>(profile.profileImages || []);
  const [isAdding, setIsAdding] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageCaption, setNewImageCaption] = useState('');
  const tierBasedImageLimit = profile.tier === 'free' ? 1 : profile.tier === 'basic' ? 1 : 5;
  
  const handleAddImage = () => {
    if (images.length >= tierBasedImageLimit) {
      toast({
        title: "Image Limit Reached",
        description: profile.tier === 'free' ? "Upgrade to add more images." : "You've reached the maximum number of images for your tier.",
        variant: "destructive"
      });
      return;
    }
    
    if (!newImageUrl) {
      toast({
        title: "Invalid Image",
        description: "Please enter a valid image URL.",
        variant: "destructive"
      });
      return;
    }
    
    const newImage: ProfileImage = {
      id: Date.now().toString(),
      url: newImageUrl,
      isPrimary: images.length === 0,
      caption: newImageCaption || undefined
    };
    
    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    onSave(updatedImages);
    
    // Reset form
    setNewImageUrl('');
    setNewImageCaption('');
    setIsAdding(false);
    
    toast({
      title: "Image Added",
      description: "Your profile image has been added.",
      variant: "success"
    });
  };
  
  const handleRemoveImage = (id: string) => {
    const imageToRemove = images.find(img => img.id === id);
    const updatedImages = images.filter(img => img.id !== id);
    
    // If we're removing the primary image, set a new one
    if (imageToRemove?.isPrimary && updatedImages.length > 0) {
      updatedImages[0].isPrimary = true;
    }
    
    setImages(updatedImages);
    onSave(updatedImages);
    
    toast({
      title: "Image Removed",
      description: "Your profile image has been removed.",
      variant: "success"
    });
  };
  
  const handleSetPrimary = (id: string) => {
    const updatedImages = images.map(img => ({
      ...img,
      isPrimary: img.id === id
    }));
    
    setImages(updatedImages);
    onSave(updatedImages);
    
    toast({
      title: "Primary Image Updated",
      description: "Your primary profile image has been updated.",
      variant: "success"
    });
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Profile Images</CardTitle>
        <CardDescription>
          {profile.tier === 'free' 
            ? "Free accounts can have 1 profile image. Upgrade for more." 
            : `You can add up to ${tierBasedImageLimit} images to your profile.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className={cn(
                "relative rounded-md overflow-hidden border border-white/10 aspect-square group",
                image.isPrimary && "ring-2 ring-royal-gold ring-offset-2 ring-offset-background"
              )}
            >
              <img 
                src={image.url} 
                alt={image.caption || "Profile image"} 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                {image.caption && (
                  <p className="text-xs text-white/80 line-clamp-2">{image.caption}</p>
                )}
                
                <div className="flex justify-between">
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  {!image.isPrimary && (
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7 bg-black/50"
                      onClick={() => handleSetPrimary(image.id)}
                    >
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              
              {image.isPrimary && (
                <div className="absolute top-2 right-2 bg-royal-gold text-black text-xs px-2 py-0.5 rounded-full">
                  Primary
                </div>
              )}
            </div>
          ))}
          
          {images.length < tierBasedImageLimit && !isAdding && (
            <Button 
              variant="outline" 
              className="border-dashed border-white/20 h-full min-h-[200px] flex flex-col items-center justify-center gap-2"
              onClick={() => setIsAdding(true)}
            >
              <Plus className="h-6 w-6" />
              <span>Add Image</span>
            </Button>
          )}
        </div>
        
        {isAdding && (
          <div className="glass-morphism border-white/10 p-4 rounded-md space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Image URL</label>
              <Input
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="glass-morphism border-white/10"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Caption (optional)</label>
              <Textarea
                value={newImageCaption}
                onChange={(e) => setNewImageCaption(e.target.value)}
                placeholder="Image caption"
                className="glass-morphism border-white/10 resize-none"
                rows={2}
              />
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddImage}>
                Add Image
              </Button>
            </div>
          </div>
        )}
        
        {profile.tier === 'free' && images.length < tierBasedImageLimit && (
          <div className="text-center text-sm text-white/60 italic">
            Upgrade your account to add multiple images and captions.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImagesEditor;
