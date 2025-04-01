
import React, { useState } from 'react';
import OptimizedImage from './optimized-image';
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring';
import Lazy3D from './lazy-3d';

const PerformanceDemo: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const { markStart, markEnd } = usePerformanceMonitoring();
  
  // Start performance measurement when component mounts
  React.useEffect(() => {
    markStart('PerformanceDemo');
    return () => markEnd('PerformanceDemo');
  }, [markStart, markEnd]);
  
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };
  
  return (
    <div className="space-y-8 py-8">
      <div className="bg-black/5 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Performance Optimizations</h2>
        <p className="text-muted-foreground">
          This page demonstrates various performance optimizations:
          image loading, code splitting, and performance monitoring.
        </p>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Images loaded: {imagesLoaded} / 4</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Priority Image (loads immediately)</h3>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Tech image"
            width={600}
            height={400}
            priority={true}
            onLoad={handleImageLoad}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Lazy Image (loads when visible)</h3>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Circuit board"
            width={600}
            height={400}
            objectFit="cover"
            onLoad={handleImageLoad}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">WebP Format Image</h3>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Person using computer"
            width={600}
            height={400}
            format="webp"
            quality={80}
            placeholderColor="#2a2a2a"
            onLoad={handleImageLoad}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Responsive Image with SrcSet</h3>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Person using laptop"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Lazy Loaded 3D Content (loads when scrolled into view)</h3>
        <Lazy3D
          component={() => import('@/components/3d/RoyalThrone')}
          props={{ rotate: true, scale: 1.2 }}
        />
      </div>
    </div>
  );
};

export default PerformanceDemo;
