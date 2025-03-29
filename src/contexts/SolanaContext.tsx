
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useAuth } from './auth/AuthContext';

interface SolanaContextValue {
  isConnecting: boolean;
  hasWallet: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendSol: (recipient: string, amount: number) => Promise<{ success: boolean; message: string }>;
  linkWalletToAccount: () => Promise<boolean>;
}

const SolanaContext = createContext<SolanaContextValue | null>(null);

export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, updateUserProfile } = useAuth();
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasWallet, setHasWallet] = useState(false);
  const [walletPubkey, setWalletPubkey] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    // Check if wallet was previously connected
    const storedPubkey = localStorage.getItem('solana_wallet_pubkey');
    if (storedPubkey) {
      setWalletPubkey(storedPubkey);
      setHasWallet(true);
      fetchWalletBalance(storedPubkey);
    }
  }, []);

  useEffect(() => {
    // If user has a wallet address saved in their profile, use that
    if (user?.walletAddress && !walletPubkey) {
      setWalletPubkey(user.walletAddress);
      setHasWallet(true);
      fetchWalletBalance(user.walletAddress);
    }
  }, [user, walletPubkey]);

  const fetchWalletBalance = async (pubkey: string) => {
    try {
      const connection = new Connection(
        'https://api.devnet.solana.com',
        'confirmed'
      );
      const publicKey = new PublicKey(pubkey);
      const balance = await connection.getBalance(publicKey);
      setWalletBalance(balance / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      setWalletBalance(0);
    }
  };

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      // This is a placeholder for actual wallet connection
      // In a real app, you'd use a proper wallet adapter
      const mockPubkey = 'BW1Y9SqiPRSsEDxoYfSrpHpnvWNKGrNHyBnb4HqQiwJP';
      setWalletPubkey(mockPubkey);
      setHasWallet(true);
      localStorage.setItem('solana_wallet_pubkey', mockPubkey);
      await fetchWalletBalance(mockPubkey);
      return true;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return false;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletPubkey(null);
    setHasWallet(false);
    setWalletBalance(0);
    localStorage.removeItem('solana_wallet_pubkey');
  };

  const sendSol = async (recipient: string, amount: number) => {
    try {
      // This is a placeholder for actual SOL transfer
      console.log(`Sending ${amount} SOL to ${recipient}`);

      // In a real app, you'd use a proper wallet adapter for transactions
      // For now, just mock a successful transaction
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update balance
      if (walletPubkey) {
        setWalletBalance(prev => Math.max(0, prev - amount));
        await fetchWalletBalance(walletPubkey);
      }

      return {
        success: true,
        message: `Successfully sent ${amount} SOL to ${recipient}`
      };
    } catch (error) {
      console.error('Error sending SOL:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unknown error occurred'
      };
    }
  };

  const linkWalletToAccount = async () => {
    if (!user || !walletPubkey) return false;

    try {
      await updateUserProfile({
        ...user,
        walletAddress: walletPubkey
      });
      return true;
    } catch (error) {
      console.error('Error linking wallet to account:', error);
      return false;
    }
  };

  return (
    <SolanaContext.Provider
      value={{
        isConnecting,
        hasWallet,
        walletPubkey,
        walletBalance,
        connectWallet,
        disconnectWallet,
        sendSol,
        linkWalletToAccount
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

export const useSolana = () => {
  const context = useContext(SolanaContext);
  if (!context) {
    throw new Error('useSolana must be used within a SolanaProvider');
  }
  return context;
};

// Export for backward compatibility
export default SolanaProvider;
