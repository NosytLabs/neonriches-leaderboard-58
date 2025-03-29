
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export interface SolanaContextValue {
  connected: boolean;
  isConnected: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  sendSol: (amount: number, recipient: string) => Promise<boolean>;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  isConnecting: boolean;
  hasWallet: boolean;
  linkWalletToAccount: () => Promise<boolean>;
}

const SolanaContext = createContext<SolanaContextValue>({
  connected: false,
  isConnected: false,
  walletPubkey: null,
  walletBalance: 0,
  sendSol: async () => false,
  connectWallet: async () => {},
  disconnectWallet: async () => {},
  isConnecting: false,
  hasWallet: false,
  linkWalletToAccount: async () => false
});

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const wallet = useWallet();
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [hasWallet, setHasWallet] = useState<boolean>(false);
  
  useEffect(() => {
    if (wallet.connected) {
      // Fetch wallet balance
      fetchWalletBalance();
      
      // Check if wallet is linked to account
      checkWalletLinked();
    }
  }, [wallet.connected, wallet.publicKey]);
  
  const fetchWalletBalance = async () => {
    // In a real implementation, this would query the Solana blockchain
    // For now, we'll use a mock balance
    setWalletBalance(5.234);
  };
  
  const checkWalletLinked = async () => {
    // In a real implementation, this would check if the wallet is linked to the user account
    // For now, we'll assume it is
    setHasWallet(true);
  };
  
  const sendSol = async (amount: number, recipient: string): Promise<boolean> => {
    // In a real implementation, this would send SOL to the recipient
    console.log(`Sending ${amount} SOL to ${recipient}`);
    return true;
  };
  
  const connectWallet = async (): Promise<void> => {
    setIsConnecting(true);
    try {
      await wallet.connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnectWallet = async (): Promise<void> => {
    try {
      await wallet.disconnect();
      setHasWallet(false);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };
  
  const linkWalletToAccount = async (): Promise<boolean> => {
    // In a real implementation, this would link the wallet to the user account
    setHasWallet(true);
    return true;
  };
  
  return (
    <SolanaContext.Provider
      value={{
        connected: wallet.connected,
        isConnected: wallet.connected,
        walletPubkey: wallet.publicKey?.toString() || null,
        walletBalance,
        sendSol,
        connectWallet,
        disconnectWallet,
        isConnecting,
        hasWallet,
        linkWalletToAccount
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => useContext(SolanaContext);
