
import React, { lazy, Suspense, ComponentType } from 'react';

interface UseLazyComponentOptions {
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  onLoad?: () => void;
  retryOnError?: boolean;
}

/**
 * Hook for lazily loading components with error boundary and performance tracking
 * @param factory - Component factory function
 * @param options - Configuration options
 * @returns Lazy loaded component with suspense and error handling
 */
export function useLazyComponent<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  options: UseLazyComponentOptions = {}
) {
  const {
    fallback = <div className="animate-pulse h-20 w-full bg-muted/10 rounded-md"></div>,
    errorFallback = <div className="text-red-500 p-4">Failed to load component</div>,
    onLoad,
    retryOnError = false
  } = options;
  
  // Add performance tracking to component load
  const enhancedFactory = () => {
    const startTime = performance.now();
    
    return factory().then(module => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      // Log component load time in development
      if (process.env.NODE_ENV === 'development') {
        console.info(`[Performance] Lazy component loaded in ${loadTime.toFixed(2)}ms`);
      }
      
      // Call onLoad callback if provided
      if (onLoad) {
        onLoad();
      }
      
      return module;
    });
  };
  
  const LazyComponent = lazy(enhancedFactory);
  
  const Component = (props: React.ComponentProps<T>) => {
    return (
      <Suspense fallback={fallback}>
        <ErrorBoundary fallback={errorFallback} retry={retryOnError}>
          <LazyComponent {...props} />
        </ErrorBoundary>
      </Suspense>
    );
  };
  
  return Component;
}

// Enhanced error boundary component with retry capability
class ErrorBoundary extends React.Component<
  { 
    children: React.ReactNode; 
    fallback: React.ReactNode;
    retry?: boolean;
  },
  { 
    hasError: boolean;
    error: Error | null;
  }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode; retry?: boolean }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[LazyLoad Error]", error, errorInfo);
  }
  
  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.retry) {
        return (
          <div>
            {this.props.fallback}
            <button 
              onClick={this.handleRetry}
              className="mt-2 px-4 py-2 bg-primary/80 text-white rounded-md hover:bg-primary"
            >
              Retry Loading
            </button>
          </div>
        );
      }
      return this.props.fallback;
    }
    return this.props.children;
  }
}
