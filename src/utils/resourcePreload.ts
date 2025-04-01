
// Fix the crossorigin type issue

/**
 * Preload resources for better performance
 */
export const preloadResources = (resources: string[], type: 'image' | 'font' | 'style' | 'script') => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    
    if (type === 'image') {
      link.as = 'image';
    } else if (type === 'font') {
      link.as = 'font';
      link.crossOrigin = 'anonymous'; // Use valid values only
    } else if (type === 'style') {
      link.as = 'style';
    } else if (type === 'script') {
      link.as = 'script';
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Preload a single image and return a promise
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload critical assets for the application
 */
export const preloadCriticalAssets = () => {
  // Preload fonts
  const criticalFonts = [
    '/fonts/royal-font.woff2',
    '/fonts/main-font.woff2'
  ];
  
  // Preload critical images
  const criticalImages = [
    '/throne-assets/crown-icon.svg',
    '/throne-assets/royal-seal.svg',
    '/throne-assets/throne-icon.svg'
  ];
  
  preloadResources(criticalFonts, 'font');
  preloadResources(criticalImages, 'image');
  
  console.info('[Performance] Critical assets preloaded');
};
