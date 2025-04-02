
/**
 * Image optimization service
 * Handles image loading, optimization and caching strategies
 */

type ImageQuality = 'low' | 'medium' | 'high' | 'auto';
type ImageFormat = 'webp' | 'avif' | 'jpeg' | 'png' | 'auto';

interface OptimizationOptions {
  width?: number;
  height?: number;
  quality?: ImageQuality;
  format?: ImageFormat;
  blur?: boolean;
  priority?: boolean;
}

// Map quality string to numerical value
const qualityMap: Record<ImageQuality, number> = {
  low: 60,
  medium: 75,
  high: 85,
  auto: 80
};

/**
 * Preloads critical images for faster LCP
 * @param urls List of image URLs to preload
 */
export const preloadCriticalImages = (urls: string[]): void => {
  if (typeof window === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
    
    // Also create image objects for browser caching
    const img = new Image();
    img.src = url;
  });
  
  console.info(`[Performance] Preloaded ${urls.length} critical images`);
};

/**
 * Optimizes image URL for CDNs that support image optimization parameters
 */
export const optimizeImageUrl = (src: string, options: OptimizationOptions = {}): string => {
  if (!src || src.startsWith('data:')) return src;
  
  // Skip optimization for SVGs as they're already optimized
  if (src.endsWith('.svg')) return src;
  
  const isImageCDN = 
    src.includes('imagecdn.app') || 
    src.includes('cloudinary.com') || 
    src.includes('imagekit.io') ||
    src.includes('cdn.statically.io') ||
    src.includes('unsplash.com');
    
  if (!isImageCDN) return src;
  
  // Build optimization parameters
  const params = new URLSearchParams();
  
  if (options.width) params.append('w', options.width.toString());
  if (options.height) params.append('h', options.height.toString());
  if (options.quality) params.append('q', qualityMap[options.quality].toString());
  if (options.format && options.format !== 'auto') params.append('fm', options.format);
  if (options.blur) params.append('blur', '20');
  
  // Handle Unsplash differently
  if (src.includes('unsplash.com')) {
    const unsplashParams = [];
    if (options.width) unsplashParams.push(`w=${options.width}`);
    if (options.height) unsplashParams.push(`h=${options.height}`);
    if (options.quality) unsplashParams.push(`q=${qualityMap[options.quality]}`);
    if (options.format && options.format !== 'auto') unsplashParams.push(`fm=${options.format}`);
    
    // Add parameters to unsplash URL correctly
    return `${src}${src.includes('?') ? '&' : '?'}${unsplashParams.join('&')}`;
  }
  
  // For other CDNs
  const separator = src.includes('?') ? '&' : '?';
  return `${src}${separator}${params.toString()}`;
};

/**
 * Get appropriate srcSet for responsive images
 */
export const getSrcSet = (src: string, options: OptimizationOptions = {}): string => {
  if (!src || src.startsWith('data:') || src.endsWith('.svg')) return '';
  
  // Generate srcset with multiple widths for responsive loading
  const widths = [480, 768, 1080, 1440, 1920];
  const baseWidth = options.width || 800;
  
  return widths
    .filter(w => w <= baseWidth * 2) // Don't go too large
    .map(width => {
      const optimizedUrl = optimizeImageUrl(src, { ...options, width });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
};

/**
 * Check if an image is in viewport and should be loaded
 */
export const isInViewport = (element: HTMLElement, rootMargin = '200px'): boolean => {
  if (!element || typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  const margin = parseInt(rootMargin, 10) || 0;
  
  return (
    rect.top - margin <= window.innerHeight &&
    rect.left - margin <= window.innerWidth &&
    rect.bottom + margin >= 0 &&
    rect.right + margin >= 0
  );
};

/**
 * Creates object URL from blob for optimized memory usage
 */
export const createOptimizedObjectURL = (blob: Blob): string => {
  const url = URL.createObjectURL(blob);
  
  // Automatically revoke the URL after a delay to prevent memory leaks
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 60000); // Revoke after 1 minute
  
  return url;
};

export default {
  preloadCriticalImages,
  optimizeImageUrl,
  getSrcSet,
  isInViewport,
  createOptimizedObjectURL
};
