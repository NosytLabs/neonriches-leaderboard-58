
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { SolanaProvider } from './contexts/SolanaContext';
import { Toaster } from './components/ui/toaster';

// All of this code is new, creating the SolanaApp component
const SolanaApp: React.FC = () => {
  return (
    <Router>
      <SolanaProvider>
        <AppRoutes />
        <Toaster />
      </SolanaProvider>
    </Router>
  );
};

export default SolanaApp;
