
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context value type
export interface SolanaContextValue {
  isConnected: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
  hasWallet: boolean;
  linkWalletToAccount: () => Promise<void>;
  sendSol: (amount: number, recipient: string) => Promise<boolean>;
}

// Create the context with a default value
const SolanaContext = createContext<SolanaContextValue | undefined>(undefined);

// Provider component
export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletPubkey, setWalletPubkey] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasWallet, setHasWallet] = useState(false);

  // Mock functions for demo purposes
  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWalletPubkey('MocKPubKeY12345678901234567890123456789012');
      setWalletBalance(1.5);
      setIsConnected(true);
      setHasWallet(true);
      return true;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return false;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletPubkey(null);
    setWalletBalance(0);
    setIsConnected(false);
  };

  const linkWalletToAccount = async () => {
    // Mock implementation
    return Promise.resolve();
  };

  const sendSol = async (amount: number, recipient: string) => {
    // Mock implementation
    console.log(`Sending ${amount} SOL to ${recipient}`);
    return Promise.resolve(true);
  };

  // Create the context value
  const value: SolanaContextValue = {
    isConnected,
    walletPubkey,
    walletBalance,
    connectWallet,
    disconnectWallet,
    isConnecting,
    hasWallet,
    linkWalletToAccount,
    sendSol
  };

  return (
    <SolanaContext.Provider value={value}>
      {children}
    </SolanaContext.Provider>
  );
};

// Custom hook for using the context
export const useSolana = (): SolanaContextValue => {
  const context = useContext(SolanaContext);
  if (context === undefined) {
    throw new Error('useSolana must be used within a SolanaProvider');
  }
  return context;
};
