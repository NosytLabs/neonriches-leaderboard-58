
import React, { createContext, useContext, useState } from 'react';
import { toast } from '@/components/ui/use-toast';

// Define minimal context value type
export interface SolanaContextValue {
  connected: boolean;
  connecting?: boolean;
  walletAddress: string | null;
  walletBalance: number;
  connect: () => Promise<void>;
  disconnect: () => void;
  publicKey?: { toString: () => string } | null; // Add publicKey property
}

// Create the context with default values
const SolanaContext = createContext<SolanaContextValue>({
  connected: false,
  walletAddress: null,
  walletBalance: 0,
  connect: async () => {},
  disconnect: () => {},
  publicKey: null
});

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [publicKey, setPublicKey] = useState<{ toString: () => string } | null>(null);

  // Simplified connect function
  const connect = async (): Promise<void> => {
    try {
      // Mock connection
      await new Promise(resolve => setTimeout(resolve, 300));
      const address = '8xj7dzvJxZnQ19BSt9yfXGtQhJbHJQ6WujDAZMPUMPcy';
      setWalletAddress(address);
      setPublicKey({
        toString: () => address
      });
      setWalletBalance(5);
      setConnected(true);
      
      // Use direct toast function instead of hook
      toast({
        title: "Wallet Connected",
        description: "Your wallet has been connected."
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet.",
        variant: "destructive"
      });
    }
  };
  
  // Simplified disconnect function
  const disconnect = (): void => {
    setConnected(false);
    setWalletAddress(null);
    setPublicKey(null);
    setWalletBalance(0);
    
    // Use direct toast function
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected."
    });
  };

  return (
    <SolanaContext.Provider
      value={{
        connected,
        walletAddress,
        walletBalance,
        publicKey,
        connect,
        disconnect,
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
