
import React, { lazy, Suspense, ComponentType } from 'react';

interface UseLazyComponentOptions {
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

// Create a hook for lazy loading components with error boundary
export function useLazyComponent<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  options: UseLazyComponentOptions = {}
) {
  const {
    fallback = <div className="animate-pulse h-20 w-full bg-muted/10 rounded-md"></div>,
    errorFallback = <div className="text-red-500 p-4">Failed to load component</div>
  } = options;
  
  const LazyComponent = lazy(factory);
  
  const Component = (props: React.ComponentProps<T>) => {
    return (
      <Suspense fallback={fallback}>
        <ErrorBoundary fallback={errorFallback}>
          <LazyComponent {...props} />
        </ErrorBoundary>
      </Suspense>
    );
  };
  
  return Component;
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
