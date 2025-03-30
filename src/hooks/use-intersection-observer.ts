
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

type IntersectionObserverReturn<T extends HTMLElement> = [
  RefObject<T>,
  boolean,
  IntersectionObserverEntry | null
];

export function useIntersectionObserver<T extends HTMLElement>(
  options: IntersectionObserverOptions = {}
): IntersectionObserverReturn<T> {
  const { threshold = 0, root = null, rootMargin = '0px', once = false } = options;
  
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    // If element doesn't exist or observer already active, do nothing
    if (!element || observerRef.current) return;
    
    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
      
      // If configured for one-time detection and element is visible, disconnect
      if (once && entry.isIntersecting && observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      root,
      rootMargin
    });
    
    observer.observe(element);
    observerRef.current = observer;
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, root, rootMargin, once]);
  
  return [elementRef, isIntersecting, entry];
}

export default useIntersectionObserver;
