
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SolanaContextType {
  connected: boolean;
  connecting: boolean;
  connect: () => Promise<boolean>;
  disconnect: () => Promise<void>;
  publicKey: string | null;
  balance: number;
}

const SolanaContext = createContext<SolanaContextType>({
  connected: false,
  connecting: false,
  connect: async () => false,
  disconnect: async () => {},
  publicKey: null,
  balance: 0
});

export const useSolana = () => useContext(SolanaContext);

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);

  const connect = async (): Promise<boolean> => {
    try {
      setConnecting(true);
      // Mock connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      setConnected(true);
      setPublicKey('SOLANA_PUBLIC_KEY_MOCK');
      setBalance(100);
      setConnecting(false);
      return true;
    } catch (error) {
      console.error('Failed to connect to Solana wallet:', error);
      setConnecting(false);
      return false;
    }
  };

  const disconnect = async (): Promise<void> => {
    try {
      setConnected(false);
      setPublicKey(null);
      setBalance(0);
    } catch (error) {
      console.error('Failed to disconnect Solana wallet:', error);
    }
  };

  return (
    <SolanaContext.Provider
      value={{
        connected,
        connecting,
        connect,
        disconnect,
        publicKey,
        balance
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};
