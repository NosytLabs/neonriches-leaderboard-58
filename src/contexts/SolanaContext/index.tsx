
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// Define the context value type
export interface SolanaContextValue {
  isConnected: boolean;
  isConnecting: boolean;
  hasWallet: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  connected?: boolean;
  publicKey?: any;
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
  signMessage?: (message: Uint8Array) => Promise<Uint8Array>;
  sendTransaction?: (transaction: any) => Promise<string>;
  connectWallet: () => Promise<boolean>;
  disconnectWallet: () => void;
  sendSol: (to: string, amount: number) => Promise<boolean>;
  linkWalletToAccount: () => Promise<boolean>;
}

// Default values for context
const defaultContextValue: SolanaContextValue = {
  isConnected: false,
  isConnecting: false,
  hasWallet: false,
  walletPubkey: null,
  walletBalance: 0,
  connectWallet: async () => false,
  disconnectWallet: () => {},
  sendSol: async () => false,
  linkWalletToAccount: async () => false
};

// Create the context
const SolanaContext = createContext<SolanaContextValue>(defaultContextValue);

// Provider component
export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasWallet, setHasWallet] = useState(false);
  const [walletPubkey, setWalletPubkey] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<number>(0);

  // Check for wallet on mount
  useEffect(() => {
    const checkWallet = async () => {
      try {
        // This is just a mock implementation
        // In a real app, we would check for Phantom, Solflare, or other Solana wallets
        const hasPhantom = window.solana !== undefined;
        setHasWallet(hasPhantom);
        
        // Try to restore connection if previously connected
        const savedPubkey = localStorage.getItem('solanaWalletPubkey');
        if (savedPubkey && hasPhantom) {
          // In a real implementation, we would verify the connection
          setWalletPubkey(savedPubkey);
          setIsConnected(true);
          // Mock balance
          setWalletBalance(Math.random() * 10);
        }
      } catch (error) {
        console.error('Error checking wallet:', error);
      }
    };
    
    checkWallet();
  }, []);

  // Connect to wallet
  const connectWallet = async (): Promise<boolean> => {
    try {
      setIsConnecting(true);
      
      // Mock implementation
      // In a real app, we would use wallet.connect()
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock public key
      const mockPubkey = 'mocksolana' + Math.random().toString(36).substring(2, 15);
      
      setWalletPubkey(mockPubkey);
      setIsConnected(true);
      setWalletBalance(Math.random() * 10);
      
      // Save connection
      localStorage.setItem('solanaWalletPubkey', mockPubkey);
      
      toast({
        title: "Wallet Connected",
        description: "Your Solana wallet has been connected successfully.",
        variant: "default"
      });
      
      setIsConnecting(false);
      return true;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to your Solana wallet.",
        variant: "destructive"
      });
      setIsConnecting(false);
      return false;
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setWalletPubkey(null);
    setIsConnected(false);
    setWalletBalance(0);
    localStorage.removeItem('solanaWalletPubkey');
    
    toast({
      title: "Wallet Disconnected",
      description: "Your Solana wallet has been disconnected.",
      variant: "default"
    });
  };

  // Send SOL to another address
  const sendSol = async (to: string, amount: number): Promise<boolean> => {
    try {
      if (!isConnected || !walletPubkey) {
        toast({
          title: "Not Connected",
          description: "Please connect your wallet first.",
          variant: "destructive"
        });
        return false;
      }
      
      // Check balance
      if (amount > walletBalance) {
        toast({
          title: "Insufficient Balance",
          description: "You don't have enough SOL to complete this transaction.",
          variant: "destructive"
        });
        return false;
      }
      
      // Mock transaction
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update balance
      setWalletBalance(prev => prev - amount);
      
      toast({
        title: "Transaction Complete",
        description: `Successfully sent ${amount} SOL.`,
        variant: "default"
      });
      
      return true;
    } catch (error) {
      console.error('Error sending SOL:', error);
      toast({
        title: "Transaction Failed",
        description: "Failed to send SOL. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  // Link wallet to account
  const linkWalletToAccount = async (): Promise<boolean> => {
    try {
      if (!isConnected || !walletPubkey) {
        toast({
          title: "Not Connected",
          description: "Please connect your wallet first.",
          variant: "destructive"
        });
        return false;
      }
      
      // Mock linking process
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      toast({
        title: "Wallet Linked",
        description: "Your wallet has been linked to your account.",
        variant: "default"
      });
      
      return true;
    } catch (error) {
      console.error('Error linking wallet:', error);
      toast({
        title: "Linking Failed",
        description: "Failed to link your wallet to your account.",
        variant: "destructive"
      });
      return false;
    }
  };

  // Context value
  const contextValue: SolanaContextValue = {
    isConnected,
    isConnecting,
    hasWallet,
    walletPubkey,
    walletBalance,
    connectWallet,
    disconnectWallet,
    sendSol,
    linkWalletToAccount,
    connected: isConnected,
  };

  return (
    <SolanaContext.Provider value={contextValue}>
      {children}
    </SolanaContext.Provider>
  );
};

// Custom hook to use the context
export const useSolana = () => useContext(SolanaContext);

// Export the context as default
export default SolanaContext;
