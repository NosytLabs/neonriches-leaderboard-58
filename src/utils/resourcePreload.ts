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
