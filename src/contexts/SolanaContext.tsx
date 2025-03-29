
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface SolanaContextValue {
  // Connection state
  isConnected: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  isConnecting: boolean;
  hasWallet: boolean;
  
  // Actions
  connectWallet: () => Promise<boolean>;
  disconnectWallet: () => void;
  linkWalletToAccount: () => Promise<boolean>;
  sendSol: (amount: number, recipient: string, memo?: string) => Promise<boolean>;
}

// Create the context with default values
const SolanaContext = createContext<SolanaContextValue>({
  isConnected: false,
  walletPubkey: null,
  walletBalance: 0,
  isConnecting: false,
  hasWallet: false,
  
  connectWallet: async () => false,
  disconnectWallet: () => {},
  linkWalletToAccount: async () => false,
  sendSol: async () => false,
});

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletPubkey, setWalletPubkey] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasWallet, setHasWallet] = useState(false);
  
  const { toast } = useToast();
  
  // Check if wallet is available in the browser
  useEffect(() => {
    const checkWallet = () => {
      // Mock implementation - in real app we'd check for Phantom, Solflare, etc.
      const hasSolanaWallet = window.localStorage.getItem('mock-solana-wallet') !== null;
      setHasWallet(hasSolanaWallet);
      
      // If we had a previous connection, restore it
      const savedConnection = window.localStorage.getItem('solana-connection');
      if (savedConnection) {
        try {
          const connection = JSON.parse(savedConnection);
          setIsConnected(true);
          setWalletPubkey(connection.pubkey);
          setWalletBalance(connection.balance);
        } catch (error) {
          console.error('Failed to restore wallet connection:', error);
          window.localStorage.removeItem('solana-connection');
        }
      }
    };
    
    checkWallet();
  }, []);
  
  const connectWallet = async (): Promise<boolean> => {
    setIsConnecting(true);
    
    try {
      // Mock implementation - in real app we'd use wallet adapters
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate connection delay
      
      const mockPubkey = 'CgkJz2vbgYP6AeEswvRnvMgJgHp24SfWWezYCiF5Lv7K';
      const mockBalance = Math.random() * 10; // Random balance between 0 and 10 SOL
      
      setIsConnected(true);
      setWalletPubkey(mockPubkey);
      setWalletBalance(mockBalance);
      
      // Save connection info
      window.localStorage.setItem('mock-solana-wallet', 'installed');
      window.localStorage.setItem('solana-connection', JSON.stringify({
        pubkey: mockPubkey,
        balance: mockBalance
      }));
      
      toast({
        title: 'Wallet Connected',
        description: `Connected to wallet ${mockPubkey.substring(0, 4)}...${mockPubkey.substring(mockPubkey.length - 4)}`,
        variant: 'default',
      });
      
      return true;
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast({
        title: 'Connection Failed',
        description: 'Failed to connect to your wallet.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletPubkey(null);
    setWalletBalance(0);
    
    // Remove saved connection
    window.localStorage.removeItem('solana-connection');
    
    toast({
      title: 'Wallet Disconnected',
      description: 'Your wallet has been disconnected.',
      variant: 'default',
    });
  };
  
  const linkWalletToAccount = async (): Promise<boolean> => {
    if (!isConnected) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet before linking it to your account.',
        variant: 'destructive',
      });
      return false;
    }
    
    try {
      // Mock implementation - in real app we'd verify ownership
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: 'Wallet Linked',
        description: 'Your wallet has been successfully linked to your account.',
        variant: 'default',
      });
      
      return true;
    } catch (error) {
      console.error('Failed to link wallet:', error);
      toast({
        title: 'Link Failed',
        description: 'Failed to link your wallet to your account.',
        variant: 'destructive',
      });
      return false;
    }
  };
  
  const sendSol = async (amount: number, recipient: string, memo?: string): Promise<boolean> => {
    if (!isConnected) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet before sending SOL.',
        variant: 'destructive',
      });
      return false;
    }
    
    if (amount <= 0) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid amount to send.',
        variant: 'destructive',
      });
      return false;
    }
    
    if (amount > walletBalance) {
      toast({
        title: 'Insufficient Balance',
        description: `You don't have enough SOL. Your balance: ${walletBalance.toFixed(4)} SOL`,
        variant: 'destructive',
      });
      return false;
    }
    
    try {
      // Mock implementation - in real app we'd use the wallet adapter
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate transaction
      
      // Update the balance
      const newBalance = walletBalance - amount;
      setWalletBalance(newBalance);
      
      // Update saved connection
      window.localStorage.setItem('solana-connection', JSON.stringify({
        pubkey: walletPubkey,
        balance: newBalance
      }));
      
      toast({
        title: 'Transaction Successful',
        description: `Successfully sent ${amount.toFixed(4)} SOL to ${recipient.substring(0, 4)}...${recipient.substring(recipient.length - 4)}`,
        variant: 'default',
      });
      
      return true;
    } catch (error) {
      console.error('Failed to send SOL:', error);
      toast({
        title: 'Transaction Failed',
        description: 'Failed to send SOL. Please try again.',
        variant: 'destructive',
      });
      return false;
    }
  };
  
  const contextValue: SolanaContextValue = {
    isConnected,
    walletPubkey,
    walletBalance,
    isConnecting,
    hasWallet,
    
    connectWallet,
    disconnectWallet,
    linkWalletToAccount,
    sendSol,
  };
  
  return (
    <SolanaContext.Provider value={contextValue}>
      {children}
    </SolanaContext.Provider>
  );
};

// Custom hook to use the Solana context
export const useSolana = () => useContext(SolanaContext);
