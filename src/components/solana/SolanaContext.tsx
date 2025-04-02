
import React, { createContext, useContext } from 'react';

export interface SolanaContextType {
  connected: boolean;
  isLoading: boolean;
  publicKey: { toString: () => string } | null;
  walletAddress?: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage?: (message: Uint8Array) => Promise<Uint8Array>;
  sendTransaction?: (recipient: string, amount: number) => Promise<string | null>;
  walletBalance?: number;
}

// Create the context with default values
const SolanaContext = createContext<SolanaContextType>({
  connected: false,
  isLoading: false,
  publicKey: null,
  connect: async () => {},
  disconnect: async () => {},
});

// Custom hook to use the Solana context
export const useSolana = (): SolanaContextType => {
  const context = useContext(SolanaContext);
  if (!context) {
    throw new Error("useSolana must be used within a SolanaProvider");
  }
  return context;
};

export { SolanaContext };
