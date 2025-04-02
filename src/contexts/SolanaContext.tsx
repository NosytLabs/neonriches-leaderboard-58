
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface SolanaContextType {
  connected: boolean;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  send: (recipient: string, amount: number) => Promise<boolean>;
  balance: number;
  refreshBalance: () => Promise<void>;
}

const SolanaContext = createContext<SolanaContextType | null>(null);

export const SolanaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);
  const { toast } = useToast();
  
  // Mock connect function - in real app, this would connect to actual Solana wallet
  const connect = useCallback(async () => {
    try {
      // Simulate wallet connection
      setTimeout(() => {
        setConnected(true);
        setPublicKey('AVC7Rkh2bknFwGkGiS4jZKGpmsthmXmcf6jLuGVBJqgF');
        setBalance(4.2);
        toast({
          title: "Wallet Connected",
          description: "You have successfully connected your wallet",
          variant: "success"
        });
      }, 500);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to your wallet",
        variant: "destructive"
      });
    }
  }, [toast]);

  // Mock disconnect function
  const disconnect = useCallback(async () => {
    try {
      // Simulate wallet disconnection
      setTimeout(() => {
        setConnected(false);
        setPublicKey(null);
        setBalance(0);
        toast({
          title: "Wallet Disconnected",
          description: "You have disconnected your wallet",
          variant: "default"
        });
      }, 300);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      toast({
        title: "Disconnection Failed",
        description: "Failed to disconnect your wallet",
        variant: "destructive"
      });
    }
  }, [toast]);

  // Mock send function
  const send = useCallback(async (recipient: string, amount: number) => {
    try {
      if (!connected) {
        toast({
          title: "Not Connected",
          description: "Please connect your wallet first",
          variant: "destructive"
        });
        return false;
      }
      
      // Simulate transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setBalance(prev => Math.max(0, prev - amount));
      
      toast({
        title: "Transaction Successful",
        description: `Sent ${amount} SOL to ${recipient.substring(0, 6)}...`,
        variant: "success"
      });
      
      return true;
    } catch (error) {
      console.error('Error sending transaction:', error);
      toast({
        title: "Transaction Failed",
        description: "Failed to send your transaction",
        variant: "destructive"
      });
      return false;
    }
  }, [connected, toast]);

  // Mock refresh balance function
  const refreshBalance = useCallback(async () => {
    if (!connected) return;
    
    try {
      // Simulate balance refresh
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Random balance between 0.5 and 10 SOL
      const newBalance = connected ? (Math.random() * 9.5 + 0.5) : 0;
      setBalance(Number(newBalance.toFixed(2)));
      
      toast({
        title: "Balance Updated",
        description: `Your balance is now ${newBalance.toFixed(2)} SOL`,
        variant: "default"
      });
    } catch (error) {
      console.error('Error refreshing balance:', error);
      toast({
        title: "Balance Refresh Failed",
        description: "Failed to update your balance",
        variant: "destructive"
      });
    }
  }, [connected, toast]);

  return (
    <SolanaContext.Provider
      value={{
        connected,
        publicKey,
        connect,
        disconnect,
        send,
        balance,
        refreshBalance
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

// Hook for using the Solana context
export const useSolana = (): SolanaContextType => {
  const context = useContext(SolanaContext);
  
  if (!context) {
    console.warn('useSolana must be used within a SolanaProvider');
    // Return a default empty context instead of throwing an error
    return {
      connected: false,
      publicKey: null,
      connect: async () => {},
      disconnect: async () => {},
      send: async () => false,
      balance: 0,
      refreshBalance: async () => {}
    };
  }
  
  return context;
};

// Export an alias for backward compatibility
export const useSolanaContext = useSolana;
