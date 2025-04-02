
/**
 * This file contains utilities for measuring and reporting web performance metrics.
 */

// Polyfill for browsers without timeOrigin
if (typeof performance !== 'undefined' && !performance.timeOrigin) {
  // @ts-ignore - adding timeOrigin for older browsers
  performance.timeOrigin = Date.now() - performance.now();
}

interface PerformanceMetric {
  name: string;
  value: number;
  delta?: number;
  id?: string;
  navigationType?: string;
}

type MetricHandler = (metric: PerformanceMetric) => void;

/**
 * Reports a performance metric to the console and/or analytics
 */
export const reportPerformanceMetric = (metric: PerformanceMetric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance metric: ${metric.name}`, metric);
  }
  
  // In a real app, you would send this to your analytics service
  // analytics.capturePerformanceMetric(metric);
};

/**
 * Get the current navigation performance data
 */
export const getNavigationPerformance = () => {
  if (typeof performance === 'undefined' || !performance.getEntriesByType) {
    return null;
  }
  
  const navigationEntries = performance.getEntriesByType('navigation');
  if (!navigationEntries || navigationEntries.length === 0) {
    return null;
  }
  
  // Need to cast to any to handle potential browser differences
  const navData = navigationEntries[0] as any;
  
  return {
    navigationStart: 0,
    domInteractive: navData.domInteractive,
    domContentLoaded: navData.domContentLoadedEventEnd || 0,
    domComplete: navData.domComplete || 0,
    loadEventEnd: navData.loadEventEnd || 0,
    redirectCount: navData.redirectCount || 0,
    redirectTime: navData.redirectEnd - navData.redirectStart || 0,
    dnsTime: navData.domainLookupEnd - navData.domainLookupStart || 0,
    connectTime: navData.connectEnd - navData.connectStart || 0,
    requestTime: navData.responseStart - navData.requestStart || 0,
    responseTime: navData.responseEnd - navData.responseStart || 0,
    domProcessingTime: (navData.domComplete || 0) - (navData.domInteractive || 0) || 0,
    firstPaint: 0,
    firstContentfulPaint: 0
  };
};

/**
 * Calculate Time to First Byte
 */
export const getTimeToFirstByte = () => {
  if (typeof performance === 'undefined' || !performance.getEntriesByType) {
    return 0;
  }
  
  // Need to cast to any to handle different browser implementations
  const navigationEntries = performance.getEntriesByType('navigation');
  if (!navigationEntries || navigationEntries.length === 0) {
    return 0;
  }
  
  // Need to cast to any to handle different browser implementations
  const navData = navigationEntries[0] as any;
  
  // Time to First Byte = responseStart - startTime
  return navData.responseStart;
};

/**
 * Measure Cumulative Layout Shift
 */
export const measureCLS = (callback: MetricHandler) => {
  if (typeof PerformanceObserver === 'undefined') {
    return;
  }
  
  let clsValue = 0;
  let clsEntries: any[] = [];
  
  const entryHandler = (entries: any) => {
    entries.getEntries().forEach((entry: any) => {
      // Only count layout shifts without recent user input
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        clsEntries.push(entry);
        
        callback({
          name: 'CLS',
          value: clsValue,
          delta: entry.value,
        });
      }
    });
  };
  
  // Create a PerformanceObserver that calls entryHandler when layout shifts occur
  const observer = new PerformanceObserver(entryHandler);
  
  try {
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.error('PerformanceObserver for CLS not supported', e);
  }
  
  return () => {
    observer.disconnect();
  };
};

/**
 * Get all performance metrics as a formatted object
 */
export const getPerformanceMetrics = () => {
  const navPerf = getNavigationPerformance();
  
  return {
    ttfb: getTimeToFirstByte(),
    domLoaded: navPerf?.domContentLoaded || 0,
    pageLoaded: navPerf?.loadEventEnd || 0,
    redirectTime: navPerf?.redirectTime || 0,
    dnsTime: navPerf?.dnsTime || 0,
    connectTime: navPerf?.connectTime || 0,
    requestTime: navPerf?.requestTime || 0,
    responseTime: navPerf?.responseTime || 0,
    domProcessingTime: navPerf?.domProcessingTime || 0,
    redirectCount: navPerf?.redirectCount || 0,
  };
};

export default {
  reportPerformanceMetric,
  getNavigationPerformance,
  getTimeToFirstByte,
  measureCLS,
  getPerformanceMetrics
};
