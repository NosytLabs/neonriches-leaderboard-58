
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OptimizedImage from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';
import { Upload, X, Link, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface ImageUploadProps {
  initialImageUrl?: string;
  onImageChange: (url: string) => void;
  caption?: string;
  onCaptionChange?: (caption: string) => void;
  maxSizeKB?: number;
  className?: string;
  showCaption?: boolean;
  placeholderText?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  initialImageUrl = '',
  onImageChange,
  caption = '',
  onCaptionChange,
  maxSizeKB = 500,
  className,
  showCaption = true,
  placeholderText = 'Upload an image or enter URL'
}) => {
  const [imageUrl, setImageUrl] = useState<string>(initialImageUrl);
  const [imageCaption, setImageCaption] = useState<string>(caption);
  const [uploadType, setUploadType] = useState<'url' | 'file'>('url');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Handle image URL input
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrl(url);
    onImageChange(url);
  };
  
  // Handle caption changes
  const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCaption = e.target.value;
    setImageCaption(newCaption);
    if (onCaptionChange) {
      onCaptionChange(newCaption);
    }
  };

  // Handle file uploads and convert to data URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size
    if (file.size > maxSizeKB * 1024) {
      toast({
        title: "File too large",
        description: `Please upload an image smaller than ${maxSizeKB}KB.`,
        variant: "destructive"
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setImageUrl(dataUrl);
      onImageChange(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    
    if (file.size > maxSizeKB * 1024) {
      toast({
        title: "File too large",
        description: `Please upload an image smaller than ${maxSizeKB}KB.`,
        variant: "destructive"
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setImageUrl(dataUrl);
      onImageChange(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImageUrl('');
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <div className="space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setUploadType('url')}
            className={cn(
              "glass-morphism border-white/10",
              uploadType === 'url' && "bg-white/10"
            )}
          >
            <Link size={14} className="mr-1" />
            URL
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setUploadType('file')}
            className={cn(
              "glass-morphism border-white/10",
              uploadType === 'file' && "bg-white/10"
            )}
          >
            <Upload size={14} className="mr-1" />
            Upload
          </Button>
        </div>
        
        {imageUrl && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="text-destructive glass-morphism border-white/10 hover:bg-destructive/10"
            onClick={clearImage}
          >
            <X size={14} className="mr-1" />
            Clear
          </Button>
        )}
      </div>
      
      {uploadType === 'url' ? (
        <div className="space-y-2">
          <Label htmlFor="image-url">Image URL</Label>
          <div className="relative">
            <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <Input
              id="image-url"
              type="text"
              placeholder="https://example.com/image.jpg"
              className="pl-10 glass-morphism border-white/10"
              value={imageUrl}
              onChange={handleUrlChange}
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "glass-morphism border-2 border-dashed rounded-lg p-4 transition-colors",
            isDragging ? "border-primary/70 bg-primary/5" : "border-white/10",
            "text-center cursor-pointer"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center space-y-2 py-4">
            <Upload className="h-10 w-10 text-white/40" />
            {imageUrl ? (
              <p className="text-sm text-white/70">
                Click or drag to replace image
              </p>
            ) : (
              <>
                <p className="text-base text-white/70">
                  {placeholderText}
                </p>
                <p className="text-xs text-white/50">
                  Max file size: {maxSizeKB}KB
                </p>
              </>
            )}
          </div>
        </div>
      )}
      
      {imageUrl && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <OptimizedImage
            src={imageUrl}
            alt={imageCaption || "Uploaded image"}
            className="w-full max-h-48 object-contain rounded-lg bg-white/5"
            width={400}
            height={300}
            fallback="/placeholder.svg"
          />
        </div>
      )}
      
      {showCaption && (
        <div className="space-y-1 mt-3">
          <Label htmlFor="image-caption">Caption</Label>
          <Input
            id="image-caption"
            type="text"
            placeholder="Image description"
            className="glass-morphism border-white/10"
            value={imageCaption}
            onChange={handleCaptionChange}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
