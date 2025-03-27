
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { initPerformanceMonitoring } from './utils/performanceMonitoring';
import AuthProvider from './contexts/AuthContext';

// Error boundary for the entire application
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen flex items-center justify-center bg-background">
          <div className="glass-morphism-dark p-8 rounded-xl max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-white">Something went wrong</h1>
            <p className="text-white/70 mb-6">The application encountered an error. Please refresh the page.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-royal-purple to-royal-gold text-white px-4 py-2 rounded-md"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize performance monitoring with safe error handling
try {
  if (process.env.NODE_ENV === 'production') {
    initPerformanceMonitoring();
  }
} catch (error) {
  console.error('Failed to initialize performance monitoring:', error);
}

// Find and validate root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
} else {
  try {
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <Router>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Router>
        </ErrorBoundary>
      </React.StrictMode>
    );

    console.info('Application rendered successfully');
  } catch (error) {
    console.error('Failed to render application:', error);
    
    // Fallback rendering in case of error
    rootElement.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: #121212; color: white; padding: 2rem;">
        <div style="max-width: 500px; text-align: center;">
          <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">Application Failed to Load</h1>
          <p style="opacity: 0.7; margin-bottom: 1.5rem;">There was a problem initializing the application. Please refresh the page or try again later.</p>
          <button 
            style="background: linear-gradient(to right, #8b5cf6, #3b82f6); color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; border: none; cursor: pointer;"
            onclick="window.location.reload()"
          >
            Refresh Page
          </button>
        </div>
      </div>
    `;
  }
}
