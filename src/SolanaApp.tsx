
import React from 'react';
import App from './App';
import SolanaProvider from './contexts/SolanaContext';

const SolanaApp: React.FC = () => {
  return (
    <SolanaProvider>
      <App />
    </SolanaProvider>
  );
};

export default SolanaApp;
