
import { useState, useEffect } from 'react';

interface ResponsiveImageOptions {
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc: string;
  placeholderSrc?: string;
  preload?: boolean;
}

/**
 * Hook for responsive image loading based on screen size
 * @param options Image sources for different device sizes
 * @returns The appropriate image source for current screen size
 */
export function useResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  placeholderSrc,
  preload = false
}: ResponsiveImageOptions) {
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc || desktopSrc);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Update image source based on screen size
  useEffect(() => {
    const updateImageSource = () => {
      const width = window.innerWidth;
      
      if (width < 640 && mobileSrc) {
        setImageSrc(mobileSrc);
      } else if (width < 1024 && tabletSrc) {
        setImageSrc(tabletSrc);
      } else {
        setImageSrc(desktopSrc);
      }
      
      setIsLoaded(true);
    };
    
    // Load initial image
    updateImageSource();
    
    // Listen for resize events
    window.addEventListener('resize', updateImageSource);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateImageSource);
    };
  }, [mobileSrc, tabletSrc, desktopSrc]);
  
  // Preload images if requested
  useEffect(() => {
    if (preload) {
      const imagesToPreload = [mobileSrc, tabletSrc, desktopSrc].filter(Boolean) as string[];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [preload, mobileSrc, tabletSrc, desktopSrc]);
  
  return {
    src: imageSrc,
    isLoaded
  };
}
