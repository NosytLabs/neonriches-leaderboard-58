
import React, { Suspense, lazy, ComponentType } from 'react';

interface DynamicImportProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  props?: Record<string, any>;
  trackPerformance?: boolean;
}

/**
 * Component for dynamically importing and rendering components with performance tracking
 */
const DynamicImport: React.FC<DynamicImportProps> = ({
  component,
  fallback = <div className="animate-pulse h-32 w-full bg-muted/10 rounded-md"></div>,
  onLoad,
  props = {},
  trackPerformance = true
}) => {
  const startTime = performance.now();
  
  const Component = lazy(() => {
    return component().then(module => {
      const loadTime = performance.now() - startTime;
      
      if (trackPerformance) {
        console.info(`[Performance] Dynamic import loaded in ${loadTime.toFixed(2)}ms`);
      }
      
      if (onLoad) {
        onLoad();
      }
      
      return module;
    });
  });
  
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default DynamicImport;
