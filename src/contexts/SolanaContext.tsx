
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PublicKey } from '@solana/web3.js';

export interface SolanaContextValue {
  publicKey: PublicKey | null;
  connected: boolean;
  signMessage: (message: Uint8Array) => Promise<Uint8Array>;
  signTransaction: (transaction: any) => Promise<any>;
  disconnect: () => Promise<void>;
  connect: () => Promise<void>;
  walletAddress: string | null;
  balance: number | null;
  signAndSendTransaction: (transaction: any) => Promise<string>;
}

const defaultContext: SolanaContextValue = {
  publicKey: null,
  connected: false,
  walletAddress: null,
  balance: null,
  signMessage: async () => new Uint8Array(),
  signTransaction: async () => ({}),
  disconnect: async () => {},
  connect: async () => {},
  signAndSendTransaction: async () => ''
};

export const SolanaContext = createContext<SolanaContextValue>(defaultContext);

export const useSolana = () => useContext(SolanaContext);

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  // Mock functions for development
  const connect = async () => {
    try {
      // In a real implementation, this would use a wallet adapter
      const mockPublicKey = new PublicKey('8YLKoCu7NwqHNS8GzuvA2ibsvLRAxvMJEAMJAdCqePHS');
      setPublicKey(mockPublicKey);
      setWalletAddress(mockPublicKey.toBase58());
      setConnected(true);
      setBalance(100); // Mock balance
      console.log('Connected to mock wallet');
      return mockPublicKey;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  };

  const disconnect = async () => {
    try {
      // In a real implementation, this would use a wallet adapter
      setPublicKey(null);
      setWalletAddress(null);
      setConnected(false);
      setBalance(null);
      console.log('Disconnected from mock wallet');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      throw error;
    }
  };

  const signMessage = async (message: Uint8Array): Promise<Uint8Array> => {
    try {
      // Mock signature
      console.log('Signing message (mock):', message);
      return new Uint8Array([1, 2, 3, 4, 5]); // Mock signature
    } catch (error) {
      console.error('Error signing message:', error);
      throw error;
    }
  };

  const signTransaction = async (transaction: any): Promise<any> => {
    try {
      // Mock transaction signing
      console.log('Signing transaction (mock):', transaction);
      return { ...transaction, signature: 'mock-signature' };
    } catch (error) {
      console.error('Error signing transaction:', error);
      throw error;
    }
  };

  const signAndSendTransaction = async (transaction: any): Promise<string> => {
    try {
      // Mock transaction signing and sending
      console.log('Signing and sending transaction (mock):', transaction);
      return 'mock-transaction-signature';
    } catch (error) {
      console.error('Error signing and sending transaction:', error);
      throw error;
    }
  };

  const value: SolanaContextValue = {
    publicKey,
    connected,
    signMessage,
    signTransaction,
    disconnect,
    connect,
    walletAddress,
    balance,
    signAndSendTransaction
  };

  return (
    <SolanaContext.Provider value={value}>
      {children}
    </SolanaContext.Provider>
  );
};
