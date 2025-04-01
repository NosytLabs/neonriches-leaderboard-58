
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import './styles/animations.css';
import { preloadCriticalAssets } from './utils/resourcePreload';

// Start preloading critical resources as early as possible
preloadCriticalAssets();

// Initialize performance monitoring in production
if (process.env.NODE_ENV === 'production') {
  import('./utils/performanceMonitoring').then(({ initPerformanceMonitoring }) => {
    initPerformanceMonitoring();
  });
  
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(error => {
          console.log('SW registration failed: ', error);
        });
    });
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
