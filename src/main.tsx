
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';
import { SolanaProvider } from '@/contexts/SolanaContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <SolanaProvider>
        <App />
      </SolanaProvider>
    </HelmetProvider>
  </React.StrictMode>
);
