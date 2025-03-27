
import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  className?: string;
  fallback?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  className,
  fallback = '/placeholder.svg',
  ...props
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(src);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setImgSrc(src);
    setError(false);
    setIsLoading(true);
  }, [src]);
  
  const handleError = () => {
    setError(true);
    setImgSrc(fallback);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        isLoading && 'animate-pulse bg-white/10',
        className
      )}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
    >
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          'w-full h-full'
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
