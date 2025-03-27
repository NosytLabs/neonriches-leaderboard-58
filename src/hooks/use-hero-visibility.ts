
import { useState, useEffect, RefObject } from 'react';

export function useHeroVisibility(ref: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when visibility changes
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '-10% 0px', // trigger when element is 10% outside viewport
        threshold: 0.1 // trigger when at least 10% of element is visible
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}
