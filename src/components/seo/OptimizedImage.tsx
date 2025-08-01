
import React, { useState, useEffect, useRef } from 'react';
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
  quality?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpeg' | 'png';
  sizes?: string;
  priority?: boolean;
  withBlur?: boolean;
  threshold?: number;
  onLoadingComplete?: () => void;
}

/**
 * Optimized image component with preloading, lazy loading, WebP/AVIF support and fallback
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
  quality = 80,
  format = 'auto',
  sizes,
  priority = false,
  withBlur = false,
  threshold = 0.1,
  onLoadingComplete,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(!priority);
  const [error, setError] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setError(false);
    setIsLoading(!priority);
    setImgLoaded(priority);
    
    // Skip preloading for base64 images or SVGs - they're already fast
    if (src.startsWith('data:') || src.endsWith('.svg')) {
      setIsLoading(false);
      setImgLoaded(true);
      return;
    }
  }, [src, priority]);
  
  // Apply image optimization by constructing optimized URLs when possible
  useEffect(() => {
    if (!src || src.startsWith('data:') || skipPreload) return;
    
    // Check if src is from an image CDN that supports optimization params
    const isImageCDN = src.includes('imagecdn.app') || 
                        src.includes('cloudinary.com') || 
                        src.includes('imagekit.io') ||
                        src.includes('cdn.statically.io');
                        
    if (isImageCDN && format !== 'auto') {
      // For CDNs, add image optimization parameters
      const separator = src.includes('?') ? '&' : '?';
      const updatedSrc = `${src}${separator}q=${quality}&format=${format}`;
      setImgSrc(updatedSrc);
    }
  }, [src, quality, format, skipPreload]);
  
  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!src || priority || src.startsWith('data:') || src.endsWith('.svg')) return;
    
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    let isMounted = true;
    
    if (imgRef.current && typeof IntersectionObserver !== 'undefined') {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMounted) {
          // Start actual image loading when coming into view
          const img = new Image();
          
          if (withBlur) {
            // For a smoother blur effect transition
            img.decode = img.decode || (() => Promise.resolve());
          }
          
          img.onload = () => {
            if (isMounted) {
              // If using blur transition, decode the image first
              if (withBlur && img.decode) {
                img.decode().then(() => {
                  setIsLoading(false);
                  setImgLoaded(true);
                  if (onLoadingComplete) onLoadingComplete();
                }).catch(() => {
                  setIsLoading(false);
                  setImgLoaded(true);
                  if (onLoadingComplete) onLoadingComplete();
                });
              } else {
                setIsLoading(false);
                setImgLoaded(true);
                if (onLoadingComplete) onLoadingComplete();
              }
            }
          };
          
          img.onerror = () => {
            if (isMounted) {
              setError(true);
              setImgSrc(fallback);
              setIsLoading(false);
              console.error(`Failed to load image: ${src}`);
            }
          };
          
          img.src = imgSrc;
          
          // Disconnect after loading starts
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      }, { 
        rootMargin: '200px', // Load images 200px before they come into view
        threshold: threshold 
      });
      
      observerRef.current.observe(imgRef.current);
    }
    
    // Add timeout to prevent hanging on slow connections
    const timeout = setTimeout(() => {
      if (isMounted && isLoading) {
        setIsLoading(false);
        if (observerRef.current) {
          observerRef.current.disconnect();
          observerRef.current = null;
        }
      }
    }, 3000);
    
    return () => {
      isMounted = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      clearTimeout(timeout);
    };
  }, [imgSrc, fallback, isLoading, priority, onLoadingComplete, threshold, withBlur]);
  
  const handleError = () => {
    setError(true);
    setImgSrc(fallback);
    setIsLoading(false);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
    setImgLoaded(true);
    if (onLoadingComplete) onLoadingComplete();
  };

  // Create srcSet for responsive images when width is provided
  const getSrcSet = () => {
    if (!width || src.startsWith('data:') || src.endsWith('.svg')) return undefined;
    
    // Check if src is from an image CDN that supports width params
    const isImageCDN = src.includes('imagecdn.app') || 
                        src.includes('cloudinary.com') || 
                        src.includes('imagekit.io') ||
                        src.includes('cdn.statically.io');
                        
    if (!isImageCDN) return undefined;
    
    // Generate various widths
    const widths = [width, width * 1.5, width * 2].map(Math.floor);
    const separator = src.includes('?') ? '&' : '?';
    
    return widths
      .map(w => `${src}${separator}w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  // Use modern image formats where supported, with fallbacks
  const getPictureElement = () => {
    if (format === 'auto' || !imgSrc || error) {
      return null;
    }
    
    return (
      <picture>
        {format === 'avif' && (
          <source 
            type="image/avif" 
            srcSet={`${imgSrc}${imgSrc.includes('?') ? '&' : '?'}format=avif&q=${quality}`} 
            sizes={sizes}
          />
        )}
        <source 
          type="image/webp" 
          srcSet={`${imgSrc}${imgSrc.includes('?') ? '&' : '?'}format=webp&q=${quality}`} 
          sizes={sizes}
        />
        {/* Fallback to original image format */}
      </picture>
    );
  };
  
  const aspectRatio = width && height ? { aspectRatio: `${width} / ${height}` } : {};
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        isLoading && !imgLoaded && withBlur && 'animate-pulse bg-white/10',
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : '100%',
        backgroundColor: isLoading && placeholderColor ? placeholderColor : undefined,
        ...aspectRatio
      }}
      aria-busy={isLoading}
    >
      {getPictureElement()}
      
      {/* Only render image once src is available */}
      {imgSrc && (
        <img
          ref={imgRef}
          src={imgSrc}
          alt={alt}
          srcSet={getSrcSet()}
          sizes={sizes}
          onError={handleError}
          onLoad={handleLoad}
          loading={priority ? "eager" : loadingStrategy}
          width={width}
          height={height}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            'transition-opacity duration-300',
            (isLoading && !imgLoaded) 
              ? withBlur 
                ? 'opacity-0 blur-2xl scale-110' 
                : 'opacity-0'
              : 'opacity-100 blur-0 scale-100',
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
      
      {/* Loading indicator for priority images during server rendering */}
      {isLoading && priority && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
