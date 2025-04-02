
import React, { createContext } from 'react';

// Define the context type
export interface SolanaContextType {
  connected: boolean;
  walletAddress: string | null;
  balance: number;
  signTransaction: (tx: any) => Promise<any>;
  signMessage: (message: string) => Promise<any>;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

// Create a default context value
export const defaultSolanaContext: SolanaContextType = {
  connected: false,
  walletAddress: null,
  balance: 0,
  signTransaction: async () => null,
  signMessage: async () => null,
  connect: async () => {},
  disconnect: async () => {},
  isLoading: false,
  error: null
};

// Create the context
export const SolanaContext = createContext<SolanaContextType>(defaultSolanaContext);

// Helper hook to use the Solana context
export const useSolana = () => React.useContext(SolanaContext);

export default SolanaContext;
