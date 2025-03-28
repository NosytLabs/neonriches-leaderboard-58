import React, { FC, ReactNode, useMemo, useState, useEffect, createContext, useContext } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  CloverWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

// Define Solana context types
interface SolanaContextType {
  connected: boolean;
  publicKey: PublicKey | null;
  walletBalance: number;
  connectWallet: () => void;
  disconnectWallet: () => void;
  signMessage: (message: string) => Promise<Uint8Array | null>;
  sendSol: (recipient: string, amount: number) => Promise<string | null>;
  signTransaction: (transaction: Transaction) => Promise<Transaction | null>;
  linkWalletToAccount: () => Promise<boolean>;
  isConnecting: boolean;
  hasWallet: boolean;
  walletPubkey: string | null;
}

const SolanaContext = createContext<SolanaContextType | null>(null);

export const SolanaProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Network setup - default to devnet for now, can be changed to mainnet-beta for production
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  // Configure the wallet adapters
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new CloverWalletAdapter()
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <SolanaContextProvider>
            {children}
          </SolanaContextProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const SolanaContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();
  
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [hasWallet, setHasWallet] = useState<boolean>(false);

  // Check if wallet exists
  useEffect(() => {
    const checkWalletExists = async () => {
      try {
        // Check if the window object has solana property (Phantom, Solflare, etc.)
        const hasWallet = 'solana' in window || 'phantom' in window;
        setHasWallet(hasWallet);
      } catch (error) {
        console.error('Error checking wallet existence:', error);
        setHasWallet(false);
      }
    };

    checkWalletExists();
  }, []);

  // Update balance when wallet changes
  useEffect(() => {
    const updateBalance = async () => {
      if (wallet.publicKey && connection) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setWalletBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error('Error fetching wallet balance:', error);
          setWalletBalance(0);
        }
      } else {
        setWalletBalance(0);
      }
    };

    updateBalance();
    // Set up an interval to periodically update the balance
    const intervalId = setInterval(updateBalance, 15000); // every 15 seconds
    
    return () => clearInterval(intervalId);
  }, [wallet.publicKey, connection]);

  // Connect wallet
  const connectWallet = async () => {
    if (!wallet.wallet && wallet.select) {
      wallet.select('phantom' as any);
    }
    
    try {
      setIsConnecting(true);
      await wallet.connect();
      
      toast({
        title: "Wallet Connected",
        description: `Connected to ${wallet.publicKey?.toString().slice(0, 4)}...${wallet.publicKey?.toString().slice(-4)}`,
      });
    } catch (error: any) {
      toast({
        title: "Connection Failed",
        description: error.message || "Could not connect to wallet",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  // Disconnect wallet
  const disconnectWallet = async () => {
    try {
      await wallet.disconnect();
      
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected",
      });
    } catch (error: any) {
      toast({
        title: "Disconnection Failed",
        description: error.message || "Could not disconnect wallet",
        variant: "destructive",
      });
    }
  };

  // Sign message
  const signMessage = async (message: string): Promise<Uint8Array | null> => {
    try {
      if (!wallet.signMessage) {
        throw new Error("Wallet doesn't support message signing");
      }
      
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await wallet.signMessage(encodedMessage);
      
      return signature;
    } catch (error: any) {
      toast({
        title: "Signing Failed",
        description: error.message || "Failed to sign message",
        variant: "destructive",
      });
      return null;
    }
  };

  // Send SOL
  const sendSol = async (recipient: string, amount: number): Promise<string | null> => {
    try {
      if (!wallet.publicKey || !wallet.signTransaction) {
        throw new Error("Wallet not connected");
      }
      
      const recipientPubkey = new PublicKey(recipient);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: recipientPubkey,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
      
      transaction.feePayer = wallet.publicKey;
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      
      const signedTransaction = await wallet.signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      
      toast({
        title: "Transaction Sent",
        description: `Sent ${amount} SOL to ${recipient.slice(0, 4)}...${recipient.slice(-4)}`,
      });
      
      return signature;
    } catch (error: any) {
      toast({
        title: "Transaction Failed",
        description: error.message || "Failed to send SOL",
        variant: "destructive",
      });
      return null;
    }
  };

  // Sign transaction
  const signTransaction = async (transaction: Transaction): Promise<Transaction | null> => {
    try {
      if (!wallet.signTransaction) {
        throw new Error("Wallet doesn't support transaction signing");
      }
      
      return await wallet.signTransaction(transaction);
    } catch (error: any) {
      toast({
        title: "Signing Failed",
        description: error.message || "Failed to sign transaction",
        variant: "destructive",
      });
      return null;
    }
  };

  // Link wallet to account
  const linkWalletToAccount = async (): Promise<boolean> => {
    try {
      if (!wallet.publicKey || !user) {
        return false;
      }
      
      // Sign a message to verify wallet ownership
      const message = `Linking wallet ${wallet.publicKey.toString()} to SpendThrone account ${user.username} at ${new Date().toISOString()}`;
      const signature = await signMessage(message);
      
      if (!signature) {
        return false;
      }
      
      // Update user profile with wallet address
      await updateUserProfile({
        ...user,
        walletAddress: wallet.publicKey.toString(),
      });
      
      toast({
        title: "Wallet Linked",
        description: "Your wallet has been linked to your account",
      });
      
      return true;
    } catch (error: any) {
      toast({
        title: "Link Failed",
        description: error.message || "Failed to link wallet to account",
        variant: "destructive",
      });
      return false;
    }
  };

  // Context value
  const contextValue: SolanaContextType = {
    connected: wallet.connected,
    publicKey: wallet.publicKey,
    walletBalance,
    connectWallet,
    disconnectWallet,
    signMessage,
    sendSol,
    signTransaction,
    linkWalletToAccount,
    isConnecting,
    hasWallet,
    walletPubkey: wallet.publicKey?.toString() || null,
  };

  return (
    <SolanaContext.Provider value={contextValue}>
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

export default SolanaProvider;
