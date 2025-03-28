
import React from 'react';
import App from './App';
import SolanaProvider from './contexts/SolanaContext';
import { AuthProvider } from './contexts/auth';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';

const SolanaApp: React.FC = () => {
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
