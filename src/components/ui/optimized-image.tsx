
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
  skipPreload?: boolean;
}

/**
 * Optimized image component with preloading, lazy loading and fallback
 */
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
  skipPreload = false,
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
    
    // Skip preloading for base64 images or SVGs - they're already fast
    if (src.startsWith('data:') || src.endsWith('.svg')) {
      setIsLoading(false);
      setImgLoaded(true);
      return;
    }
  }, [src]);
  
  // Preload the image
  useEffect(() => {
    if (!src || skipPreload || src.startsWith('data:') || src.endsWith('.svg')) return;
    
    let isMounted = true;
    
    // Use intersection observer to only preload when near viewport
    const imgObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const img = new Image();
        
        img.onload = () => {
          if (isMounted) {
            setIsLoading(false);
            setImgLoaded(true);
          }
        };
        
        img.onerror = () => {
          if (isMounted) {
            setError(true);
            setImgSrc(fallback);
            setIsLoading(false);
          }
        };
        
        img.src = src;
        
        // Cleanup
        imgObserver.disconnect();
      }
    }, { 
      rootMargin: '200px', // Load images 200px before they come into view
      threshold: 0.01 
    });
    
    // Create a temporary element to observe
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    imgObserver.observe(tempDiv);
    
    // Add timeout to prevent hanging on slow connections
    const timeout = setTimeout(() => {
      if (isMounted && isLoading) {
        setIsLoading(false);
        imgObserver.disconnect();
      }
    }, 3000);
    
    return () => {
      isMounted = false;
      imgObserver.disconnect();
      clearTimeout(timeout);
      if (tempDiv.parentNode) {
        document.body.removeChild(tempDiv);
      }
    };
  }, [src, fallback, isLoading, skipPreload]);
  
  const handleError = () => {
    setError(true);
    setImgSrc(fallback);
    setIsLoading(false);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
    setImgLoaded(true);
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
      {/* Only render image once src is available */}
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
