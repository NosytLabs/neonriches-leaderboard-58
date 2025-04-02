
// Define Solana context types
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

export interface SolanaContextType {
  connected: boolean;
  connecting: boolean;
  disconnect: () => Promise<void>;
  connect: () => Promise<void>;
  publicKey: PublicKey | null;
  walletAddress: string | null; // Added this missing property
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (message: Uint8Array) => Promise<Uint8Array>;
  sendTransaction: (transaction: Transaction) => Promise<string>;
  connection: Connection | null;
  balance: number;
  refreshBalance: () => Promise<void>;
}

export interface SolanaTransaction {
  signature: string;
  blockTime: number;
  slot: number;
  confirmations: number;
  amount: number;
  sender: string;
  receiver: string;
  type: 'send' | 'receive' | 'spend' | 'deposit' | 'reward';
  transactionHash?: string; // Added this missing property
  status?: string; // Added for compatibility
}

export interface OnChainLeaderboardEntry {
  publicKey: string;
  amount: number;
  rank: number;
  previousRank: number;
  timestamp?: number; // Added this missing property
}
