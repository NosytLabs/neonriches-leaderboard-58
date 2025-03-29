
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SolanaApp from './SolanaApp';
import './index.css';

// Start measuring performance early with a simple mark
if (typeof window !== 'undefined' && 'performance' in window) {
  performance.mark('app-start');
}

// Preload critical resources
const preloadResources = () => {
  if (typeof window !== 'undefined') {
    // Preload key images
    const preloadLinks = [
      { href: '/throne-assets/crown-icon.svg', as: 'image' },
      { href: '/favicon.svg', as: 'image' }
    ];
    
    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    });
  }
};

preloadResources();

// Create the React root and render the app
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <SolanaApp />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Mark the end of initial rendering
    performance.mark('app-rendered');
    performance.measure('app-startup', 'app-start', 'app-rendered');
    
    console.info('[Performance] App rendered in:', 
      performance.getEntriesByName('app-startup')[0].duration.toFixed(2), 'ms');
  }
};

// In production, use requestIdleCallback to render without blocking main thread
if (process.env.NODE_ENV === 'production' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(renderApp);
} else {
  renderApp();
}
