
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  placeholderColor?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback = '/placeholder.svg', placeholderColor = '#1e293b', className, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState<string>(src);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      setImgSrc(src);
      setIsLoading(true);
      setError(false);
    }, [src]);

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
          isLoading && 'animate-pulse',
          className
        )}
        style={{ 
          backgroundColor: isLoading ? placeholderColor : undefined 
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          ref={ref}
          loading="lazy"
          onError={handleError}
          onLoad={handleLoad}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            'w-full h-full object-cover'
          )}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = 'Image';

export { Image };
