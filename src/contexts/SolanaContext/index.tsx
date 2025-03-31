
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Define minimal context value type
export interface SolanaContextValue {
  connected: boolean;
  walletAddress: string | null;
  walletBalance: number;
  connect: () => Promise<void>;
  disconnect: () => void;
}

// Create the context with default values
const SolanaContext = createContext<SolanaContextValue>({
  connected: false,
  walletAddress: null,
  walletBalance: 0,
  connect: async () => {},
  disconnect: () => {},
});

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);

  // Simplified connect function
  const connect = async (): Promise<void> => {
    try {
      // Mock connection
      await new Promise(resolve => setTimeout(resolve, 300));
      setWalletAddress('8xj7dzvJxZnQ19BSt9yfXGtQhJbHJQ6WujDAZMPUMPcy');
      setWalletBalance(5);
      setConnected(true);
      
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
    setWalletBalance(0);
  };

  return (
    <SolanaContext.Provider
      value={{
        connected,
        walletAddress,
        walletBalance,
        connect,
        disconnect,
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);

// Export for compatibility
export type { SolanaContextValue };
