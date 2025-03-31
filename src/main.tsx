
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import { HelmetProvider } from 'react-helmet-async';
import { initPerformanceMonitoring } from './utils/performance';

// Initialize performance monitoring
initPerformanceMonitoring();

// Mark the start of app initialization for performance tracking
if (process.env.NODE_ENV !== 'production') {
  performance.mark('app-init-start');
}

// Create root with concurrent mode
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Remove the loading indicator once app is loaded
window.addEventListener('load', () => {
  const loadingIndicator = document.querySelector('.loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.classList.add('loaded');
    setTimeout(() => {
      loadingIndicator.remove();
    }, 300);
  }
  
  // Log performance metrics in development
  if (process.env.NODE_ENV !== 'production') {
    performance.mark('app-init-end');
    performance.measure('App Initialization', 'app-init-start', 'app-init-end');
    
    const measures = performance.getEntriesByType('measure');
    console.info(`[Performance] App initialization: ${measures[0]?.duration.toFixed(2)}ms`);
  }
  
  // Add preconnect for common domains
  const commonDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  commonDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
});
