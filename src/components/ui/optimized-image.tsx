
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  className?: string;
  fallback?: string;
  loadingStrategy?: 'eager' | 'lazy';
  placeholderColor?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  className,
  fallback = '/placeholder.svg',
  loadingStrategy = 'lazy',
  placeholderColor,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setError(false);
    setIsLoading(true);
    setImgLoaded(false);
  }, [src]);
  
  // Preload the image
  useEffect(() => {
    if (!src) return;
    
    // Skip preloading for base64 images
    if (src.startsWith('data:')) {
      setIsLoading(false);
      setImgLoaded(true);
      return;
    }
    
    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
      setImgLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
      setImgSrc(fallback);
      setIsLoading(false);
    };
    
    img.src = src;
    
    // Add timeout to prevent hanging on slow connections
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);
    
    return () => {
      img.onload = null;
      img.onerror = null;
      clearTimeout(timeout);
    };
  }, [src, fallback, isLoading]);
  
  const handleError = () => {
    setError(true);
    setImgSrc(fallback);
    setIsLoading(false);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        isLoading && !imgLoaded && 'animate-pulse bg-white/10',
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : '100%',
        backgroundColor: isLoading && placeholderColor ? placeholderColor : undefined 
      }}
    >
      {/* Render image only when src is available */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          loading={loadingStrategy}
          className={cn(
            'transition-opacity duration-300',
            isLoading && !imgLoaded ? 'opacity-0' : 'opacity-100',
            objectFit === 'cover' && 'object-cover',
            objectFit === 'contain' && 'object-contain',
            objectFit === 'fill' && 'object-fill',
            objectFit === 'none' && 'object-none',
            objectFit === 'scale-down' && 'object-scale-down',
            'w-full h-full'
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
