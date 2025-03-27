
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

/**
 * PerformanceMonitor class to handle tracking and reporting performance metrics
 */
class PerformanceMonitor {
  private metrics: Record<string, any> = {};
  private observers: PerformanceObserver[] = [];

  /**
   * Initialize the performance monitoring
   */
  public init() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported in this environment');
      return;
    }

    this.trackTimeToFirstByte();
    this.initPerformanceObservers();
  }

  /**
   * Initialize all performance observers
   */
  private initPerformanceObservers() {
    // First Contentful Paint (FCP)
    this.createObserver('paint', (entries) => {
      for (const entry of entries.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const value = entry.startTime;
          const rating = this.getRating('FCP', value);
          this.metrics.FCP = { value, rating };
          console.info(`[Performance] FCP: ${value.toFixed(2)}ms`);
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
        console.info(`[Performance] LCP: ${value.toFixed(2)}ms`);
      }
    });

    // First Input Delay (FID)
    this.createObserver('first-input', (entries) => {
      const entry = entries.getEntries()[0];
      if (entry) {
        const value = entry.duration;
        const rating = this.getRating('FID', value);
        this.metrics.FID = { value, rating };
        console.info(`[Performance] FID: ${value.toFixed(2)}ms`);
      }
    });

    // Cumulative Layout Shift (CLS)
    this.createObserver('layout-shift', (entries) => {
      let clsValue = 0;
      for (const entry of entries.getEntries()) {
        // Need to type-cast the entry to access specific properties
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      const rating = this.getRating('CLS', clsValue);
      this.metrics.CLS = { value: clsValue, rating };
      console.info(`[Performance] CLS: ${clsValue.toFixed(3)}`);
    });
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
    if (performance && performance.getEntriesByType) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        const ttfb = navEntry.responseStart;
        const rating = this.getRating('TTFB', ttfb);
        this.metrics.TTFB = { value: ttfb, rating };
        console.info(`[Performance] TTFB: ${ttfb.toFixed(2)}ms`);
      }
    }
  }

  /**
   * Get performance rating based on thresholds
   */
  private getRating(metric: keyof typeof THRESHOLDS, value: number): string {
    const threshold = THRESHOLDS[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Disconnect all observers
   */
  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
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
  performanceMonitor.init();
  
  // Clean up when page is unloaded
  window.addEventListener('unload', () => {
    performanceMonitor.disconnect();
  });
};

/**
 * Get collected performance metrics
 */
export const getPerformanceMetrics = () => {
  return performanceMonitor.getMetrics();
};
