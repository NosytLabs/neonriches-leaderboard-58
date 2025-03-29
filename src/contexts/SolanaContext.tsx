
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/contexts/auth';
import { PublicKey, Transaction, Connection } from '@solana/web3.js';
import { useToast } from '@/hooks/use-toast';

interface SolanaProviderProps {
  children: React.ReactNode;
}

interface SolanaContextValue {
  connected: boolean;
  publicKey: PublicKey | null;
  connectWallet: () => Promise<boolean>;
  disconnect: () => Promise<void>;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (message: string) => Promise<Uint8Array | null>;
  connection: Connection | null;
  walletAddress: string | null;
}

const SolanaContext = createContext<SolanaContextValue | null>(null);

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [connection, setConnection] = useState<Connection | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [phantom, setPhantom] = useState<any>(null);
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();

  // Check for Phantom wallet
  useEffect(() => {
    const checkForPhantom = async () => {
      // @ts-ignore
      const phantomWallet = window.phantom?.solana;
      
      if (phantomWallet) {
        setPhantom(phantomWallet);
        
        try {
          // Initialize connection
          const connection = new Connection(
            process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
            'confirmed'
          );
          setConnection(connection);
          
          // Check if already connected
          if (phantomWallet.isConnected) {
            const publicKey = phantomWallet.publicKey;
            
            if (publicKey) {
              setPublicKey(publicKey);
              setWalletAddress(publicKey.toString());
              setConnected(true);
              
              // Update user profile if logged in
              if (user && user.id && !user.walletAddress) {
                updateUserProfile({
                  walletAddress: publicKey.toString()
                });
              }
            }
          }
        } catch (error) {
          console.error('Failed to initialize Solana connection:', error);
        }
      }
    };
    
    checkForPhantom();
  }, [user, updateUserProfile]);

  // Connect wallet
  const connectWallet = async (): Promise<boolean> => {
    try {
      if (!phantom) {
        toast({
          title: "Phantom Wallet Not Found",
          description: "Please install Phantom wallet extension and refresh the page.",
          variant: "destructive"
        });
        return false;
      }
      
      const { publicKey } = await phantom.connect();
      
      if (publicKey) {
        setPublicKey(publicKey);
        setWalletAddress(publicKey.toString());
        setConnected(true);
        
        // Update user profile if logged in
        if (user && user.id) {
          updateUserProfile({
            walletAddress: publicKey.toString()
          });
        }
        
        return true;
      }
      
      return false;
    } catch (error: any) {
      console.error('Connect wallet error:', error);
      
      toast({
        title: "Connection Failed",
        description: error.message || "Failed to connect Phantom wallet",
        variant: "destructive"
      });
      
      return false;
    }
  };

  // Disconnect wallet
  const disconnect = async (): Promise<void> => {
    try {
      if (phantom) {
        await phantom.disconnect();
      }
      
      setPublicKey(null);
      setWalletAddress(null);
      setConnected(false);
    } catch (error) {
      console.error('Disconnect wallet error:', error);
    }
  };

  // Sign transaction
  const signTransaction = async (transaction: Transaction): Promise<Transaction> => {
    if (!phantom) {
      throw new Error('Phantom wallet not connected');
    }
    
    try {
      const signedTransaction = await phantom.signTransaction(transaction);
      return signedTransaction;
    } catch (error: any) {
      console.error('Sign transaction error:', error);
      throw new Error(error.message || 'Failed to sign transaction');
    }
  };

  // Sign all transactions
  const signAllTransactions = async (transactions: Transaction[]): Promise<Transaction[]> => {
    if (!phantom) {
      throw new Error('Phantom wallet not connected');
    }
    
    try {
      const signedTransactions = await phantom.signAllTransactions(transactions);
      return signedTransactions;
    } catch (error: any) {
      console.error('Sign all transactions error:', error);
      throw new Error(error.message || 'Failed to sign transactions');
    }
  };

  // Sign message
  const signMessage = async (message: string): Promise<Uint8Array | null> => {
    if (!phantom) {
      throw new Error('Phantom wallet not connected');
    }
    
    try {
      // Convert message to Uint8Array
      const messageBytes = new TextEncoder().encode(message);
      const signature = await phantom.signMessage(messageBytes);
      return signature;
    } catch (error: any) {
      console.error('Sign message error:', error);
      
      if (error.code !== 4001) { // 4001 is user rejection
        toast({
          title: "Signature Failed",
          description: error.message || "Failed to sign message",
          variant: "destructive"
        });
      }
      
      return null;
    }
  };

  return (
    <SolanaContext.Provider
      value={{
        connected,
        publicKey,
        connectWallet,
        disconnect,
        signTransaction,
        signAllTransactions,
        signMessage,
        connection,
        walletAddress
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
