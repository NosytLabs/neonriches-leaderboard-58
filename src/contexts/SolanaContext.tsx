
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SolanaContextType {
  isConnected: boolean;
  balance: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const SolanaContext = createContext<SolanaContextType>({
  isConnected: false,
  balance: null,
  connectWallet: async () => {},
  disconnectWallet: () => {}
});

export const useSolana = () => useContext(SolanaContext);

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);

  // Check if wallet was previously connected
  useEffect(() => {
    const connected = localStorage.getItem('solana_connected') === 'true';
    if (connected) {
      setIsConnected(true);
      setBalance(Math.random() * 10); // Mock balance
    }
  }, []);

  const connectWallet = async () => {
    // Simulate connecting to wallet
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsConnected(true);
    setBalance(Math.random() * 10); // Mock balance
    localStorage.setItem('solana_connected', 'true');
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setBalance(null);
    localStorage.removeItem('solana_connected');
  };

  return (
    <SolanaContext.Provider value={{
      isConnected,
      balance,
      connectWallet,
      disconnectWallet
    }}>
      {children}
    </SolanaContext.Provider>
  );
};
