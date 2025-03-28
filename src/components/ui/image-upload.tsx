
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, Upload, X, Image as ImageIcon, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  initialImageUrl: string;
  onImageChange: (url: string) => void;
  caption?: string;
  onCaptionChange?: (caption: string) => void;
  maxSizeKB?: number;
  showCaption?: boolean;
  placeholderText?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  initialImageUrl,
  onImageChange,
  caption = '',
  onCaptionChange,
  maxSizeKB = 1024, // Default 1MB
  showCaption = true,
  placeholderText = 'Upload an image'
}) => {
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size
    if (file.size > maxSizeKB * 1024) {
      toast({
        title: 'File too large',
        description: `The maximum file size is ${maxSizeKB}KB`,
        variant: 'destructive'
      });
      return;
    }
    
    // Mock upload - in a real app, you would upload to a server/CDN
    setIsUploading(true);
    
    // Read file as data URL
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const imageDataUrl = event.target.result as string;
        setImageUrl(imageDataUrl);
        onImageChange(imageDataUrl);
        setIsUploading(false);
      }
    };
    reader.onerror = () => {
      toast({
        title: 'Upload failed',
        description: 'There was an error uploading your image',
        variant: 'destructive'
      });
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };
  
  const handleRemoveImage = () => {
    setImageUrl('');
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!urlInput) return;
    
    try {
      // Validate URL
      new URL(urlInput);
      setImageUrl(urlInput);
      onImageChange(urlInput);
      setShowUrlInput(false);
    } catch (error) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid image URL',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-4">
      {imageUrl ? (
        <div className="relative">
          <div className="aspect-video rounded-md overflow-hidden">
            <img 
              src={imageUrl} 
              alt={caption || 'Uploaded image'} 
              className="w-full h-full object-cover"
            />
          </div>
          <Button 
            size="icon"
            variant="destructive"
            className="absolute top-2 right-2 h-7 w-7"
            onClick={handleRemoveImage}
          >
            <X size={14} />
          </Button>
        </div>
      ) : (
        <div className="glass-morphism border-white/10 rounded-md p-6">
          {showUrlInput ? (
            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <div className="flex space-x-2">
                  <Input 
                    id="imageUrl"
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="glass-morphism border-white/10"
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    className="glass-morphism border-white/10 hover:bg-white/10"
                  >
                    <Link size={16} />
                  </Button>
                  <Button 
                    type="button" 
                    size="icon"
                    variant="outline"
                    className="glass-morphism border-white/10 hover:bg-white/10"
                    onClick={() => setShowUrlInput(false)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4">
                <ImageIcon size={40} className="text-white/40" />
              </div>
              <p className="text-white/60 text-sm mb-4">{placeholderText}</p>
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  className="glass-morphism border-white/10 hover:bg-white/10"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  <Upload size={16} className="mr-2" />
                  {isUploading ? 'Uploading...' : 'Upload'}
                </Button>
                <Button 
                  variant="outline"
                  className="glass-morphism border-white/10 hover:bg-white/10"
                  onClick={() => setShowUrlInput(true)}
                >
                  <Link size={16} className="mr-2" />
                  URL
                </Button>
                <Button 
                  variant="outline"
                  className="glass-morphism border-white/10 hover:bg-white/10"
                >
                  <Camera size={16} className="mr-2" />
                  Camera
                </Button>
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <p className="text-xs text-white/40 mt-4">
                Max size: {maxSizeKB}KB. Supported formats: JPG, PNG, GIF.
              </p>
            </div>
          )}
        </div>
      )}
      
      {showCaption && onCaptionChange && (
        <div className="space-y-2">
          <Label htmlFor="imageCaption">Caption</Label>
          <Input 
            id="imageCaption"
            value={caption}
            onChange={(e) => onCaptionChange(e.target.value)}
            placeholder="Add a caption for this image"
            className="glass-morphism border-white/10"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
