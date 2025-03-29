
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface SolanaContextValue {
  connected: boolean;
  publicKey: string | null;
  walletBalance: number;
  walletPubkey: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendSol: (recipient: string, amount: number) => Promise<string | null>;
  hasWallet: boolean;
  isConnecting: boolean;
  linkWalletToAccount: () => Promise<boolean>;
}

const SolanaContext = createContext<SolanaContextValue>({
  connected: false,
  publicKey: null,
  walletBalance: 0,
  walletPubkey: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  sendSol: async () => null,
  hasWallet: false,
  isConnecting: false,
  linkWalletToAccount: async () => false
});

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  // Mock wallet connection for development
  const connectWallet = async (): Promise<void> => {
    setIsConnecting(true);
    
    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful connection
      setConnected(true);
      setPublicKey('EUPnQXPGnVVKkKRGNF2VVKf7x6RYR9GXLQYTXzR7yL1K');
      setWalletBalance(5.23); // Mock balance
      
      toast({
        title: "Wallet Connected",
        description: "Your Solana wallet has been connected successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect your Solana wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = (): void => {
    setConnected(false);
    setPublicKey(null);
    setWalletBalance(0);
    
    toast({
      title: "Wallet Disconnected",
      description: "Your Solana wallet has been disconnected.",
      variant: "default",
    });
  };

  const sendSol = async (recipient: string, amount: number): Promise<string | null> => {
    if (!connected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet before sending SOL.",
        variant: "destructive",
      });
      return null;
    }
    
    try {
      // Mock transaction delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check balance
      if (walletBalance < amount) {
        toast({
          title: "Insufficient Balance",
          description: `You need at least ${amount} SOL to complete this transaction.`,
          variant: "destructive",
        });
        return null;
      }
      
      // Update balance
      setWalletBalance(prev => prev - amount);
      
      // Mock transaction signature
      const signature = `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
      
      toast({
        title: "Transaction Successful",
        description: `Sent ${amount} SOL to ${recipient.substring(0, 6)}...${recipient.substring(recipient.length - 4)}`,
        variant: "default",
      });
      
      return signature;
    } catch (error) {
      console.error("Error sending SOL:", error);
      toast({
        title: "Transaction Failed",
        description: "Failed to send SOL. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  const linkWalletToAccount = async (): Promise<boolean> => {
    if (!connected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet before linking it to your account.",
        variant: "destructive",
      });
      return false;
    }
    
    try {
      // Mock linking delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Wallet Linked",
        description: "Your Solana wallet has been linked to your account.",
        variant: "default",
      });
      
      return true;
    } catch (error) {
      console.error("Error linking wallet:", error);
      toast({
        title: "Linking Failed",
        description: "Failed to link wallet to your account. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  return (
    <SolanaContext.Provider value={{
      connected,
      publicKey,
      walletPubkey: publicKey,
      walletBalance,
      connectWallet,
      disconnectWallet,
      sendSol,
      hasWallet: true, // Mock having a wallet installed
      isConnecting,
      linkWalletToAccount
    }}>
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
