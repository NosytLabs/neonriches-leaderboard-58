import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, Check, Star, Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ProfileImage, UserProfile } from '@/types/user';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ImagesEditorProps {
  images: ProfileImage[];
  onImagesChange: Dispatch<SetStateAction<ProfileImage[]>>;
  user: UserProfile;
}

const ImagesEditor: React.FC<ImagesEditorProps> = ({ images, onImagesChange, user }) => {
  const { toast } = useToast();
  const [editingImageId, setEditingImageId] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  
  const handleAddImage = () => {
    if (!newImageUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid image URL",
        variant: "destructive"
      });
      return;
    }
    
    const newImage: ProfileImage = {
      url: newImageUrl,
      id: `img-${Date.now()}`,
      isPrimary: images.length === 0, // First image is primary by default
      caption: ''
    };
    
    setImages([...images, newImage]);
    setNewImageUrl('');
    onImagesChange([...images, newImage]);
  };
  
  const handleDeleteImage = (id: string) => {
    const updatedImages = images.filter(img => img.id !== id);
    
    // If we deleted the primary image, make the first remaining image primary
    if (images.find(img => img.id === id)?.isPrimary && updatedImages.length > 0) {
      updatedImages[0].isPrimary = true;
    }
    
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };
  
  const handleEditCaption = (id: string) => {
    const image = images.find(img => img.id === id);
    if (image) {
      setEditCaption(image.caption || '');
      setEditingImageId(id);
    }
  };
  
  const saveCaption = () => {
    if (!editingImageId) return;
    
    const updatedImages = images.map(img => {
      if (img.id === editingImageId) {
        return { ...img, caption: editCaption };
      }
      return img;
    });
    
    setImages(updatedImages);
    setEditingImageId(null);
    onImagesChange(updatedImages);
  };
  
  const makePrimary = (id: string) => {
    const updatedImages = images.map(img => ({
      ...img,
      isPrimary: img.id === id
    }));
    
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Images</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className={cn(
                "relative rounded-md overflow-hidden border", 
                image.isPrimary ? "border-royal-gold" : "border-gray-600"
              )}
            >
              <img 
                src={image.url} 
                alt={image.caption || "Profile image"} 
                className="w-full h-48 object-cover"
              />
              
              {image.isPrimary && (
                <div className="absolute top-2 right-2 bg-royal-gold text-black rounded-full p-1">
                  <Star size={16} />
                </div>
              )}
              
              <div className="p-2 bg-black/50">
                {editingImageId === image.id ? (
                  <div className="space-y-2">
                    <Textarea 
                      value={editCaption} 
                      onChange={(e) => setEditCaption(e.target.value)} 
                      placeholder="Image caption..."
                      className="h-20 text-sm"
                    />
                    <Button size="sm" onClick={saveCaption}>
                      <Check size={16} className="mr-1" /> Save
                    </Button>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {image.caption || "No caption"}
                    </p>
                    <div className="flex justify-between mt-2">
                      {!image.isPrimary && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => makePrimary(image.id)}
                        >
                          <Star size={16} className="mr-1" /> Make Primary
                        </Button>
                      )}
                      <div className="flex">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleEditCaption(image.id)}
                          className="mr-1"
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => handleDeleteImage(image.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Label htmlFor="new-image">Add Image URL</Label>
          <div className="flex mt-1">
            <Input 
              id="new-image"
              value={newImageUrl} 
              onChange={(e) => setNewImageUrl(e.target.value)} 
              placeholder="https://example.com/image.jpg" 
              className="flex-1 mr-2"
            />
            <Button onClick={handleAddImage}>
              <Plus size={16} className="mr-1" /> Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImagesEditor;
