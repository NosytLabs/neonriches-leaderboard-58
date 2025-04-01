
import React, { Suspense, lazy, ComponentType, useEffect } from 'react';
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring';

interface Lazy3DProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  props?: Record<string, any>;
  fallback?: React.ReactNode;
}

/**
 * Lazy loads 3D content components when they scroll into view
 * to improve initial load performance
 */
const Lazy3D: React.FC<Lazy3DProps> = ({
  component,
  props = {},
  fallback = <div className="h-[300px] w-full bg-black/5 rounded-lg animate-pulse flex items-center justify-center">Loading 3D content...</div>
}) => {
  const { markStart, markEnd } = usePerformanceMonitoring();
  const componentName = component.toString().split('/').pop()?.split('.')[0] || 'ThreeJSComponent';
  
  // Load the 3D component lazily
  const Component = lazy(() => {
    markStart(`load3D-${componentName}`);
    return component().then(module => {
      markEnd(`load3D-${componentName}`);
      return module;
    });
  });
  
  // Track render performance
  useEffect(() => {
    markStart(`render3D-${componentName}`);
    return () => markEnd(`render3D-${componentName}`);
  }, [componentName, markStart, markEnd]);
  
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default Lazy3D;
