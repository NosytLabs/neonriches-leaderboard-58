
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context value type
export interface SolanaContextValue {
  // Basic properties
  connected: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  
  // Methods
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendSol: (amount: number, recipient: string) => Promise<boolean>;
  
  // Status flags
  isConnected: boolean;
  isConnecting: boolean;
  hasWallet: boolean;
  
  // Account linking
  linkWalletToAccount: (userId: string) => Promise<boolean>;
}

// Create a default context with safe, no-op implementations
const defaultContextValue: SolanaContextValue = {
  connected: false,
  walletPubkey: null,
  walletBalance: 0,
  
  connectWallet: async () => { console.log('Wallet connect not implemented'); },
  disconnectWallet: () => { console.log('Wallet disconnect not implemented'); },
  sendSol: async () => false,
  
  isConnected: false,
  isConnecting: false,
  hasWallet: false,
  
  linkWalletToAccount: async () => false
};

// Create the context
const SolanaContext = createContext<SolanaContextValue>(defaultContextValue);

// Provider component
export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<{
    connected: boolean;
    pubkey: string | null;
    balance: number;
  }>({
    connected: false,
    pubkey: null,
    balance: 0
  });
  
  const [status, setStatus] = useState({
    isConnecting: false,
    hasWallet: false
  });

  // Mock implementation - in a real app this would use actual wallet APIs
  const connectWallet = async (): Promise<void> => {
    setStatus(prev => ({ ...prev, isConnecting: true }));
    
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWallet({
        connected: true,
        pubkey: 'demo123456789abcdef',
        balance: 5.0
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setStatus(prev => ({ ...prev, isConnecting: false }));
    }
  };

  const disconnectWallet = (): void => {
    setWallet({
      connected: false,
      pubkey: null,
      balance: 0
    });
  };

  const sendSol = async (amount: number, recipient: string): Promise<boolean> => {
    if (!wallet.connected) {
      console.error('Wallet not connected');
      return false;
    }
    
    try {
      // Simulate transaction
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update balance
      setWallet(prev => ({
        ...prev,
        balance: prev.balance - amount
      }));
      
      return true;
    } catch (error) {
      console.error('Transaction failed:', error);
      return false;
    }
  };

  const linkWalletToAccount = async (userId: string): Promise<boolean> => {
    if (!wallet.pubkey) return false;
    
    try {
      // Mock API call to link wallet to user account
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Linked wallet ${wallet.pubkey} to user ${userId}`);
      return true;
    } catch (error) {
      console.error('Failed to link wallet:', error);
      return false;
    }
  };

  // Check if wallet is available in browser
  useEffect(() => {
    const checkWalletAvailability = async () => {
      // Mock check for wallet extension
      const hasWalletExtension = true; // In real app, check window.solana
      setStatus(prev => ({ ...prev, hasWallet: hasWalletExtension }));
    };
    
    checkWalletAvailability();
  }, []);

  // Construct context value
  const contextValue: SolanaContextValue = {
    connected: wallet.connected,
    walletPubkey: wallet.pubkey,
    walletBalance: wallet.balance,
    
    connectWallet,
    disconnectWallet,
    sendSol,
    
    isConnected: wallet.connected,
    isConnecting: status.isConnecting,
    hasWallet: status.hasWallet,
    
    linkWalletToAccount
  };

  return (
    <SolanaContext.Provider value={contextValue}>
      {children}
    </SolanaContext.Provider>
  );
};

// Custom hook to use the Solana context
export const useSolana = () => useContext(SolanaContext);
