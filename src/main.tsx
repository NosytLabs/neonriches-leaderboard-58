
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Import AuthProvider if it exists
let AuthProvider;
try {
  AuthProvider = require('@/hooks/useAuth').AuthProvider;
} catch (e) {
  // Create a simple AuthProvider if it doesn't exist
  AuthProvider = ({ children }: { children: React.ReactNode }) => children;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
