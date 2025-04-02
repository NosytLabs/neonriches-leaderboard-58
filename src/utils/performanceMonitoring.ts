
export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  windowLoad: number; // Window Load Event
  domLoad: number; // DOM Content Loaded
  componentRenderTimes: Record<string, number>;
}

export interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
  delta?: number;
  entries?: any[];
}

// Initialize performance monitoring
export const initPerformanceMonitoring = (): void => {
  if (typeof window === 'undefined') return;

  // Create performance metrics store if not exists
  if (!(window as any).__PERFORMANCE_METRICS) {
    (window as any).__PERFORMANCE_METRICS = {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      windowLoad: 0,
      domLoad: 0,
      componentRenderTimes: {}
    };
  }

  // Monitor page load
  window.addEventListener('load', () => {
    if (performance.getEntriesByType) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        const domLoad = navEntry.domContentLoadedEventEnd - navEntry.startTime;
        const windowLoad = navEntry.loadEventEnd - navEntry.startTime;

        // Store metrics
        (window as any).__PERFORMANCE_METRICS.ttfb = ttfb;
        (window as any).__PERFORMANCE_METRICS.domLoad = domLoad;
        (window as any).__PERFORMANCE_METRICS.windowLoad = windowLoad;

        console.info(`[Performance] TTFB: ${ttfb.toFixed(2)}ms, DOM Load: ${domLoad.toFixed(2)}ms, Window Load: ${windowLoad.toFixed(2)}ms`);
      }
    }
  });
};

// Mark the start of a component render
export const markComponentRenderStart = (componentName: string): void => {
  if (typeof window === 'undefined') return;
  
  // Create a unique mark name for this component render start
  const markName = `${componentName}_render_start_${Date.now()}`;
  if (performance && performance.mark) {
    performance.mark(markName);
    
    // Store the mark name for later use
    if (!(window as any).__COMPONENT_RENDER_MARKS) {
      (window as any).__COMPONENT_RENDER_MARKS = {};
    }
    (window as any).__COMPONENT_RENDER_MARKS[componentName] = markName;
  }
};

// Mark the end of a component render and measure the duration
export const markComponentRenderEnd = (componentName: string): void => {
  if (typeof window === 'undefined') return;
  
  // Get the start mark name
  const startMarkName = (window as any).__COMPONENT_RENDER_MARKS?.[componentName];
  if (!startMarkName || !performance || !performance.mark || !performance.measure) {
    return;
  }
  
  // Create the end mark and measure
  const endMarkName = `${componentName}_render_end_${Date.now()}`;
  performance.mark(endMarkName);
  
  try {
    const measureName = `${componentName}_render_duration`;
    performance.measure(measureName, startMarkName, endMarkName);
    
    // Get the measurement
    const measurements = performance.getEntriesByName(measureName, 'measure');
    const latestMeasurement = measurements[measurements.length - 1];
    
    // Store the render time
    if (latestMeasurement && (window as any).__PERFORMANCE_METRICS) {
      (window as any).__PERFORMANCE_METRICS.componentRenderTimes[componentName] = latestMeasurement.duration;
      
      // Log for debugging
      if (latestMeasurement.duration > 100) {
        console.warn(`[Performance] Slow render detected: ${componentName} took ${latestMeasurement.duration.toFixed(2)}ms`);
      }
    }
    
    // Clean up marks
    performance.clearMarks(startMarkName);
    performance.clearMarks(endMarkName);
    performance.clearMeasures(measureName);
    
    // Remove from temporary storage
    delete (window as any).__COMPONENT_RENDER_MARKS[componentName];
  } catch (e) {
    console.error(`[Performance] Error measuring component render time for ${componentName}:`, e);
  }
};

// Add web vitals reporting
export const reportWebVital = (metric: WebVitalMetric): void => {
  if (typeof window === 'undefined') return;
  
  // Update our performance metrics
  if ((window as any).__PERFORMANCE_METRICS) {
    switch (metric.name) {
      case 'FCP':
        (window as any).__PERFORMANCE_METRICS.fcp = metric.value;
        break;
      case 'LCP':
        (window as any).__PERFORMANCE_METRICS.lcp = metric.value;
        break;
      case 'FID':
        (window as any).__PERFORMANCE_METRICS.fid = metric.value;
        break;
      case 'CLS':
        (window as any).__PERFORMANCE_METRICS.cls = metric.value;
        break;
    }
  }
  
  // Log for debugging
  console.info(`[Web Vital] ${metric.name}: ${metric.value}`);
};

// Get all performance metrics
export const getPerformanceMetrics = (): PerformanceMetrics => {
  if (typeof window === 'undefined') {
    return {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      windowLoad: 0,
      domLoad: 0,
      componentRenderTimes: {}
    };
  }
  
  return (window as any).__PERFORMANCE_METRICS as PerformanceMetrics;
};
