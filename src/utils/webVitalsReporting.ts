
/**
 * Web Vitals tracking and reporting
 * Based on Google's web-vitals library
 */

export interface WebVitalMetric {
  id: string;
  name: 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB' | 'INP';
  value: number;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const thresholds = {
  LCP: { good: 2500, poor: 4000 }, // ms
  FID: { good: 100, poor: 300 },   // ms
  CLS: { good: 0.1, poor: 0.25 },  // unitless
  FCP: { good: 1800, poor: 3000 }, // ms
  TTFB: { good: 800, poor: 1800 }, // ms
  INP: { good: 200, poor: 500 }    // ms
};

/**
 * Get rating based on metric value
 */
const getRating = (name: WebVitalMetric['name'], value: number): WebVitalMetric['rating'] => {
  if (value <= thresholds[name].good) return 'good';
  if (value <= thresholds[name].poor) return 'needs-improvement';
  return 'poor';
};

/**
 * Report the web vital metric
 */
export const reportWebVital = (metric: WebVitalMetric): void => {
  // Add rating if not already included
  if (!metric.rating) {
    metric.rating = getRating(metric.name, metric.value);
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    const color = 
      metric.rating === 'good' ? '#4ade80' : 
      metric.rating === 'needs-improvement' ? '#facc15' : 
      '#ef4444';
      
    console.log(
      `%c${metric.name} (${metric.rating}): %c${Math.round(metric.value)}`, 
      'font-weight: bold;', 
      `color: ${color}; font-weight: bold;`
    );
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Queue the metric for batch sending
    if (!(window as any).__WEB_VITALS_METRICS) {
      (window as any).__WEB_VITALS_METRICS = [];
    }
    
    (window as any).__WEB_VITALS_METRICS.push(metric);
    
    // Send metrics after a delay or when we have enough
    if ((window as any).__WEB_VITALS_TIMER) {
      clearTimeout((window as any).__WEB_VITALS_TIMER);
    }
    
    (window as any).__WEB_VITALS_TIMER = setTimeout(() => {
      sendMetricsBatch();
    }, 5000);
  }
};

/**
 * Send batched metrics to analytics
 */
const sendMetricsBatch = () => {
  if (!(window as any).__WEB_VITALS_METRICS || (window as any).__WEB_VITALS_METRICS.length === 0) {
    return;
  }
  
  const metrics = [...(window as any).__WEB_VITALS_METRICS];
  (window as any).__WEB_VITALS_METRICS = [];
  
  // In a real app, you would send the metrics to your analytics platform
  // For example, using Google Analytics:
  /*
  metrics.forEach(metric => {
    gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
      metric_name: metric.name,
      metric_rating: metric.rating,
      metric_delta: metric.delta
    });
  });
  */
  
  console.info('[Analytics] Sent Web Vitals batch:', metrics);
};

/**
 * Initialize metrics collection using PerformanceObserver
 */
export const initWebVitalsTracking = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }
  
  // Track First Contentful Paint (FCP)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      reportWebVital({
        id: `fcp-${Date.now()}`,
        name: 'FCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        rating: getRating('FCP', lastEntry.startTime)
      });
    }).observe({ type: 'paint', buffered: true });
  } catch (e) {
    console.error('Failed to observe FCP:', e);
  }
  
  // Track Largest Contentful Paint (LCP)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      reportWebVital({
        id: `lcp-${Date.now()}`,
        name: 'LCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime)
      });
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.error('Failed to observe LCP:', e);
  }
  
  // Track Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as any[];
      
      entries.forEach(entry => {
        // Only count layout shifts without recent user input
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      });
      
      reportWebVital({
        id: `cls-${Date.now()}`,
        name: 'CLS',
        value: clsValue,
        delta: clsValue,
        rating: getRating('CLS', clsValue)
      });
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.error('Failed to observe CLS:', e);
  }
  
  // Track First Input Delay (FID)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0] as any;
      
      if (firstEntry) {
        reportWebVital({
          id: `fid-${Date.now()}`,
          name: 'FID',
          value: firstEntry.processingStart - firstEntry.startTime,
          delta: firstEntry.processingStart - firstEntry.startTime,
          rating: getRating('FID', firstEntry.processingStart - firstEntry.startTime)
        });
      }
    }).observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.error('Failed to observe FID:', e);
  }
  
  // Track Time to First Byte (TTFB)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const navigationEntry = entries[0] as PerformanceNavigationTiming;
      
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        
        reportWebVital({
          id: `ttfb-${Date.now()}`,
          name: 'TTFB',
          value: ttfb,
          delta: ttfb,
          rating: getRating('TTFB', ttfb)
        });
      }
    }).observe({ type: 'navigation', buffered: true });
  } catch (e) {
    console.error('Failed to observe TTFB:', e);
  }
};

export default {
  reportWebVital,
  initWebVitalsTracking
};
