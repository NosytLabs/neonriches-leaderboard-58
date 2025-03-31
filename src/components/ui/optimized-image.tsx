
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  loadingStrategy?: 'eager' | 'lazy';
  placeholderColor?: string;
  priority?: boolean;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif';
  sizes?: string;
}

/**
 * Performance optimized image component that supports:
 * - Lazy loading with IntersectionObserver
 * - Responsive image loading with srcSet
 * - Blur-up loading
 * - Modern image formats (WebP/AVIF)
 * - Proper aspect ratio
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  className,
  placeholder = '/placeholder.svg',
  blurDataURL,
  loadingStrategy = 'lazy',
  placeholderColor,
  priority = false,
  quality = 80,
  format = 'auto',
  sizes,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(priority ? src : blurDataURL || placeholder);
  const [isLoading, setIsLoading] = useState<boolean>(!priority);
  const [error, setError] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Reset state when src changes
  useEffect(() => {
    setImgSrc(priority ? src : blurDataURL || placeholder);
    setError(false);
    setIsLoading(!priority);
  }, [src, priority, blurDataURL, placeholder]);
  
  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current || typeof IntersectionObserver === 'undefined') {
      // Skip observer for priority images or when IntersectionObserver isn't available
      if (priority && imgSrc !== src) {
        setImgSrc(src);
      }
      return;
    }
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Load the real image when it enters the viewport
        setImgSrc(src);
        setIsLoading(true);
        observer.disconnect();
        observerRef.current = null;
      }
    }, { 
      rootMargin: '200px', // Start loading before the image is visible
      threshold: 0.01
    });
    
    observer.observe(imgRef.current);
    observerRef.current = observer;
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, priority, imgSrc]);
  
  const handleError = () => {
    setError(true);
    setImgSrc(placeholder);
    setIsLoading(false);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  // Create srcSet for responsive images when width is provided
  const getSrcSet = () => {
    if (!width || src === placeholder) return undefined;
    
    // Generate srcSet at different widths (1x, 1.5x, 2x)
    const widths = [width, width * 1.5, width * 2].map(Math.floor);
    const params = `?q=${quality}${format !== 'auto' ? `&fm=${format}` : ''}`;
    
    return widths
      .map(w => `${src}${params}&w=${w} ${w}w`)
      .join(', ');
  };
  
  // Pre-calculate aspect ratio for proper layout
  const aspectRatio = width && height ? { aspectRatio: `${width} / ${height}` } : {};
  const finalSrc = imgSrc === placeholder && !error ? placeholder : imgSrc;
  
  return (
    <div 
      className={cn(
        'overflow-hidden relative',
        isLoading && 'animate-pulse bg-muted/10',
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        backgroundColor: isLoading && placeholderColor ? placeholderColor : undefined,
        ...aspectRatio
      }}
    >
      {/* Support next-gen formats if requested */}
      {format !== 'auto' && !error && (
        <picture>
          {format === 'avif' && (
            <source type="image/avif" srcSet={`${src}?fm=avif&q=${quality}`} />
          )}
          <source type="image/webp" srcSet={`${src}?fm=webp&q=${quality}`} />
          {/* The img element below serves as fallback */}
        </picture>
      )}
      
      <img
        ref={imgRef}
        src={finalSrc}
        alt={alt}
        srcSet={getSrcSet()}
        sizes={sizes}
        loading={priority ? "eager" : loadingStrategy}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          'transition-opacity duration-300',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          isLoading ? 'opacity-0' : 'opacity-100',
          'w-full h-full'
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
