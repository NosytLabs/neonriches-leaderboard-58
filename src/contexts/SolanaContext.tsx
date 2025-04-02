
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SolanaContextType {
  connected: boolean;
  publicKey: { toString: () => string } | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage?: (message: Uint8Array) => Promise<Uint8Array>;
}

const SolanaContext = createContext<SolanaContextType>({
  connected: false,
  publicKey: null,
  connect: async () => {},
  disconnect: async () => {},
});

export const useSolana = () => useContext(SolanaContext);

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<{ toString: () => string } | null>(null);

  const connect = async () => {
    try {
      // Mock connection
      setConnected(true);
      setPublicKey({
        toString: () => 'DummySolanaPublicKey123456789'
      });
    } catch (error) {
      console.error('Error connecting to Solana wallet:', error);
    }
  };

  const disconnect = async () => {
    setConnected(false);
    setPublicKey(null);
  };

  const signMessage = async (message: Uint8Array) => {
    // Mock signature
    console.log('Signing message:', message);
    return new Uint8Array(32); // Mock signature
  };

  return (
    <SolanaContext.Provider
      value={{
        connected,
        publicKey,
        connect,
        disconnect,
        signMessage
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};
