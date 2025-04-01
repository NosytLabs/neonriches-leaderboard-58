
import React, { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// Define the props interface for our component
export interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif' | 'original';
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  placeholderColor?: string;
  blur?: boolean;
  threshold?: number;
  sizes?: string;
  fetchpriority?: 'high' | 'low' | 'auto';
  importance?: 'high' | 'low' | 'auto';
  onLoad?: () => void;
}

/**
 * A heavily optimized image component that implements best practices for image loading
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  quality = 85,
  format = 'original',
  loading = 'lazy',
  priority = false,
  placeholderColor,
  blur = false,
  threshold = 0.1,
  sizes,
  fetchpriority,
  importance,
  onLoad,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Skip for priority images or if loading is eager
    if (priority || loading === 'eager') {
      return;
    }

    // Function to load image
    const loadImage = () => {
      if (!imgRef.current) return;
      
      const img = imgRef.current;
      
      // Set src attribute which triggers loading
      if (img.dataset.src) {
        img.src = img.dataset.src;
        delete img.dataset.src;
      }
    };

    // Setup intersection observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            // Disconnect once loaded
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      { threshold }
    );

    // Start observing
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, loading, threshold]);

  // Clean up observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Format processed source URL (in a real implementation, this would transform the URL for CDN optimization)
  const processedSrc = (() => {
    // In a real app, you'd transform the URL for your image CDN or optimization service
    // Here we just return the original src or add format conversion parameters if needed
    if (format === 'original') {
      return src;
    }
    
    // Simple URL parameter approach (this is just a placeholder)
    const hasParams = src.includes('?');
    const separator = hasParams ? '&' : '?';
    return `${src}${separator}format=${format}&quality=${quality}`;
  })();

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleImageError = () => {
    setError(true);
    console.error(`Failed to load image: ${src}`);
  };

  // Determine if we should use lazy loading or not
  const loadingStrategy = priority ? 'eager' : loading;
  
  // For the actual fetchpriority attribute
  const fetchPriority = priority ? 'high' : fetchpriority || 'auto';
  
  // For the actual importance attribute (which is non-standard but used by browsers)
  const imageImportance = priority ? 'high' : importance || 'auto';

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        objectFit === 'contain' ? 'flex items-center justify-center' : '',
        className
      )}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        backgroundColor: placeholderColor || 'transparent',
      }}
    >
      {/* Show placeholder color until image loads */}
      {!isLoaded && placeholderColor && (
        <div
          className="absolute inset-0 bg-current"
          style={{ backgroundColor: placeholderColor }}
        />
      )}

      {/* The actual image */}
      <img
        ref={imgRef}
        src={priority || loading === 'eager' ? processedSrc : undefined}
        data-src={!priority && loading !== 'eager' ? processedSrc : undefined}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loadingStrategy}
        fetchPriority={fetchPriority}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          error ? 'hidden' : 'block',
          objectFit === 'cover' && 'object-cover w-full h-full',
          objectFit === 'contain' && 'object-contain max-w-full max-h-full',
          objectFit === 'fill' && 'object-fill w-full h-full',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          blur && !isLoaded && 'blur'
        )}
        sizes={sizes}
        importance={imageImportance}
        {...rest}
      />

      {/* Show error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
