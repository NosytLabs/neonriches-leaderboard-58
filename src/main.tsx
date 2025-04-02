
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.css';
import './styles/animations.css';
import { preloadCriticalAssets } from './utils/resourcePreload';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';

// Start preloading critical resources as early as possible
preloadCriticalAssets();

// Initialize performance monitoring in production
if (process.env.NODE_ENV === 'production') {
  import('./utils/performanceMonitoring').then(({ initPerformanceMonitoring }) => {
    initPerformanceMonitoring();
  });
  
  // Register service worker
  serviceWorkerRegistration.register();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
