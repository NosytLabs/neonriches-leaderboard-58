
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | '1:1' | 'auto';
  className?: string;
  wrapperClassName?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  aspectRatio = 'auto',
  className,
  wrapperClassName,
  ...props
}) => {
  const [error, setError] = useState(false);
  
  const aspectRatioClasses = {
    'square': 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '1:1': 'aspect-square',
    'auto': ''
  };
  
  return (
    <div className={cn(
      'overflow-hidden',
      aspectRatioClasses[aspectRatio],
      wrapperClassName
    )}>
      <img
        src={error ? fallbackSrc : src}
        alt={alt || 'Image'}
        onError={() => setError(true)}
        className={cn(
          'object-cover w-full h-full transition-opacity',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Image;
