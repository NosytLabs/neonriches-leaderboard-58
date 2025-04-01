
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  placeholderColor?: string;
  // Add missing properties that are used in performance-demo.tsx
  priority?: boolean;
  objectFit?: string;
  format?: string;
  quality?: number;
  importance?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  placeholderColor = '#f3f4f6',
  priority = false,
  objectFit,
  format,
  quality,
  importance,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  // Apply object-fit style if provided
  const imgStyle: React.CSSProperties = {
    ...(objectFit ? { objectFit: objectFit as any } : {})
  };

  return (
    <div className={cn(
      "relative overflow-hidden",
      isLoading && "bg-gray-200 animate-pulse",
      className
    )}>
      {isLoading && (
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          error && !fallbackSrc && "hidden",
          className
        )}
        style={imgStyle}
        {...props}
      />
      {error && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
          <span>{alt || 'Image not found'}</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
