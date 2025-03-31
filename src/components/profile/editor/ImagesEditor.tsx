
import React, { useState } from 'react';
import { ProfileImage, UserProfile } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil, Trash, Upload, Check } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImagesEditorProps {
  images: ProfileImage[];
  onImagesChange: React.Dispatch<React.SetStateAction<ProfileImage[]>>;
  user?: UserProfile;
}

const ImagesEditor: React.FC<ImagesEditorProps> = ({ images, onImagesChange }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempCaption, setTempCaption] = useState('');

  const handleAddImage = () => {
    const newImage: ProfileImage = {
      id: `image-${Date.now()}`,
      url: 'https://source.unsplash.com/random/300x300',
      isPrimary: images.length === 0,
      caption: 'New Image',
      type: 'profile' // Added required type property
    };
    
    onImagesChange([...images, newImage]);
  };

  const handleRemoveImage = (id: string) => {
    const updatedImages = images.filter(img => img.id !== id);
    
    // If we're removing the primary image, make another one primary
    if (images.find(img => img.id === id)?.isPrimary && updatedImages.length > 0) {
      updatedImages[0].isPrimary = true;
    }
    
    onImagesChange(updatedImages);
  };

  const handleSetPrimary = (id: string) => {
    const updatedImages = images.map(img => ({
      ...img,
      isPrimary: img.id === id
    }));
    
    onImagesChange(updatedImages);
  };

  const handleEditCaption = (id: string) => {
    const image = images.find(img => img.id === id);
    setTempCaption(image?.caption || '');
    setEditingId(id);
  };

  const handleSaveCaption = () => {
    if (!editingId) return;
    
    const updatedImages = images.map(img => 
      img.id === editingId 
        ? { ...img, caption: tempCaption }
        : img
    );
    
    onImagesChange(updatedImages);
    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Profile Images</h3>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={handleAddImage}
        >
          <Upload className="mr-2 h-4 w-4" />
          Add Image
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className={`rounded-lg border p-2 ${image.isPrimary ? 'border-royal-gold/50 bg-royal-gold/10' : 'border-white/10'}`}
          >
            <AspectRatio ratio={1} className="bg-black/20 rounded-md overflow-hidden mb-2">
              <img 
                src={image.url} 
                alt={image.caption || 'Profile image'} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            
            {editingId === image.id ? (
              <div className="flex space-x-2 mb-2">
                <Input
                  value={tempCaption}
                  onChange={(e) => setTempCaption(e.target.value)}
                  className="flex-1"
                />
                <Button size="icon" variant="outline" onClick={handleSaveCaption}>
                  <Check className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <p className="text-sm text-white/70 mb-2 truncate">
                {image.caption || 'No caption'}
              </p>
            )}
            
            <div className="flex justify-between">
              {!image.isPrimary && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleSetPrimary(String(image.id))}
                  className="text-xs"
                >
                  Set as Primary
                </Button>
              )}
              {image.isPrimary && (
                <span className="text-xs text-royal-gold font-medium py-1 px-2 bg-royal-gold/10 rounded">
                  Primary
                </span>
              )}
              <div className="flex space-x-1">
                <Button 
                  size="icon" 
                  variant="outline" 
                  onClick={() => handleEditCaption(String(image.id))}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  onClick={() => handleRemoveImage(String(image.id))}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {images.length === 0 && (
        <div className="text-center p-8 border border-white/10 rounded-lg bg-white/5">
          <p className="text-white/60">No images added yet.</p>
          <Button 
            variant="outline" 
            onClick={handleAddImage}
            className="mt-4"
          >
            <Upload className="mr-2 h-4 w-4" />
            Add First Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImagesEditor;
