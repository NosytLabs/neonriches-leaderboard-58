
import React, { useState, useEffect } from 'react';
import DynamicImport from './dynamic-import';

interface Lazy3DProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  props?: Record<string, any>;
  placeholder?: React.ReactNode;
  threshold?: number; // Visibility threshold to trigger load (0-1)
}

/**
 * Component for lazy loading 3D content only when needed
 */
const Lazy3D: React.FC<Lazy3DProps> = ({
  component,
  props = {},
  placeholder = (
    <div className="animate-pulse bg-black/5 rounded-md flex items-center justify-center h-64 w-full">
      <div className="text-muted">3D Content</div>
    </div>
  ),
  threshold = 0.1
}) => {
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!containerRef || typeof IntersectionObserver === 'undefined') {
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Load 3D content when container is visible
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    observer.observe(containerRef);
    
    return () => {
      observer.disconnect();
    };
  }, [containerRef, threshold]);
  
  return (
    <div 
      ref={setContainerRef}
      className="relative min-h-[200px] w-full"
    >
      {shouldLoad ? (
        <DynamicImport 
          component={component} 
          props={props} 
          fallback={placeholder}
        />
      ) : (
        placeholder
      )}
    </div>
  );
};

export default Lazy3D;
