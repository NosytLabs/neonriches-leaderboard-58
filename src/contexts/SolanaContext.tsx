
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';

export interface SolanaContextValue {
  connected: boolean;
  publicKey: string | null;
  balance: number;
  connectWallet: () => Promise<boolean>;
  disconnectWallet: () => void;
  signMessage: (message: string) => Promise<string | null>;
  sendTransaction: (destination: string, amount: number) => Promise<boolean>;
  airdropSol: () => Promise<void>;
}

const SolanaContext = createContext<SolanaContextValue>({
  connected: false,
  publicKey: null,
  balance: 0,
  connectWallet: async () => false,
  disconnectWallet: () => {},
  signMessage: async () => null,
  sendTransaction: async () => false,
  airdropSol: async () => {},
});

export const useSolana = () => useContext(SolanaContext);

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();

  useEffect(() => {
    // Check if wallet was previously connected
    const savedWallet = localStorage.getItem('solana_wallet');
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet);
        setConnected(true);
        setPublicKey(walletData.publicKey);
        setBalance(walletData.balance || 0);
      } catch (error) {
        console.error('Error parsing saved wallet:', error);
        localStorage.removeItem('solana_wallet');
      }
    }
  }, []);

  // Update user's wallet address when connected
  useEffect(() => {
    if (connected && publicKey && user && (!user.walletAddress || user.walletAddress !== publicKey)) {
      updateUserProfile({
        ...user,
        walletAddress: publicKey
      });
    }
  }, [connected, publicKey, user]);

  const connectWallet = async (): Promise<boolean> => {
    try {
      // In a real app, this would use Solana wallet adapter
      // For demo, we'll simulate connection with a fake public key
      const mockPublicKey = 'A1b2C3d4E5f6G7h8I9j0kLmNoPqRsTuVwXyZ';
      const mockBalance = 5.0;
      
      setConnected(true);
      setPublicKey(mockPublicKey);
      setBalance(mockBalance);
      
      // Save wallet info to localStorage
      localStorage.setItem('solana_wallet', JSON.stringify({
        publicKey: mockPublicKey,
        balance: mockBalance
      }));
      
      toast({
        title: "Wallet Connected",
        description: "Your Solana wallet has been successfully connected.",
      });
      
      return true;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Failed",
        description: "Could not connect to your wallet. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setPublicKey(null);
    setBalance(0);
    localStorage.removeItem('solana_wallet');
    
    toast({
      title: "Wallet Disconnected",
      description: "Your Solana wallet has been disconnected.",
    });
  };

  const signMessage = async (message: string): Promise<string | null> => {
    try {
      // In a real app, this would use wallet adapter to sign a message
      // For demo, we'll simulate a signature
      const signature = `sig_${Math.random().toString(36).substring(2, 15)}`;
      
      toast({
        title: "Message Signed",
        description: "Your message has been signed successfully.",
      });
      
      return signature;
    } catch (error) {
      console.error('Error signing message:', error);
      toast({
        title: "Signing Failed",
        description: "Could not sign the message. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  };

  const sendTransaction = async (destination: string, amount: number): Promise<boolean> => {
    try {
      // Check if wallet is connected
      if (!connected || !publicKey) {
        throw new Error('Wallet not connected');
      }
      
      // Check if user has enough balance
      if (balance < amount) {
        throw new Error('Insufficient funds');
      }
      
      // In a real app, this would use wallet adapter to send a transaction
      // For demo, we'll just update the balance
      setBalance(prevBalance => {
        const newBalance = prevBalance - amount;
        
        // Update localStorage
        localStorage.setItem('solana_wallet', JSON.stringify({
          publicKey,
          balance: newBalance
        }));
        
        return newBalance;
      });
      
      toast({
        title: "Transaction Complete",
        description: `Successfully sent ${amount} SOL to ${destination.substring(0, 4)}...${destination.substring(destination.length - 4)}`,
      });
      
      return true;
    } catch (error) {
      console.error('Transaction error:', error);
      toast({
        title: "Transaction Failed",
        description: error instanceof Error ? error.message : "Could not complete transaction. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const airdropSol = async (): Promise<void> => {
    try {
      // In a real app, this would call a testnet/devnet airdrop
      // For demo, we'll just update the balance
      setBalance(prevBalance => {
        const newBalance = prevBalance + 1;
        
        // Update localStorage
        localStorage.setItem('solana_wallet', JSON.stringify({
          publicKey,
          balance: newBalance
        }));
        
        return newBalance;
      });
      
      toast({
        title: "Airdrop Received",
        description: "1 SOL has been added to your wallet.",
      });
    } catch (error) {
      console.error('Airdrop error:', error);
      toast({
        title: "Airdrop Failed",
        description: "Could not airdrop SOL. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <SolanaContext.Provider
      value={{
        connected,
        publicKey,
        balance,
        connectWallet,
        disconnectWallet,
        signMessage,
        sendTransaction,
        airdropSol,
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

export default SolanaProvider;
