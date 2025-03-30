
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface SolanaContextType {
  isConnected: boolean;
  balance: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  connected: boolean;
  walletBalance: number;
  walletAddress: string | null;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  sendSol: (amount: number, recipient: string) => Promise<boolean>;
  signMessage: (message: string) => Promise<string | null>;
}

const SolanaContext = createContext<SolanaContextType>({
  isConnected: false,
  balance: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  connected: false,
  walletBalance: 0,
  walletAddress: null,
  publicKey: null,
  connect: async () => {},
  disconnect: () => {},
  sendSol: async () => false,
  signMessage: async () => null
});

export const useSolana = () => useContext(SolanaContext);

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Check if wallet was previously connected
  useEffect(() => {
    const connected = localStorage.getItem('solana_connected') === 'true';
    if (connected) {
      setIsConnected(true);
      setBalance(Math.random() * 10); // Mock balance
      setWalletAddress('8xj7dzvJxZnQ19BSt9yfXGtQhJbHJQ6WujDAZMPUMPcy'); // Mock address
    }
  }, []);

  const connectWallet = async () => {
    // Simulate connecting to wallet
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsConnected(true);
    setBalance(Math.random() * 10); // Mock balance
    setWalletAddress('8xj7dzvJxZnQ19BSt9yfXGtQhJbHJQ6WujDAZMPUMPcy'); // Mock address
    localStorage.setItem('solana_connected', 'true');
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setBalance(null);
    setWalletAddress(null);
    localStorage.removeItem('solana_connected');
  };

  const sendSol = async (amount: number, recipient: string): Promise<boolean> => {
    // Simulate sending SOL
    console.log(`Sending ${amount} SOL to ${recipient}`);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 90% success rate for demo purposes
    const success = Math.random() > 0.1;
    
    if (success && balance !== null) {
      setBalance(balance - amount);
    }
    
    return success;
  };

  const signMessage = async (message: string): Promise<string | null> => {
    // Simulate signing a message
    console.log(`Signing message: ${message}`);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 95% success rate for demo purposes
    const success = Math.random() > 0.05;
    
    return success ? 'simulated_signature_for_demonstration_purposes_only' : null;
  };

  return (
    <SolanaContext.Provider value={{
      isConnected,
      balance,
      connectWallet,
      disconnectWallet,
      connected: isConnected,
      walletBalance: balance || 0,
      walletAddress,
      publicKey: walletAddress,
      connect: connectWallet,
      disconnect: disconnectWallet,
      sendSol,
      signMessage
    }}>
      {children}
    </SolanaContext.Provider>
  );
};
