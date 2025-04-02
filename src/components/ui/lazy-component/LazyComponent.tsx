
import React, { Suspense, lazy, ComponentType, useState, useEffect } from 'react';
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring';

export interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
  onLoad?: () => void;
  trackPerformance?: boolean;
  errorFallback?: React.ReactNode;
}

/**
 * Component for lazy loading other components with performance tracking
 */
const LazyComponent: React.FC<LazyComponentProps> = ({
  component,
  fallback = <div className="animate-pulse h-32 w-full bg-muted/10 rounded-md"></div>,
  props = {},
  onLoad,
  trackPerformance = true,
  errorFallback = <div className="p-4 text-red-500">Failed to load component</div>
}) => {
  const [error, setError] = useState<Error | null>(null);
  const { markStart, markEnd } = usePerformanceMonitoring();
  const componentName = component.toString().split('/').pop()?.split('.')[0] || 'UnknownComponent';
  
  useEffect(() => {
    if (trackPerformance) {
      markStart(`lazy-load-${componentName}`);
    }
    
    return () => {
      if (trackPerformance) {
        markEnd(`lazy-load-${componentName}`);
      }
    };
  }, [componentName, markStart, markEnd, trackPerformance]);
  
  // Wrap the component loading with error handling and performance tracking
  const Component = lazy(() => {
    const startTime = performance.now();
    
    return component()
      .then(module => {
        const loadTime = performance.now() - startTime;
        
        if (trackPerformance) {
          console.info(`[Performance] Lazy component '${componentName}' loaded in ${loadTime.toFixed(2)}ms`);
        }
        
        if (onLoad) {
          onLoad();
        }
        
        return module;
      })
      .catch(err => {
        console.error(`[LazyLoad] Error loading component '${componentName}':`, err);
        setError(err);
        // Return a fallback component
        return {
          default: () => <>{errorFallback}</>
        };
      });
  });
  
  if (error) {
    return <>{errorFallback}</>;
  }
  
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;
