
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './contexts/auth';
import { ToastProvider } from './contexts/ToastContext';
import { EventProvider } from './contexts/EventContext';
import { HelmetProvider } from 'react-helmet-async';
import { initPerformanceMonitoring } from './utils/performanceMonitoring';

// Initialize performance monitoring
initPerformanceMonitoring();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <EventProvider>
              <App />
              <Toaster />
            </EventProvider>
          </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
