
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initPerformanceMonitoring } from './utils/performanceMonitoring';

// Initialize performance monitoring
if (process.env.NODE_ENV === 'production') {
  initPerformanceMonitoring();
}

const root = createRoot(document.getElementById('root')!);

// Add event listener for content loaded to improve FCP
document.addEventListener('DOMContentLoaded', () => {
  // Add preconnect for any external resources
  const linkElement = document.createElement('link');
  linkElement.rel = 'preconnect';
  linkElement.href = 'https://fonts.googleapis.com';
  document.head.appendChild(linkElement);
});

root.render(<App />);
