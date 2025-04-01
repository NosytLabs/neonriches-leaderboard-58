
/**
 * Resource preloading utilities to improve LCP (Largest Contentful Paint)
 * and reduce render-blocking resources
 */

// List of critical fonts to preload
const CRITICAL_FONTS = [
  {
    href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap',
    type: 'font',
    crossOrigin: 'anonymous',
    importance: 'high' as const
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    type: 'font',
    crossOrigin: 'anonymous'
  }
];

// List of critical images to preload
const CRITICAL_IMAGES = [
  {
    src: '/throne-assets/crown-icon.svg',
    type: 'image',
    importance: 'high' as const
  },
  {
    src: '/throne-assets/throne-icon.svg',
    type: 'image'
  }
];

// Critical CSS files
const CRITICAL_STYLES = [
  {
    href: '/styles/critical.css',
    type: 'style'
  }
];

/**
 * Add a preload link to the document head
 */
export const addPreloadLink = (
  href: string, 
  as: string, 
  options?: { 
    crossOrigin?: 'anonymous' | 'use-credentials', 
    importance?: 'auto' | 'high' | 'low',
    type?: string
  }
) => {
  if (typeof document === 'undefined') return;
  
  // Check if preload already exists
  const existingPreload = document.querySelector(`link[rel="preload"][href="${href}"]`);
  if (existingPreload) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  
  if (options?.crossOrigin) {
    link.crossOrigin = options.crossOrigin;
  }
  
  if (options?.importance) {
    link.setAttribute('importance', options.importance);
  }
  
  if (options?.type) {
    link.type = options.type;
  }
  
  document.head.appendChild(link);
};

/**
 * Add a preconnect hint for a domain to establish connection early
 */
export const addPreconnect = (domain: string, crossOrigin: boolean = true) => {
  if (typeof document === 'undefined') return;
  
  // Check if preconnect already exists
  const existingPreconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
  if (existingPreconnect) return;
  
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = domain;
  
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};

/**
 * Preloads a single image and returns a promise that resolves when loaded
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
 * Preload critical assets needed for initial render
 * Call this as early as possible in the application lifecycle
 */
export const preloadCriticalAssets = () => {
  if (typeof window === 'undefined') return;
  
  // Set up performance mark to measure preloading time
  if (performance && 'mark' in performance) {
    performance.mark('preload-critical-start');
  }
  
  // Preconnect to domains for external resources
  addPreconnect('https://fonts.googleapis.com');
  addPreconnect('https://fonts.gstatic.com', true);
  
  // Preload critical fonts
  CRITICAL_FONTS.forEach(font => {
    addPreloadLink(font.href, 'style', { 
      crossOrigin: font.crossOrigin,
      importance: font.importance 
    });
  });
  
  // Preload critical images
  CRITICAL_IMAGES.forEach(image => {
    addPreloadLink(image.src, 'image', { importance: image.importance });
  });
  
  // Preload critical CSS
  CRITICAL_STYLES.forEach(style => {
    addPreloadLink(style.href, 'style');
  });
  
  // End performance measurement
  if (performance && 'mark' in performance && 'measure' in performance) {
    performance.mark('preload-critical-end');
    performance.measure('preload-critical', 'preload-critical-start', 'preload-critical-end');
    
    // Log preload time
    const measures = performance.getEntriesByName('preload-critical');
    if (measures.length > 0) {
      console.info(`[Performance] Critical resources preloaded in ${measures[0].duration.toFixed(2)}ms`);
    }
  }
};

/**
 * Preload above-the-fold images that might be part of LCP
 * This should be called after the initial render
 */
export const preloadAboveTheFoldImages = () => {
  // We'll identify these by their importance attribute in the DOM
  if (typeof document === 'undefined') return;
  
  const criticalImages = document.querySelectorAll('img[importance="high"]');
  
  criticalImages.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      addPreloadLink(src, 'image', { importance: 'high' });
    }
  });
};

