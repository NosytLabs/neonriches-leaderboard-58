
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'; // Import main CSS which will include all theme styles
import { HelmetProvider } from 'react-helmet-async';

// Check if we can measure performance and log it
if (process.env.NODE_ENV !== 'production' && 'performance' in window) {
  // Mark the start of app initialization
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
    loadingIndicator.remove();
  }
  
  // Log performance metrics in development
  if (process.env.NODE_ENV !== 'production' && 'performance' in window) {
    // Mark the end of app initialization
    performance.mark('app-init-end');
    performance.measure('App Initialization', 'app-init-start', 'app-init-end');
    
    const measures = performance.getEntriesByType('measure');
    console.info(`[Performance] App initialization: ${measures[0]?.duration.toFixed(2)}ms`);
  }
});
