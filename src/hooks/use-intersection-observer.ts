
import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
  once?: boolean;
}

/**
 * Hook to detect when an element is visible in the viewport
 * Useful for implementing lazy loading of images and other resources
 */
export function useIntersectionObserver<T extends HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const {
    threshold = 0,
    rootMargin = '0px',
    root = null,
    once = false
  } = options;
  
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If 'once' is true and element is intersecting, disconnect the observer
        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin, root }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, once]);
  
  return [ref, isIntersecting];
}
