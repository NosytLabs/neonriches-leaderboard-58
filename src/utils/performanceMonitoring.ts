
// Performance monitoring utility

/**
 * Core Web Vitals thresholds
 * Based on Google's recommendations
 */
const THRESHOLDS = {
  FCP: {
    good: 1800, // 1.8s
    poor: 3000, // 3s
  },
  LCP: {
    good: 2500, // 2.5s
    poor: 4000, // 4s
  },
  FID: {
    good: 100, // 100ms
    poor: 300, // 300ms
  },
  CLS: {
    good: 0.1,
    poor: 0.25,
  },
  TTFB: {
    good: 800, // 800ms
    poor: 1800, // 1.8s
  },
};

// Define type for layout shift entries
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

/**
 * PerformanceMonitor class to handle tracking and reporting performance metrics
 */
class PerformanceMonitor {
  private metrics: Record<string, any> = {};
  private observers: PerformanceObserver[] = [];
  private clsValue = 0;
  private clsEntries: LayoutShiftEntry[] = [];
  private sessionID = crypto.randomUUID();

  /**
   * Initialize the performance monitoring
   */
  public init() {
    try {
      if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
        console.warn('PerformanceObserver not supported in this environment');
        return;
      }

      // Generate session ID for grouping metrics
      this.sessionID = crypto.randomUUID();
      
      this.trackTimeToFirstByte();
      this.initPerformanceObservers();
      this.trackResources();
      this.trackNavigation();
      
      // Set up periodic reporting
      this.scheduleMetricsReport();
    } catch (error) {
      console.error('Error initializing performance monitoring:', error);
    }
  }

  /**
   * Initialize all performance observers
   */
  private initPerformanceObservers() {
    try {
      // First Contentful Paint (FCP)
      this.createObserver('paint', (entries) => {
        for (const entry of entries.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            const value = entry.startTime;
            const rating = this.getRating('FCP', value);
            this.metrics.FCP = { value, rating };
            console.info(`[Performance] FCP: ${value.toFixed(2)}ms (${rating})`);
          }
        }
      });

      // Largest Contentful Paint (LCP)
      this.createObserver('largest-contentful-paint', (entries) => {
        const entry = entries.getEntries().pop();
        if (entry) {
          const value = entry.startTime;
          const rating = this.getRating('LCP', value);
          this.metrics.LCP = { value, rating };
          console.info(`[Performance] LCP: ${value.toFixed(2)}ms (${rating})`);
        }
      });

      // First Input Delay (FID)
      this.createObserver('first-input', (entries) => {
        const entry = entries.getEntries()[0];
        if (entry) {
          const value = entry.duration;
          const rating = this.getRating('FID', value);
          this.metrics.FID = { value, rating };
          console.info(`[Performance] FID: ${value.toFixed(2)}ms (${rating})`);
        }
      });

      // Cumulative Layout Shift (CLS)
      this.createObserver('layout-shift', (entries) => {
        for (const entry of entries.getEntries()) {
          // Type-cast the entry to access specific properties
          const layoutShiftEntry = entry as LayoutShiftEntry;
          
          if (layoutShiftEntry && !layoutShiftEntry.hadRecentInput) {
            this.clsEntries.push(layoutShiftEntry);
            this.clsValue += layoutShiftEntry.value || 0;
          }
        }
        
        const rating = this.getRating('CLS', this.clsValue);
        this.metrics.CLS = { value: this.clsValue, rating };
        console.info(`[Performance] CLS: ${this.clsValue.toFixed(3)} (${rating})`);
      });
      
      // Long Tasks
      if ('PerformanceObserver' in window && PerformanceObserver.supportedEntryTypes.includes('longtask')) {
        this.createObserver('longtask', (entries) => {
          const tasks = entries.getEntries();
          const longTasksCount = tasks.length;
          const totalBlockingTime = tasks.reduce((sum, task) => sum + task.duration - 50, 0);
          
          this.metrics.longTasks = {
            count: longTasksCount,
            totalBlockingTime
          };
          
          console.info(`[Performance] Long Tasks: ${longTasksCount}, TBT: ${totalBlockingTime.toFixed(2)}ms`);
        });
      }
    } catch (error) {
      console.error('Error initializing performance observers:', error);
    }
  }

  /**
   * Track resource loading performance
   */
  private trackResources() {
    try {
      // Resource Timing
      this.createObserver('resource', (entries) => {
        const resources = entries.getEntries();
        
        // Group resources by type
        const resourceStats: Record<string, { count: number, totalSize: number, avgDuration: number }> = {};
        
        resources.forEach(resource => {
          const url = resource.name;
          const fileExtension = url.split('.').pop()?.split('?')[0]?.toLowerCase();
          
          let type = 'other';
          if (fileExtension) {
            if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'avif'].includes(fileExtension)) {
              type = 'image';
            } else if (['js'].includes(fileExtension)) {
              type = 'script';
            } else if (['css'].includes(fileExtension)) {
              type = 'style';
            } else if (['woff', 'woff2', 'ttf', 'otf'].includes(fileExtension)) {
              type = 'font';
            }
          }
          
          if (!resourceStats[type]) {
            resourceStats[type] = { count: 0, totalSize: 0, avgDuration: 0 };
          }
          
          resourceStats[type].count += 1;
          resourceStats[type].avgDuration = (resourceStats[type].avgDuration * (resourceStats[type].count - 1) + resource.duration) / resourceStats[type].count;
          
          // Try to get transfer size if available
          if ('transferSize' in resource) {
            resourceStats[type].totalSize += (resource as any).transferSize || 0;
          }
        });
        
        this.metrics.resources = resourceStats;
      });
    } catch (error) {
      console.error('Error tracking resources:', error);
    }
  }
  
  /**
   * Track navigation performance
   */
  private trackNavigation() {
    try {
      if ('PerformanceNavigationTiming' in window) {
        this.createObserver('navigation', (entries) => {
          const navigationEntry = entries.getEntries()[0] as PerformanceNavigationTiming;
          
          if (navigationEntry) {
            const dnsTime = navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart;
            const connectTime = navigationEntry.connectEnd - navigationEntry.connectStart;
            const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            const domContentLoaded = navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart;
            const windowLoad = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
            
            this.metrics.navigation = {
              dnsTime,
              connectTime,
              ttfb,
              domContentLoaded,
              windowLoad
            };
            
            console.info(`[Performance] Page load: ${windowLoad.toFixed(2)}ms, DOM ready: ${domContentLoaded.toFixed(2)}ms`);
          }
        });
      }
    } catch (error) {
      console.error('Error tracking navigation:', error);
    }
  }
  
  /**
   * Schedule periodic metrics reporting
   */
  private scheduleMetricsReport() {
    // Report metrics when page is about to unload
    if (typeof window !== 'undefined') {
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          // Use sendBeacon API for reliable delivery when page is unloading
          this.reportMetrics();
        }
      });
      
      // Also report metrics after 10 seconds to capture early performance data
      setTimeout(() => {
        this.reportMetrics();
      }, 10000);
    }
  }
  
  /**
   * Report collected metrics to analytics service
   */
  private reportMetrics() {
    try {
      const metricsPayload = {
        timestamp: new Date().toISOString(),
        sessionID: this.sessionID,
        url: window.location.href,
        metrics: this.metrics,
        userAgent: navigator.userAgent
      };
      
      // For this implementation, we're just logging to console
      // In a real app, you would send this to your analytics service
      console.debug('[Performance] Metrics report:', metricsPayload);
      
      // Example of using navigator.sendBeacon for reliable delivery
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(metricsPayload)], { type: 'application/json' });
        // navigator.sendBeacon('/api/performance-metrics', blob);
      }
    } catch (error) {
      console.error('Error reporting metrics:', error);
    }
  }

  /**
   * Create and start a PerformanceObserver
   */
  private createObserver(type: string, callback: (entries: PerformanceObserverEntryList) => void) {
    try {
      const observer = new PerformanceObserver(callback);
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.error(`Error creating performance observer for ${type}:`, error);
    }
  }

  /**
   * Track Time to First Byte (TTFB)
   */
  private trackTimeToFirstByte() {
    try {
      if (performance && performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries && navEntries.length > 0) {
          const navEntry = navEntries[0] as PerformanceNavigationTiming;
          if (navEntry) {
            const ttfb = navEntry.responseStart;
            const rating = this.getRating('TTFB', ttfb);
            this.metrics.TTFB = { value: ttfb, rating };
            console.info(`[Performance] TTFB: ${ttfb.toFixed(2)}ms (${rating})`);
          }
        }
      }
    } catch (error) {
      console.error('Error tracking TTFB:', error);
    }
  }

  /**
   * Get performance rating based on thresholds
   */
  private getRating(metric: keyof typeof THRESHOLDS, value: number): string {
    try {
      const threshold = THRESHOLDS[metric];
      if (value <= threshold.good) return 'good';
      if (value <= threshold.poor) return 'needs-improvement';
      return 'poor';
    } catch (error) {
      console.error(`Error getting rating for ${metric}:`, error);
      return 'unknown';
    }
  }

  /**
   * Disconnect all observers
   */
  public disconnect() {
    try {
      this.observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (e) {
          console.error('Error disconnecting observer:', e);
        }
      });
      this.observers = [];
    } catch (error) {
      console.error('Error disconnecting observers:', error);
    }
  }

  /**
   * Get all collected metrics
   */
  public getMetrics() {
    return this.metrics;
  }
}

// Singleton instance
const performanceMonitor = new PerformanceMonitor();

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  try {
    performanceMonitor.init();
    
    // Clean up when page is unloaded
    if (typeof window !== 'undefined') {
      window.addEventListener('unload', () => {
        try {
          performanceMonitor.disconnect();
        } catch (e) {
          console.error('Error during performance monitoring cleanup:', e);
        }
      });
    }
  } catch (error) {
    console.error('Error in initPerformanceMonitoring:', error);
  }
};

/**
 * Get collected performance metrics
 */
export const getPerformanceMetrics = () => {
  try {
    return performanceMonitor.getMetrics();
  } catch (error) {
    console.error('Error getting performance metrics:', error);
    return {};
  }
};
