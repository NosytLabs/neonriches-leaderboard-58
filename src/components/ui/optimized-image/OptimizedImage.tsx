
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { optimizeImageUrl, getSrcSet } from '@/services/imageService';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: 'low' | 'medium' | 'high' | 'auto';
  format?: 'webp' | 'avif' | 'jpeg' | 'png' | 'auto';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  fallbackSrc?: string;
  placeholderColor?: string;
  blur?: boolean;
  onLoad?: () => void;
  className?: string;
  wrapperClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 'auto',
  format = 'auto',
  objectFit = 'cover',
  fallbackSrc = '/placeholder.svg',
  placeholderColor = '#f3f4f6',
  blur = false,
  onLoad,
  className,
  wrapperClassName,
  sizes,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Observe if image is in viewport for better metrics
  const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    rootMargin: '200px',
    threshold: 0.1,
    // If priority, don't use intersection observer (load immediately)
    enabled: !priority
  });
  
  // Set optimized image source on load or when props change
  useEffect(() => {
    if (error) return;
    
    const optimized = optimizeImageUrl(src, { width, height, quality, format, blur });
    setImageSrc(optimized);
    
    // If this is a priority image, mark performance
    if (priority && window.performance && performance.mark) {
      performance.mark(`priority-image-${src.substring(0, 20)}`);
    }
  }, [src, width, height, quality, format, blur, error, priority]);
  
  // Handle successful image load
  const handleLoad = () => {
    setLoaded(true);
    
    if (onLoad) {
      onLoad();
    }
    
    // Mark LCP image if this is the first large image to load
    if (priority && window.performance && performance.mark) {
      performance.mark(`loaded-priority-image-${src.substring(0, 20)}`);
    }
  };
  
  // Handle image load error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    
    // Try fallback if available
    if (fallbackSrc && fallbackSrc !== src) {
      setImageSrc(fallbackSrc);
    }
  };
  
  // Get srcSet for responsive images
  const srcSet = getSrcSet(src, { width, height, quality, format });
  
  // Create image element to return
  const imageElement = (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      srcSet={srcSet || undefined}
      sizes={sizes}
      onLoad={handleLoad}
      onError={handleError}
      // Use native lazy loading as a fallback
      loading={priority ? 'eager' : 'lazy'}
      // Use fetch priority hint
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn(
        'transition-opacity duration-300',
        !loaded && !priority && 'opacity-0',
        loaded && 'opacity-100',
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
        objectFit === 'fill' && 'object-fill',
        objectFit === 'none' && 'object-none',
        objectFit === 'scale-down' && 'object-scale-down',
        className
      )}
      {...props}
    />
  );
  
  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden bg-gray-100',
        !loaded && 'animate-pulse',
        wrapperClassName
      )}
      style={{
        backgroundColor: placeholderColor,
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width} / ${height}` : undefined
      }}
      aria-busy={!loaded}
    >
      {/* For priority images, load immediately */}
      {priority ? (
        imageElement
      ) : (
        /* For non-priority images, only load when visible */
        isVisible && imageElement
      )}
    </div>
  );
};

export default OptimizedImage;
