
import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
}

/**
 * SEO-optimized image component with proper alt text, lazy loading, and dimensions
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  lazy = true,
  priority = false,
  ...props
}) => {
  // If the image is decorative (not meaningful content), use empty alt text
  const isDecorative = alt === '' || alt.toLowerCase() === 'decorative';
  
  // Ensure alt text is properly set
  const accessibleAlt = isDecorative ? '' : alt;
  
  // Determine loading strategy
  const loading = priority ? 'eager' : lazy ? 'lazy' : undefined;
  
  return (
    <img
      src={src}
      alt={accessibleAlt}
      width={width}
      height={height}
      loading={loading}
      className={cn(className)}
      {...props}
    />
  );
};

export default OptimizedImage;
