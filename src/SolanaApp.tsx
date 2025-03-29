
import React, { useEffect } from 'react';
import App from './App';
import SolanaProvider from './contexts/SolanaContext';
import { AuthProvider } from './contexts/auth';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { usePerformanceMonitoring } from './hooks/use-performance-monitoring';

const SolanaApp: React.FC = () => {
  // Initialize performance monitoring
  usePerformanceMonitoring();
  
  // Measure important render events
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark('app-providers-mounted');
      
      // Report metrics after the app is fully hydrated
      const timer = setTimeout(() => {
        performance.mark('app-hydrated');
        performance.measure('app-hydration-time', 'app-providers-mounted', 'app-hydrated');
        
        const hydrationTime = performance.getEntriesByName('app-hydration-time')[0];
        console.info('[Performance] App hydration time:', hydrationTime.duration.toFixed(2), 'ms');
        
        // Clear marks and measures to avoid memory leaks
        performance.clearMarks();
        performance.clearMeasures();
      }, 0);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <SolanaProvider>
            <App />
          </SolanaProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default SolanaApp;
