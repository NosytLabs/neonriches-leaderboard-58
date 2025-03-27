
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';
import { ProfileImage } from '@/types/profile';
import ImageUpload from '@/components/ui/image-upload';
import { useIsMobile } from '@/hooks/use-mobile';

interface ImagesEditorProps {
  user: UserProfile;
  images: ProfileImage[];
  onImagesChange: (images: ProfileImage[]) => void;
}

const ImagesEditor = ({ user, images, onImagesChange }: ImagesEditorProps) => {
  const { toast } = useToast();
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");
  const isMobile = useIsMobile();
  
  const maxImages = user.tier === 'free' ? 1 : 5;
  const maxSizeKB = user.tier === 'free' ? 500 : 2048;

  const handleAddImage = () => {
    if (!newImageUrl) {
      toast({
        title: "Error",
        description: "Please provide an image",
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
    setIsAddingImage(false);
  };

  const handleRemoveImage = (id: number) => {
    onImagesChange(images.filter(image => image.id !== id));
  };

  const handleCancelAdd = () => {
    setNewImageUrl("");
    setNewImageCaption("");
    setIsAddingImage(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-medium">Your Images</h3>
          
          {((user.tier === 'free' && images.length < 1) || (user.tier === 'pro' && images.length < 5)) && !isAddingImage && (
            <Button 
              size="sm"
              variant="outline"
              className="glass-morphism border-white/10 hover:bg-white/10"
              onClick={() => setIsAddingImage(true)}
            >
              <Plus size={14} className="mr-2" />
              Add Image
            </Button>
          )}
        </div>
        
        {images.length === 0 && !isAddingImage ? (
          <div className="glass-morphism rounded-lg p-8 border border-white/10 text-center">
            <p className="text-white/50">No images added yet</p>
            {((user.tier === 'free' && images.length < 1) || (user.tier === 'pro' && images.length < 5)) && (
              <Button 
                className="mt-4 glass-morphism border-white/10 hover:bg-white/10"
                onClick={() => setIsAddingImage(true)}
              >
                <Plus size={14} className="mr-2" />
                Add Your First Image
              </Button>
            )}
          </div>
        ) : (
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
        )}
        
        {isAddingImage && (
          <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
            <h3 className="text-base font-medium mb-4">Add New Image</h3>
            
            <ImageUpload
              initialImageUrl={newImageUrl}
              onImageChange={setNewImageUrl}
              caption={newImageCaption}
              onCaptionChange={setNewImageCaption}
              maxSizeKB={maxSizeKB}
              showCaption={true}
              placeholderText={`Upload an image (max ${maxSizeKB}KB)`}
            />
            
            <div className="flex space-x-2 mt-4">
              <Button 
                variant="outline"
                className="flex-1 glass-morphism border-white/10"
                onClick={handleCancelAdd}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 glass-morphism border-white/10 hover:bg-white/10"
                onClick={handleAddImage}
                disabled={!newImageUrl}
              >
                Add Image
              </Button>
            </div>
          </div>
        )}
        
        <div className="text-sm text-white/50">
          {user.tier === 'free' 
            ? `Free tier: ${images.length}/${maxImages} image${maxImages > 1 ? 's' : ''} used. Upgrade to Pro for up to 5 images!` 
            : `Pro tier: ${images.length}/${maxImages} images used.`}
        </div>
      </div>
    </div>
  );
};

export default ImagesEditor;
