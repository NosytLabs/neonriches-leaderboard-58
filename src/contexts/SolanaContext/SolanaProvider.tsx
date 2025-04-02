
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

// Define the context type with all necessary properties
export interface SolanaContextValue {
  connected: boolean;
  connecting: boolean;
  walletBalance: number;
  publicKey: { toString: () => string } | null;
  signMessage?: (message: Uint8Array) => Promise<Uint8Array>;
  sendSol?: (recipient: string, amount: number) => Promise<string | null>;
  connect: () => Promise<void>;
  disconnect: () => void;
  walletPubkey?: string;
}

// Create the context with default values
const SolanaContext = createContext<SolanaContextValue>({
  connected: false,
  connecting: false,
  walletBalance: 0,
  publicKey: null,
  connect: async () => {},
  disconnect: () => {},
});

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [publicKey, setPublicKey] = useState<{ toString: () => string } | null>(null);
  const [walletPubkey, setWalletPubkey] = useState<string | undefined>(undefined);

  // Mock connection function
  const connect = async () => {
    setConnecting(true);
    
    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mock public key
      const mockPublicKey = {
        toString: () => 'mock-pubkey-' + Math.random().toString(36).substring(2, 8)
      };
      
      setPublicKey(mockPublicKey);
      setWalletPubkey(mockPublicKey.toString());
      setWalletBalance(Math.random() * 10 + 1); // Random balance between 1-11 SOL
      setConnected(true);
      
      toast({
        title: "Wallet Connected",
        description: "Your Solana wallet has been connected successfully."
      });
      
      console.log('Solana wallet connected (mock)');
    } catch (error) {
      console.error('Error connecting to Solana wallet:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to your Solana wallet.",
        variant: "destructive"
      });
    } finally {
      setConnecting(false);
    }
  };
  
  // Mock disconnect function
  const disconnect = () => {
    setConnected(false);
    setPublicKey(null);
    setWalletBalance(0);
    setWalletPubkey(undefined);
    
    toast({
      title: "Wallet Disconnected",
      description: "Your Solana wallet has been disconnected."
    });
    
    console.log('Solana wallet disconnected');
  };
  
  // Mock signMessage function
  const signMessage = async (message: Uint8Array): Promise<Uint8Array> => {
    if (!connected) throw new Error('Wallet not connected');
    
    // Simulate signing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return a mock signature (just reverses the message for demo)
    const signature = message.slice().reverse();
    
    return signature;
  };
  
  // Mock sendSol function
  const sendSol = async (recipient: string, amount: number): Promise<string | null> => {
    if (!connected) throw new Error('Wallet not connected');
    if (amount <= 0) throw new Error('Amount must be greater than 0');
    if (amount > walletBalance) throw new Error('Insufficient funds');
    
    // Simulate transaction delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Deduct balance
    setWalletBalance(prev => prev - amount);
    
    toast({
      title: "Transaction Completed",
      description: `Successfully sent ${amount} SOL to ${recipient.substring(0, 6)}...`
    });
    
    // Return mock transaction signature
    const txSignature = 'tx-' + Math.random().toString(36).substring(2, 15);
    
    return txSignature;
  };
  
  return (
    <SolanaContext.Provider
      value={{
        connected,
        connecting,
        walletBalance,
        publicKey,
        walletPubkey,
        signMessage,
        sendSol,
        connect,
        disconnect,
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
