
import { useState, useEffect, RefObject } from 'react';

export function useHeroVisibility(heroRef: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heroRef.current);
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroRef]);

  return isVisible;
}
